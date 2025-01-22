jQuery('.Destination').chosen();

const Shalimar =document.querySelector('.shalimar');
const Karakoram =document.querySelector('.kara')
const Millat =document.querySelector('.Millat')
const Pakistan =document.querySelector('.Pakistan')
const Rehman =document.querySelector('.Rehman')


// Select all elements with the class "station"
let station = document.querySelectorAll('.station');
// Shalimar Fares
let acbsh = document.querySelectorAll('.acbsh');
let apsh = document.querySelectorAll('.apsh');
let actsh = document.querySelectorAll('.actsh');
let ebsh = document.querySelectorAll('.ebsh');
let essh = document.querySelectorAll('.essh');
// Karakoram Fares
let acbk = document.querySelectorAll('.acbk');
let apk = document.querySelectorAll('.apk');
let actk = document.querySelectorAll('.actk');
let ebk = document.querySelectorAll('.ebk');
let esk = document.querySelectorAll('.esk');
// Millat Fares
let abm = document.querySelectorAll('.abm') 
let ebm = document.querySelectorAll('.ebm') 
let esm = document.querySelectorAll('.esm')
// Pakistan Fares
let asp = document.querySelectorAll('.asp') 
let ebp = document.querySelectorAll('.ebp') 
let esp = document.querySelectorAll('.esp')
// Rehman baba Fares
let abr = document.querySelectorAll('.abr') 
let asr = document.querySelectorAll('.asr') 
let ebr = document.querySelectorAll('.ebr') 
let esr = document.querySelectorAll('.esr')



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

  // Adding Cities



  if (selectedLi.innerText === "LAHORE JN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "1600";
    })
    apsh.forEach((ele) => {
      ele.textContent = "1400";
    })
    actsh.forEach((ele) => {
      ele.textContent = "1250";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "800";
    })
    essh.forEach((ele) => {
      ele.textContent = "750";
    })

    //  Karakoram
    Karakoram.classList.remove ('hidden');
    acbk.forEach((ele) => {
      ele.textContent = "1800";
    })
    actk.forEach((ele) => {
      ele.textContent = "1400";
    })
    ebk.forEach((ele) => {
      ele.textContent = "1100";
    })
    esk.forEach((ele) => {
      ele.textContent = "1050";
    })
  }

  else if (selectedLi.innerText === "KARACHI CANTT") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "6700";
    })
    apsh.forEach((ele) => {
      ele.textContent = "6450";
    })
    actsh.forEach((ele) => {
      ele.textContent = "5050";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "3000";
    })
    essh.forEach((ele) => {
      ele.textContent = "2900";
    })

    //  Karakoram
    Karakoram.classList.remove ('hidden');
    acbk.forEach((ele) => {
      ele.textContent = "7250";
    })
    actk.forEach((ele) => {
      ele.textContent = "5600";
    })
    ebk.forEach((ele) => {
      ele.textContent = "3700";
    })
    esk.forEach((ele) => {
      ele.textContent = "3600";
    })

    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "6700";
    })
    ebm.forEach((ele) => {
      ele.textContent = "3000";
    })
    esm.forEach((ele) => {
      ele.textContent = "2900";
    })

    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "4800";
    })
    ebp.forEach((ele) => {
      ele.textContent = "2850";
    })
    esp.forEach((ele) => {
      ele.textContent = "2750";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "6350";
    })
    asr.forEach((ele) => {
      ele.textContent = "4800";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2850";
    })
    esr.forEach((ele) => {
      ele.textContent = "2750";
    })
  }
  

  // Ending of cities
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
