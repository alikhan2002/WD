//Change search bar color when clicked
let searchBox = document.querySelector(".search");
let searchInput = document.querySelector(".search input");

searchInput.addEventListener("click", function() {
  searchBox.style.backgroundColor = "#ffffff";
  searchInput.style.backgroundColor = "#ffffff";
});

//Return search bar color back to normal when clicked outside
document.addEventListener("click", function(event) {
  // If user clicks inside the search box, do nothing
  if (event.target.closest(".search")) return;

  // If user clicks outside the search box, hide it.
  searchBox.style.backgroundColor = "#eeeeee";
  searchInput.style.backgroundColor = "#eeeeee";
});
