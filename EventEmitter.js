const EventEmitter = require("events");

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Define an event handler
const myEventHandler = () => {
  console.log("Event occurred!");
};

// Attach the event handler to the custom event
myEmitter.on("customEvent", myEventHandler);

// Emit the custom event
myEmitter.emit("customEvent");
