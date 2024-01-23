import header from "./public/header/header";
import menu from "./public/menu/menu";
import top from "./public/top/top";
top()
menu()
header()



let topDiv = document.querySelector("div.top")
topDiv.style.display = "none";
topDiv.style.transition = "500ms"
window.addEventListener("scroll", function () {
    let st = this.scrollY || document.documentElement.scrollTop;
    if (st > 600) {
        topDiv.style.display = "block";
        topDiv.style.transition = "500ms"
     } else {
        topDiv.style.display = "none";
        topDiv.style.transition = "500ms"
    }
    });

document.querySelector("div.top").addEventListener("click", function () {
    // Scroll to the top with a smooth animation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});