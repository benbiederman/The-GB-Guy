const searchInput = document.querySelector(".search-input");
const serachBtn = document.querySelector(".search-btn");
const contentContainer = document.querySelector(".content-container");
const xBtn = document.querySelector(".x-btn");
const searchBtn = document.querySelector(".search-btn");
const disclaimer = document.querySelector(".disclaimer");

// Local's Guide Data
class lgReview {
  constructor(name, img, imgDesc, src, rating, searchTerms) {
    this.name = name;
    this.img = img;
    this.imgDesc = imgDesc;
    this.src = src;
    this.rating = rating;
    this.searchTerms = searchTerms;
  }
}

const _1919Kitchen = new lgReview(
  `1919 Kitchen & Tap`,
  "../img/locals-guide/eat/lunch/1919-kitchen-and-tap.jpg",
  `1919 Kitchen and Tap burger with fries`,
  "../locals-guide/1919-kitchen-and-tap.html",
  3.5,
  ["alcohol", "1919 Kitchen and Tap", "1919 kitchen & tap", "green bay"]
);

const anduzzis = new lgReview(
  `Anduzzi's`,
  "../img/locals-guide/eat/lunch/anduzzis.jpg",
  `Anduzzi's mac n cheese burger with fries`,
  "../locals-guide/anduzzis.html",
  4.4,
  ["alcohol", "green bay", "howard", "anduzzis", `anduizz's`]
);

const basils = new lgReview(
  `Basil's II`,
  "../img/locals-guide/eat/lunch/basils-ii.jpg",
  `Basil's II butter burger`,
  "../locals-guide/basils-ii.html",
  4.4,
  ["alcohol", "denmark", "basils", `basil's 2`, "basils 2", `basil's ii`]
);

const blackHoney = new lgReview(
  `Black Honey Hashery`,
  "../img/locals-guide/drink/coffee/black-honey-hashery.jpg",
  `Black Honey Hashery biscuits and gravy`,
  "../locals-guide/black-honey-hashery.html",
  4.75,
  ["coffee", "de pere", "black honey hashery"]
);

const blackSheep = new lgReview(
  `Black Sheep Pub & Grill`,
  "../img/locals-guide/eat/lunch/black-sheep-pub-and-grill.jpg",
  `Black Sheep burger and fries`,
  "../locals-guide/basils-ii.html",
  4.25,
  [
    "alcohol",
    "green bay",
    "black sheep pub and grill",
    "black sheep pub & grill",
  ]
);

const brickhouseBurgers = new lgReview(
  `Brickhouse Craft Burgers`,
  "../img/locals-guide/eat/lunch/brickhouse-craft-burgers.jpg",
  `Brickhouse cheese burger with fries`,
  "../locals-guide/brickhouse-craft-burgers.html",
  4.0,
  ["alcohol", "de pere", "brickhouse burgers", "brick house"]
);

const coffeeWizardz = new lgReview(
  `Coffee Wizardz`,
  "../img/locals-guide/drink/coffee/coffee-wizardz.jpg",
  `Coffee Wizardz latte`,
  "../locals-guide/coffee-wizardz.html",
  4.9,
  ["coffee", "coffee wizardz", "green bay"]
);

const copperState = new lgReview(
  `Copper State Brewing Co.`,
  "../img/locals-guide/eat/lunch/copper-state-brewing.jpg",
  `Copper State Brewing Co store front`,
  "../locals-guide/copper-state-brewing.html",
  4.4,
  [
    "alcohol",
    "coffee",
    "green bay",
    "copperstate brewing",
    "copper state brewing",
  ]
);

const cozumel = new lgReview(
  `Cozumel`,
  "../img/locals-guide/eat/lunch/cozumel.jpg",
  `Cozumel enchiladas`,
  "../locals-guide/cozumel.html",
  4.3,
  ["alcohol", "green bay", "cozumel", "mexican"]
);

const dailyBuzz = new lgReview(
  `Daily Buzz Espresso Bar`,
  "../img/locals-guide/drink/coffee/daily-buzz.jpg",
  `A latte with a stamped logo of Daily Buzz Espress Bar`,
  "../locals-guide/daily-buzz.html",
  4.1,
  ["coffee", "daily buzz espresso bar", "green bay"]
);

const driftInn = new lgReview(
  `Drift Inn`,
  "../img/locals-guide/eat/lunch/drift-inn.jpg",
  `Drift Inn butter burger`,
  "../locals-guide/drift-inn.html",
  4.25,
  ["alcohol", "green bay", "the drift inn", "drift inn"]
);

