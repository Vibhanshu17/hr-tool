import os
import pymongo

def get_data_from_db():
    CONNECTION_STRING = os.getenv("DB_CONNECTION_STRING")
    client = pymongo.MongoClient(CONNECTION_STRING)
    db = client.sample_mflix
    collection = db.movies

    items = collection.find().limit(5)
    ls = []
    for item in items:
        ls.append(item)
    return ls
