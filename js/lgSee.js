// Local's Guide Data
class lgReview {
    constructor(name, img, imgDesc, src, rating, searchTerms) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.searchTerms = searchTerms;
    }
}

const lambeauField = new lgReview(`Lambeau Field`, `../img/locals-guide/see/lambeau-field.jpg`, `Lambeau Field at night`, '../locals-guide/lambeau-field.html', ["lambeau field", "green bay", "free"]);

const heritageTrail = new lgReview(`Packers Heritage Trail`, `../img/locals-guide/see/heritage-trail.jpg`, `Curly Lambeau's house`, '../locals-guide/packers-heritage-trail.html', ["packers heritage trail", "heritage trail", "free"]);

const titletownDistrict = new lgReview(`Titletown District`, `../img/locals-guide/see/titletown-district.jpg`, `Titletown District football field`, '../locals-guide/titletown-district.html', ["packers titletown district", "titletown district", "green bay", "free"]);

const bayBeach = new lgReview(`Bay Beach`, `../img/locals-guide/see/bay-beach.jpg`, `Zippin Pippin rollercoaster`, '../locals-guide/bay-beach.html', ["bay beach", "green bay"]);

const cityDeck = new lgReview(`CityDeck`, `../img/locals-guide/see/citydeck.jpg`, `CityDeck with a large cargo ship`, '../locals-guide/citydeck.html', ["citydeck", "free", "green bay"]);

const items = [lambeauField, heritageTrail, titletownDistrict, bayBeach, cityDeck];

items.map((item) => {
    createContentItem(item);
})


// Create content item
function createContentItem(content){
    const contentContainer = document.querySelector('.content-container');

    const contentItem = document.createElement('article');
    contentItem.className = 'content-item';
    contentContainer.appendChild(contentItem);

    contentItem.addEventListener('click', () => {
        window.location.href = content.src;
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

    const contentLink = document.createElement('p');
    contentLink.textContent = '- Read More -';
    contentItem.appendChild(contentLink);
}