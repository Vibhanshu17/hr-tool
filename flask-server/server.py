import os
from flask import Flask, json, request
import movie_rec
import scrapper, helper

app = Flask(__name__)

@app.route("/events")
def events():
    json_url = os.path.join("data","data.json")
    data_json = json.load(open(json_url))
    
    # jsonify or json.dumps
    return data_json
    return json.dumps(data_json)
    
    # #render_template is always looking in templates folder
    # return render_template('index.html',html_page_text=data_json)


@app.route("/movies")
def getMovies():
    return movie_rec.get_data_from_db()


@app.route("/suggestions")
def suggestions():
    keywords, desc = request.args.get('keywords').split(";;")
    profile_suggestions = helper.profile_suggestions(keywords.split(";"), desc)
    
    profile_suggestions = json.dumps(profile_suggestions)
    print("JSON DUMP generated")
    return profile_suggestions
    
@app.route("/")
def index():
    return "Your Flask server is running"   
    
if __name__ == "__main__":
    app.run(debug=True)