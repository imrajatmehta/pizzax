const express = require("express");
const server = express();
const expHbs = require("express-handlebars");
const handlebarsHelpers = require("handlebars-helpers")();
const path = require("path")
const favicon = require("serve-favicon")
const session = require("express-session")

// Assets 
server.use(express.static("public"))
server.use(session({
    secret: "aasd",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))
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
        helpersHbs,
        toStringify: function (cartItemObject) {

            return JSON.stringify(cartItemObject)
        }
    }
})

// Settin hbs as engine

server.engine("hbs", hbs.engine);

// Set Favicon means logo in tab
server.use(favicon(path.join(__dirname, "/public/favicon.ico")))

// database connection
const sql = require("mysql");
const db = sql.createConnection({
    host: "localhost",
    user: "root",
    database: "pizzax"
});
db.connect((error) => {
    if (error) {
        console.log("Error in db connection" + error)
    } else {
        console.log("DB connected")
    }
})
server.use(express.json());

require("./routes/web")(server)
server.use("*", (req, res) => {
    res.send("where beta kha jare o ")
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log("listening on port 3000")
}) 