const currentHeader = document.querySelector('.content-article h1');
const contentContainer = document.querySelector('.content-container');

// Local's Guide Data
class lgReview {
    constructor(name, img, imgDesc, src) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
    }
}

const lambeauField = new lgReview(`Lambeau Field`, `../img/locals-guide/see/lambeau-field.jpg`, `Lambeau Field at night`, '../locals-guide/lambeau-field.html');

const heritageTrail = new lgReview(`Packers Heritage Trail`, `../img/locals-guide/see/heritage-trail.jpg`, `Curly Lambeau's house`, '../locals-guide/packers-heritage-trail.html');

const titletownDistrict = new lgReview(`Titletown District`, `../img/locals-guide/see/titletown-district.jpg`, `Titletown District football field`, '../locals-guide/titletown-district.html');

const bayBeach = new lgReview(`Bay Beach`, `../img/locals-guide/see/bay-beach.jpg`, `Zippin Pippin rollercoaster`, '../locals-guide/bay-beach.html');

const cityDeck = new lgReview(`CityDeck`, `../img/locals-guide/see/citydeck.jpg`, `CityDeck with a large cargo ship`, '../locals-guide/citydeck.html');

const content = [lambeauField, heritageTrail, titletownDistrict, bayBeach, cityDeck];

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