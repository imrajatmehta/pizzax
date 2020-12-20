function cartController() {
    return {
        cart(req, res) {
            res.render("cart")
        },
        update(req, res) {
            // let cart = {
            //     items: {
            //         pizzaId: { item: pizzaObject, qty: 0 }
            //     },
            //     totalQty: 0,
            //     totalAmmount: 0
            // }

            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalAmmount: 0

                }
            }
            let cart = req.session.cart;
            if (!cart.items[req.body.id]) {
                cart.items[req.body.id] = { items: req.body, qty: 0 }
            }
            cart.totalQty += 1;
            cart.items[req.body.id].qty += 1;
            cart.totalAmmount += req.body.price
            console.log(req.session.cart.items);
            return res.json({ data: req.session.cart.totalQty })

        }

    }
}
module.exports = cartController;