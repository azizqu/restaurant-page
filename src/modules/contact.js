const content = document.getElementById('content');
content.classList.add('home-page');

function removeContent() {
    let pageContent = content.firstElementChild;
    while (pageContent) {
        content.removeChild(pageContent);
        pageContent = content.lastElementChild;
    }
}

function changeClassList() {
    if (content.classList.contains('home-page') || content.classList.contains('menu-page')) {
        content.classList.remove('home-page');
        content.classList.remove('menu-page');
        content.classList.add('contact-page');
    }
}

function createContact(){

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('contact-container');


    const header = document.createElement('h1');
    header.className = 'header';
    header.textContent = 'Contact Us!'


    const phoneContainer = document.createElement('div');
    phoneContainer.className = 'contact';

    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = 'Phone: ';

    const phoneText = document.createElement('h3');
    phoneText.textContent = '905 555 5555';

    phoneContainer.appendChild(phoneHeader);
    phoneContainer.appendChild(phoneText);


    const locationContainer = document.createElement('div');
    locationContainer.className = 'contact';

    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location: ';

    const locationText = document.createElement('h3');
    locationText.textContent = '1223 Pizza Ave. Toronto';

    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(locationText);


    const emailContainer = document.createElement('div');
    emailContainer.className = 'contact';

    const emailHeader = document.createElement('h2');
    emailHeader.textContent = 'Email: ';

    const emailText = document.createElement('h3');
    emailText.textContent = 'blue-pizza@gmail.com';

    emailContainer.appendChild(emailHeader);
    emailContainer.appendChild(emailText);



    itemContainer.appendChild(header);
    itemContainer.appendChild(phoneContainer);
    itemContainer.appendChild(locationContainer);
    itemContainer.appendChild(emailContainer);

    return itemContainer

}


function loadContact(){
    removeContent();
    changeClassList();
    content.appendChild(createContact());
}

export default loadContact;