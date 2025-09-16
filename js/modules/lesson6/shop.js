import Products from "./products.js";
import {createCards, cardsRender} from "./cards.js";
import renderCart from "./cart.js";

async function getPageShop() {
    const shop = document.createElement("div");
          shop.classList.add("shop");

    try {
        const shopHTML = await fetch("./js/modules/lesson6/page/shop.html");

        shop.innerHTML = await shopHTML.text();
    } catch (err) {
        console.log(err);   
    }

    return shop;
}

async function shopInit() {
    const shop = await getPageShop();
    const list = shop.querySelector(".shop-list");
    const cartBtn = shop.querySelector(".shop__cart");
    const cart = shop.querySelector(".cart");

    cartBtn.addEventListener("click", () => {
          cart.classList.toggle("close");
          list.classList.toggle("close");

          cartInit(cart);
    });

    list.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList.contains("card-btn")) {
            const product = Products.find(item => item.id == target.dataset.id);
            product.count++;

            target.textContent = "Додано";
            target.setAttribute("disabled", "true");

            addInCart(product);
        }
    });

    const cards = createCards(Products); 
    cardsRender(list, cards);

    return shop;
}


function cartInit(cart) {
    const cartItems = renderCart();
    
    const cartList = cart.querySelector(".cart-list");

    cartList.innerHTML = "";
    cartList.append(...cartItems);
}


function addInCart(product) {

    const data = localStorage.getItem("shopCart");

    if (data) {
       const cart = JSON.parse(data);
       cart[product.id] = product;

       localStorage.setItem("shopCart", JSON.stringify(cart));
    } else {
        const cart = {};
        cart[product.id] = product;

        localStorage.setItem("shopCart", JSON.stringify(cart));
    }
}


export default shopInit;