for doc in collection.find({'plot': {'$exists': True}}).limit(5):
#     print(doc['title'])