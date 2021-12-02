const landingPageBtn = document.querySelector('.index-landing-btn');
const goToContainer = document.querySelector('.go-to-container');
const miscContainer = document.querySelector('.misc-container');


//Landing Page Button Action
landingPageBtn.addEventListener('click', () => {
    window.location = "locals-guide.html";
})

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

// Misc Guides
const ticketGuide = new lgReview(`Green Bay Packers Ticket Guide`, '../img/locals-guide/misc/packers-tickets.jpg', `Green Bay Packers tickets`, '../locals-guide/green-bay-packers-ticket-guide.html', null);

const hotelGuide = new lgReview(`Green Bay Hotel Guide`, '../img/locals-guide/misc/green-bay-hotel.jpg', `Lodge Kohler hotel`, '../locals-guide/green-bay-hotel-guide.html', null);

const parkingGuide = new lgReview(`Lambeau Field Parking Guide`, '../img/locals-guide/misc/lambeau-field-parking.jpg', `Lambeau Field Parking Lot`, '../locals-guide/lambeau-field-parking-guide.html', null);

const tailgatingGuide = new lgReview(`Lambeau Field Tailgating Guide`, '../img/locals-guide/misc/lambeau-field-tailgating.jpg', `Grill with hot coals`, '../locals-guide/lambeau-field-tailgating-guide.html', null);

// Go-to suggestions
const lunaCoffee = new lgReview(`Luna Coffee Roasters`, '../img/locals-guide/drink/coffee/luna-coffee-roasters.jpg', `Luna Coffee Roasters store front`, '../locals-guide/luna-coffee-roasters.html', 4.75);

const blackHoney = new lgReview(`Black Honey Hashery`, '../img/locals-guide/eat/breakfast/black-honey-hashery.jpg', `Black Honey Hashery's biscuits and gravy`, '../locals-guide/bay-family-restaurant.html', 4.75);

const thePancakePlace = new lgReview(`The Pancake Place`, '../img/locals-guide/eat/breakfast/the-pancake-place.jpg', `The Pancake Place stuffed hashbrowns`, '../locals-guide/the-pancake-place.html', 4.6);

const legendLarrys = new lgReview(`Legend Larry's`, '../img/locals-guide/eat/lunch/legend-larrys.jpg', `Legend Larry's wings`, '../locals-guide/legend-larrys.html', 4.75);

const rustique = new lgReview(`Rustique Pizzeria`, '../img/locals-guide/eat/lunch/rustique-pizzeria.jpg', `Rustique pizzas`, '../locals-guide/rustique-pizzeria.html', 4.75);

const heartlandPizza = new lgReview(`Heartland Pizza`, '../img/locals-guide/eat/lunch/heartland-pizza.jpg', `Heartland pepperoni pizza`, '../locals-guide/heartland-pizza.html', 4.75);

const angelina = new lgReview(`Angelina`, '../img/locals-guide/eat/lunch/angelina.jpg', `Angelina ravioli`, '../locals-guide/angelina.html', 4.75);

const sarasArtisanGelato = new lgReview(`Sara's Artisan Gelato`, '../img/locals-guide/eat/dessert/saras-artisan-gelato.jpg', `Sara's Artisan Gelato over a brownie`, '../locals-guide/saras-artisan-gelato.html', 4.75);

// Misc Guides
const miscGuides = [ticketGuide, hotelGuide, parkingGuide, tailgatingGuide];

//Go-to Items
const goToItems = [lunaCoffee, blackHoney, thePancakePlace, legendLarrys, rustique, heartlandPizza, angelina, sarasArtisanGelato];


generateContent(miscGuides);
generateContent(goToItems);


// Map through all items to create content item
function generateContent(arr){
    arr.map((item) => {
        createContentItem(item);
    })
}

// Create content item
function createContentItem(content){

    const contentItem = document.createElement('article');
    contentItem.className = 'content-item';
    if(content.rating) {
        goToContainer.appendChild(contentItem);
    } else {
        miscContainer.appendChild(contentItem);
    }
    
    contentItem.addEventListener('click', () => {
        window.location.href = content.src;
    })

    const contentFigure = document.createElement('figure');
    contentItem.appendChild(contentFigure);

    const contentImg = document.createElement('img');
    contentImg.src = content.img;
    contentImg.alt = content.imgDesc;
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


