import couchdb
couch = couchdb.Server('http://localhost:5984/')
couchdb = 'DATABASE'
db = couch[couchdb]
for id in db:
    db.delete(db[id])