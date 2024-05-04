const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // main file + views folder

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/tag/:tag", (req, res) => {
  const { tag } = req.params;
  res.render("tag", { tag });
});

app.get("/cats", (req, res) => {
  const cats = ["embul", "kitty", "garfield", "oyen"];
  res.render("cats", { cats });
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { random: num });
});

app.listen(8080, () => console.log("Listening on port http://localhost:8080"));
