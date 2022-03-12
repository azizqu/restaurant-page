const content = document.getElementById('content');

function changeClassList() {
    if (content.classList.contains('home-page') || content.classList.contains('contact-page')) {
        content.classList.remove('home-page');
        content.classList.remove('contact-page');
        content.classList.add('menu-page');
    }
}

function removeContent() {
    let pageContent = content.firstElementChild;
    while (pageContent) {
        content.removeChild(pageContent);
        pageContent = content.lastElementChild;
    }
}

function createMenuItem(name, text, price, src) {

    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    const itemName = document.createElement('h2');
    itemName.classList.add('name');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = text;

    const itemImage = document.createElement('img');
    itemImage.className = 'item-image';
    itemImage.src = src;

    const itemPrice = document.createElement('h3');
    itemPrice.className = 'price';
    itemPrice.textContent = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemImage);

    return menuItem
}

function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const header = document.createElement('h1');
    header.className = 'header';
    header.textContent = 'Menu';

    menuContainer.appendChild(header);

    const menuObj = [
        createMenuItem(
            'Large Speciality Pizza + 3 toppings',
            'Try our large speciality pizza made with fresh toppings and ingredients',
            '$12.99 +tax',
            '../src/images/pizza-1.jpg'
        ),
        createMenuItem(
            'Medium Pepperoni Pizza + 2L Coke',
            'Try our Medium pepperoni pizza made with fresh toppings and ingredients',
            '$9.99 +tax',
            '../src/images/pizza-1.jpg'
        ),
        createMenuItem(
            'Small Cheese Pizza + 12 Wings',
            'Try our large speciality pizza made with fresh toppings and ingredients',
            '$12.99 +tax',
            '../src/images/pizza-2.jpg'
        ),
        createMenuItem(
            'Small Cheese Pizza + 12 Wings',
            'Try our large speciality pizza made with fresh toppings and ingredients',
            '$12.99 +tax',
            '../src/images/pizza-2.jpg'
        ),
        createMenuItem(
            'Small Cheese Pizza + 12 Wings',
            'Try our large speciality pizza made with fresh toppings and ingredients',
            '$12.99 +tax',
            '../src/images/pizza-2.jpg'
        ),
        createMenuItem(
            'Small Cheese Pizza + 12 Wings',
            'Try our large speciality pizza made with fresh toppings and ingredients',
            '$12.99 +tax',
            '../src/images/pizza-2.jpg'
        )
    ]

    menuObj.forEach((menuItem) => {
        menuContainer.appendChild(menuItem);
    })


    return menuContainer;

}


function loadMenu() {

    removeContent();
    changeClassList();
    content.appendChild(createMenu());
}

export default loadMenu;
