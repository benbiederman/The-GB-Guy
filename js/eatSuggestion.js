const currentHeader = document.querySelector('.content-article h1');
const contentContainer = document.querySelector('.content-container');

// Local's Guide Data
class lgReview {
    constructor(name, img, imgDesc, src, rating) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.rating = rating;
    }
}

const alsHamburger = new lgReview(`Al's Hamburger`, '../img/locals-guide/eat/lunch/als-hamburger.jpg', `Al's hambuger with fries`, '../locals-guide/als-hamburger.html', 4.25);

const anduzzis = new lgReview(`Anduzzi's`, '../img/locals-guide/eat/lunch/anduzzis.jpg', `Anduzzi's mac n cheese burger with fries`, '../locals-guide/anduzzis.html', 4.4, ["lunch", "dinner", "green bay", "howard", "anduzzis", `anduizz's`]);

const angelina = new lgReview(`Angelina`, '../img/locals-guide/eat/lunch/angelina.jpg', `Angelina ravioli`, '../locals-guide/angelina.html', 4.75);

const basils = new lgReview(`Basil's II`, '../img/locals-guide/eat/lunch/basils-ii.jpg', `Basil's II butter burger`, '../locals-guide/basils-ii.html', 4.4);

const blackHoney = new lgReview(`Black Honey Hashery`, '../img/locals-guide/eat/breakfast/black-honey-hashery.jpg', `Black Honey Hashery biscuits and gravy`, '../locals-guide/bay-family-restaurant.html', 4.75);

const blackSheep = new lgReview(`Black Sheep Pub & Grill`, '../img/locals-guide/eat/lunch/black-sheep-pub-and-grill.jpg', `Black Sheep burger and fries`, '../locals-guide/basils-ii.html', 4.25);

const chinaKitchen = new lgReview(`China Kitchen`, '../img/locals-guide/eat/lunch/china-kitchen.jpg', `China Kitchen broccoli with chicken`, '../locals-guide/china-kitchen.html', 4.25);

const copperState = new lgReview(`Copper State Brewing Co.`, '../img/locals-guide/eat/lunch/copper-state-brewing-burger.jpg', `Copper State Brewing macaroni and cheese burger with fries`, '../locals-guide/copper-state-brewing.html', 4.4);

const cozumel = new lgReview(`Cozumel`, '../img/locals-guide/eat/lunch/cozumel.jpg', `Cozumel enchiladas`, '../locals-guide/cozumel.html', 4.3);

const driftInn = new lgReview(`Drift Inn`, '../img/locals-guide/eat/lunch/drift-inn.jpg', `Drift Inn butter burger`, '../locals-guide/drift-inn.html', 4.25);

const elSarape = new lgReview(`El Sarape`, '../img/locals-guide/eat/lunch/el-sarape.jpg', `El Sarape burrito`, '../locals-guide/el-sarape.html', 4.4);

const greenBayDistillery = new lgReview(`Green Bay Distillery`, '../img/locals-guide/eat/lunch/green-bay-distillery.jpg', `Green Bay Distillery curd burger`, '../locals-guide/green-bay-distillery.html', 4.25);

const greenTeaChinese = new lgReview(`Green Tea Chinese`, '../img/locals-guide/eat/lunch/green-tea-chinese.jpg', `Green Tea Chinese sweet and sour chicken`, '../locals-guide/green-tea-chinese.html', 4.3);

const hillTopCafe = new lgReview(`Hill Top Cafe`, '../img/locals-guide/eat/lunch/hilltop-cafe.jpg', `Hill Top Cafe cheeseburger and fries`, '../locals-guide/hill-top-cafe.html', 4.4);

const juliesCafe = new lgReview(`Julie's Cafe`, '../img/locals-guide/eat/breakfast/julies-cafe.jpg', `Julie's Cafe pancakes`, '../locals-guide/julies-cafe.html', 4.3);

const legendLarrys = new lgReview(`Legend Larry's`, '../img/locals-guide/eat/lunch/legend-larrys.jpg', `Legend Larry's DOA wings`, '../locals-guide/legend-larrys.html', 4.75);

const luigisBistro = new lgReview(`Luigi's Italian Bistro`, '../img/locals-guide/eat/lunch/luigis-italian-bistro.jpg', `Luigi's Italian Bistro pepperoni pizza`, '../locals-guide/luigis-italian-bistro.html', 4.4);

const luigis = new lgReview(`Luigi's Pizza Palace II`, '../img/locals-guide/eat/lunch/luigis-pizza.jpg', `Luigi's Pizza Palace pepperoni pizza`, '../locals-guide/luigis-pizza-palace-ii.html', 4.4);

