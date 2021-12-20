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

const copperRock = new lgReview(`Copper Rock Coffee`, '../img/locals-guide/eat/lunch/copper-state-brewing.jpg', `Copper State Brewing Co store front`, '../locals-guide/copper-state-brewing.html', 4.4);

const dailyBuzz = new lgReview(`Daily Buzz Espresso Bar`, '../img/locals-guide/drink/coffee/daily-buzz.jpg', `A latte with a stamped logo of Daily Buzz Espress Bar`, '../locals-guide/daily-buzz.html', 4.1);

const kavarna = new lgReview(`Kavarna Coffeehouse`, '../img/locals-guide/drink/coffee/kavarna-coffeehouse.jpg', `Kavarna Coffeehouse bagged coffee`, '../locals-guide/kavarna-coffeehouse.html', 4.3);

const lunaCoffee = new lgReview(`Luna Coffee Roasters`, '../img/locals-guide/drink/coffee/luna-coffee-roasters.jpg', `Luna Coffee Roasters store front`, '../locals-guide/luna-coffee-roasters.html', 4.75);

const theExchange = new lgReview(`The Exchange`, '../img/locals-guide/drink/coffee/the-exchange.jpg', `The Exchange coffee flight`,'../locals-guide/the-exchange.html', 4.1);


const content = [copperRock, dailyBuzz, kavarna, lunaCoffee, theExchange];

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