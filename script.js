window.onload = function () {
  const earth = document.getElementById("earth");
  const market = document.getElementById("market");
  const koreaLabel = document.getElementById("korea-label");
  const marketLabel = document.getElementById("market-label");

  koreaLabel.addEventListener("click", () => {
    earth.style.transform = "scale(2.5)";
    koreaLabel.style.opacity = "0";

    setTimeout(() => {
      earth.classList.remove("show");
      earth.style.display = "none";
      market.classList.add("show", "zoom-in");
    }, 3000);

    setTimeout(() => {
      koreaLabel.style.display = "none";
      marketLabel.classList.add("show");
    }, 3800);
  });

  marketLabel.addEventListener("click", () => {
    marketLabel.classList.remove("show");
    market.classList.add("zoom-in-clicked");

    setTimeout(() => {
      window.location.href = "product.html";
    }, 2000);
  });
};
