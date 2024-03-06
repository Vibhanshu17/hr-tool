import re
import os
import json
from datetime import datetime
from linkedin_api import Linkedin

def calculate_months_of_experience(experiences):
    total_months = 0
    overlap_periods = set()

    for start_time, end_time in experiences:
        start_month, start_year = start_time
        end_month, end_year = end_time

        # Convert the start and end dates to months since a reference date (e.g., January 1, 1900)
        start_months_since_reference = start_year * 12 + start_month
        end_months_since_reference = end_year * 12 + end_month

        # Calculate the duration in months for the current job experience
        experience_duration_months = max(1, end_months_since_reference - start_months_since_reference+1)

        # Check for overlaps with previous experiences
        overlapping_months = 0
        for overlap_start, overlap_end in overlap_periods:
            overlap_start_months, overlap_end_months = overlap_start
            if overlap_start_months <= end_months_since_reference and start_months_since_reference <= overlap_end_months:
                overlapping_months += min(end_months_since_reference, overlap_end_months) - max(start_months_since_reference, overlap_start_months)

        # Subtract overlapping months from the total duration
        total_months += experience_duration_months - overlapping_months

        # Add the current experience to the set of overlapping periods
        overlap_periods.add((start_time, end_time))
    return total_months

def scrape_linkedin(keywords):    
    filters = ["(key:resultType,value:List(PEOPLE))"]
    dic = {'keywords':" AND ".join(keywords), "filters": "List({})".format(",".join(filters))}

    LINKEDIN_PASSWORD = os.getenv("LINKEDIN_PASSWORD")
    api = Linkedin('vibhanshu1729@gmail.com', LINKEDIN_PASSWORD)
    res = api.search(dic, limit=2)
    
    profile_list = []
    for pr in res:
        profile_url = pr['navigationUrl']
        pattern = r'/in/([^/?]+)'
        
        match = re.search(pattern, profile_url)

        if re.search(pattern, profile_url):
            profile_id = match.group(1)
            profile_list.append(profile_id)

    
    profile_details = []
    for id in profile_list:
        
        profile = api.get_profile(id)
        prof_json = {}
        prof_json['name'] = profile['firstName']+' '+profile['lastName']
        prof_json['profile_id'] = id
        prof_json['headline'] = profile['headline']
        prof_json['about'] = profile.get('summary','')
        prof_json['location'] = profile['geoLocationName']+', '+profile['geoCountryName']
        prof_json['industry'] = profile['industryName']
        
        
        # lists for single profile
        experience_list = []
        comp_list = []
        
        # For calculating experience time
        experience_array = []
        
        for exp in profile['experience']:
            exp_dic = {}
            exp_dic['JobProfile'] = exp['title']
            exp_dic['companyName'] = exp['companyName']
            comp_list.append(exp['companyName'])
            exp_dic['location'] = exp.get('locationName', '')
            exp_dic['start_date'] = exp['timePeriod']['startDate']
            
            start_month = exp_dic['start_date']['month']
            start_year = exp_dic['start_date']['year']
            
            
            exp_dic['end_date'] = exp['timePeriod'].get('endDate', 'Present')
            if exp_dic['end_date'] == 'Present':
                # Get the current date and time
                current_date_time = datetime.now()
                # Extract the current month and year
                end_month = current_date_time.month
                end_year = current_date_time.year
                experience_array.append(((start_month, start_year), (end_month, end_year)))
            else:
                end_month = exp_dic['end_date']['month']
                end_year = exp_dic['end_date']['year']
                experience_array.append(((start_month, start_year), (end_month, end_year)))
                
            exp_dic['description'] = exp.get('description', '')
            experience_list.append(exp_dic)
            
        prof_json['companies'] = comp_list
        prof_json['experience'] = experience_list
        prof_json['experience_months'] = calculate_months_of_experience(experience_array)
        
        education_list = []
        
        for education in profile['education']:
            edu_dic = {}
            edu_dic['fieldOfStudy'] = education.get('fieldOfStudy', '')
            edu_dic['degreeName'] = education.get('degreeName', '')
            edu_dic['schoolName'] = education.get('schoolName', '')
            edu_dic['timePeriod'] = education.get('timePeriod', '')
            education_list.append(edu_dic)
            
        prof_json['education'] = education_list
        prof_json['languages'] = profile.get('languages', [])
        
        certification_list = []
        for cert in profile['certifications']:
            cert_dic = {}
            cert_dic['authority'] = cert.get('authority', '')
            cert_dic['name'] = cert.get('name', '')
            cert_dic['timePeriod'] = cert.get('timePeriod', '')
            if cert.get('company') is not None :
                cert_dic['companyName'] = cert.get('company').get('name')
            certification_list.append(cert_dic)
            
        prof_json['cert'] = certification_list
        prof_json['summary'] = ";".join([prof_json['about'], ";".join(p['JobProfile'] for p in prof_json['experience']), str(prof_json['experience_months']), prof_json['headline']])
        
        profile_details.append(prof_json)
    return profile_details
    