const landingPageBtn = document.querySelector('.index-landing-btn');

//Landing Page Button Action
landingPageBtn.addEventListener('click', () => {
    window.location = "locals-guide.html";
})

// Local's Guide Data
class gotoItem {
    constructor(name, img, imgDesc, src, rating) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.rating = rating;
    }
}

const lunaCoffee = new gotoItem(`Luna Coffee Roasters`, '../img/locals-guide/drink/coffee/luna-coffee-roasters.jpg', `Luna Coffee Roasters store front`, '../locals-guide/luna-coffee-roasters.html', 4.75);

const blackHoney = new gotoItem(`Black Honey Hashery`, '../img/locals-guide/eat/breakfast/black-honey-hashery.jpg', `Black Honey Hashery's biscuits and gravy`, '../locals-guide/bay-family-restaurant.html', 4.75);

const thePancakePlace = new gotoItem(`The Pancake Place`, '../img/locals-guide/eat/breakfast/the-pancake-place.jpg', `The Pancake Place stuffed hashbrowns`, '../locals-guide/the-pancake-place.html', 4.6);

const legendLarrys = new gotoItem(`Legend Larry's`, '../img/locals-guide/eat/lunch/legend-larrys.jpg', `Legend Larry's wings`, '../locals-guide/legend-larrys.html', 4.75);

const rustique = new gotoItem(`Rustique Pizzeria`, '../img/locals-guide/eat/lunch/rustique-pizzeria.jpg', `Rustique pizzas`, '../locals-guide/rustique-pizzeria.html', 4.75);

const heartlandPizza = new gotoItem(`Heartland Pizza`, '../img/locals-guide/eat/lunch/heartland-pizza.jpg', `Heartland pepperoni pizza`, '../locals-guide/heartland-pizza.html', 4.75);

const angelina = new gotoItem(`Angelina`, '../img/locals-guide/eat/lunch/angelina.jpg', `Angelina ravioli`, '../locals-guide/angelina.html', 4.75);

const sarasArtisanGelato = new gotoItem(`Sara's Artisan Gelato`, '../img/locals-guide/eat/dessert/saras-artisan-gelato.jpg', `Sara's Artisan Gelato over a brownie`, '../locals-guide/saras-artisan-gelato.html', 4.75);

//Go-to Items
const goToItems = [lunaCoffee, blackHoney, thePancakePlace, legendLarrys, rustique, heartlandPizza, angelina, sarasArtisanGelato];

// Map through all items to create content item
goToItems.map((item) => {
    createContentItem(item);
})


// Create content item
function createContentItem(content){
    const goToContainer = document.querySelector('.go-to-container');

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


