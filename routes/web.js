const homeController = require("../app/http/controllers/homeController")
const authController = require("../app/http/controllers/authControllers")
const cartController = require("../app/http/controllers/customers/cartController")
const menuController = require("../app/http/controllers/customers/menuController")
const offersController = require("../app/http/controllers/customers/offersController")

function initRoutes(server) {
    server.get("/", homeController().index)
    server.get("/signin", authController().signin)
    server.get("/cart", cartController().cart)
    server.get("/signup", authController().signup)
    server.get("/menu", menuController().menu)
    server.get("/offers", offersController().offers)
    server.post("/update-cart", cartController().update);

}
module.exports = initRoutes