const pool = require("../db");

getPlates = async (req, res) => {
  try {
    const platesNumbers = await pool.query(
      "SELECT * from cars_numbers ORDER BY owner_name ASC"
    );
    res.json(platesNumbers.rows);
  } catch (err) {
    console.log(err.message);
  }
};

getPlate = async (req, res) => {
  try {
    const { id } = req.params;

    const plate = await pool.query(
      "SELECT * FROM cars_numbers WHERE plate_number = $1",
      [id]
    );
    res.json(plate.rows);
  } catch (err) {
    console.log(err.message);
  }
};

addPlate = async (req, res) => {
  try {
    const { number, name } = req.body;

    const newPlate = await pool.query(
      "INSERT INTO cars_numbers(plate_number, owner_name) VALUES($1, $2)",
      [number, name]
    );
    res.json(newPlate);
  } catch (err) {
    console.error("err", err.message);
  }
};

updatePlate = async (req, res) => {
  console.log(req);
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedPlate = await pool.query(
      "UPDATE cars_numbers SET owner_name = $1 WHERE plate_number = $2",
      [name, id]
    );
    res.json("Name was updated!");
  } catch (err) {
    console.log("erroo", err.message);
  }
};

deletePlate = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePlate = await pool.query(
      "DELETE from cars_numbers WHERE plate_number = $1",
      [id]
    );
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getPlates,
  getPlate,
  updatePlate,
  addPlate,
  deletePlate,
};