const elMaya = new lgReview(
  `El Maya`,
  "../img/locals-guide/eat/lunch/el-maya.jpg",
  `El Maya enchiladas`,
  "../locals-guide/el-maya.html",
  3.75,
  ["alcohol", "de pere", "mexican", "el maya"]
);

const elSarape = new lgReview(
  `El Sarape`,
  "../img/locals-guide/eat/lunch/el-sarape.jpg",
  `El Sarape burrito`,
  "../locals-guide/el-sarape.html",
  4.4,
  ["alcohol", "green bay", "mexican", "el sarape"]
);

const fourWayBar = new lgReview(
  `Four Way Bar`,
  "../img/locals-guide/eat/lunch/four-way-bar.jpg",
  `Four Way Bar's wings and fries`,
  "../locals-guide/four-way-bar.html",
  3.5,
  ["alcohol", "suamico", "four-way bar", "four way bar"]
);

const glassNickelPizza = new lgReview(
  `Glass Nickel Pizza`,
  "../img/locals-guide/eat/lunch/glass-nickel-pizza.jpg",
  `Glass Nicke Pizza pepperoni pizza`,
  "../locals-guide/glass-nickel-pizza.html",
  4.0,
  ["alcohol", "green bay", "glass nickel pizza", "pizza"]
);

const graystoneAleHouse = new lgReview(
  `Graystone Ale House`,
  "../img/locals-guide/eat/lunch/graystone-ale-house.jpg",
  `Graystone Ale House burger and tator tots`,
  "../locals-guide/graystone-ale-house.html",
  3.75,
  ["alcohol", "de pere", "graystone ale house"]
);

const greenBayDistillery = new lgReview(
  `Green Bay Distillery`,
  "../img/locals-guide/eat/lunch/green-bay-distillery.jpg",
  `Green Bay Distillery curd burger`,
  "../locals-guide/green-bay-distillery.html",
  4.25,
  ["alcohol", "green bay", "green bay distillery", "distillery"]
);

const hagemeisterPark = new lgReview(
  `Hagemeister Park`,
  "../img/locals-guide/eat/lunch/hagemeister-park.jpg",
  `Hagemeister Park chicken carbonara`,
  "../locals-guide/hagemeister-park.html",
  4.3,
  ["alcohol", "green bay", "hagemeister park"]
);

const kavarna = new lgReview(
  `Kavarna Coffeehouse`,
  "../img/locals-guide/drink/coffee/kavarna-coffeehouse.jpg",
  `Kavarna Coffeehouse bagged coffee`,
  "../locals-guide/kavarna-coffeehouse.html",
  4.3,
  ["coffee", "green bay", "kavarna coffeehouse"]
);

const krolls = new lgReview(
  `Kroll's`,
  "../img/locals-guide/eat/lunch/krolls-west.jpg",
  `Kroll's cheesecurds`,
  "../locals-guide/krolls.html",
  3.75,
  ["alcohol", "krolls west", "kroll's west"]
);

const legendLarrys = new lgReview(
  `Legend Larry's`,
  "../img/locals-guide/eat/lunch/legend-larrys.jpg",
  `Legend Larry's DOA wings`,
  "../locals-guide/legend-larrys.html",
  4.75,
  ["alcohol", "green bay", "legend larrys", "legend larry's", "wings"]
);

const luigisBistro = new lgReview(
  `Luigi's Italian Bistro`,
  "../img/locals-guide/eat/lunch/luigis-italian-bistro.jpg",
  `Luigi's Italian Bistro pepperoni pizza`,
  "../locals-guide/luigis-italian-bistro.html",
  4.4,
  [
    "alcohol",
    "green bay",
    "luigis italian bistro",
    "luigi's italian bistro",
    "pizza",
  ]
);

const luigis = new lgReview(
  `Luigi's Pizza Palace II`,
  "../img/locals-guide/eat/lunch/luigis-pizza.jpg",
  `Luigi's Pizza Palace pepperoni pizza`,
  "../locals-guide/luigis-pizza-palace-ii.html",
  4.4,
  ["alcohol", "suamico", "luigis pizza palace", "luigi's pizza palace", "pizza"]
);

