const searchInput = document.querySelector('.search-input');
const serachBtn = document.querySelector('.search-btn');
const contentContainer = document.querySelector('.content-container');
const xBtn = document.querySelector('.x-btn');
const searchBtn = document.querySelector('.search-btn');


// Local's Guide Data
class lgReview {
    constructor(name, img, imgDesc, src, searchTerms) {
        this.name = name;
        this.img = img;
        this.imgDesc = imgDesc;
        this.src = src;
        this.searchTerms = searchTerms;
    }
}

const ticketGuide = new lgReview(`Green Bay Packers Ticket Guide`, '../img/locals-guide/misc/packers-tickets.jpg', `Green Bay Packers tickets`, '../locals-guide/green-bay-packers-ticket-guide.html', ["ticket guide", "packers tickets"]);

const hotelGuide = new lgReview(`Green Bay Hotel Guide`, '../img/locals-guide/misc/green-bay-hotel.jpg', `Lodge Kohler hotel`, '../locals-guide/green-bay-hotel-guide.html', ["hotel guide"]);

const parkingGuide = new lgReview(`Lambeau Field Parking Guide`, '../img/locals-guide/misc/lambeau-field-parking.jpg', `Lambeau Field Parking Lot`, '../locals-guide/lambeau-field-parking-guide.html', ["packers parking", "parking guide", "lambeau field parking"]);

const tailgatingGuide = new lgReview(`Lambeau Field Tailgating Guide`, '../img/locals-guide/misc/lambeau-field-tailgating.jpg', `Grill with hot coals`, '../locals-guide/lambeau-field-tailgating-guide.html', ["packers tailgating", "tailgating", "lambeau field tailgating"]);

const content = [ticketGuide, hotelGuide, parkingGuide, tailgatingGuide];

// Generate initial content
createLocalsGuide(content)


// Creates content
function createLocalsGuide(arr){

    let localsGuide = content;

    // Generate content by filtered list
    localsGuide.map((item) => {
        createContentItem(item);
    })

}

// Create content item
function createContentItem(content){
    const contentItem = document.createElement('article');
    contentItem.className = 'content-item';
    contentContainer.appendChild(contentItem);
    contentItem.tabIndex = 0;

    // Route to page on click
    contentItem.addEventListener('click', () => {
        window.location.href = content.src;
    })

    // Route to page on enter key
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

// Create Null Search Results
function noResults(){
    const noResultsSection = document.createElement('div');
    noResultsSection.className = 'null-search';
    contentContainer.appendChild(noResultsSection);

    const header = document.createElement('p');
    header.textContent = "Ope.";
    noResultsSection.appendChild(header);

    const p1 = document.createElement('p');
    p1.textContent = "Your search results came back about as empty as the trophy case in U.S. Bank Stadium.";
    noResultsSection.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = "Please adjust your search";
    noResultsSection.appendChild(p2);

}

// Search Function
searchInput.addEventListener('input', (e) => {
    let search = e.target.value;
    let searchResults = [];
    xBtn.style.display = 'block';

    if(search.length == 0){
        contentContainer.innerHTML = '';
        searchResults = content;
        createLocalsGuide(searchResults)
        xBtn.style.display = 'none';
    } else {
        content.map((c) => {
            for(let i = 0; i < c.searchTerms.length; i++ ){
                if(c.searchTerms[i].toLowerCase().includes(search.toLowerCase())){
                    searchResults = [...searchResults, {c}.c];
                }
            }
        })
    }

    // Filter duplicates in array
    const uniqueResults = [...searchResults.reduce((map, obj) => map.set(obj.name, obj) , new Map()).values()];

    // Check if results, if no result product no result / else create results
    if( uniqueResults.length === 0 && search.length !== 0) {
        contentContainer.innerHTML = '';
        noResults()
    } else {
        contentContainer.innerHTML = '';
        for(let i = 0; i < uniqueResults.length; i++){
            createContentItem(uniqueResults[i])
        }
    }

})

// Prevent refresh upon Go button click
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

xBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = '';
    contentContainer.innerHTML = '';
    xBtn.style.display = 'none';
    createLocalsGuide(content);
})