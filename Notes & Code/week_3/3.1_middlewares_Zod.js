// Middlewares in Node.js
/*
Middlewares in Node.js are functions that have access to the request object (req),
the response object (res), and the next middleware function in the application's
request-response cycle, commonly denoted by a variable named 'next'.

Key points about middlewares:
1. They can execute any code.
2. They can make changes to the request and response objects.
3. They can end the request-response cycle.
4. They can call the next middleware in the stack.

Middlewares are used for various purposes such as:      
- Parsing request bodies
- Logging
- Error handling
- Authentication
- Data validation & more...

- syntax
        app.use((req,res,next)=>{
            // middleware code
            next();
        })
*/

/*
// without middlewares 
// if we want to add a new route then we need to repeat the same code again and again which violates the DRY principle, so we use middlewares to avoid this 

const express = require('express');
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const kidneyID = req.query.kidneyID;
    const userName = req.headers.userName;
    const password = req.headers.password;
    if (userName != "Aman" && password != "pass") {
        res.status(403).json({
            msg: "user doesn't exist"
        })
        return;
    }

    if (kidneyID != 1 && kidneyID != 2) {
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return;
    }
    res.send("Your Heart is Healthy")

})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
*/


/*
// by using middlewares 
const express = require('express')
const app = express()
function userMiddleware(req, res, next) {
    if (username != "Aman" && password != "pass") {
        res.status(403).json({
            msg: "incorrect inputs"
        })

    } else {
        next()
    }
}

function kidneyMiddleare(req, res, next) {
    if (kidneyID != 1 && kidneyID != 2) {
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    } else {

        next()
    }

}

app.get('/health-checkup', userMiddleware, kidneyMiddleare, (req, res) => {
    res.send("Your heart is healthy")
})
app.get('/kidney-check', userMiddleware, kidneyMiddleare, (req, res) => {
    res.send("Your heart is healthy")
})
app.get('/heart-check', userMiddleware, (req, res) => {
    res.send("Your heart is healthy")
})

 */


/*
>> Global Catches (Error Handling Middleware)
- Global catches helps you give the users a better error message 
- Error handling middlewares, this is a special type of middlewares functions in exprss that has four arguments instead of three (err,req,res,next). Express recognizes this as an error handling middleware because of this four arguments.

Benefits of using global catches:
1. Centralized error handling: All errors can be managed in one place.
2. Consistent error responses: Ensures a uniform structure for error responses across your API.
3. Prevents hanging requests: Properly handles errors so that requests don't hang.
4. Flexibility: You can customize error responses based on error types or status codes.
*/


/*
// Input validations using ZOD
*/
const express = require('express')
const app = express()
const zod = require('zod')
const port = 3023

const schema = zod.array(zod.number())
app.use(express.json())  //for parsing bodies

app.post('/health-checkup',(req, res)=>{
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
    }else{
        res.send({
            response
         })
    }

 
})

app.listen(port, ()=>[
    console.log(`Server is listen on http://localhost:${port}`)
])


// email validations using ZOD 
function validateInput(obj){
  const schema1  = zod.object({
    email : zod.string().email(), 
    password : zod.string().min(8)

  })
 const response = schema1.safeParse(obj)
 console.log(response)
}

validateInput({
    email : "test@gmail.com", 
    password : "12123454354351"
 
 })