const lunaCoffee = new lgReview(
  `Luna Coffee Roasters`,
  "../img/locals-guide/drink/coffee/luna-coffee-roasters.jpg",
  `Luna Coffee Roasters store front`,
  "../locals-guide/luna-coffee-roasters.html",
  4.75,
  ["coffee", "luna coffee roasters", "de pere"]
);

const narrowBridge = new lgReview(
  `Narrow Bridge`,
  "../img/locals-guide/eat/lunch/narrow-bridge-brewhouse.jpg",
  `Narrow Bridge burger and fries`,
  "../locals-guide/narrow-bridge.html",
  4.25,
  ["alcohol", "green bay", "narrow bridge"]
);

const nicoletCafe = new lgReview(
  `Nicolet Cafe`,
  "../img/locals-guide/eat/breakfast/nicolet-cafe.jpg",
  `Nicolet Cafe french toast and hashbrowns`,
  "../locals-guide/nicolet-cafe.html",
  3.75,
  ["coffee", "de pere", "nicolet cafe"]
);

const notByBreadAlone = new lgReview(
  `Not By Bread Alone`,
  "../img/locals-guide/eat/lunch/not-by-bread-alone.jpg",
  `Not By Bread Alone turkey sandwich`,
  "../locals-guide/not-by-bread-alone.html",
  4.4,
  ["coffee", "green bay", "not by bread alone"]
);

const oldMexico = new lgReview(
  `Old Mexico`,
  "../img/locals-guide/eat/lunch/old-mexico.jpg",
  `Old Mexico enchiladas`,
  "../locals-guide/old-mexico.html",
  4.25,
  ["alcohol", "mexican", "suamico", "old mexico"]
);

const rAndDs = new lgReview(
  `R & D's House Divided`,
  "../img/locals-guide/eat/lunch/r-and-d-house-divided.jpg",
  `R & D's Italian Beef`,
  "../locals-guide/r-&-d-house-divided.html",
  3.0,
  [
    "alcohol",
    "green bay",
    "r and ds house divided",
    "r and d's house divided",
    "r & ds house divided",
    "r & d's house divided",
  ]
);

const rustique = new lgReview(
  `Rustique Pizzeria`,
  "../img/locals-guide/eat/lunch/rustique-pizzeria.jpg",
  `Rustique's pepperoni and mac n cheese pizza`,
  "../locals-guide/rustique-pizzeria.html",
  4.75,
  ["alcohol", "suamico", "rustique pizza", "rustique pizzeria", "pizza"]
);

const sammysPizza = new lgReview(
  `Sammy's Pizza`,
  "../img/locals-guide/eat/lunch/sammys-pizza.jpg",
  `Sammy's pepperoni pizza`,
  "../locals-guide/sammys-pizza.html",
  4.3,
  ["alcohol", "green bay", "sammys pizza", "sammy's pizza", "pizza"]
);

const sgambatis = new lgReview(
  `Sgambati's`,
  "../img/locals-guide/eat/lunch/sgambatis.jpg",
  `Sgambati's New York Style pepperoni pizza`,
  "../locals-guide/sgambatis.html",
  4.3,
  [
    "alcohol",
    "de pere",
    "sgambatis",
    "sgambati's",
    "sgambati's new york pizza",
    "pizza",
  ]
);

const stadiumView = new lgReview(
  `Stadium View`,
  "../img/locals-guide/eat/lunch/stadium-view.jpg",
  `Stadium View's french dip sandwich`,
  "../locals-guide/stadium-view.html",
  4.25,
  ["alcohol", "green bay", "stadium view"]
);

const stirUpsBar = new lgReview(
  `Stir-Ups Bar`,
  "../img/locals-guide/drink/alcohol/stir-ups.jpg",
  `Stir-Ups Bar dance floor`,
  "../locals-guide/stir-ups-bar.html",
  3.75,
  ["alcohol", "stirups bar", "stir ups bar", "green bay"]
);

const theAbbey = new lgReview(
  `The Abbey`,
  "../img/locals-guide/eat/lunch/the-abbey.jpg",
  `The Abbey buffalo chicken wrap with fries`,
  "../locals-guide/the-abbey.html",
  4.1,
  ["alcohol", "de pere", "the abbey"]
);

const theBar = new lgReview(
  `The Bar`,
  "../img/locals-guide/eat/lunch/the-bar.jpg",
  `The Bar's buffalo wings`,
  "../locals-guide/the-bar.html",
  4.0,
  ["alcohol", "green bay", "the bar"]
);

