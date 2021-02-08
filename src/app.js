const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParse = require("body-parser");

require("dotenv/config");

//Import Routes
const dataRoute = require("./routes/DataRoutes");

//Middlewares
app.use(bodyParse.json());
const people = [
  { name: "person 1" },
  { name: "person 2" },
  { name: "person 3" },
];

//Routes
app.use("/data", dataRoute);

app.get("/", (req, res) => {
  res.send("Server connect");
});

//DB CONNECT
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("conectado a la base de datos!");
  }
);

//Settings
app.set("port", process.env.PORT || 3000);

//Listen server
app.listen(app.get("port"), () => {
  console.log("Server ON", app.get("port"));
});
