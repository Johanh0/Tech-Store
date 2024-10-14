import products from "../data/data.js";

const cardContainer = document.querySelector(".card-container");

function renderProducts(products) {
  products.forEach((product) => {
    cardContainer.innerHTML += `
            <article class="card">
          <div class="card__div-img">
            <img src="" alt="card image" />
          </div>
          <div class="card__div-info">
            <h2 class="card__p--title">Product</h2>
            <p class="card__p--brand">Brand</p>

            <p class="card__p--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, vero.
            </p>
            <p class="card__p--price">$ 100</p>
            <a href="" class="card__a--link">Buy</a>
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
