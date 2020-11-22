const express = require("express");
const server = express();
const expHbs = require("express-handlebars");
const handlebarsHelpers = require("handlebars-helpers")();
const path = require("path")
const favicon = require("serve-favicon")

// Assets 
server.use(express.static("public"))

// Set Template Engine
server.set("view engine", "hbs")
// Set views default path
server.set("views", path.join(__dirname, "./resources/views"))

const helpersHbs = require("handlebars-helpers")();

//Adding default layout.
const hbs = expHbs.create({
    extname: "hbs",
    defaultLayout: "default",
    layoutsDir: path.join(__dirname, "resources/views/layout/"),

    helpers: {
        helpersHbs
    }
})

// Settin hbs as engine

server.engine("hbs", hbs.engine);

// Set Favicon means logo in tab
server.use(favicon(path.join(__dirname, "/public/favicon.ico")))

const PORT = process.env.PORT || 3000
server.get("/", (req, res) => {
    res.render("home")
})
server.get("/signin", (req, res) => {
    res.render("signin", { layout: "auth" });
})
server.get("/cart", (req, res) => {
    res.render("cart")
})
server.get("/signup", (req, res) => {
    res.render("signup", { layout: "auth" })
})
server.listen(PORT, () => {
    console.log("listening on port 3000")
}) 