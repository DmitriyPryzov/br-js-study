
let Cart;

function createCartItem(product) {

    const li = document.createElement("li");
          li.classList.add("cart-list__item");
          li.dataset.id = product.id;
    
    li.innerHTML = `
                        <div class="cart-list__img">
                            <img src="./assets/img/icons/${product.img}" alt="s">
                        </div>
                        <div class="cart-list__data">
                            <span class="cart-list__title">${product.title}</span>
                            <span class="cart-list__price">${product.price}грн.</span>

                            <div class="counter">
                                <button class="task-btn counter__btn minus">-</button>
                                <input type="number" class="input-counter" value="${product.count}" min="1">
                                <button class="task-btn counter__btn plus">+</button>
                            </div>
                            <button class="cart-list__close task-btn">✖</button>
                        </div>`;

    onCounter(product, li.querySelector(".minus"), li.querySelector(".input-counter"), li.querySelector(".plus"));
    li.querySelector(".cart-list__close").addEventListener("click", () => {
        delete Cart[li.dataset.id];
        updateCart(Cart);

        const btn = document.querySelector(`[data-id="${li.dataset.id}"`);
        btn.disabled = false;
        btn.textContent = "В корзину";
    });

    return li;
}

function createCartItems(cart) {
    const cartItems = [];

    for (let id in cart) {
        cartItems.push(createCartItem(cart[id]));
    }

    return cartItems;
}

function setTotal(cart) {

    let total = 0;

    for (let id in cart) {

        total += cart[id].price * cart[id].count;
    }

    return total;
}

function onCounter(prod, minus, input, plus) {
    minus.addEventListener("click", () => {
        input.value = +input.value >= 1 ? +input.value - 1 : 0;
        if (prod.count >= 2) {
            prod.count--;
        }

        updateCart(Cart);
    });

    plus.addEventListener("click", () => {
        input.value = +input.value + 1;
        prod.count++;

        updateCart(Cart);
    });
}


function updateCart(cart) {
    localStorage.setItem("shopCart", JSON.stringify(cart));
    const cartList = document.querySelector(".cart-list");
    cartList.innerHTML = "";
    cartList.append(...renderCart());
}

function renderCart() {

    Cart = JSON.parse(localStorage.getItem("shopCart")) || {};
    
    const items = createCartItems(Cart);

    const cartTotal = document.querySelector(".cart-total");
            cartTotal.textContent = `Разом: ${setTotal(Cart)} грн.`;

    return items;
}


export default renderCart;
