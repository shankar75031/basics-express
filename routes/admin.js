const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log(rootDir);
  const temppath = path.join(rootDir, "views", "add-product.html");
  console.log(temppath);
  res.sendFile(temppath);
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
