import "./style.css";

export default function contact() {
  // .menu-content
  const content = document.querySelector(".contact-content");

  // .menu-content > div
  const contactContainer = document.createElement("div");

  contactContainer.classList.add("contact-container");

  content.appendChild(contactContainer);

  // .contact-container > div*3

  const telephone = document.createElement("div");
  const location = document.createElement("div");
  const hours = document.createElement("div");

  telephone.classList.add("telephone");
  location.classList.add("location");
  hours.classList.add("hours");

  telephone.textContent = "Telephone:";
  telephone.innerHTML += "<span>555-555-1212</span>";

  location.textContent = "Location:";
  location.innerHTML += "<span>123 Main Street<br>Rio Vista, TX 76093</span>";

  hours.textContent = "Hours of Operation:";
  hours.innerHTML += "<span>Monday - Thursday: 6PM-11PM<br>Friday: 6PM-12AM<br>Saturday: 5PM-12AM<br>Sunday: 5PM-11PM</span>";

  contactContainer.append(telephone, location, hours);
}
