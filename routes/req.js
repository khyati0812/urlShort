// const express = require("express");
// const shorturl = require("shortid");
// const { useUrl } = require("../models/conn");
// const router = express.Router();
// console.log(router);
// router.post("/", async (req, res) => {
//   const body = req.body;
//   // console.log(body.url);
//   const urlId = shorturl.generate();
//   let urlSave = await useUrl.create({ url: urlId, redirectUrl: body.url });
//   return res.json({ msg: "Successful", short_id: urlId });
// });
// router.get("/:id", async (req, res) => {
//   try {
//     const Id = req.params.id;
//     console.log(Id);
//     const redUrl = await useUrl.findOne({ url: Id });
//     // console.log(redUrl);
//     if (!redUrl) {
//       return res.status(404).json({ error: "URL not found" });
//     }

//     // console.log(redUrl.redirectUrl);

//     // Redirect to the original URL
//     return res.redirect(redUrl.redirectUrl);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// module.exports = { router };
const express = require("express");
const shorturl = require("shortid");
const { useUrl } = require("../models/conn");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const urlId = shorturl.generate();

    // Save the short URL and the actual URL in the database
    let urlSave = await useUrl.create({ url: urlId, redirectUrl: body.url });

    return res.json({ msg: "Successful", short_id: urlId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const Id = req.params.id;
  console.log(Id);
  const redUrl = await useUrl.findOne({ url: req.params.id }).redirectUrl;
  console.log(redUrl);

  if (!redUrl) {
    return res.status(404).json({ error: "URL not found" });
  }

  // Redirect to the original URL
  return res.redirect(redUrl);
});

module.exports = { router };
