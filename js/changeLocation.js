const locations = document.querySelectorAll('.content-location');
const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');

let active = 0;

function filterLocations(index){
    locations.forEach((location) => {
        location.style.display = 'none';
    })

    locations[index].style.display = 'flex';
}

backBtn.addEventListener('click', (e) => {
    if(active === 0){
        active = locations.length -1;
        filterLocations(active);
    } else {
        active--
        filterLocations(active);
    }
})

nextBtn.addEventListener('click', () => {
    if(active === locations.length -1) {
        active = 0;
        filterLocations(active)
    } else {
        active++;
        filterLocations(active);
    }
})

filterLocations(active);