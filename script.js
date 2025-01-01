const faBars = document.querySelector('.fa-bars')
console.log(faBars);
const mobileNav = document.querySelector('#mobileNav')

faBars.addEventListener("click", () => {
    mobileNav.classList.toggle('right-[0]')
    console.log("Works");

})