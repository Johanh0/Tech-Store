import products from "../data/data.js";

const cardContainer = document.querySelector(".card-container");

function renderProducts(products) {
  products.forEach((product) => {
    cardContainer.innerHTML += `
            <article class="card">
          <div class="card__div-img">
            <img src="${product.img}" alt="card image" />
          </div>
          <div class="card__div-info">
            <h2 class="card__p--title">${product.title}</h2>
            <p class="card__p--brand">${product.brand}</p>

            <p class="card__p--description">
              ${product.description}
            </p>
            <p class="card__p--price">$ ${product.price}</p>
            <a href="${product.link}" class="card__a--link">Buy</a>
          </div>
        </article>
    `;
  });
}

window.addEventListener("DOMContentLoaded", renderProducts(products));

(function () {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector("#footer-year");

  footerYear.textContent = year;
})();
