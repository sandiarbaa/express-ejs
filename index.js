const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // main file + views folder

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => console.log("Listening on port http://localhost:8080"));
