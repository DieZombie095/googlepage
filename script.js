const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const luckyButton = document.getElementById("luckyButton");

function searchGoogle(lucky = false) {
  const query = searchInput.value.trim();
  if (!query) {
    searchInput.focus();
    return;
  }

  const baseUrl = lucky
    ? "https://www.google.com/search?btnI=1&q="
    : "https://www.google.com/search?q=";

  window.location.href = baseUrl + encodeURIComponent(query);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchGoogle();
});

luckyButton.addEventListener("click", () => searchGoogle(true));

searchInput.addEventListener("input", () => {
  clearButton.classList.toggle("visible", searchInput.value.length > 0);
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearButton.classList.remove("visible");
  searchInput.focus();
});
