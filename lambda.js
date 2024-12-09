// Solution to the test without using Express.js

exports.handler = async () => {

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

  try {
    // Fetch the data
    const data = await fetchData();

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
