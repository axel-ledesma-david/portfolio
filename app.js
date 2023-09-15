const toogleInput = document.querySelector("#checkbox")

const navList = document.getElementById("nav-list")

console.log(navList)

toogleInput.addEventListener("change", (e)=>{
    const checked = e.target.checked

    console.log(checked)
     if(checked){
        navList.style.left = "27px"
    } else if(!checked){
        navList.style.left = "520px"
    }
})


