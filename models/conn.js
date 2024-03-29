const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Url = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  redirectUrl: { type: String, required: true },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});
const useUrl = mongoose.model("user", Url, "users");
useUrl.createIndexes();
console.log(Url);
module.exports = { useUrl };
