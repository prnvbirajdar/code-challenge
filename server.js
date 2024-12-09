// Solution to the test using Express.js

const express = require('express');
const app = express();

const PORT = 3000;

// Simulate a database call
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "a1a1a1", name: "Joe Reviewer", start: "111111111111", end: "111111111397" },
        { id: "b2b2b2", name: "Jane Approver", start: "111111111398", end: "111111111684" },
        { id: "c3c3c3", name: "Sam Evaluator", start: "111111111685", end: "111111111971" },
        { id: "d4d4d4", name: "Pat Inspector", start: "111111111972", end: "111111112258" },
        { id: "e5e5e5", name: "Alex Checker", start: "111111112259", end: "111111112545" },
        { id: "f6f6f6", name: "Chris Analyst", start: "111111112546", end: "111111112832" },
        { id: "g7g7g7", name: "Jordan Validator", start: "111111112833", end: "111111113119" }
      ]);
    }, 100);
  });
};

// Define the endpoint
app.get('/get-array', async (_req, res) => {
  try {
    const data = await fetchData(); // Attempt to fetch data
    res.status(200).json(data); // Success: Send data with 200 status code
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ message: 'Internal Server Error' }); // Error: Send error message with 500 status code
  }
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static('public'))

module.exports = { app, server };