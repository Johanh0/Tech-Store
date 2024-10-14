(function () {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector("#footer-year");

  footerYear.textContent = year;
})();
