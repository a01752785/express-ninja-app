const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Set up express app
const app = express();

// Connect to mongodb
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

// Middleware to handle static file requests from public folder 
app.use(express.static("public"));

// JSON parser middleware
app.use(bodyParser.json());

// Initalize routes
app.use('/api', require("./routes/api"));

// Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({
        error:err.message
    })
})

// Listen for requests
app.listen(process.env.port || 4000, function() {
    console.log("Now listening for requests");
});