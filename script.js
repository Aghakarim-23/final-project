const faBars = document.querySelector('.fa-bars')
const faX = document.querySelector('.fa-x')
const mobileNav = document.querySelector('#mobileNav')

function openSideBar() {
    mobileNav.classList.toggle('translate-x-[43%]')
    faBars.classList.toggle('hidden')
    faX.classList.toggle('hidden')
}


    const faChevronDown = document.querySelectorAll(".fa-chevron-down")

    const accordion = document.querySelectorAll(".accordion")
    faChevronDown.forEach(chevron => {
        chevron.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180")
            const accordionContent = chevron.parentElement.nextElementSibling;
            accordionContent.classList.toggle("h-[50%]")
            accordionContent.classList.toggle("overflow-hidden")

        })
        })
      
    

