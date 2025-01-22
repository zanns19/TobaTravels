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
    Millat.classList.add('hidden');
    Pakistan.classList.add('hidden');
    Rehman.classList.add('hidden');
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


  else if (selectedLi.innerText === "DRIGH ROAD") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "6700";
    })
    apsh.forEach((ele) => {
      ele.textContent = "6350";
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
  else if (selectedLi.innerText === "LANDHI JN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "6700";
    })
    apsh.forEach((ele) => {
      ele.textContent = "6300";
    })
    actsh.forEach((ele) => {
      ele.textContent = "4950";
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
      ele.textContent = "4700";
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
      ele.textContent = "4700";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2850";
    })
    esr.forEach((ele) => {
      ele.textContent = "2750";
    })
  }
  else if (selectedLi.innerText === "HYDERABAD JN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "5600";
    })
    apsh.forEach((ele) => {
      ele.textContent = "5150";
    })
    actsh.forEach((ele) => {
      ele.textContent = "4050";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "2350";
    })
    essh.forEach((ele) => {
      ele.textContent = "2250";
    })

    //  Karakoram
    Karakoram.classList.remove ('hidden');
    acbk.forEach((ele) => {
      ele.textContent = "5950";
    })
    actk.forEach((ele) => {
      ele.textContent = "4750";
    })
    ebk.forEach((ele) => {
      ele.textContent = "3100";
    })
    esk.forEach((ele) => {
      ele.textContent = "3000";
    })

    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "5600";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2350";
    })
    esm.forEach((ele) => {
      ele.textContent = "2250";
    })

    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "3850";
    })
    ebp.forEach((ele) => {
      ele.textContent = "2250";
    })
    esp.forEach((ele) => {
      ele.textContent = "2150";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "3850";
    })
    asr.forEach((ele) => {
      ele.textContent = "5300";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2250";
    })
    esr.forEach((ele) => {
      ele.textContent = "2150";
    })
  }
  else if (selectedLi.innerText === "TANDO ADAM") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "3750";
    })
    ebp.forEach((ele) => {
      ele.textContent = "2250";
    })
    esp.forEach((ele) => {
      ele.textContent = "2150";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "5300";
    })
    asr.forEach((ele) => {
      ele.textContent = "3750";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2250";
    })
    esr.forEach((ele) => {
      ele.textContent = "2150";
    })
  }
  else if (selectedLi.innerText === "SHAHDADPUR") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "5600";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2350";
    })
    esm.forEach((ele) => {
      ele.textContent = "2250";
    })
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
   //  Rehman Baba
    Rehman.classList.add ('hidden');
    
  }
  else if (selectedLi.innerText === "NAWABSHAH JN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "5000";
    })
    apsh.forEach((ele) => {
      ele.textContent = "4650";
    })
    actsh.forEach((ele) => {
      ele.textContent = "3800";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "2150";
    })
    essh.forEach((ele) => {
      ele.textContent = "2050";
    })
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "5000";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2150";
    })
    esm.forEach((ele) => {
      ele.textContent = "2050";
    })
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4750";
    })
    asr.forEach((ele) => {
      ele.textContent = "3600";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2050";
    })
    esr.forEach((ele) => {
      ele.textContent = "1950";
    })
  }
  else if (selectedLi.innerText === "DAUR") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "5000";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2150";
    })
    esm.forEach((ele) => {
      ele.textContent = "2050";
    })
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4750";
    })
    asr.forEach((ele) => {
      ele.textContent = "3600";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2050";
    })
    esr.forEach((ele) => {
      ele.textContent = "1950";
    })
  }
  else if (selectedLi.innerText === "PADIDAN") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    
    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "3550";
    })
    ebp.forEach((ele) => {
      ele.textContent = "2050";
    })
    esp.forEach((ele) => {
      ele.textContent = "1950";
    })
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4750";
    })
    asr.forEach((ele) => {
      ele.textContent = "3550";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2050";
    })
    esr.forEach((ele) => {
      ele.textContent = "1950";
    })
  }
  else if (selectedLi.innerText === "BHIRIA ROAD") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "5000";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2100";
    })
    esm.forEach((ele) => {
      ele.textContent = "2000";
    })
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4750";
    })
    asr.forEach((ele) => {
      ele.textContent = "3550";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2000";
    })
    esr.forEach((ele) => {
      ele.textContent = "1900";
    })
  }
  else if (selectedLi.innerText === "LAKHA ROAD") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4350";
    })
    asr.forEach((ele) => {
      ele.textContent = "3350";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2000";
    })
    esr.forEach((ele) => {
      ele.textContent = "1900";
    })
  }
  else if (selectedLi.innerText === "MAHRABPUR") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "4600";
    })
    ebm.forEach((ele) => {
      ele.textContent = "2100";
    })
    esm.forEach((ele) => {
      ele.textContent = "2000";
    })
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4350";
    })
    asr.forEach((ele) => {
      ele.textContent = "3500";
    })
    ebr.forEach((ele) => {
      ele.textContent = "2000";
    })
    esr.forEach((ele) => {
      ele.textContent = "1900";
    })
  }
  else if (selectedLi.innerText === "SETHARJA") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "4350";
    })
    asr.forEach((ele) => {
      ele.textContent = "3350";
    })
    ebr.forEach((ele) => {
      ele.textContent = "1950";
    })
    esr.forEach((ele) => {
      ele.textContent = "1850";
    })
  }
  else if (selectedLi.innerText === "ROHRI JN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "3900";
    })
    apsh.forEach((ele) => {
      ele.textContent = "3300";
    })
    actsh.forEach((ele) => {
      ele.textContent = "2950";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "1950";
    })
    essh.forEach((ele) => {
      ele.textContent = "1850";
    })

    //  Karakoram
    Karakoram.classList.remove ('hidden');
    acbk.forEach((ele) => {
      ele.textContent = "4200";
    })
    actk.forEach((ele) => {
      ele.textContent = "3500";
    })
    ebk.forEach((ele) => {
      ele.textContent = "2350";
    })
    esk.forEach((ele) => {
      ele.textContent = "2250";
    })

    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "3900";
    })
    ebm.forEach((ele) => {
      ele.textContent = "1950";
    })
    esm.forEach((ele) => {
      ele.textContent = "1850";
    })

    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "2800";
    })
    ebp.forEach((ele) => {
      ele.textContent = "1850";
    })
    esp.forEach((ele) => {
      ele.textContent = "1750";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "3700";
    })
    asr.forEach((ele) => {
      ele.textContent = "2800";
    })
    ebr.forEach((ele) => {
      ele.textContent = "1850";
    })
    esr.forEach((ele) => {
      ele.textContent = "1750";
    })
  }
  else if (selectedLi.innerText === "PANO AKIL") {
    // Shalimar
    Shalimar.classList.add ('hidden');
    
    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    //  Pakistan
    Pakistan.classList.add ('hidden');
    
    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "3700";
    })
    asr.forEach((ele) => {
      ele.textContent = "2750";
    })
    ebr.forEach((ele) => {
      ele.textContent = "1850";
    })
    esr.forEach((ele) => {
      ele.textContent = "1750";
    })
  }
  else if (selectedLi.innerText === "GHOTKI") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
   acbsh.forEach((ele) => {
      ele.textContent = "3900";
    })
    apsh.forEach((ele) => {
      ele.textContent = "3100";
    })
    actsh.forEach((ele) => {
      ele.textContent = "2900";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "1900";
    })
    essh.forEach((ele) => {
      ele.textContent = "1800";
    })

    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.add ('hidden');
    
    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "2750";
    })
    ebp.forEach((ele) => {
      ele.textContent = "1800";
    })
    esp.forEach((ele) => {
      ele.textContent = "1700";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "3700";
    })
    asr.forEach((ele) => {
      ele.textContent = "2750";
    })
    ebr.forEach((ele) => {
      ele.textContent = "1800";
    })
    esr.forEach((ele) => {
      ele.textContent = "1700";
    })
  }
  else if (selectedLi.innerText === "SADIKABAD") {
    // Shalimar
    Shalimar.classList.add ('hidden');
   

    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "3050";
    })
    ebm.forEach((ele) => {
      ele.textContent = "1400";
    })
    esm.forEach((ele) => {
      ele.textContent = "1350";
    })
    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "2050";
    })
    ebp.forEach((ele) => {
      ele.textContent = "1350";
    })
    esp.forEach((ele) => {
      ele.textContent = "1300";
    })

    //  Rehman Baba
    Rehman.classList.add ('hidden');
    
  }
  else if (selectedLi.innerText === "RAHIM YAR KHAN") {
    // Shalimar
    Shalimar.classList.remove ('hidden');
    acbsh.forEach((ele) => {
      ele.textContent = "3050";
    })
    apsh.forEach((ele) => {
      ele.textContent = "2600";
    })
    actsh.forEach((ele) => {
      ele.textContent = "2150";
    })
    ebsh.forEach((ele) => {
      ele.textContent = "1400";
    })
    essh.forEach((ele) => {
      ele.textContent = "1350";
    })

    //  Karakoram
    Karakoram.classList.add ('hidden');
    //  MILLAT
    Millat.classList.remove ('hidden');
    abm.forEach((ele) => {
      ele.textContent = "3050";
    })
    ebm.forEach((ele) => {
      ele.textContent = "1400";
    })
    esm.forEach((ele) => {
      ele.textContent = "1350";
    })
    //  Pakistan
    Pakistan.classList.remove ('hidden');
    
    asp.forEach((ele) => {
      ele.textContent = "2050";
    })
    ebp.forEach((ele) => {
      ele.textContent = "1350";
    })
    esp.forEach((ele) => {
      ele.textContent = "1300";
    })

    //  Rehman Baba
    Rehman.classList.remove ('hidden');
    abr.forEach((ele) => {
      ele.textContent = "2900";
    })
    asr.forEach((ele) => {
      ele.textContent = "2050";
    })
    ebr.forEach((ele) => {
      ele.textContent = "1350";
    })
    esr.forEach((ele) => {
      ele.textContent = "1300";
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
