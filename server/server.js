const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data_access");

const app = express();

app.use(bodyParser.json());

// GET planets
app.get("/planets/:id", function (req, res) {
  // let planet = data.findPlanet(req.params.id);

  let planet = {
    id: 1,
    name: "test planet",
    climate: "desert",
    temperate: "arid",
  };

  if (planet === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(planet);
  }
});

var port = 3000;
console.log("service opening on port: " + port);
app.listen(port);
