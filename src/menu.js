import './style.css';

export default function menu() {
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('container-border');

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

    return beveragesContainer;
}