const content = document.getElementById('content');
content.classList.add('home-page');

function createHeader() {
    //header element
    const header = document.createElement('h1');
    header.className = 'header-home';
    header.textContent = 'Welcome to Blues Pizza!'

    return header;

}

function createAbout() {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const ptext = document.createElement('p');

    section.className = 'about';

    heading.className = 'about-head';
    heading.textContent = 'About Us!'
    ptext.className = 'about-content';
    ptext.textContent =
        'Founded in 1999, Blues Pizza strives to make the best pizza in the GTA! ' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus est ipsa velit?'+
        'Come Visit Today! '

    section.appendChild(heading);
    section.appendChild(ptext);

    return section;
}

function createHours(){

    const hoursObj = {
        sunday: 'Sun: 10:00 am-1:00 am',
        monday: 'Mon: 10:00 am-1:00 am',
        tuesday: 'Tue: 10:00 am-1:00 am',
        wednesday: 'Wed: 10:00 am-1:00 am',
        thursday: 'Thu: 10:00 am-3:00 am',
        friday: 'Fri: 10:00 am-3:00 am',
        saturday: 'Sat: 10:00 am-3:00 am'
    };

    const day = Object.keys(hoursObj);
    const hours = Object.values(hoursObj);

    const section = document.createElement('section');
    const heading = document.createElement('h2');

    section.className = 'hours';

    heading.className = 'store-hours';
    heading.textContent = 'Hours:'

    section.appendChild(heading);

    for(let i=0; i < day.length; i++){
        const ptext = document.createElement('p');
        ptext.className = 'day';
        ptext.textContent = hours[i];
        section.appendChild(ptext);
    }

    return section;

}

function changeClassList(){
    if(content.classList.contains('menu-page') || content.classList.contains('contact-page')){
        content.classList.remove('menu-page');
        content.classList.remove('contact-page');
        content.classList.add('home-page');
    }
}

function removeContent(){
    let pageContent = content.firstElementChild;
    while (pageContent) {
        content.removeChild(pageContent);
        pageContent = content.lastElementChild;
    }
}

function loadHome() {
    removeContent();
    changeClassList();
    content.appendChild(createHeader());
    content.appendChild(createAbout());
    content.appendChild(createHours());
}

export default loadHome;