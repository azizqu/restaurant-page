import loadPage from "./modules/load";
import './style.css'
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";


init();

function navListener(){
    const homePage = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactPage = document.getElementById('contact');
    const content = document.getElementById('content');

    // if(!content.classList.contains('home-page')){
    //     homePage.addEventListener('click', loadHome);
    // }
    homePage.addEventListener('click', loadHome);
    menuPage.addEventListener('click',loadMenu);
    contactPage.addEventListener('click', loadContact);



}


function init(){
    loadPage();
    loadHome();
    navListener();

}