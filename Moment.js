// Step 1: Import the 'moment' module
const moment = require("moment");

// Step 2: Create some sample events
const event1 = moment("2024-01-26T12:00:00");
const event2 = moment("2024-02-01T18:30:00");
const event3 = moment("2024-02-15T09:45:00");

// Step 3: Log the events to the terminal using console.log()
console.log("Event 1:", event1.format("YYYY-MM-DD HH:mm:ss"));
console.log("Event 2:", event2.format("YYYY-MM-DD HH:mm:ss"));
console.log("Event 3:", event3.format("YYYY-MM-DD HH:mm:ss"));
