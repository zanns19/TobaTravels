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
let countries = ["ABDUL HAKIM", "ALIPUR CHATA", "ATTOCK CITY JN", "BAHAWALPUR", "BANDHI", "BHALWAL", "BHIRIA ROAD", "CHAK JHUMRA JN", "CHAK LALA", "CHANAB NAGAR", "CHILIANWALA", "CHINIOT", "DAUR", "DINA", "DINGA", "DRIGH ROAD", "DUNYA PUR", "FAISALABAD", "GHOTKI", "GOJRA", "GUJAR KHAN", "GUJRAT", "HAFIZADAD", "HYDERABAD JN", "JAHANGIRA ROAD", "JAHANIA", "JHELUM", "KARACHI CANTT", "KHAIRPUR", "KHANEWAL JN", "KHANPUR JN", "LAHORE JN", "LAKHA ROAD", "LALA MUSA JN", "LANDHI JN", "LODHRAN JN", "MAHRABPUR", "MALAKAWAL JN", "MANDI BAHA UD DIN", "MULTAN CANTT", "NAWABSHAH JN", "NOWSHERA JN", "PADIDAN", "PANO AKIL", "PESHAWAR CANTT", "PESHAWAR CITY", "PHULARWAN", "RAHIM YAR KHAN", "RAWALPINDI", "ROHRI JN", "SADIKABAD", "SAMASATA JN", "SANGLA HILL", "SARGODHA JN", "SETHARJA", "SHAHDADPUR", "SHAHINABAD JN", "SHORKOT CANTT JN", "SUKHEKE", "TANDO ADAM", "WAZIRABAD JN"

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
