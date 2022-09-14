// TOGGLE MENU
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
// Show menu
navToggle.onclick = function () {
  navMenu.classList.add("show-menu");
};
// Close menu
navClose.onclick = function () {
  navMenu.classList.remove("show-menu");
};
// END TOGGLE MENU

//REMOVE MENU IN MOBILE
let navLink = document.querySelectorAll(".nav-link");
let linkAction = function () {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((e) => {
  e.onclick = linkAction;
});
//END REMOVE MENU IN MOBILE

//CHANGE THE BACKFROUND COLOR OF THE HEADER WHEN SCROLLING
let changeColor = () => {
  let header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }
};

window.onscroll = changeColor;

//END CHANGE THE BACKFROUND COLOR OF THE HEADER WHEN SCROLLING

//CALCULATE BMI
let calculateFrom = document.getElementById("calculate-form"),
  calculateCM = document.getElementById("calculate-cm"),
  calculateKG = document.getElementById("calculate-kg"),
  calculateMSG = document.getElementById("calculate-message");

let calculateBMI = (e) => {
  e.preventDefault();
  if (calculateCM.value == "" || calculateKG.value == "") {
    calculateMSG.classList.add("color-red");
    calculateMSG.classList.remove("color-green");
    calculateMSG.textContent = "Please insert your Height and Weight!!";
    setTimeout(() => {
      calculateMSG.textContent = "";
    }, 3000);
  } else {
    let cm = calculateCM.value / 100,
      kg = calculateKG.value,
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMSG.classList.add("color-green");
      calculateMSG.textContent = `Your BMI is ${bmi} and you are skinny`;
    } else if (bmi < 25) {
      calculateMSG.classList.add("color-green");
      calculateMSG.textContent = `Your BMI is ${bmi} and you are healthy`;
    } else {
      calculateMSG.classList.add("color-green");
      calculateMSG.textContent = `Your BMI is ${bmi} and you are overweight`;
    }
    calculateCM.value = "";
    calculateKG.value = "";
    setTimeout(() => {
      calculateMSG.textContent = "";
    }, 3000);
  }
};

calculateFrom.onsubmit = calculateBMI;
//END CALCULATE BMI

//EMAIL JS
let contactForm = document.getElementById("contact-form");
let contactMsg = document.getElementById("contact-message");
let contactUser = document.getElementById("contact-user");

let sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value == "") {
    contactMsg.classList.remove("color-green");
    contactMsg.classList.add("color-red");
    contactMsg.textContent = "You must enter your Email";
    setTimeout(() => {
      contactMsg.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_0s3cga7",
        "template_xdc72jt",
        "#contact-form",
        "YV8fv-fUbKrkfesfU"
      )
      .then(
        () => {
          contactMsg.classList.add("color-green");
          contactMsg.textContent = "You registered successfully!! :333";
          setTimeout(() => {
            contactMsg.textContent = "";
          }, 3000);
        },
        (error) => {
          alert(`OOPS, something went wrong :c`, error);
        }
      );
    contactUser.textContent = "";
  }
};

contactForm.onsubmit = sendEmail;
//END EMAIL JS

//SHOW SCROLL UP
let scrollUp = () => {
  let scrollUP = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUP.classList.add("show-scroll")
    : scrollUP.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

//END SHOW SCROLL UP

//SCROLL REVEAL
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 250,
});

sr.reveal(`.home-data, .footer-container, .footer-group`);
sr.reveal(`.home-img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos-img, .program-card, .pricing-card`, { interval: 100 });
sr.reveal(`.choose-img, .calculate-content`, { origin: "left" });
sr.reveal(`.choose-content, .calculate-img`, { origin: "right" });

//ENDSCROLL REVEAL
