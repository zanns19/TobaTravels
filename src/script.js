jQuery('.Destination').chosen();


// Select all elements with the class "station"
let station = document.querySelectorAll('.station');

// Store the original text in a data attribute
station.forEach((element) => {
  element.setAttribute("data-original", element.textContent);
});

// Dropdown and search input functionality
const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

// List of countries
let countries = [
  "Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"
];

// Populate dropdown with country options
function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach((country) => {
    let isSelected = country === selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

// Initial population of country list
addCountry();

// Update station names based on the selected country
function updateName(selectedLi) {
  // Update dropdown text
  selectBtn.firstElementChild.innerText = selectedLi.innerText;

  // Replace "Lahore" with the selected country in station elements
  station.forEach((element) => {
    let originalText = element.getAttribute("data-original");
    element.textContent = originalText.replace("Lahore", selectedLi.innerText);
  });

  // Close dropdown and refresh the list
  wrapper.classList.remove("active");
  addCountry(selectedLi.innerText);
}

// Filter countries as the user types
searchInp.addEventListener("keyup", () => {
  let searchWord = searchInp.value.toLowerCase();
  let filteredCountries = countries.filter((data) =>
    data.toLowerCase().startsWith(searchWord)
  );

  // Render filtered options or show "not found" message
  options.innerHTML = filteredCountries.length
    ? filteredCountries
        .map((data) => `<li onclick="updateName(this)">${data}</li>`)
        .join("")
    : `<p>Oops! Country not found</p>`;
});

// Toggle dropdown visibility
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
