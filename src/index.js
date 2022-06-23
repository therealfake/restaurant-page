import renderNav from "./nav-bar";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

renderNav();
renderHome();

function clearPage(){
    let content = document.getElementById("content");

    content.removeChild(content.lastChild);
} 

// renderHome();
// renderContact();
let links = document.querySelectorAll('#links > li')
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        clearPage();
        let nextPage = e.target.textContent;
        if (nextPage == "Home") {
            renderHome();
        } else if (nextPage == "Menu") {
            renderMenu();
        } else {
            renderContact();
        }

    })
})