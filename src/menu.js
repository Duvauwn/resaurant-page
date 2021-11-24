import './style.css';

export default function menu() {
    const menuContainer = document.createElement('div');

    const beveragesContainer = document.createElement('div');

    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';

    const sorrel = document.createElement('h3');
    sorrel.textContent = 'Sorrel Tea';

    const gingerBeer = document.createElement('h3');
    gingerBeer.textContent = 'Ginger Beer';

    const carrotJuice = document.createElement('h3');
    carrotJuice.textContent = 'Carrot Juice';

    const chocolateTea = document.createElement('h3');
    chocolateTea.textContent = 'Chocolate Tea';

    const guinessPunch = document.createElement('h3');
    guinessPunch.textContent = 'Guiness Punch';

    beveragesContainer.append(beverages, sorrel, gingerBeer, carrotJuice, chocolateTea, guinessPunch);

    const lunchContainer = document.createElement('div');

    const lunch = document.createElement('h2');
    lunch.textContent = 'Lunch';

    const ackee = document.createElement('h3');
    ackee.textContent = 'Ackee';

    const fritters = document.createElement('h3');
    fritters.textContent = 'Vegetable Fritters';

    const rundown = document.createElement('h3');
    rundown.textContent = 'Vegetable Rundown';

    lunchContainer.append(lunch, ackee, fritters, rundown);

    const dinnerContainer = document.createElement('div');

    const dinner = document.createElement('h2');
    dinner.textContent = 'Dinner';

    const curry = document.createElement('h3');
    curry.textContent = 'Coconut and Sweet Potato Curry';

    const stew = document.createElement('h3');
    stew.textContent = 'Ital Stew (Chefs Choice)';

    const patties = document.createElement('h3');
    patties.textContent = 'Jamaican No-Beef Patties';

    dinnerContainer.append(dinner, curry, stew, patties);

    const dessertContainer = document.createElement('div');

    const dessert = document.createElement('h2');
    dessert.textContent = 'Dessert';

    const bananaBread = document.createElement('h3');
    bananaBread.textContent = 'Banana Bread';

    const pudding = document.createElement('h3');
    pudding.textContent = 'Sweet Potato and Cornemal Pudding';

    const cake = document.createElement('h3');
    cake.textContent = 'Rum Cake';

    dessertContainer.append(dessert, bananaBread, pudding, cake);

    menuContainer.append(beveragesContainer, lunchContainer, dinnerContainer, dessertContainer);

    return menuContainer;
}