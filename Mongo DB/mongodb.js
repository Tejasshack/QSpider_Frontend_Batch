// 1) To display all databases
show dbs 
show databases 

// 2) To create a new instance (database)
use database_name 

// 3) To create a new collection
db.createCollection("collection_name")

// 4) To display all collections
show collections 

// 5) To insert a new document
db.myCollection1.insertOne({"name":"varun"})
// Implicit collection creation and data storage 

// 6) To insert multiple documents
db.collection_name.insertMany([{doc1}, {doc2}])

// 7) To delete any collection or database
db.collection_name.drop() 
db.dropDatabase()

// 8) To display the MongoDB version
db.version()

// 9) To find one document in a collection
db.collection_name.findOne()

// 10) To find all documents in a collection
db.collection_name.find()
//? FInd or Find one  ({filter/taret} , {projection} , {options})
//? example db.employees({job:"clerk"} , {ename:1, sal:1 , _id:0})

// 11) To update a single document
db.collection_name.updateOne({"key":"value"}, {$set: {"key":"new_value"}})
// db.collection_name.updateOne({filter/target}, {$set: {update value}} ,{options)
// db.collection_name.updateOne({ename: 'John Doe',}, {$set: {comm:120000}})

// 12) To update multiple documents
db.collection_name.updateMany({"key":"value"}, {$set: {"key":"new_value"}})

// 13) To delete a single document
db.collection_name.deleteOne({"key":"value"})

// 14) To delete multiple documents
db.collection_name.deleteMany({"key":"value"})
/// db.employees.deleteMany({job:"MANAGER"})

// 15) To count the number of documents in a collection
db.collection_name.countDocuments()

// 16) To create an index on a collection
db.collection_name.createIndex({"key":1}) // 1 for ascending, -1 for descending

// 17) To list all indexes on a collection
db.collection_name.getIndexes()

// 18) To drop an index on a collection
db.collection_name.dropIndex("index_name")

// 19) To aggregate data (simple example)
db.collection_name.aggregate([
    { $match: { "key": "value" } },
    { $group: { _id: "$group_key", total: { $sum: "$amount" } } }
])

// 20) To use the explain plan to analyze query performance
db.collection_name.find({"key":"value"}).explain("executionStats")

// 21) To rename a collection
db.collection_name.renameCollection("new_collection_name")

// 22) To get the stats of a collection
db.collection_name.stats()

// 23) To create a user with roles
db.createUser({
    user: "username",
    pwd: "password",
    roles: [{ role: "readWrite", db: "database_name" }]
})

// 24) To authenticate as a user
db.auth("username", "password")

// 25) To check the current database
db

// 26) To check the current collection
db.getCollectionNames()
