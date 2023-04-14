const express = require("express");
const app = express();
const hbs = require("hbs");
require("dotenv").config();

const PORT = process.env.PORT;
//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Middlewares servir contenido estático
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Piero Davila",
    titulo: "Curso de NODEJS",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Piero Davila",
    titulo: "Curso de NODEJS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Piero Davila",
    titulo: "Curso de NODEJS",
  });
});

app.get("*", (req, res) => {
  //Sirviendo contenido estatico dependiendo de la ruta
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
