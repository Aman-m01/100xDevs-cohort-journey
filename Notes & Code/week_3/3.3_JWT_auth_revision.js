/*
>> JWT : JWT (JSON Web Token) is an open standard (RFC 7519) used to securely transmit information between two parties—typically a client (like a web browser) and a server. It is widely used for authentication and authorization purposes. JWTs are compact, URL-safe tokens that are easy to transmit via HTTP headers, query parameters, or cookies.
- A JWT consists of three parts: 1.Header   2.PAyload    3.Signature 

>> How JWT works 
- User Login: The user logs in with their credentials (username and password).
- Server Verification: The server verifies the credentials and, if valid, - creates a JWT containing the user's data and sends it back to the client.
- Storing the JWT: The client stores the JWT (usually in localStorage or a cookie).
- Subsequent Requests: For future requests, the client includes the JWT in the Authorization header (e.g., Authorization: Bearer <token>).
- Token Validation: The server verifies the JWT by checking the signature and the claims (e.g., expiration).
- Response: If the token is valid, the server processes the request and - responds. If invalid, the server denies access

>> JWT for Authentication vs. Authorization
-- Authentication: JWT is commonly used in login processes. After verifying user credentials, the server generates a token with the user information, allowing the user to access protected routes without re-entering their credentials.
-- Authorization: JWT also stores roles or permissions (claims like role: admin), which determine what actions the user can perform. For example, only users with the admin role can access certain resources.

//sign, verify , decode 
*/

// creating and validating JWT 
const jwt = require('jsonwebtoken')
const secret_key = "1212ABC"
const value = {
    name: "Aman Maurya",
    age: 18
}

// creating a JWT 
const token = jwt.sign(value, secret_key, { expiresIn: "2h" })
console.log("Generates token is: ", token)

// for verifications 
try {
    const decoded_data = jwt.verify(token, secret_key)
    console.log("data: ", decoded_data)
} catch (e) {
    console.log("error: ", err.message)
}
