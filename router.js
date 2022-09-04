const router = require("express").Router();
const { readDB, writeDB } = require("./utility");

router.get("/", function (req, res) {
  res.status(200).json({ message: "Hi I am your Server!" });
});

router.get("/api", function (req, res) {
  let data = readDB();
  res.json(data);
});
router.post("/api", function (req, res) {
  let dataArray = readDB();
  dataArray.push(req.body.image);
  writeDB(dataArray);
  res.json({ message: "Yes" });
});

module.exports = router;
