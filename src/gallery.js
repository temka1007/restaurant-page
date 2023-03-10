import "./style.css";

export default function gallery() {
  // .menu-content
  const content = document.querySelector(".gallery-content");

  // .gallery-content > div 
  const imageContainer = document.createElement('div');

  imageContainer.classList.add("image-container")

  content.appendChild(imageContainer)

  // .gallery-content > .image-container > div*12
  const one = document.createElement('div');
  const two = document.createElement('div');
  const three = document.createElement('div');
  const four = document.createElement('div');
  const five = document.createElement('div');
  const six = document.createElement('div');
  const seven = document.createElement('div');
  const eigth = document.createElement('div');
  const nine = document.createElement('div');
  const ten = document.createElement('div');
  const eleven = document.createElement('div');
  const twelve = document.createElement('div');

  imageContainer.append(one, two, three, four,five,six,seven,eigth,nine,ten,eleven,twelve)
}
