const express = require("express");

const bodyParser = require("body-parser");
const { Pool } = require("pg");

// const db = require("./config/database.js");
// db.authenticate()
//   .then(() => console.log("veri tabanına baglandı"))
//   .catch((err) => console.log(err));

const app = express();
app.use("/users", require("./router/router.js"));
// app.listen(3000, () => {
//     console.log("3000 portu dınlenıyor");
// })

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // İzin verilen HTTP metodları

  next();
});

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Ticket_Sale",
  password: "1",
  port: 5432,
});

app.post("/useradd", async (req, res) => {
  try {
    // Assuming you have data to insert from the request body
    const { kullanici_adi, sifre, email } = req.body;

    // Make sure to sanitize and validate user input before inserting into the database

    // Example INSERT query
    const insertQuery =
      "INSERT INTO kullanici_tablosu (kullanici_adi,sifre,email) VALUES ($1, $2, $3) RETURNING *";

    // Execute the query with parameters
    const result = await pool.query(insertQuery, [kullanici_adi, sifre, email]);

    // Send the inserted user data back to the client
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/users", async (req, res) => {
  console.log(req.body);
});

app.post("/login", async (req, res) => {
  // const userData = [req.body.kullanici_adi, req.body.sifre];
  console.log([req.body.kullanici_adi, req.body.sifre]);
  try {
    const result = await pool.query(
      "SELECT * FROM kullanici_tablosu WHERE kullanici_adi = $1 AND sifre = $2",
      [req.body.kullanici_adi, req.body.sifre]
    );
    if (result.rowCount > 0)
      res.send('Success');

    else {
      res.send('Error')
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/movie/:id", async (req, res) => {
  try {
    const filmId = req.params.id;
    console.log(filmId)
    const result = await pool.query(
      "SELECT * FROM film_ozellik WHERE film_id = $1",
      [filmId]
    );
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/movie", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM film_ozellik"
    );
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  pool.connect((err) => {
    console.log("Connected");
  });
});
