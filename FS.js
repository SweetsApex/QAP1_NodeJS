const fs = require("fs");

// Write content to a file
fs.writeFile("QAPFun.txt", "Hello, Peter. R!", (err) => {
  if (err) throw err;
  console.log("File written successfully.");

  // Read content from the file
  fs.readFile("QAPFun.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
