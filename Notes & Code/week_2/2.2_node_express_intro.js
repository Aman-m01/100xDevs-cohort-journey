//  week-2.2 -> node.js runtime | http
/*------------------------------------ What is ECMAScript ---------------------------------------------------------
-- ECMAScript is a Scripting language specifications standardized by Ecma international in the ECMA-262 and ISO/IEC 16262 Documents. it serves as the guidelines or rules for the scripting language design.
-- ECMAScript versions are essentials update to the specifications, introduced new features and syntaxes. for example arrow functions introduced arrow functions, classes and templates literals.

>> javascript : the implementations 
-- javascript is a scripting language that confirms to the ECMAScript specification. it is most widely known and used implementations of ECMAScript.
-- Beyond ECMAScript: javascript also includes additional features that are not part of ecmascript specification, like the DOM manipulations , which is crucial for web development bu not defined in the ECMAScript.
*/

/*---------------------------------------- V8 engine -------------------------------
 V8 engine is a open-source javascript engine developed by the chromium project for google chrome and chromium web browsers. it's written uin the C++ and is responsible for compiling javascript code into native machine code before executing it, which greatly improves performance.
 -- v8 is used by google chrome | written in c++
 -- spiderMonkey used by firefox | written in c++
 -- nitro used by safari
 */

/*---------------------------------- nodejs -------------------------------
-- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. it is written in C++.
-- some smart people took out the v8 engine, added some backend things on the top to create a new runtime. it allows us to run JavaScript code outside of a web browser.
-- js was never meant to be run in the backend eventually became very popular and is a popular choice of runtime on the backend.
*/

/*------------------------------- BUN ---------------------------------------
-- Bun is a modern, all-in-one JavaScript runtime that aims to be a fast and efficient alternative to Node.js and Deno. it is a significantly faster runtime. it is written in Zig.
-- 
 */

/*------------------------- HTTP server ----------------------------------------------------
-- Http is a protocol that is used by machine to communicate. specially, for websites it is the most common way to your websites's frontend to talk to its backend.
 -- HTTP is a protocol that allows communication between clients and servers. it uses request and response messages to send and receive data.
-- http server is a program that listens for incoming requests on a specified port and responds with appropriate responses.
-- http server is used for building web applications, APIs, and other network services.

>> whenever we sending a request to a server
-- CLient Side
         -protocol(http/https) 
         - Address (url/ip/port)
         - Route
         - Headers, body, query parameters 
         - Method

 -- Server Side 
         - Response Headers    
         - Response Body
         - Status Code    

>> common http methods
- GET, POST, PUT, DELETE

>> status codes backend server responds with 
- 200 > Everything is OK
- 404 > Page/route is not found
- 403 > Authentication issues
- 500 > Internal server error

*/

// create a http server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.json());  //middleware
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/conversation', (req, res) => {
    // console.log(req.headers)

    const message = req.body.message;
    console.log(message)
    res.send({
        msg: "2 + 2 =  4"
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// note >> we can use body-parser, the body-parser module enables us to parse incoming requests bodies in a middleware.Express.js server needs to know what type of data you are sending over the the network, so it knows how to parse it.

/* how the clients and server works
Whenever we type google.com in our browser we send request through router and fiber optics cable to the http server 
present at the ip address which the google.com(domain name). That http server then responds with 
the html, css and js files stored on the server along with the images and assets which gets rendered on the browser
and google.com is visible to us. All this communication between our machine and web server in happening through
http protocol.

- A client taking to the server, this is called request-response model.
- ajax stands for Asynchronous Javascript and Xml, introduced by browser to let user fetch data asynchronously from the backend an update frontend based on that data, in order to create sub pages on a single web page

*/