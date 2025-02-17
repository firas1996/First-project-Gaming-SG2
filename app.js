const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./.env" });
const userRouter = require("./routes/userRoutes");

const app = express();
app.use("user", userRouter);
const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection secured !!!!");
  })
  .catch((e) => {
    console.log(e);
  });

const port = 2222;

app.listen(port, () => {
  try {
    console.log("The server is running !!!!");
  } catch (error) {
    console.log(error);
  }
});
