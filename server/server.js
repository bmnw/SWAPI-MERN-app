const express = require("express");
const bodyParser = require("body-parser");
const dao = require("./data_access.js");

const app = express();

app.use(express.json());

// GET planets
app.get("/planets", (req, res) => {
  dao.findAllPlanets((err, planets) => {
    if (planets) {
      res.send(planets);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/characters", (req, res) => {
  dao.findAllCharacters((err, characters) => {
    if (characters) {
      res.send(characters);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

var port = 3000;
console.log("service opening on port: " + port);
app.listen(port);
