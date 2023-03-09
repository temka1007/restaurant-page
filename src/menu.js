import "./style.css";

export default function menu() {
    // .menu-content 
    const content = document.querySelector('.menu-content');

    // .menu-content > .beer-container
    const beers = document.createElement('div');

    beers.classList.add("beer-container")

    content.appendChild(beers)


}