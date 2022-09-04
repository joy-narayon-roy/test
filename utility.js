const fs = require("fs");

function readDB() {
  let data = fs.readFileSync("./db/data.json", { encoding: "utf8" });
  data = JSON.parse(data);
  return data;
}

function writeDB(data) {
  let dataString = JSON.stringify(data);
  let status = fs.writeFileSync("./db/data.json", dataString);
  return status;
}

module.exports = {
  readDB,
  writeDB,
};
