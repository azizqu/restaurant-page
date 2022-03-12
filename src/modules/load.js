import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);
dom.watch();

const content = document.getElementById('content');
content.classList.add('home-page');

function createNav() {
    // nav menu items - onclick of these will load appropriate content module.
    const items = ['home', 'menu', 'contact'];
    const navBar = document.createElement('div');
    const navContainer = document.createElement('div');

    navContainer.className = 'navContainer';
    navBar.className = 'navbar';
    navBar.id = 'navbar';

    items.forEach(function (el){
        const navLink = document.createElement('a');
        navLink.className= 'nav-item';
        navLink.textContent = el;
        navLink.href= '#';
        navLink.id = el;
        navBar.appendChild(navLink);
    })

    navContainer.appendChild(navBar);

    return navContainer;
}

function createFooter(){
    const footer = document.createElement('footer');
    const ptext = document.createElement('p');
    const a = document.createElement('a');
    const i = document.createElement('i');

    a.href = 'https://github.com/azizqu';
    a.className = 'icon';
    i.className = 'fa-brands fa-github';

    a.appendChild(i);


    footer.className = 'footer';
    ptext.className = 'footer-text';
    ptext.textContent = '© 2022 - Aziz Qureshi'

    ptext.appendChild(a);
    footer.appendChild(ptext);


    return footer;
}

function loadPage(){
    document.body.insertBefore(createNav(),content);
    document.body.appendChild(createFooter());

}

export default loadPage;

