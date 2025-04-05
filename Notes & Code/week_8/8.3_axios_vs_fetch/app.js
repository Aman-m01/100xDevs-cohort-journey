// Fetch and Axios
/*
-> Fetch
 - it is a built-in JS api for making http requests which return promises. it requires more manual setup for some festures (like setting header, error-handling ...)

-> Axios
  - It is a third-party library for making HTTP requests, it has more features liek interceptors, automatic JSON tranformations and more. ii works in both browser and nodeJS enviorment.
*/

// Fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Must call .json() to parse the response
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch Error:", error));

// Axios
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data); // Axios automatically parses JSON
  })
  .catch((error) => {
    console.error("Axios Error:", error);
  });

// NOTE:
// blog.logrocket.com/axios-vs-fetch-2025/     <- FETCH vs AXIOS in detail
