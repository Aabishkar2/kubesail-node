var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("Hello to my first gitlab ci and kubernetes project! Yeah!");
});

app.listen(4000, function () {
  console.log("App listening on port 4000!");
});
