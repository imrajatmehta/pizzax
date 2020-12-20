const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "pizzax",
});

function homeController() {
    return {
        index(req, res) {
            db.query("select * from menu", (err, result) => {
                console.log("enter in item-menu at homeCOntroller")

                return res.render("home", {
                    items: result
                })
            })
        }
    }
}
module.exports = homeController;