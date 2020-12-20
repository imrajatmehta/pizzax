import axios from "axios"

let addToCart = document.querySelectorAll(".add-to-cart")

function updateCart(cartItem) {

    console.log(cartItem)

    axios.post("/update-cart", cartItem).then(res => {
        console.log(res)
    })
}
addToCart.forEach((btn) => {
    btn.addEventListener("click", function (e) {

        var cartItem = JSON.parse(e.target.dataset.cartitem)


        updateCart(cartItem);


    })
});
