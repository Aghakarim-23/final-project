const faBars = document.querySelector(".fa-bars");
const faX = document.querySelector(".fa-x");
const mobileNav = document.querySelector("#mobileNav");

function openSideBar() {
  mobileNav.classList.toggle("translate-x-[43%]");
  faBars.classList.toggle("hidden");
  faX.classList.toggle("hidden");
}

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

function alertFunc() {
  const askOneTime = prompt("If you confirm, you will be redirected to the official Starbucks site. Do you want to proceed? I prefer to stay here. Type 'yes' to continue.")
  if(askOneTime === "yes"){
    window.location.href="https://www.starbucks.com/store-locator?map=40.452974,49.959529,12z"
  } else {
    alert("You chose to stay here.")
  }
}