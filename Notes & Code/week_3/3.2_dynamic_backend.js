// Dynamic backend authentication using expressJS
/*
> Authentication is the process of verifying the identity of a user or system to ensure that they are who they claim to be, before authentication let's understand some cryptography jargons.
1. hashing   2. Encryptions  3. JSON web tokens   4. Local Storage 


>> Hashing 
-- Hashing is a method to convert the simple string into some weird zebrish code(Aman -> 121sdfaf@3shd)
   ex- when a user login into facebook then firstly he put the email and password, after that the data was converted into some zebrish code, before storing into the DB, this process is done by the backend code.
> reason (why it is important):
     - Database breaking: sometimes hackers attack on the server  and lets consider they steal some data from the database , but the data is hashing into the another format , so they can't access or decode the data easily.
     - in case, people use the same password for the websites , so it is necessary to hashing it for the security purpose, anytime the password , it converted into the same format after hashing.
     - it also helps to prevent brute force attacks, where an attacker tries to guess the password by trying all possible combinations.
     - hashing is the 1 way method, we can convert the string into hash but we can't revert it back to the original data.


>> Encryption 
-- Encryption is the process of converting plaintext data into the cipher text using an algorithm and a secret key.
-- The goal of encryption is to protect data confidentially by making it inaccessible to unauthorized party. it is a two way process.
--  Encryptions: Convert plian text into the cipher text using an algorithm and secret key
-- Decryption: Convert cipher text back into the plaintext using the same algorithm and secret key.
-- some encryption algorithms are RSA, AES and blowfish.

> Reasons why encryption is important:
   - Data privacy: It protects sensitive information from unauthorized access during transmission or storage.
   - Secure communication: It enables secure communication over networks, including the internet.
   - Compliance: Many industries require encryption to comply with data protection regulations.
   - Integrity: Encryption can also ensure that data hasn't been tampered with during transmission


>> JSON web tokens 
-- JWT is a proposed internal standard for creating digital tokens that securely transmit information between parties. its a json objects that containing claims, such as identify, permission or other data & it is digitally signed or encrypted to ensure authenticity and integrity.

> JWT contains three parts, these are separated using dot(.)
- Header : contains the metadata about the tokens such as algorithm used for encryption and the tokens type.
- Payload: Holds the actual claims or data, represented as a json data.
- Signature: A digital signature generated using a secret key or public-private key pair, ensuring the token authenticity and integrity.

>> JSON web tokens workflow 
  - A user sends their credentials like username and password & sends them to the server, the server validates the credential. if they are correct, the server generates a jwt containing the users information & signing with the secret key.
  - The server sends the JWT back to the user. the users stores the JWT (usually in the browser locals storage or as a cookies) and includes its as an authorization headers in the subsequent request to the server.
  - when the users sends a new request with the JWT, the server decodes the JWT and verifies its signature, if the tokens is valid, the server processes the requests & returns the appropriate response.


>> Local storage
- A place in your browser where you can store some data using things that are stored include: 
     >Authentications tokens   >user language preferences  >user theme preferences 
- Local storage is a client side web storage mechanism that allows websites to stores key value pairs persistently on a users device. in the realm of authentication, local storage often plays an crucial role in maintaining user session and preserving authentication tokens.

> implementation
- token storage: After a successful authentications the server generates an authentications tokens for the users. this tokens is securely stored in the user's browsers.
- Session persistence: local storage provides a means to persistently store the tokens across browser sessions. this persistence ensure the users remains authenticate even if they close the browser and return later.
- Reducing authentications overhead: Instead of requiring users to authenticate themselves on the every interaction, the store tokens allow the server to recognize and validate the users and enhancing the users experience.

*/









