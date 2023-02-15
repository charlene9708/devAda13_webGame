const express = require("express")
const app = express();
app.set("view engine", "ejs")

//handle HTTP GET requests 
app.get("/", (req, res) => { 
    res.render("homepage", {text: "girls!" })
  });

  app.get("/nav", (req, res) => { 
    res.render("navbar")
  });
app.listen(3000)