const express = require("express");
const mongoose = require("mongoose");
const { connectMongoose } = require("./connection");
const { useUrl } = require("./models/conn");
const { router } = require("./routes/req");
console.log(router);
const app = express();
app.use(express.json());
app.use("/url", router);
const mongourl = "mongodb://127.0.0.1:27017/url_shortener_prac";
connectMongoose(mongourl);
app.listen(8002, () => {
  console.log("Server started");
});
