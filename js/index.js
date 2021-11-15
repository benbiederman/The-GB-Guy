const landingPageBtn = document.querySelector('.index-landing-btn');
const textBtn = document.querySelector('.text-btn');
const emailBtn = document.querySelector('.email-btn');


//Landing Page Button Action
landingPageBtn.addEventListener('click', () => {
    window.location = "locals-guide.html";
})

textBtn.addEventListener('click', () => {
    window.location.href = "sms:9207703933";
})

emailBtn.addEventListener('click', () => {
    window.location.href= "mailto:thegreenbayguy@gmail.com"
})

