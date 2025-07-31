// Toggle monthly/yearly
const toggle = document.getElementById("toggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach((price) => {
    const monthly = price.getAttribute("data-monthly");
    const yearly = price.getAttribute("data-yearly");
    price.textContent = toggle.checked ? `${yearly}/year` : `${monthly}/month`;
  });
});

// Highlight selected card
const buttons = document.querySelectorAll(".choose-btn");
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".card").forEach((card) => card.classList.remove("selected"));
    e.target.closest(".card").classList.add("selected");
  })
);