const theExchange = new lgReview(
  `The Exchange`,
  "../img/locals-guide/drink/coffee/the-exchange.jpg",
  `The Exchange coffee flight`,
  "../locals-guide/the-exchange.html",
  4.1,
  ["coffee", "the exchange", "de pere"]
);

const content = [
  _1919Kitchen,
  anduzzis,
  basils,
  blackHoney,
  blackSheep,
  brickhouseBurgers,
  coffeeWizardz,
  copperState,
  cozumel,
  dailyBuzz,
  driftInn,
  elMaya,
  elSarape,
  fourWayBar,
  glassNickelPizza,
  graystoneAleHouse,
  greenBayDistillery,
  hagemeisterPark,
  kavarna,
  krolls,
  legendLarrys,
  luigisBistro,
  luigis,
  lunaCoffee,
  narrowBridge,
  nicoletCafe,
  notByBreadAlone,
  oldMexico,
  rAndDs,
  rustique,
  sammysPizza,
  sgambatis,
  stadiumView,
  stirUpsBar,
  theAbbey,
  theBar,
  theExchange,
];

// Generate initial content
createLocalsGuide(content);

// Creates content
function createLocalsGuide(arr) {
  // Filter content list by rating and create content item for each item
  const localsGuide = arr.sort((a, b) => b.rating - a.rating);

  // Generate content by filtered list
  localsGuide.map((item) => {
    createContentItem(item);
  });
}

// Create content item
function createContentItem(content) {
  const contentItem = document.createElement("article");
  contentItem.className = "content-item";
  contentContainer.appendChild(contentItem);
  contentItem.tabIndex = 0;

  // Route to page on click
  contentItem.addEventListener("click", () => {
    window.location.href = content.src;
  });

  // Route to page on enter key
  contentItem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.location.href = content.src;
    }
  });

  const contentFigure = document.createElement("figure");
  contentItem.appendChild(contentFigure);

  const contentImg = document.createElement("img");
  contentImg.src = content.img;
  contentImg.alt = `${content.name} menu item`;
  contentFigure.appendChild(contentImg);

  const contentHeader = document.createElement("h2");
  contentHeader.textContent = content.name;
  contentItem.appendChild(contentHeader);

  if (content.rating) {
    const contentRating = document.createElement("p");
    contentRating.textContent = `${content.rating} / 5.0`;
    contentItem.appendChild(contentRating);
  }

  const contentLink = document.createElement("p");
  contentLink.textContent = "- Read More -";
  contentItem.appendChild(contentLink);
}

// Create Null Search Results
function noResults() {
  const noResultsSection = document.createElement("div");
  noResultsSection.className = "null-search";
  contentContainer.appendChild(noResultsSection);

  const header = document.createElement("p");
  header.textContent = "Ope.";
  noResultsSection.appendChild(header);

  const p1 = document.createElement("p");
  p1.textContent =
    "Your search results came back about as empty as the trophy case in U.S. Bank Stadium.";
  noResultsSection.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Please adjust your search";
  noResultsSection.appendChild(p2);
}

// Search Function
searchInput.addEventListener("input", (e) => {
  let search = e.target.value;
  let searchResults = [];
  xBtn.style.display = "block";

  if (search.length == 0) {
    contentContainer.innerHTML = "";
    disclaimer.style.display = "block";
    searchResults = content;
    createLocalsGuide(searchResults);
    xBtn.style.display = "none";
  } else {
    content.map((c) => {
      for (let i = 0; i < c.searchTerms.length; i++) {
        if (c.searchTerms[i].toLowerCase().includes(search.toLowerCase())) {
          searchResults = [...searchResults, { c }.c];
        }
      }
    });
  }

  // Filter duplicates in array
  const uniqueResults = [
    ...searchResults
      .reduce((map, obj) => map.set(obj.name, obj), new Map())
      .values(),
  ];

  // Check if results, if no result product no result / else create results
  if (uniqueResults.length === 0 && search.length !== 0) {
    contentContainer.innerHTML = "";
    disclaimer.style.display = "none";
    noResults();
  } else {
    contentContainer.innerHTML = "";
    disclaimer.style.display = "block";
    for (let i = 0; i < uniqueResults.length; i++) {
      createContentItem(uniqueResults[i]);
    }
  }
});

// Prevent refresh upon Go button click
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

xBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  disclaimer.style.display = "block";
  contentContainer.innerHTML = "";
  xBtn.style.display = "none";
  createLocalsGuide(content);
});