const macs = new lgReview(`Macs`, '../img/locals-guide/eat/lunch/macs-mac-n-cheese-shop.jpg', `MACS loaded baked potato mac n cheese`, '../locals-guide/macs.html', 4.5);

const narrowBridge = new lgReview(`Narrow Bridge`, '../img/locals-guide/eat/lunch/narrow-bridge-brewhouse.jpg', `Narrow Bridge burger and fries`, '../locals-guide/narrow-bridge.html', 4.25);

const notByBreadAlone = new lgReview(`Not By Bread Alone`, '../img/locals-guide/eat/lunch/not-by-bread-alone.jpg', `Not By Bread Alone turkey sandwich`, '../locals-guide/not-by-bread-alone.html', 4.4);

const oldMexico = new lgReview(`Old Mexico`, '../img/locals-guide/eat/lunch/old-mexico.jpg', `Old Mexico enchiladas`, '../locals-guide/old-mexico.html', 4.25);

const rustique = new lgReview(`Rustique Pizzeria`, '../img/locals-guide/eat/lunch/rustique-pizzeria.jpg', `Rustique's pepperoni and mac n cheese pizza`, '../locals-guide/rustique-pizzeria.html', 4.75);

const sammysPizza = new lgReview(`Sammy's Pizza`, '../img/locals-guide/eat/lunch/sammys-pizza.jpg', `Sammy's pepperoni pizza`, '../locals-guide/sammys-pizza.html', 4.3);

const sarasArtisanGelato = new lgReview(`Sara's Artisan Gelato`, '../img/locals-guide/eat/dessert/saras-artisan-gelato.jpg', `Sara's Artisan Gelato over brownie`, '../locals-guide/saras-artisan-gelato.html', 4.75);

const sgambatis = new lgReview(`Sgambati's`, '../img/locals-guide/eat/lunch/sgambatis.jpg', `Sgambati's New York Style pepperoni pizza`, '../locals-guide/sgambatis.html', 4.3);

const stadiumView = new lgReview(`Stadium View`, '../img/locals-guide/eat/lunch/stadium-view.jpg', `Stadium View's french dip sandwich`, '../locals-guide/stadium-view.html', 4.25);

const thePancakePlace = new lgReview(`The Pancake Place`, '../img/locals-guide/eat/breakfast/the-pancake-place.jpg', `The Pancake Place's country style stuffed hashbrowns`, '../locals-guide/the-pancake-place.html', 4.6);

const zestys = new lgReview(`Zesty's`, '../img/locals-guide/eat/lunch/zestys.jpg', `Zesty's burger with cheesecurds`, '../locals-guide/zestys.html', 4.4);

const content = [alsHamburger, anduzzis, angelina, basils, blackHoney, blackSheep, chinaKitchen, copperState, cozumel, driftInn, elSarape, greenBayDistillery, greenTeaChinese, hillTopCafe, juliesCafe, legendLarrys, luigisBistro, luigis, macs, narrowBridge, notByBreadAlone, oldMexico, rustique, sammysPizza, sarasArtisanGelato, sgambatis, stadiumView, thePancakePlace, zestys];

function generateSuggestion(){
    let suggestions = [];

    // Find four pieces of content unique from current piece of content
    do {
        let randomNumber = Math.floor(Math.random() * content.length);
        if(content[randomNumber].name === currentHeader.innerHTML){
            // Checks to make sure it's not the same as the current piece of content shown
        } else {
            let suggestion = content.splice((randomNumber), 1);
            suggestions = [...suggestions, suggestion];
        }
    } while (suggestions.length != 4);

    // Create content item for each piece of content in suggestions
    for(let i = 0; i < suggestions.length; i++){
        createContentItem(suggestions[i][0])
    }
}

generateSuggestion();


// Create content item
function createContentItem(content){
    const contentItem = document.createElement('article');
    contentItem.className = 'content-item';
    contentContainer.appendChild(contentItem);
    contentItem.tabIndex = 0;

    contentItem.addEventListener('click', () => {
        window.location.href = content.src;
    })

    contentItem.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            window.location.href = content.src;
        }        
    })

    const contentFigure = document.createElement('figure');
    contentItem.appendChild(contentFigure);

    const contentImg = document.createElement('img');
    contentImg.src = content.img;
    contentImg.alt = `${content.name} menu item`;
    contentFigure.appendChild(contentImg);

    const contentHeader = document.createElement('h2');
    contentHeader.textContent = content.name;
    contentItem.appendChild(contentHeader);

    if(content.rating){
        const contentRating = document.createElement('p');
        contentRating.textContent = `${content.rating} / 5.0`;
        contentItem.appendChild(contentRating);
    }

    const contentLink = document.createElement('p');
    contentLink.textContent = '- Read More -';
    contentItem.appendChild(contentLink);
}