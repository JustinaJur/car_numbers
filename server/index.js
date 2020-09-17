const express = require("express");
const pool = require("./db");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");

app.use(cors());
app.use(express.json());

const {
  getPlates,
  getPlate,
  updatePlate,
  addPlate,
  deletePlate,
} = require("./api/index.js");

app.get("/plates", getPlates);

app.get("/plates/:id", getPlate);

app.post("/plates", addPlate);

app.put("/plates/:id", updatePlate);

app.delete("/plates/:id", deletePlate);

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
