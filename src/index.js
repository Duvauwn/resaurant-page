import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const display = document.querySelector('#content');

const tabButtons = (() => {
    const tabsContainer = document.createElement('div');

    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';

    tabsContainer.append(homeTab, menuTab, contactTab);

    display.appendChild(tabsContainer);

    return { tabsContainer };

})();

const homeSwitch = (() => {
    console.log(tabButtons.tabsContainer.firstChild);

    display.appendChild(home());
})();