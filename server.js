const express = require("express");
const path = require(`path`);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

/* index */
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

/* kevin project */
app.get("/aerodinamica", async (req, res) => {
    res.render("aerodinamica.ejs");
});
app.get("/aerodinamica/B-2", async (req, res) => {
    res.render("B-2.ejs");
});

/* zupup project */
app.get("/colori", async (req, res) => {
    res.render("colori.ejs");
});

/* chinaglia project */
app.get("/fortune-wheel", async (req, res) => {
    res.render("fortune-wheel.ejs");
});
app.get("/fortune-wheel/wheel", async (req, res) => {
    res.render("wheel.ejs");
});

/* set static folder for css etc */
app.use(express.static(path.join(__dirname, 'static')))

/* set up 404 page (not found) */
/* WARNING: This route has to be the last one!! */
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send("<h1>404 error</h1><p>Page not found</p>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});