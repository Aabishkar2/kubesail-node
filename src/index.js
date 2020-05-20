var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello aabishkar");
});

app.listen(4000, function () {
  console.log("App listening on port 4000!");
});
