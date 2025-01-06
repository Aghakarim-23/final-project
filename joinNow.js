const faBars = document.querySelector(".fa-bars");
const faX = document.querySelector(".fa-x");
const mobileNav = document.querySelector("#mobileNav");

function openSideBar() {
  mobileNav.classList.toggle("translate-x-[43%]");
  faBars.classList.toggle("hidden");
  faX.classList.toggle("hidden");
}

const faEye = document.querySelector(".fa-eye");
const faEyeSlash = document.querySelector(".fa-eye-slash");

const signInPasswordBtn = document.querySelector("#signInPasswordBtn");


faEyeSlash.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-eye-slash") && (signInPasswordBtn.type === "password")) {
    signInPasswordBtn.type = "text";
    faEyeSlash.classList.toggle("hidden");
    faEye.classList.toggle("hidden");
    e.preventDefault()
  } 
});

faEye.addEventListener("click" , (e) => {
  if(e.target.classList.contains("fa-eye") && (signInPasswordBtn.type === "text")){
    signInPasswordBtn.type = "password";
    faEyeSlash.classList.toggle("hidden");
    faEye.classList.toggle("hidden");
    e.preventDefault()
  }
})

const faCheck = document.querySelector(".fa-check");
const checkBoxInp = document.querySelector("#checkBoxInp");

faCheck.addEventListener("click", (e) => {
  checkBoxInp.classList.toggle("bg-green-700");
  checkBoxInp.classList.toggle("text-white");
  e.preventDefault()
})

const faChevronDown = document.querySelectorAll(".fa-chevron-down");
const accordionContent = document.querySelectorAll(".accordionContent");
faChevronDown.forEach((chevron) => {
  chevron.addEventListener("click", () => {
    chevron.classList.toggle("rotate-[180deg]");
    const accordionContentManipulation = chevron
      .closest(".w-full")
      .querySelector(".accordionContent");
    accordionContentManipulation.classList.toggle("hidden");
  });
});

const footerContent = document.querySelector("#footerContent");
let newDate = new Date().getFullYear();
footerContent.innerHTML = `
        &#169; ${newDate} Starbucks Coffee Company. All rights reserved.
    `;
