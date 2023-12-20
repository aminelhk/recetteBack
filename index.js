const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/recetteCuisineRoute");
const bodyParser = require("body-parser");

const dbUrl = "mongodb://localhost:27017/recette";

async function connectDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB successfully connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(8082, () => {
  console.log("Serveur à l'écoute");
});
