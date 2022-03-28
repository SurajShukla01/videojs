const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started at port 3000");
});

var count = 1;
var player = document.getElementById("myVideo");
var mp4Vid = document.getElementById("mp4Source");
player.addEventListener("ended", myHandler, false);

function myHandler(e) {
  if (!e) {
    e = window.event;
  }
  count++;
  mp4Vid.setAttribute("src", "videos/video" + count + ".mp4");
  player.load();
  player.play();
}
