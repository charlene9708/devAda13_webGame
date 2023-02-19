const express = require("express")
const app = express();
app.set("view engine", "ejs")

//handle HTTP GET requests 
app.get("/", (req, res) => { 
    res.render("homepage")
  });
app.listen(3000)