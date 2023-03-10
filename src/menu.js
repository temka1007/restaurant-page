import "./style.css";

export default function menu() {
  // .menu-content
  const content = document.querySelector(".menu-content");

  // .menu-content > div*2
  const beers = document.createElement("div");
  const foods = document.createElement("div");

  beers.classList.add("beer-container");
  foods.classList.add("food-container");

  content.append(beers, foods);

  // .beer-container > div
  const beerList = document.createElement("div");
  const beerImage = document.createElement("div");

  beerList.classList.add("beer-list");
  beerImage.classList.add("beer-image");

  beers.append(beerList, beerImage);

  // .food-container > div
  const foodImage = document.createElement("div");
  const foodList = document.createElement("div");

  foodImage.classList.add("food-image");
  foodList.classList.add("food-list");

  foods.append(foodImage, foodList);

  // .beer-list > div*10

  const guinness = document.createElement("div");
  const deadRabbit = document.createElement("div");
  const sixpoint = document.createElement("div");
  const harp = document.createElement("div");
  const brooklyn = document.createElement("div");
  const krombacher = document.createElement("div");
  const allagash = document.createElement("div");
  const austin = document.createElement("div");
  const hazy = document.createElement("div");
  const bud = document.createElement("div");

  guinness.textContent = "GUINNESS";
  guinness.innerHTML += "<span>$9.00</span>";
  deadRabbit.textContent = "DEAD RABBIT RED ALE";
  deadRabbit.innerHTML += "<span>$9.00</span>";
  sixpoint.textContent = "SIXPOINT SWEET ACTION";
  sixpoint.innerHTML += "<span>$9.00</span>";
  harp.textContent = "HARP";
  harp.innerHTML += "<span>$11.00</span>";
  brooklyn.textContent = "BROOKLYN LACER";
  brooklyn.innerHTML += "<span>$9.00</span>";
  krombacher.textContent = "KROMBACHER PILSNER";
  krombacher.innerHTML += "<span>$9.00</span>";
  allagash.textContent = "ALLAGASH WITBIER";
  allagash.innerHTML += "<span>$9.00</span>";
  austin.textContent = "AUSTIN EAST ORIGINAL DRY CIDER";
  austin.innerHTML += "<span>$8.00</span>";
  hazy.textContent = "ALMOST FAMOUS HAZY IPA";
  hazy.innerHTML += "<span>$9.00</span>";
  bud.textContent = "BUD LIGHT BOTTLE";
  bud.innerHTML += "<span>$7.00</span>";

  beerList.append(
    guinness,
    deadRabbit,
    sixpoint,
    harp,
    brooklyn,
    krombacher,
    allagash,
    austin,
    hazy,
    bud
  );

  // .food-list > div*10
  const classicBurger = document.createElement("div");
  const vegetarianBurger = document.createElement("div");
  const crispyFish = document.createElement("div");
  const cornedBeef = document.createElement("div");
  const hamAndCheese = document.createElement("div");
  const potPie = document.createElement("div");
  const bangers = document.createElement("div");
  const grilledSalmon = document.createElement("div");
  const lambStew = document.createElement("div");
  const steamedMussles = document.createElement("div");

  classicBurger.textContent = "CLASSIC BURGER";
  classicBurger.innerHTML += "<span>$25.00</span>";
  vegetarianBurger.textContent = "VEGETARIAN BURGER";
  vegetarianBurger.innerHTML += "<span>$25.00</span>";
  crispyFish.textContent = "CRISPY FISH & CHIPS";
  crispyFish.innerHTML += "<span>$28.00</span>";
  cornedBeef.textContent = "CORNED BEEF SANDWICH";
  cornedBeef.innerHTML += "<span>$23.00</span>";
  hamAndCheese.textContent = "HAM & CHEESE TOASTIE";
  hamAndCheese.innerHTML += "<span>$22.00</span>";
  potPie.textContent = "CHICKEN POT PIE";
  potPie.innerHTML += "<span>$25.00</span>";
  bangers.textContent = "BANGERS & MASH";
  bangers.innerHTML += "<span>$25.00</span>";
  grilledSalmon.textContent = "GRILLED ATLANTIC SALMON";
  grilledSalmon.innerHTML += "<span>$28.00</span>";
  lambStew.textContent = "IRISH LAMB STEW";
  lambStew.innerHTML += "<span>$28.00</span>";
  steamedMussles.textContent = "STEAMED FRESH MUSSLES";
  steamedMussles.innerHTML += "<span>$24.00</span>";

  foodList.append(
    classicBurger,
    vegetarianBurger,
    crispyFish,
    cornedBeef,
    hamAndCheese,
    potPie,
    bangers,
    grilledSalmon,
    lambStew,
    steamedMussles
  );
}
