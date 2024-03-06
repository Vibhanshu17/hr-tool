import os
import pymongo
import scrapper
from generate_embeddings import generate_embedding_hf

def connect_to_db():
    # Get collection
    DB_CONNECTION_STRING = os.getenv("DB_CONNECTION_STRING")
    print("MongoDB token: ", DB_CONNECTION_STRING)
    client = pymongo.MongoClient(DB_CONNECTION_STRING)
    db = client.database_genai
    collection = db.profiles_data
    return collection
    
def getProfiles(keywords):
    data = scrapper.scrape_linkedin(keywords)
    print(data)
    return data    

def insertInDB(collection, profiles):
    try:
        collection.insert_many(profiles)
        print("insert_many() completed")
        for doc in collection.find({'summary': {'$exists': True}}):
            doc['profile_embedding_hf'] = generate_embedding_hf(doc['summary'])
            collection.replace_one({'_id': doc['_id']}, doc)
        print("Insert Successful")
        
    except Exception as e:
        print(e)
    return collection
    
def queryDB(collection, desc):
    query_embedding = generate_embedding_hf(desc)
    print("QUERY EMBEDDING", query_embedding)
    print(len(query_embedding))
    
    # try:
    results = collection.aggregate([
        {
            "$vectorSearch": {
                "queryVector": query_embedding,
                "path": "profile_embedding_hf",
                "numCandidates": 50,
                "limit": 9,
                "index": "ProfileSemanticSearch"
            }
        }
    ])
    
# for document in results:
#     print(f"Movie Name: {document["title"]},\nMovie Plot: {document["plot"]}\n")
    results = [{
        "name": doc["name"],
        "profile_id": doc["profile_id"],
        "headline": doc["headline"],
        "current_company": ("" if len(doc["companies"])==0 else doc["companies"][0]),
        "companies": doc["companies"],
        "experience_months": doc["experience_months"],
        } for doc in results]
    # except Exception as e:
    #     print(e)
        
    print("---------- FINAL RESULTS FROM SEMANTIC SEARCH ----------")
    # print(results)
    return results
    
def profile_suggestions(keywords, desc):
    print("keywords: ", keywords)
    print("description: ", desc)
    
    collection = connect_to_db()
    # profiles = getProfiles(keywords)                  // UNCOMMENT TO SCRAPE DATA
    print("now insert profiles into db")
    # collection = insertInDB(collection, profiles)     // UNCOMMENT TO ADDED TO DB
    print("profile insert into db completed")
    selected_profiles = queryDB(collection, desc)
    
    print("!!!!!!!!!! WE HAVE SELECTED THE PROFILES !!!!!!!!!!")
    # collection.drop()
    # try:
    #     _, _ = collection.delete_many(profiles)
    # except Exception as e:
    #     print(e)
    
    return selected_profiles
    