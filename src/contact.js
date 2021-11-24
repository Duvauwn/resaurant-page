import './style.css';

export default function contact() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container-border');

    const headChef = document.createElement('div');
    const headTitle = document.createElement('h3');
    const headNumber = document.createElement('p');
    const headEmail = document.createElement('p');
    headTitle.textContent = 'Head Chef Contact Information';
    headNumber.textContent = '555-333-5533';
    headEmail.textContent = 'headchef@email.com'

    const sousChef = document.createElement('div');
    const sousTitle = document.createElement('h3');
    const sousNumber = document.createElement('p');
    const sousEmail = document.createElement('p');
    sousTitle.textContent = 'Sous Chef Contact Information';
    sousNumber.textContent = '555-444-5544';
    sousEmail.textContent = 'souschef@email.com';

    headChef.append(headTitle, headNumber, headEmail);

    sousChef.append(sousTitle, sousNumber, sousEmail);

    contactContainer.append(headChef, sousChef);

    return contactContainer;
}