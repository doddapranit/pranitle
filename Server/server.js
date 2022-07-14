// Import the express module and set the port number
const express = require('express');
const PORT = 3001;

// This creates an Express.js application which we'll use to host
// all of the API endpoints
const app = express();

// This is a sample GET request. It gives a status of 200 (OK) and returns
// some sample data. In the future, we'll create more GET requests to take in
// data of a certain type from the front-end, convert it into another type,
// and return it in the response.
app.get('/', (req, res) => {
    let result = {success: true, description: "You have successfully called the API"}
    res.status(200).send(result);
});

// This boots up the server at the specified port, or 3001 for now.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});