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
        ksh1 = "1800"
        ele.textContent = ksh1;
      })
      actk.forEach((ele) => {
        ksh2 = "1400"
        ele.textContent = ksh2;
      })
      ebk.forEach((ele) => {
        ksh3 = "1100"
        ele.textContent = ksh3;
      })
      esk.forEach((ele) => {
        ksh4 = "1050"
        ele.textContent = ksh4;
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
        msh="5000"
        ele.textContent =msh ;
      })
      ebm.forEach((ele) => {
        msh1="2100"
        ele.textContent =msh1 ;
      })
      esm.forEach((ele) => {
        msh2="2000"
        ele.textContent =msh2 ;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="5000"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="3750"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="2100"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="2000"
        ele.textContent =rsh3 ;
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
        rsh="4600"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="3750"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="2100"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="2000"
        ele.textContent =rsh3 ;
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
        msh="4600"
        ele.textContent =msh ;
      })
      ebm.forEach((ele) => {
        msh1="2100"
        ele.textContent =msh1 ;
      })
      esm.forEach((ele) => {
        msh2="2000"
        ele.textContent =msh2 ;
      })

      //  Pakistan
      Pakistan.classList.add('hidden');

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="4600"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="3700"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="2100"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="2000"
        ele.textContent =rsh3 ;
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
        rsh="4600"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="3500"
        ele.textContent =rsh1 ;
      })
      ebr.forEach((ele) => {
        rsh2="2050"
        ele.textContent =rsh2 ;
      })
      esr.forEach((ele) => {
        rsh3="1950"
        ele.textContent =rsh3 ;
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
        fsh="3900"
        ele.textContent =fsh ;
      })
      apsh.forEach((ele) => {
        fsh1="3300"
        ele.textContent =fsh1 ;
      })
      actsh.forEach((ele) => {
        fsh2="2950"
        ele.textContent =fsh2 ;
      })
      ebsh.forEach((ele) => {
        fsh3="1950"
        ele.textContent =fsh3 ;
      })
      essh.forEach((ele) => {
        fsh4="1850"
        ele.textContent =fsh4 ;
      })

      //  Karakoram
      Karakoram.classList.remove('hidden');
      acbk.forEach((ele) => {
        ksh="4200"
        ele.textContent =ksh ;
      })
      actk.forEach((ele) => {
        ksh1="3501"
        ele.textContent =ksh1 ;
      })
      ebk.forEach((ele) => {
        ksh2="2350"
        ele.textContent =ksh2 ;
      })
      esk.forEach((ele) => {
        ksh3="2250"
        ele.textContent =ksh3 ;
      })

      //  MILLAT
      Millat.classList.remove('hidden');
      abm.forEach((ele) => {
        msh="3900"
        ele.textContent =msh ;
      })
      ebm.forEach((ele) => {
        msh1="1950"
        ele.textContent =msh1 ;
      })
      esm.forEach((ele) => {
        msh2="1850"
        ele.textContent =msh2 ;
      })

      //  Pakistan
      Pakistan.classList.remove('hidden');

      asp.forEach((ele) => {
        psh="2950"
        ele.textContent =psh ;
      })
      ebp.forEach((ele) => {
        psh1="1950"
        ele.textContent =psh1 ;
      })
      esp.forEach((ele) => {
        psh2="1850"
        ele.textContent =psh2 ;
      })

      //  Rehman Baba
      Rehman.classList.remove('hidden');
      abr.forEach((ele) => {
        rsh="3900"
        ele.textContent =rsh ;
      })
      asr.forEach((ele) => {
        rsh1="2950"
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
      el.textContent = `(---${count} Train Found---)`;
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
      el.textContent = `(---${count} Train Found---)`;
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
      el.textContent = `(---${count} Train Found---)`;
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
    let fare = msh * 1.05;
    ele.textContent = roundFare(fare);

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
    let fare = rsh1 * 1.05;
    ele.textContent = roundFare(fare);

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
