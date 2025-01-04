const faBars = document.querySelector('.fa-bars')
const faX = document.querySelector('.fa-x')
const mobileNav = document.querySelector('#mobileNav')

function openSideBar() {
    mobileNav.classList.toggle('translate-x-[43%]')
    faBars.classList.toggle('hidden')
    faX.classList.toggle('hidden')
}


    const faChevronDown = document.querySelectorAll(".fa-chevron-down")
    const accordionContent = document.querySelectorAll(".accordionContent")
    faChevronDown.forEach(chevron => {
        chevron.addEventListener("click" , () => {
            chevron.classList.toggle("rotate-[180deg]")
            const accordionContentManipulation = chevron.closest(".w-full").querySelector(".accordionContent")
            accordionContentManipulation.classList.toggle("hidden")
        })
    })

    
      
    

