let burger = document.querySelector(".main__header_burger")

let burgerMenu = document.querySelector(".main__header_burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
    burger.classList.toggle("main__header_burger_active")
    burgerMenu.classList.toggle("main__header_burger_list_active")
    body.classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if(scrollY >= 200) {
        document.querySelector(".main__header").classList.add("main__header_active")
        document.querySelector(".main__header_wrapper").classList.add("main__header_wrapper_active")
        document.querySelector(".main__header_burger_list").classList.add("main__header_burger_list_header_active")
    } else {
        document.querySelector(".main__header").classList.remove("main__header_active")
        document.querySelector(".main__header_wrapper").classList.remove("main__header_wrapper_active")
        document.querySelector(".main__header_burger_list").classList.remove("main__header_burger_list_header_active")
    }
})

let gotoUp = document.querySelector(".main__header_logo")

gotoUp.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


let menu = document.querySelector(".main__header_menu_list")


menu.addEventListener("click", function(e){
    let link = e.target
    if(link.dataset.id) {
        e.preventDefault();
        let target = document.querySelector(link.hash)
        let pos = target.offsetTop-100
        console.log(pos)
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
})