function menuController() {
    return {
        menu(req, res) {
            res.render("menu")
        }
    }
}
module.exports = menuController;