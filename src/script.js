jQuery('.Destination').chosen();

const Shalimar = document.querySelector('.shalimar');
const Karakoram = document.querySelector('.kara')
const Millat = document.querySelector('.Millat')
const Pakistan = document.querySelector('.Pakistan')
const Rehman = document.querySelector('.Rehman')
const hide = document.querySelector('.trainhide');
const body = document.querySelector('.body');
const logo =document.querySelector('.logo');


// Select all elements with the class "station"
let station = document.querySelectorAll('.station');
let train = document.querySelectorAll('.train');

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


logo.addEventListener("click",()=>{ 
  Shalimar.classList.add('hidden');
  Karakoram.classList.add('hidden');
  Millat.classList.add('hidden');
  Pakistan.classList.add('hidden');
  Rehman.classList.add('hidden');
  hide.classList.add('hidden');
  selectBtn.firstElementChild.innerText = "Select City";

})

// Store the original text in a data attribute
station.forEach((element) => {
  element.setAttribute("data-original", element.textContent);
});
// train.forEach((element) => {
//   element.setAttribute("data-origin", element.textContent);
// });

// Dropdown and search input functionality
const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");


// List of countries
let countries = ["ABDUL HAKIM", "ALIPUR CHATA", "ATTOCK CITY JN", "BAHAWALPUR", "BANDHI", "BHALWAL", "BHIRIA ROAD", "CHAK JHUMRA JN", "CHAK LALA", "CHANAB NAGAR", "CHILIANWALA", "CHINIOT", "DAUR", "DINA", "DINGA", "DRIGH ROAD", "DUNYA PUR", "FAISALABAD", "GHOTKI", "GOJRA", "GUJAR KHAN", "GUJRAT", "HAFIZABAD", "HYDERABAD JN", "JAHANGIRA ROAD", "JAHANIA", "JHELUM", "KARACHI CANTT", "KHANEWAL JN", "KHANPUR JN", "LAHORE JN", "LAKHA ROAD", "LALA MUSA JN", "LANDHI JN", "LODHRAN JN", "MAHRABPUR", "MALAKAWAL JN", "MANDI BAHA UD DIN", "MULTAN CANTT", "NAWABSHAH JN", "NOWSHERA JN", "PADIDAN", "PANO AKIL", "PESHAWAR CANTT", "PESHAWAR CITY", "PHULARWAN", "RAHIM YAR KHAN", "RAWALPINDI", "ROHRI JN", "SADIKABAD", "SAMASATA JN", "SANGLA HILL", "SARGODHA JN", "SETHARJA", "SHAHDADPUR", "SHAHINABAD JN", "SHORKOT CANTT JN", "SUKHEKE", "TANDO ADAM", "WAZIRABAD JN"

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

  function trackRemoveHidden(block) {
    // Initialize a local counter
    let removeHiddenCount = 0;

    // Create a proxy for classList.remove
    const originalRemove = DOMTokenList.prototype.remove;
    DOMTokenList.prototype.remove = function (...tokens) {
      if (tokens.includes('hidden')) {
        removeHiddenCount++;
      }
      return originalRemove.apply(this, tokens);
    };

    // Execute the block of code while tracking
    block();

    // Restore the original method
    DOMTokenList.prototype.remove = originalRemove;

    // Return the count
    return removeHiddenCount;
  }
  hide.classList.remove('hidden');
  body.classList.remove('overflow-hidden');


  // Adding Cities

  
  if (selectedLi.innerText === "LAHORE JN") {
    Millat.classList.add('hidden');
    Pakistan.classList.add('hidden');
    Rehman.classList.add('hidden');
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "KARACHI CANTT") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "5050";
      })
      ebp.forEach((ele) => {
        ele.textContent = "3000";
      })
      esp.forEach((ele) => {
        ele.textContent = "2900";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "6700";
      })
      asr.forEach((ele) => {
        ele.textContent = "5050";
      })
      ebr.forEach((ele) => {
        ele.textContent = "3000";
      })
      esr.forEach((ele) => {
        ele.textContent = "2900";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "DRIGH ROAD") {


    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "5050";
      })
      ebp.forEach((ele) => {
        ele.textContent = "3000";
      })
      esp.forEach((ele) => {
        ele.textContent = "2900";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "6700";
      })
      asr.forEach((ele) => {
        ele.textContent = "5050";
      })
      ebr.forEach((ele) => {
        ele.textContent = "3000";
      })
      esr.forEach((ele) => {
        ele.textContent = "2900";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })

  }
  else if (selectedLi.innerText === "LANDHI JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "4950";
      })
      ebp.forEach((ele) => {
        ele.textContent = "3000";
      })
      esp.forEach((ele) => {
        ele.textContent = "2900";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "6700";
      })
      asr.forEach((ele) => {
        ele.textContent = "4950";
      })
      ebr.forEach((ele) => {
        ele.textContent = "3000";
      })
      esr.forEach((ele) => {
        ele.textContent = "2900";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "HYDERABAD JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "4050";
      })
      ebp.forEach((ele) => {
        ele.textContent = "2350";
      })
      esp.forEach((ele) => {
        ele.textContent = "2250";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5600";
      })
      asr.forEach((ele) => {
        ele.textContent = "4050";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2350";
      })
      esr.forEach((ele) => {
        ele.textContent = "2250";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "TANDO ADAM") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');
      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "3950";
      })
      ebp.forEach((ele) => {
        ele.textContent = "2350";
      })
      esp.forEach((ele) => {
        ele.textContent = "2250";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5600";
      })
      asr.forEach((ele) => {
        ele.textContent = "3950";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2350";
      })
      esr.forEach((ele) => {
        ele.textContent = "2250";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SHAHDADPUR") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');
      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.add('hidden');
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })

  }
  else if (selectedLi.innerText === "NAWABSHAH JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5000";
      })
      asr.forEach((ele) => {
        ele.textContent = "3800";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2150";
      })
      esr.forEach((ele) => {
        ele.textContent = "2050";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "DAUR") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5000";
      })
      asr.forEach((ele) => {
        ele.textContent = "3800";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2150";
      })
      esr.forEach((ele) => {
        ele.textContent = "2050";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "PADIDAN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');


      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "3750";
      })
      ebp.forEach((ele) => {
        ele.textContent = "2150";
      })
      esp.forEach((ele) => {
        ele.textContent = "2050";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5000";
      })
      asr.forEach((ele) => {
        ele.textContent = "3750";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2150";
      })
      esr.forEach((ele) => {
        ele.textContent = "2050";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "BANDHI") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "5000";
      })
      ebm.forEach((ele) => {
        ele.textContent = "2150";
      })
      esm.forEach((ele) => {
        ele.textContent = "2050";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "BHIRIA ROAD") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "5000";
      })
      asr.forEach((ele) => {
        ele.textContent = "3750";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2100";
      })
      esr.forEach((ele) => {
        ele.textContent = "2000";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "LAKHA ROAD") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "4600";
      })
      asr.forEach((ele) => {
        ele.textContent = "3750";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2100";
      })
      esr.forEach((ele) => {
        ele.textContent = "2000";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "MAHRABPUR") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "4600";
      })
      asr.forEach((ele) => {
        ele.textContent = "3700";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2100";
      })
      esr.forEach((ele) => {
        ele.textContent = "2000";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SETHARJA") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "4600";
      })
      asr.forEach((ele) => {
        ele.textContent = "3500";
      })
      ebr.forEach((ele) => {
        ele.textContent = "2050";
      })
      esr.forEach((ele) => {
        ele.textContent = "1950";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "ROHRI JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.remove('hidden');
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
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2950";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1950";
      })
      esp.forEach((ele) => {
        ele.textContent = "1850";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "2950";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1950";
      })
      esr.forEach((ele) => {
        ele.textContent = "1850";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "PANO AKIL") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "2900";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1950";
      })
      esr.forEach((ele) => {
        ele.textContent = "1850";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "GHOTKI") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2900";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1900";
      })
      esp.forEach((ele) => {
        ele.textContent = "1800";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "2900";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1900";
      })
      esr.forEach((ele) => {
        ele.textContent = "1800";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SADIKABAD") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');


      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2150";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1400";
      })
      esp.forEach((ele) => {
        ele.textContent = "1350";
      })

      //  Rehman Baba
      Rehman.classList.add('hidden');
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "RAHIM YAR KHAN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
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
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
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
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2150";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1400";
      })
      esp.forEach((ele) => {
        ele.textContent = "1350";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3050";
      })
      asr.forEach((ele) => {
        ele.textContent = "2150";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1400";
      })
      esr.forEach((ele) => {
        ele.textContent = "1350";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })

  }
  else if (selectedLi.innerText === "KHANPUR JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        ele.textContent = "2800";
      })
      apsh.forEach((ele) => {
        ele.textContent = "2450";
      })
      actsh.forEach((ele) => {
        ele.textContent = "2050";
      })
      ebsh.forEach((ele) => {
        ele.textContent = "1200";
      })
      essh.forEach((ele) => {
        ele.textContent = "1150";
      })

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "2800";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1200";
      })
      esm.forEach((ele) => {
        ele.textContent = "1150";
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2050";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1200";
      })
      esp.forEach((ele) => {
        ele.textContent = "1150";
      })

      //  Rehman Baba
      Rehman.classList.add('hidden');

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })

  }
  else if (selectedLi.innerText === "SAMASATA JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.add('hidden');

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');
      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "2050";
      })
      asr.forEach((ele) => {
        ele.textContent = "1600";
      })
      ebr.forEach((ele) => {
        ele.textContent = "950";
      })
      esr.forEach((ele) => {
        ele.textContent = "1000";
      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })

  }
  else if (selectedLi.innerText === "BAHAWALPUR") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        ele.textContent = "1600";
      })
      apsh.forEach((ele) => {
        ele.textContent = "1600";
      })
      actsh.forEach((ele) => {
        ele.textContent = "1400";
      })
      ebsh.forEach((ele) => {
        ele.textContent = "1000";
      })
      essh.forEach((ele) => {
        ele.textContent = "950";
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ele.textContent = "2450";
      })
      actk.forEach((ele) => {
        ele.textContent = "1500";
      })
      ebk.forEach((ele) => {
        ele.textContent = "1250";
      })
      esk.forEach((ele) => {
        ele.textContent = "1200";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "2000";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1000";
      })
      esm.forEach((ele) => {
        ele.textContent = "950";
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1400";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1000";
      })
      esp.forEach((ele) => {
        ele.textContent = "950";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1600";
      })
      asr.forEach((ele) => {
        ele.textContent = "1400";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1000";
      })
      esr.forEach((ele) => {
        ele.textContent = "950";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "LODHRAN JN") {
    const count = trackRemoveHidden(() => {
      //  Pakistan
      Pakistan.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');



      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "1600";
      })
      ebm.forEach((ele) => {
        ele.textContent = "800";
      })
      esm.forEach((ele) => {
        ele.textContent = "750";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "DUNYA PUR") {
    const count = trackRemoveHidden(() => {
      //  Pakistan
      Pakistan.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');



      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "1200";
      })
      ebm.forEach((ele) => {
        ele.textContent = "550";
      })
      esm.forEach((ele) => {
        ele.textContent = "500";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "JAHANIA") {
    const count = trackRemoveHidden(() => {
      //  Pakistan
      Pakistan.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');



      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "1050";
      })
      ebm.forEach((ele) => {
        ele.textContent = "400";
      })
      esm.forEach((ele) => {
        ele.textContent = "350";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "MULTAN CANTT") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        ele.textContent = "1050";
      })
      apsh.forEach((ele) => {
        ele.textContent = "850";
      })
      actsh.forEach((ele) => {
        ele.textContent = "700";
      })
      ebsh.forEach((ele) => {
        ele.textContent = "500";
      })
      essh.forEach((ele) => {
        ele.textContent = "450";
      })

      //  Karakoram
      Karakoram.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "700";
      })
      ebp.forEach((ele) => {
        ele.textContent = "500";
      })
      esp.forEach((ele) => {
        ele.textContent = "450";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1050";
      })
      asr.forEach((ele) => {
        ele.textContent = "700";
      })
      ebr.forEach((ele) => {
        ele.textContent = "500";
      })
      esr.forEach((ele) => {
        ele.textContent = "450";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "KHANEWAL JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        ele.textContent = "700";
      })
      apsh.forEach((ele) => {
        ele.textContent = "600";
      })
      actsh.forEach((ele) => {
        ele.textContent = "500";
      })
      ebsh.forEach((ele) => {
        ele.textContent = "350";
      })
      essh.forEach((ele) => {
        ele.textContent = "300";
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ele.textContent = "900";
      })
      actk.forEach((ele) => {
        ele.textContent = "600";
      })
      ebk.forEach((ele) => {
        ele.textContent = "400";
      })
      esk.forEach((ele) => {
        ele.textContent = "350";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "700";
      })
      ebm.forEach((ele) => {
        ele.textContent = "350";
      })
      esm.forEach((ele) => {
        ele.textContent = "300";
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "500";
      })
      ebp.forEach((ele) => {
        ele.textContent = "350";
      })
      esp.forEach((ele) => {
        ele.textContent = "300";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "700";
      })
      asr.forEach((ele) => {
        ele.textContent = "500";
      })
      ebr.forEach((ele) => {
        ele.textContent = "350";
      })
      esr.forEach((ele) => {
        ele.textContent = "300";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "ABDUL HAKIM") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "400";
      })
      ebp.forEach((ele) => {
        ele.textContent = "250";
      })
      esp.forEach((ele) => {
        ele.textContent = "200";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "700";
      })
      ebm.forEach((ele) => {
        ele.textContent = "250";
      })
      esm.forEach((ele) => {
        ele.textContent = "200";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SHORKOT CANTT JN") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "300";
      })
      ebp.forEach((ele) => {
        ele.textContent = "150";
      })
      esp.forEach((ele) => {
        ele.textContent = "100";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "600";
      })
      ebm.forEach((ele) => {
        ele.textContent = "150";
      })
      esm.forEach((ele) => {
        ele.textContent = "100";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "GOJRA") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "300";
      })
      ebp.forEach((ele) => {
        ele.textContent = "150";
      })
      esp.forEach((ele) => {
        ele.textContent = "100";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "600";
      })
      ebm.forEach((ele) => {
        ele.textContent = "150";
      })
      esm.forEach((ele) => {
        ele.textContent = "100";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "FAISALABAD") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        ele.textContent = "700";
      })
      apsh.forEach((ele) => {
        ele.textContent = "600";
      })
      actsh.forEach((ele) => {
        ele.textContent = "400";
      })
      ebsh.forEach((ele) => {
        ele.textContent = "300";
      })
      essh.forEach((ele) => {
        ele.textContent = "250";
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ele.textContent = "900";
      })
      actk.forEach((ele) => {
        ele.textContent = "500";
      })
      ebk.forEach((ele) => {
        ele.textContent = "350";
      })
      esk.forEach((ele) => {
        ele.textContent = "300";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "700";
      })
      ebm.forEach((ele) => {
        ele.textContent = "300";
      })
      esm.forEach((ele) => {
        ele.textContent = "250";
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "400";
      })
      ebp.forEach((ele) => {
        ele.textContent = "300";
      })
      esp.forEach((ele) => {
        ele.textContent = "250";
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "700";
      })
      asr.forEach((ele) => {
        ele.textContent = "400";
      })
      ebr.forEach((ele) => {
        ele.textContent = "300";
      })
      esr.forEach((ele) => {
        ele.textContent = "250";
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "CHAK JHUMRA JN") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "500";
      })
      ebp.forEach((ele) => {
        ele.textContent = "350";
      })
      esp.forEach((ele) => {
        ele.textContent = "300";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "350";
      })
      esm.forEach((ele) => {
        ele.textContent = "300";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SANGLA HILL") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "700";
      })
      ebp.forEach((ele) => {
        ele.textContent = "400";
      })
      esp.forEach((ele) => {
        ele.textContent = "350";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1050";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "400";
      })
      esr.forEach((ele) => {
        ele.textContent = "350";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SUKHEKE") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "700";
      })
      ebp.forEach((ele) => {
        ele.textContent = "500";
      })
      esp.forEach((ele) => {
        ele.textContent = "450";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "HAFIZABAD") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "850";
      })
      ebp.forEach((ele) => {
        ele.textContent = "650";
      })
      esp.forEach((ele) => {
        ele.textContent = "600";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1200";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "650";
      })
      esr.forEach((ele) => {
        ele.textContent = "600";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "ALIPUR CHATA") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1050";
      })
      ebp.forEach((ele) => {
        ele.textContent = "750";
      })
      esp.forEach((ele) => {
        ele.textContent = "700";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1400";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "750";
      })
      esr.forEach((ele) => {
        ele.textContent = "700";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "WAZIRABAD JN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1350";
      })
      ebp.forEach((ele) => {
        ele.textContent = "800";
      })
      esp.forEach((ele) => {
        ele.textContent = "750";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "1600";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "800";
      })
      esr.forEach((ele) => {
        ele.textContent = "750";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "GUJRAT") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1400";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1000";
      })
      esp.forEach((ele) => {
        ele.textContent = "950";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "LALA MUSA JN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1600";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1000";
      })
      esp.forEach((ele) => {
        ele.textContent = "950";
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1200";
      })
      esm.forEach((ele) => {
        ele.textContent = "1150";
      })
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "2050";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1000";
      })
      esr.forEach((ele) => {
        ele.textContent = "950";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "JHELUM") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1700";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1150";
      })
      esp.forEach((ele) => {
        ele.textContent = "1100";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "DINA") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1800";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1150";
      })
      esp.forEach((ele) => {
        ele.textContent = "1100";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "GUJAR KHAN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "1850";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1200";
      })
      esp.forEach((ele) => {
        ele.textContent = "1150";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "CHAK LALA") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2150";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1400";
      })
      esp.forEach((ele) => {
        ele.textContent = "1350";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "RAWALPINDI") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        ele.textContent = "2150";
      })
      ebp.forEach((ele) => {
        ele.textContent = "1400";
      })
      esp.forEach((ele) => {
        ele.textContent = "1350";
      })

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3050";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1400";
      })
      esr.forEach((ele) => {
        ele.textContent = "1350";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "ATTOCK CITY JN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1900";
      })
      esr.forEach((ele) => {
        ele.textContent = "1800";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "JAHANGIRA ROAD") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1900";
      })
      esr.forEach((ele) => {
        ele.textContent = "1800";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "NOWSHERA JN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1900";
      })
      esr.forEach((ele) => {
        ele.textContent = "1800";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "PESHAWAR CITY") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1950";
      })
      esr.forEach((ele) => {
        ele.textContent = "1850";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "PESHAWAR CANTT") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');
      
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        ele.textContent = "3900";
      })
      asr.forEach((ele) => {
        ele.textContent = "-";
      })
      ebr.forEach((ele) => {
        ele.textContent = "1950";
      })
      esr.forEach((ele) => {
        ele.textContent = "1850";

      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "CHINIOT") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "400";
      })
      esm.forEach((ele) => {
        ele.textContent = "350";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "CHANAB NAGAR") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "450";
      })
      esm.forEach((ele) => {
        ele.textContent = "400";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SHAHINABAD JN") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "600";
      })
      esm.forEach((ele) => {
        ele.textContent = "550";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "SARGODHA JN") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "700";
      })
      esm.forEach((ele) => {
        ele.textContent = "650";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "BHALWAL") {
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "800";
      })
      esm.forEach((ele) => {
        ele.textContent = "750";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "PHULARWAN") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "800";
      })
      esm.forEach((ele) => {
        ele.textContent = "750";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "MALAKAWAL JN") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1000";
      })
      esm.forEach((ele) => {
        ele.textContent = "950";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "MANDI BAHA UD DIN") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1150";
      })
      esm.forEach((ele) => {
        ele.textContent = "1100";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "CHILIANWALA") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1150";
      })
      esm.forEach((ele) => {
        ele.textContent = "1100";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
    })
  }
  else if (selectedLi.innerText === "DINGA") { 
    const count = trackRemoveHidden(() => {

      //  Rehman Baba
      Rehman.classList.add('hidden');
      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        ele.textContent = "-";
      })
      ebm.forEach((ele) => {
        ele.textContent = "1150";
      })
      esm.forEach((ele) => {
        ele.textContent = "1100";
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Trains Found---)`;
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
    : `<p>Oops! City not found</p>`;
});

// Toggle dropdown visibility
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
