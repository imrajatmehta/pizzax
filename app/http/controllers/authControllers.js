function authControllers() {
    return {
        signin(req, res) {
            res.render("signin", { layout: "auth" });
        },
        signup(req, res) {
            res.render("signup", { layout: "auth" })
        }
    }
}
module.exports = authControllers;