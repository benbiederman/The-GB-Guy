const currentHeader = document.querySelector('.content-article h1');
const contentContainer = document.querySelector('.content-container');

// Local's Guide Data
class lgReview {
    constructor(name, img, imgDesc, src, rating) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
    }
}

const ticketGuide = new lgReview(`Green Bay Packers Ticket Guide`, '../img/locals-guide/misc/packers-tickets.jpg', `Green Bay Packers tickets`, '../locals-guide/green-bay-packers-ticket-guide.html');

const hotelGuide = new lgReview(`Green Bay Hotel Guide`, '../img/locals-guide/misc/green-bay-hotel.jpg', `Lodge Kohler hotel`, '../locals-guide/green-bay-hotel-guide.html');

const parkingGuide = new lgReview(`Lambeau Field Parking Guide`, '../img/locals-guide/misc/lambeau-field-parking.jpg', `Lambeau Field Parking Lot`);

const tailgatingGuide = new lgReview(`Lambeau Field Tailgating Guide`, '../img/locals-guide/misc/lambeau-field-tailgating.jpg', `Grill with hot coals`, '../locals-guide/lambeau-field-tailgating-guide.html');

const content = [ticketGuide, hotelGuide, parkingGuide, tailgatingGuide];


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
    } while (suggestions.length != 3);

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