import "./style.css";


// body > #content
const divContent = document.querySelector("#content");

// body > #content > div*2
const topBarDiv = document.createElement("div");
const content = document.createElement("div");

topBarDiv.classList.add("top-bar");
content.classList.add("main-content");

// .top-bar > div*2 button
const logoDiv = document.createElement("div");
const optionsContainer = document.createElement("div");

logoDiv.classList.add("logo");
optionsContainer.classList.add("options-container");

logoDiv.textContent = "Corona Extra";

// .optionsContainer > button*3
const deliveryBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const galleryBtn = document.createElement("button");
const contactBrn = document.createElement("button");
const fbIcon = document.createElement('button');
const instaIcon = document.createElement('button');

menuBtn.classList.add("menu");
galleryBtn.classList.add("gallery");
contactBrn.classList.add("contact");
deliveryBtn.classList.add("delivery");
fbIcon.classList.add("fb");
instaIcon.classList.add("insta");

menuBtn.textContent = "Menu";
galleryBtn.textContent = "Gallery";
contactBrn.textContent = "Contact Us";
deliveryBtn.textContent = "Delivery";

// Appends
divContent.append(topBarDiv, content);
topBarDiv.append(logoDiv, optionsContainer);
optionsContainer.append(menuBtn, galleryBtn, contactBrn, deliveryBtn, fbIcon, instaIcon);

