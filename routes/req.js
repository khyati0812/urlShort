const express = require("express");
const shorturl = require("shortid");
const { useUrl } = require("../models/conn");
const router = express.Router();
console.log(router);
router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body.url);
  const urlId = shorturl.generate();
  let urlSave = await useUrl.create({ url: urlId, redirectUrl: body.url });
  return res.json({ msg: "Successful", short_id: urlId });
});
module.exports = { router };
