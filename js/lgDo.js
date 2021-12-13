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

const lambeauField = new lgReview(`Lambeau Field`, `../img/locals-guide/see/lambeau-field.jpg`, `Lambeau Field at night`, '../locals-guide/lambeau-field.html', ["lambeau field", "green bay", "free"]);

const heritageTrail = new lgReview(`Packers Heritage Trail`, `../img/locals-guide/see/heritage-trail.jpg`, `Curly Lambeau's house`, '../locals-guide/packers-heritage-trail.html', ["packers heritage trail", "heritage trail", "free"]);

const titletownDistrict = new lgReview(`Titletown District`, `../img/locals-guide/see/titletown-district.jpg`, `Titletown District football field`, '../locals-guide/titletown-district.html', ["packers titletown district", "titletown district", "green bay", "free"]);

const bayBeach = new lgReview(`Bay Beach`, `../img/locals-guide/see/bay-beach.jpg`, `Zippin Pippin rollercoaster`, '../locals-guide/bay-beach.html', ["bay beach", "green bay"]);

const cityDeck = new lgReview(`CityDeck`, `../img/locals-guide/see/citydeck.jpg`, `CityDeck with a large cargo ship`, '../locals-guide/citydeck.html', ["citydeck", "free", "green bay"]);

const content = [lambeauField, heritageTrail, titletownDistrict, bayBeach, cityDeck];

// Generate initial content
createLocalsGuide(content)


// Creates content
function createLocalsGuide(arr){

    let localsGuide = arr;

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