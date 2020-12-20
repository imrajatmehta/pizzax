import axios from "axios"
import Noty from "noty"
let addToCart = document.querySelectorAll(".add-to-cart")
let cartCounter = document.querySelector("#cartCounterId");
function updateCart(cartItem) {

    axios.post("/update-cart", cartItem).then(res => {

        cartCounter.innerText = res.data.data;
        new Noty({
            type: "success",
            text: "Item added to Cart",
            timeout: 1000,


        }).show();

    }).catch(err => {
        new Noty({
            type: "error",
            text: "Something Went Wrong",
            timeout: 1000,
        }).show();
    })
}
addToCart.forEach((btn) => {
    btn.addEventListener("click", function (e) {

        var cartItem = JSON.parse(e.target.dataset.cartitem)


        updateCart(cartItem);


    })
});
