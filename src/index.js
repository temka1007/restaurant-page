import "./style.css";

// body > #content
const divContent = document.querySelector("#content");

// body > #content > div*2
const topBarDiv = document.createElement("div");
const content = document.createElement("div");

topBarDiv.classList.add("top-bar");
content.classList.add("main-content");

divContent.append(topBarDiv, content);

// .top-bar > div*2 button
const logoDiv = document.createElement("div");
const optionsContainer = document.createElement('div');
const deliveryBtn = document.createElement("button");

logoDiv.classList.add("logo")
optionsContainer.classList.add("options-container")
deliveryBtn.classList.add("delivery")

topBarDiv.append(logoDiv, optionsContainer, deliveryBtn);

// .optionsContainer > button*3
const menuBtn = document.createElement("button");
const galleryBtn = document.createElement("button");
const contactBrn = document.createElement("button");

menuBtn.classList.add("menu")
galleryBtn.classList.add("gallery")
contactBrn.classList.add("contact")

optionsContainer.append(menuBtn, galleryBtn, contactBrn);

// 



