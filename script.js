const faBars = document.querySelector('.fa-bars')
const faX = document.querySelector('.fa-x')
const mobileNav = document.querySelector('#mobileNav')

function openSideBar() {
    mobileNav.classList.toggle('right-[0%]')
    faBars.classList.toggle('hidden')
    faX.classList.toggle('hidden')
}


