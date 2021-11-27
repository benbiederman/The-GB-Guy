// Local's Guide Data
class lgReview {
    constructor(name, img, src, imgDesc, rating, seachTerms) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.rating = rating;
        this.searchTerms = seachTerms;
    }
}

const lambeauField = new lgReview(`Lambeau Field`, `../img/locals-guide/see/lambeau-field.jpg`, `Lambeau Field at night`, '../locals-guide/lambeau-field.html', null, ["lambeau field", "green bay", "free"]);

const heritageTrail = new lgReview(`Packers Heritage Trail`, `../img/locals-guide/see/heritage-trail.jpg`, `Curly Lambeau's house`, '../locals-guide/packers-heritage-trail.html', null, ["packers heritage trail", "heritage trail", "free"]);

const titletownDistrict = new lgReview(`Titletown District`, `../img/locals-guide/see/titletown-district.jpg`, `Titletown District football field`, '../locals-guide/titletown-district.html', null, ["packers titletown district", "titletown district", "green bay", "free"]);

const bayBeach = new lgReview(`Bay Beach`, `../img/locals-guide/see/bay-beach.jpg`, `Zippin Pippin rollercoaster`, '../locals-guide/bay-beach.html', null, ["bay beach", "green bay"]);

const cityDeck = new lgReview(`CityDeck`, `../img/locals-guide/see/citydeck.jpg`, `CityDeck with a large cargo ship`, '../locals-guide/citydeck.html', null, ["citydeck", "free", "green bay"]);

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

    if(content.rating){
        const contentRating = document.createElement('p');
        contentRating.textContent = `${content.rating} / 5.0`;
        contentItem.appendChild(contentRating);
    }

    const contentLink = document.createElement('p');
    contentLink.textContent = '- Read More -';
    contentItem.appendChild(contentLink);
}