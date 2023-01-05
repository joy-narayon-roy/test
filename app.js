const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();
function myMiddleware(req, res, next) {
  console.log(req.method, " - ", req.url);
  next();
}
app.use([
  cors({ origin: "*" }),
  express.static("./public"),
  express.urlencoded({limit: '50mb', extended: true }),
  express.json({limit: '50mb', extended: true }),
  myMiddleware,
  router,
]);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function (err) {
  console.log(this.address());
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${PORT}`);
  }
});
