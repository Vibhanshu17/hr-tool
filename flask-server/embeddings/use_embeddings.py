import os
import requests
import time
import pymongo
from generate_embeddings import generate_embedding_hf

# Get collection
DB_CONNECTION_STRING = os.getenv("DB_CONNECTION_STRING")
client = pymongo.MongoClient(DB_CONNECTION_STRING)
db = client.sample_mflix
collection = db.movies

# for doc in collection.find({'plot': {'$exists': True}}).limit(5):
#     print(doc['title'])

print("---  ---- collections built -------")

# for doc in collection.find({'plot': {"$exists": True}}).limit(5):
#     print(doc['plot'] + '\n')

# start = time.time()
# # Generate hf plot embeddings
# for doc in collection.find({'plot': {'$exists': True}}).limit(50):
#     doc['plot_embedding_hf'] = generate_embedding_hf(doc['plot'])
#     collection.replace_one({'_id': doc['_id']}, doc)
# end = time.time()

# print("------- embeddings generated -------" + f"{(end-start)/50} sec per embedding")
    
# Query
query = "imaginary characters from outer space at war"
print("\tQuery: " + query)

# Find results
results = collection.aggregate([
    {"$vectorSearch": {
        "queryVector": generate_embedding_hf(query),
        "path": "plot_embedding_hf",
        "numCandidates": 50,
        "limit": 4,
        "index": "PlotSemanticSearch",
    }}
])


for document in results:
    print(f"Movie Name: {document["title"]},\nMovie Plot: {document["plot"]}\n")