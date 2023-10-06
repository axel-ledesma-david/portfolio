// Animation when scroll

const elements = document.querySelectorAll(".animation")  

 function callAnimations(entries){
    entries.forEach(entry => {
        const element = entry.target.querySelectorAll("[data-animation]")

        element.forEach(el => {
            el.classList.toggle("unset", entry.isIntersecting);
        })
    })
 }


 const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
 }

 const observer = new IntersectionObserver(callAnimations, options)

 elements.forEach(element => {
    observer.observe(element)
 })

 // Toggle menu

const toogleInput = document.querySelector("#checkbox")

const navList = document.getElementById("nav-list")

const navbar = document.getElementById("navbar")

const navLinks = document.querySelectorAll("#nav-link")

toogleInput.addEventListener("change", (e)=>{
    const checked = e.target.checked

     if(checked){
        navList.style.left = "0"
        navbar.style.overflow = "visible"
    } else if(!checked){
        navList.style.left = "520px"
    }
})

navLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        if(screen.width <= 550){
            toogleInput.checked = false
            navList.style.left = "520px"
        }
    })
})


// Change navbar color when scroll

 document.addEventListener("scroll", ()=>{
    if(scrollY >= 60){
        navbar.style.backgroundColor = "var(--primary-opacity)"
        navbar.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    } else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.boxShadow = "none"
    }
 })

 // Scroll to top

const btnScroll = document.getElementById("btn-scroll") 

 document.addEventListener("scroll", ()=>{
    if(scrollY >= 930){
        btnScroll.style.display = "block"
    } else {
        btnScroll.style.display = "none"
    }
 })

 btnScroll.addEventListener("click", ()=>{
    scrollTo(0,0)
 })



// Change Language

const flagsContainer = document.getElementById("flags") 

const textValues = document.querySelectorAll("[data-section]")

const changeLanguage = async lang => {
    const req = await fetch(`./languages/${lang}.json`)
    const res = await req.json()

    textValues.forEach(item => {
        const section = item.dataset.section
        const value = item.dataset.value

        item.innerHTML = res[section][value]
    })
}

flagsContainer.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language)
})


// Dark/Light Mode

const icon = document.getElementById("icon")
const iconContainer = document.getElementById("icon-container")


iconContainer.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        iconContainer.innerHTML = `<ion-icon name="sunny" class="icon-mode" id="icon" ></ion-icon>`
    } else {
        iconContainer.innerHTML = `<ion-icon name="moon" class="icon-mode" id="icon" ></ion-icon>`
    }
})

