import Food from './ital-bg.jpg';
import './style.css';

export default function home() {
    const homeContainer = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'Vital Ital';

    const headline = document.createElement('h2');
    headline.textContent = 'Your source for the best ital cooking. Anytime';

    const myFood = new Image();
    myFood.src = Food;
    myFood.style.height = 'auto';
    myFood.style.width = '70%';

    homeContainer.append(header, headline, myFood);

    return homeContainer;
}
