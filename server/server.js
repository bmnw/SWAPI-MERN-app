const express = require('express');
const bodyParser = require('body-parser');
const data = require("./data_access");

const app = express();

app.use(bodyParser.json());

// GET planets
app.get("/planets/:id", function(req, res) {
    let planet = data.findPlanet(req.params.id);

    if(planet === undefined) {
        res.statusCode = 404;
        res.end();
    } else {
        res.send(planet);
    }
});