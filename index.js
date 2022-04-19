const express = require("express");
const bodyParser = require("body-parser");
// Set up express app
const app = express();

app.use(bodyParser.json());

// Initalize routes
app.use('/api', require("./routes/api"));

// Listen for requests
app.listen(process.env.port || 4000, function() {
    console.log("Now listening for requests");
});