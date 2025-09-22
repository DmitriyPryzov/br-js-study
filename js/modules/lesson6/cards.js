

function createCard({title, desc, price, img, id}) {
    let disabled = "";
    let titleBtn = "В корзину";

    const findCart = localStorage.getItem("shopCart") || "{}";
         if (id in JSON.parse(findCart)) {
            disabled = "disabled";
            titleBtn = "Додано";            
         }

    const li = document.createElement("li");
          li.classList.add("shop-list__item", "card");

          li.innerHTML = `
          <div class="shop-img-block">
                <img src="./assets/img/icons/${img}" alt="img">
            </div>
            <div class="shop-info">
                <h3 class="shop-info__title">${title}</h3>
                <span class="shop-info__price">${price}</span><span class="shop-info__price"> грн.</span>
                <p class="shop-info__desc">${desc}</p>
                <button class="task-btn card-btn" data-id="${id}" ${disabled}>${titleBtn}</button>
            </div>`;
    return li;
}

function createCards(products) {
    const cards = [];

    for (let i = 0; i < products.length; i++) {
        cards.push(createCard(products[i]));
    }

    return cards;
}

function cardsRender(parent, cards) {
    parent.append(...cards);
}


export {createCards, cardsRender};

      