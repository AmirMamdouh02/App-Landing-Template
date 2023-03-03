let header = document.getElementById("header")
let arrow = document.getElementById("arrow")


window.onscroll = function (){
    if (scrollY >= 500){
        header.classList.add("header_2")
        arrow.style.display = "block"
    }else{
        header.classList.remove("header_2")
        arrow.style.display = "none"
    }
}

