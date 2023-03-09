import "./style.css";
// eslint-disable-next-line no-unused-vars
import texasLogo from "./images/texas-logo.png";
import menuContent from "./menu";

// body > #content
const divContent = document.querySelector("#content");

// body > #content > div*2
const topBarDiv = document.createElement("div");
const content = document.createElement("div");

topBarDiv.classList.add("top-bar");
content.classList.add("main-content");

divContent.append(topBarDiv, content);

// .top-bar > div
const topBar = document.createElement("div");

topBarDiv.appendChild(topBar);

// .top-bar > div > div*2
const logoDiv = document.createElement("div");
const optionsContainer = document.createElement("div");

logoDiv.classList.add("logo");
optionsContainer.classList.add("options-container");

logoDiv.textContent = "Corona Extra";

topBar.append(logoDiv, optionsContainer);

// .optionsContainer > button*3
const deliveryBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const galleryBtn = document.createElement("button");
const contactBtn = document.createElement("button");
const fbIcon = document.createElement("button");
const instaIcon = document.createElement("button");

menuBtn.classList.add("menu");
galleryBtn.classList.add("gallery");
contactBtn.classList.add("contact");
deliveryBtn.classList.add("delivery");
fbIcon.classList.add("fb");
instaIcon.classList.add("insta");

menuBtn.textContent = "Menu";
galleryBtn.textContent = "Gallery";
contactBtn.textContent = "Contact";
deliveryBtn.textContent = "Delivery";

optionsContainer.append(
  menuBtn,
  galleryBtn,
  contactBtn,
  deliveryBtn,
  fbIcon,
  instaIcon
);

const Logo = () => {
  // main-content > div
  const greetingWord = document.createElement("div");
  const greetBigFont = document.createElement("div");

  greetBigFont.classList.add("greeting");

  greetingWord.textContent = "The Best";
  greetBigFont.textContent = "BAR IN THE TEXAS!";

  content.appendChild(greetingWord);
  greetingWord.appendChild(greetBigFont);
};

Logo();

deliveryBtn.addEventListener("click", () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

logoDiv.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("main-content");
  Logo();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("menu-content");
  menuContent();
});
