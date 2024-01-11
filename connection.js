const mongoose = require("mongoose");
function connectMongoose(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Mongoose connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { connectMongoose };
