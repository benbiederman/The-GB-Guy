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

const ticketGuide = new lgReview(`Green Bay Packers Ticket Guide`, '../img/locals-guide/misc/packers-tickets.jpg', `Green Bay Packers tickets`, '../locals-guide/green-bay-packers-ticket-guide.html', null);

const hotelGuide = new lgReview(`Green Bay Hotel Guide`, '../img/locals-guide/misc/green-bay-hotel.jpg', `Lodge Kohler hotel`, '../locals-guide/green-bay-hotel-guide.html', null);

const parkingGuide = new lgReview(`Lambeau Field Parking Guide`, '../img/locals-guide/misc/lambeau-field-parking.jpg', `Lambeau Field Parking Lot`, '../locals-guide/lambeau-field-parking-guide.html', null);

const tailgatingGuide = new lgReview(`Lambeau Field Tailgating Guide`, '../img/locals-guide/misc/lambeau-field-tailgating.jpg', `Grill with hot coals`, '../locals-guide/lambeau-field-tailgating-guide.html', null);

const miscItems = [ticketGuide, hotelGuide, parkingGuide, tailgatingGuide];

// Map through all items to create content item
miscItems.map((item) => {
    createContentItem(item);
})

// Create content item
function createContentItem(content){
    const miscContainer = document.querySelector('.misc-container');

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
