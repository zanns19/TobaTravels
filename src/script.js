jQuery('.Destination').chosen();

const Shalimar = document.querySelector('.shalimar');
const Karakoram = document.querySelector('.kara')
const Millat = document.querySelector('.Millat')
const Pakistan = document.querySelector('.Pakistan')
const Rehman = document.querySelector('.Rehman')
const hide = document.querySelector('.trainhide');
const body = document.querySelector('.body');
const logo = document.querySelector('.logo');


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


logo.addEventListener("click", () => {
  Shalimar.classList.add('hidden');
  Karakoram.classList.add('hidden');
  Millat.classList.add('hidden');
  Pakistan.classList.add('hidden');
  Rehman.classList.add('hidden');
  hide.classList.add('hidden');
  body.classList.add('overflow-hidden');
  selectBtn.firstElementChild.innerText = "Select City";

})


// utillity Fn
function roundFare(fare) {

  
  const remainder = fare % 100;
  if (remainder === 0) return fare; // If already a multiple of 100
  if (remainder <= 25) return Math.floor(fare / 50) * 50; // Round down to nearest 50 if remainder <= 25
  if (remainder < 75) return Math.floor(fare / 100) * 100 + 50; // Round to nearest 50 if 25 < remainder <= 75
  return Math.ceil(fare / 100) * 100; // Round up to the next 100 if remainder > 75
}

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

  // Declaring Fares Variable

  // Shalimar 
  let fsh;
  let fsh1;
  let fsh2;
  let fsh3;
  let fsh4;
  //  Karakoram
  let ksh;
  let ksh1;
  let ksh2;
  let ksh3;
  // Millat 
  let msh;
  let msh1;
  let msh2;
  // Pakistan
  let psh;
  let psh1;
  let psh2;
  // Rehman 
  let rsh;
  let rsh1;
  let rsh2;
  let rsh3;





  // Adding Cities


  if (selectedLi.innerText === "LAHORE JN") {
    Millat.classList.add('hidden');
    Pakistan.classList.add('hidden');
    Rehman.classList.add('hidden');
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "1600"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "1400"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "1250"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "800"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "750"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "1800"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "1400"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2= "1100"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "1050"
        ele.textContent = ksh3;
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
        fsh = "6700"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "6450"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "5050"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "3000"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "2900"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "7250"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "5600"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "3700"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "3600"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "6700";
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "3000"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2900"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "5050"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "3000"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2900"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "6700"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "5050"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "3000"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2900"
        ele.textContent = rsh3;
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
        fsh = "6700"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "6350"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "5050"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "3000"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "2900"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "7250"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "5600"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "3700"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "3600"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "6700";
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "3000"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2900"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "5050"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "3000"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2900"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "6700"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "5050"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "3000"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2900"
        ele.textContent = rsh3;
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
        fsh = "6700"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "6300"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "4950"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "3000"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "2900"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "7250"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "5600"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "3700"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "3600"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "6700";
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "3000"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2900"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "4950"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "3000"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2900"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "6700"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "4950"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "3000"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2900"
        ele.textContent = rsh3;
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
        fsh = "5600"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "5150"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "4050"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "2350"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "2250"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "5950"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "4750"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "3100"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "3000"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "5600";
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2350"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2250"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "4050"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "2350"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2250"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "4050"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2350"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2250"
        ele.textContent = rsh3;
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
        psh = "3950"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "2350"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2250"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3950"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2350"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2250"
        ele.textContent = rsh3;
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
        msh = "5600"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2350"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2250"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.add('hidden');
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })

  }
  else if (selectedLi.innerText === "NAWABSHAH JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "5000"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "4650"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "3800"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "2150"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "2050"
        ele.textContent = fsh4;
      })
      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "5000"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2050"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5000"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3800"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2150"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2050"
        ele.textContent = rsh3;
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
        msh = "5000"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2050"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5000"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3800"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2150"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2050"
        ele.textContent = rsh3;
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
        psh = "3750"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "2150"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "2050"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5000"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3750"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2150"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2050"
        ele.textContent = rsh3;
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
        msh = "5000"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2050"
        ele.textContent = msh2;
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "5000"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2100"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2000"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "5000"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3750"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2100"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2000"
        ele.textContent = rsh3;
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
        rsh = "4600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3750"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2100"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2000"
        ele.textContent = rsh3;
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "4600"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "2100"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "2000"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "4600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3700"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2100"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "2000"
        ele.textContent = rsh3;
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
        rsh = "4600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "3500"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "2050"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1950"
        ele.textContent = rsh3;
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })
  }
  else if (selectedLi.innerText === "ROHRI JN") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "3900"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "3300"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "2950"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "1950"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "1850"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "4200"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "3501"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "2350"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "2250"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "3900"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1950"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1850"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "2950"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1950"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "1850"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "3900"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "2950"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "1950"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1850"
        ele.textContent = rsh3;
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
        rsh = "3900"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "2900"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "1950"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1850"
        ele.textContent = rsh3;
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })
  }
  else if (selectedLi.innerText === "GHOTKI") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "3900"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "3100"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "2900"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "1900"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "1800"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "2900"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1900"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "1800"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "3900"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "2900"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "1900"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1800"
        ele.textContent = rsh3;
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
        msh = "3050"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1400"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1350"
        ele.textContent = msh2;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "2150"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1400"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "1350"
        ele.textContent = psh2;
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
        fsh = "3050"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "2600"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "2150"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "1400"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "1350"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "3050"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1400"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1350"
        ele.textContent = msh2;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "2150"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1400"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "1350"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "3050"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "2150"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "1400"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1350"
        ele.textContent = rsh3;
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
        fsh = "2800"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "2450"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "2050"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "1200"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "1150"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.add('hidden');
      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "2800"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1200"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1150"
        ele.textContent = msh2;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "2050"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1200"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "1150"
        ele.textContent = psh2;
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
        rsh = "2050"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "1600"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "950"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "1000"
        ele.textContent = rsh3;
      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })

  }
  else if (selectedLi.innerText === "BAHAWALPUR") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "1600"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "1600"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "1400"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "1000"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "950"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "2450"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "1500"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "1250"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "1200"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "2000"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1000"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "950"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "1400"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "1000"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "950"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "1600"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "1400"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "1000"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "950"
        ele.textContent = rsh3;
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
        msh = "1600"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "800"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "750"
        ele.textContent = msh2;
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "1200"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "550"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "500"
        ele.textContent = msh2;
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "1050"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "400"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "350"
        ele.textContent = msh2;
      })


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })
  }
  else if (selectedLi.innerText === "MULTAN CANTT") {
    const count = trackRemoveHidden(() => {
      // Shalimar
      Shalimar.classList.remove('hidden');
      acbsh.forEach((ele) => {
        fsh = "1050"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "850"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "700"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "500"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "450"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.add('hidden');

      //  MILLAT
      Millat.classList.add('hidden');

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "700"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "500"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "450"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "1050"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "700"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "500"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "450"
        ele.textContent = rsh3;
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
        fsh = "700"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "600"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "500"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "350"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "300"
        ele.textContent = fsh4;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "900"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "600"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "400"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "350"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "700"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "350"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "300"
        ele.textContent = msh2;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "500"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "350"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "300"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "700"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "500"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "350"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "300"
        ele.textContent = rsh3;
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
        psh = "400"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "250"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "200"
        ele.textContent = psh2;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "700"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "250"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "200"
        ele.textContent = msh2;
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
        psh = "300"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "150"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "100"
        ele.textContent = psh2;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "600"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "100"
        ele.textContent = msh2;
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
        psh = "300"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "150"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "100"
        ele.textContent = psh2;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "600"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "100"
        ele.textContent = msh2;
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
        fsh = "700"
        ele.textContent = fsh;
      })
      apsh.forEach((ele) => {
        fsh1 = "600"
        ele.textContent = fsh1;
      })
      actsh.forEach((ele) => {
        fsh2 = "400"
        ele.textContent = fsh2;
      })
      ebsh.forEach((ele) => {
        fsh3 = "300"
        ele.textContent = fsh3;
      })
      essh.forEach((ele) => {
        fsh4 = "250"
        ele.textContent = fsh4;
      })
      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh = "900"
        ele.textContent = ksh;
      })
      actk.forEach((ele) => {
        ksh1 = "500"
        ele.textContent = ksh1;
      })
      ebk.forEach((ele) => {
        ksh2 = "350"
        ele.textContent = ksh2;
      })
      esk.forEach((ele) => {
        ksh3 = "300"
        ele.textContent = ksh3;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "700"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "300"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "250"
        ele.textContent = msh2;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "400"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "300"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "250"
        ele.textContent = psh2;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "700"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "400"
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "300"
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "250"
        ele.textContent = rsh3;
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
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "350"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "300"
        ele.textContent = msh2;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh = "501"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "350"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "300"
        ele.textContent = psh2;
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
        psh = "700"
        ele.textContent = psh;
      })
      ebp.forEach((ele) => {
        psh1 = "400"
        ele.textContent = psh1;
      })
      esp.forEach((ele) => {
        psh2 = "350"
        ele.textContent = psh2;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh = "1050"
        ele.textContent = rsh;
      })
      asr.forEach((ele) => {
        rsh1 = "-";
        ele.textContent = rsh1;
      })
      ebr.forEach((ele) => {
        rsh2 = "400";
        ele.textContent = rsh2;
      })
      esr.forEach((ele) => {
        rsh3 = "350";
        ele.textContent = rsh3;

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
        psh="700"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="500"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="450"
        ele.textContent =psh2 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        psh="850"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="650"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="600"
        ele.textContent =psh2 ;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="1200"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="650"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="600"
        ele.textContent =rsh3 ;
      })
     
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
    
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
        psh="1050"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="750"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="700"
        ele.textContent =psh2 ;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="1400"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="750"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="700"
        ele.textContent =rsh3 ;
      })
    
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
     
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
        psh="1350"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="800"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="750"
        ele.textContent =psh2 ;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="1600"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        
        ele.textContent ="-" ;
      })
      ebr.forEach((ele) => {
        rsh2="800"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="750"
        ele.textContent =rsh3 ;
      })
     
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
    
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
        psh="1400"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1000"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="950"
        ele.textContent =psh2 ;
      })

      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })
  }
  else if (selectedLi.innerText === "LALA MUSA JN") {
    const count = trackRemoveHidden(() => {


      // Shalimar
      Shalimar.classList.add('hidden');
      // Karakoram
      Karakoram.classList.add('hidden');

      //  Pakistan
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh="-"
        ele.textContent =msh ;
      })
      ebm.forEach((ele) => {
        msh1="1200"
        ele.textContent =msh1 ;
      })
      esm.forEach((ele) => {
        msh2="1150"
        ele.textContent =msh2 ;
      })
      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh="1600"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1000"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="950"
        ele.textContent =psh2 ;
      })

     //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="2050"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-";

        ele.textContent =rsh1       })
      ebr.forEach((ele) => {
        rsh2="1000"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="950"
        ele.textContent =rsh3 ;

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
        psh="1700"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1150"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1100"
        ele.textContent =psh2 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        psh="1800"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1150"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1100"
        ele.textContent =psh2 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        psh="1850"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1200"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1150"
        ele.textContent =psh2 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        psh= "2150"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1400"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1350"
        ele.textContent =psh2 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');
      //  Rehman Baba
      Rehman.classList.add('hidden');


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        psh="2150"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1400"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1350"
        ele.textContent =psh2 ;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="3050"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1400"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1350"
        ele.textContent =rsh3 ;
      })
      //  MILLAT
      Millat.classList.add('hidden');

    
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
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1900"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1800"
        ele.textContent =rsh3 ;
      })
     
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1900"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1800"
        ele.textContent =rsh3 ;
      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1900"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1800"
        ele.textContent =rsh3 ;
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1950"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1850"
        ele.textContent =rsh3 ;
      })
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="-"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="1950"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1850"
        ele.textContent =rsh3 ;
      })

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "400"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "350"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "450"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "400"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "600"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "550"
        ele.textContent = msh2;
      })
      

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "700"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "650"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "800"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "750"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "800"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "750"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1000"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "950"
        ele.textContent = msh2;
      })
      


    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1100"
        ele.textContent = msh2;
      })
      

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1100"
        ele.textContent = msh2;
      })
      

    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
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
        msh = "-"
        ele.textContent = msh;
      })
      ebm.forEach((ele) => {
        msh1 = "1150"
        ele.textContent = msh1;
      })
      esm.forEach((ele) => {
        msh2 = "1100"
        ele.textContent = msh2;
      })
      
    })

    train.forEach((el) => {
      el.textContent = `(---${count} Train Found---)`;
    })
  }
  // Ending of cities


  // Logic For Percentage

  acbsh.forEach((ele) => {
    let fare = fsh * 1.05;
    ele.textContent = roundFare(fare);
  });
  apsh.forEach((ele) => {
    let fare = fsh1 * 1.05;
    ele.textContent = roundFare(fare);
  });
  actsh.forEach((ele) => {
    let fare = fsh2 * 1.05;
    ele.textContent = roundFare(fare);
  });
  ebsh.forEach((ele) => {
    let fare = fsh3 * 1.05;
    ele.textContent = roundFare(fare);
  });
  essh.forEach((ele) => {
    let fare = fsh4 * 1.05;
    ele.textContent = roundFare(fare);
  });

  // Apply rounding to the fares for Karakoram
  acbk.forEach((ele) => {
    let fare = ksh * 1.05;
    ele.textContent = roundFare(fare);
  });
  actk.forEach((ele) => {
    let fare = ksh1 * 1.05;
    ele.textContent = roundFare(fare);
  });
  ebk.forEach((ele) => {
    let fare = ksh2 * 1.05;
    ele.textContent = roundFare(fare);
  });
  esk.forEach((ele) => {
    let fare = ksh3 * 1.05;
    ele.textContent = roundFare(fare);
  });



  // Millat fare
  abm.forEach((ele) => {
    if(ele.textContent=="-"){
      ele.textContent ="-";
    }
    else {
      let fare = msh * 1.05;
      ele.textContent = roundFare(fare);}
  })

  ebm.forEach((ele) => {
    let fare = msh1 * 1.05;
    ele.textContent = roundFare(fare);

  })
  esm.forEach((ele) => {
    let fare = msh2 * 1.05;
    ele.textContent = roundFare(fare);

  })

  //  Pakistan 


  asp.forEach((ele) => {
    let fare = psh * 1.05;
    ele.textContent = roundFare(fare);

  })
  ebp.forEach((ele) => {
    let fare = psh1 * 1.05;
    ele.textContent = roundFare(fare);

  })
  esp.forEach((ele) => {
    let fare = psh2 * 1.05;
    ele.textContent = roundFare(fare);

  })

  //  Rehman Baba
  abr.forEach((ele) => {
    let fare = rsh * 1.05;
    ele.textContent = roundFare(fare);

  })
  asr.forEach((ele) => {
    if(ele.textContent=="-"){
      ele.textContent ="-";
    }
    else {
      let fare = rsh1 * 1.05;
      ele.textContent = roundFare(fare);}
  
  })
  ebr.forEach((ele) => {
    let fare = rsh2 * 1.05;
    ele.textContent = roundFare(fare);

  })
  esr.forEach((ele) => {
    let fare = rsh3 * 1.05;
    ele.textContent = roundFare(fare);

  })


  // Pakistan fare
  // Rehman fare

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
