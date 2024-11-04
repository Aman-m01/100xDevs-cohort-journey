/*
>> MongoDb Revision 
q. why don't we let the users to hit the database directly? why extra does the http server provide exactly?
-- Databases were are created using protocols that browser don't understand.
-- database don't have granola access as the first class citizens. very hard to do user specific access in them
-- there are some database that let you get rid of the http server and try their best to provide granola access.

>>  databases usually allow access to 4 primitives 
 1. create data 
 2. read data
 3. update data 
 4. delete data
 known as CRUD operations

>> MOngoDB is schemaless but in mongoose, first you have to define the schema, mongoose makes you define schema for things like autocompletion/ validating data before it goes on the DB to make sure you are doing things right.
>> Schemaless DBs can be very complicated, using schema in mongo makes it slightly less complicated.  z
 */

// define the schema 
const userSchema = new mongoose.schema({
    email : String,
    password : String,
    purchasedCourses : [{
        type: mongoose.schema.types.objectID,
        ref : 'Course'
    }]
})

const courseSchema = mongoose.schema({
    title : String,
    price: 2323
})

const User = mongoose.model('User', userSchema)
const Course = mongoose.model('Course', courseSchema)

// Create 
User.create({
    userName: req.body.userName,
    password: req.body.password
})

// Read Data 
User.findById("1");
User.findOne({
    userName: "aman@gmail.com"
})
User.find({
    userName: "aman1@gmail.com"
})

// Update Data
User.updateOne(
    {"id": 1},
    {$push : {purchasedCourses: courseId}}
)

User.updateOne({
    id: "1"
},{
    password : "newPassword"
})
User.update({},{
    premium : false
})

//Delate Data
User.deleteMany({})
User.deleteOne({
    userName: "Aman@gmail.com"
})

/*
>> 3 jargons to know in the database 
1.Cluster   2.Database  3.Table 
*/

