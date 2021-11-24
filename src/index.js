import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const mainContainer = document.querySelector('#content');

const background = document.createElement('div');
background.id = 'bg-image';
document.body.appendChild(background);

const borderline = document.createElement('div');
borderline.id = 'borderline';
document.body.appendChild(borderline);

const tabButtons = (() => {
    const tabsContainer = document.createElement('div');

    const homeTab = document.createElement('button');
    homeTab.id = 'home';
    homeTab.classList.add('tab');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('button');
    menuTab.id = 'menu';
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('button');
    contactTab.id = 'contact';
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact';

    tabsContainer.append(homeTab, menuTab, contactTab);

    mainContainer.appendChild(tabsContainer);

    return { tabsContainer };

})();

const tabs = (() => {
    const contentContainer = document.createElement('div');

    const homeSwitch = document.querySelector('#home');
    homeSwitch.addEventListener('click', function () {
        console.log('working');
        if (contentContainer.childNodes.length > 0) {
            contentContainer.firstChild.remove();
        }
        contentContainer.appendChild(home());
    })

    const menuSwitch = document.querySelector('#menu');
    menuSwitch.addEventListener('click', function () {
        if (contentContainer.childNodes.length > 0) {
            contentContainer.firstChild.remove();
        }
        contentContainer.appendChild(menu());
    })

    const contactSwitch = document.querySelector('#contact');
    contactSwitch.addEventListener('click', function () {
        if (contentContainer.childNodes.length > 0) {
            contentContainer.firstChild.remove();
        }
        contentContainer.appendChild(contact());
    })

    window.addEventListener('load', function () {
        contentContainer.appendChild(home());
    })

    mainContainer.appendChild(contentContainer);

})();

