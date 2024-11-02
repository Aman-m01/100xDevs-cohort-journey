## MongoDB
- MongoDB is a document-oriented, open-source database 
program that is used for storing and retrieving data. It is a NoSQL 
database, which means that it does not use a fixed schema and 
does not rely on tables to organize data, unlike a traditional 
relational database. Instead, MongoDB stores data in a format 
called BSON (binary JSON), which allows for more flexibility and 
scalability when working with large amounts of data.

## MongoDB Terms 
- Database 
- Collection
- Documents 
- Fields 


## MongoDB Commands 
- `mongosh` - For starting the mongo shell
- `show dbs` - to show all the databases present in the mongoDB 
- `use db_name` - to create a new database 
- `db` - to see the current database
- `db.dropDatbase()` - to delete the current database
- `show collections` - to show all the collections in the database 
- `db.createCollection('userData')` - To create a new collections 
- `db.userData.drop()`- To delete a collections 
- `db.userData.insert({name : "Aman", age : 18})` - To insert a document in the collections
- `db.userData.find()` - For displaying the documents present inside the collections
- `db.userData.find().pretty()` - For displaying the documents present inside the collections in a pretty format
- `db.userData.find().limit(3).pretty()` - For displaying the limited number of document present in the collection
- `db.userData.find().count()` - For counting the number of document present in the collections
- `db.userData.find().sort({age : 1})` - For sorting the document in ascending order on the basis of age
- `db.userData.find().sort({age : -1}) `- For sorting the document in descending order on the basis of age
- `db.userData.find().limit(2).sort({age : -1}).pretty()` - For chaining multiple function together
- `db.userData.findOne({age : 18})` -  For finding only one document
- `db.userData.findOne({age : {$lte : 18}})` - For finding a group of documents based on some condition
