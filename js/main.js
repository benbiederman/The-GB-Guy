const menu = document.querySelector(".nav-list ul");
const textBtn = document.querySelector('.text-btn');
const emailBtn = document.querySelector('.email-btn');
const headerLogo = document.querySelector('.logo img');

// Navigation Slider for Mobile
function navSlide() {
  const header = document.querySelector(".header");
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");

  menuBtn.addEventListener("click", (e) => {
    navList.classList.toggle("nav-list-active");
    navList.style.transition = "all .5s ease";

    //Add/Remove solid header upon menu opening
    if (navList.classList.contains("nav-list-active")) {
      menuBtn.innerHTML = "<p>Close</p>";
      header.classList.add("header-active");
    } else if (!navList.classList.contains("neav-list-active")) {
      menuBtn.innerHTML = "<p>Menu</p>";
      if (window.scrollY === 0) {
        header.classList.remove("header-active");
      }
    }

    //Navigation Link fade in
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });

  //Add solid header upon scroll
  window.addEventListener("scroll", () => {
    if (navList.classList.contains("nav-list-active") || window.scrollY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
}

function navListMenu() {
  const menuOptions = [
    {
      text: "Home",
      src: "../index.html",
    },
    {
      text: "Local's Guide",
      src: "../locals-guide.html",
    },
    {
      text: "Podcast",
      src: "../podcast.html",
    }
  ];

  for (let i = 0; i < menuOptions.length; i++) {
    createNavList(menuOptions[i].text, menuOptions[i].src, menu);
  }
  navSlide();
}

function createNavList(text, src, parent) {
  const li = document.createElement("li");
  li.textContent = text;
  parent.appendChild(li);

  li.addEventListener("click", () => {
    window.location = src;
  });
}

// Logo click to Index
headerLogo.addEventListener('click', () => {
  window.location.href = "../index.html";
})

//Adds Copyright in Footer
function generateCopyright(){
  const copyright = document.querySelector('.copyright p');
  let year = new Date().getFullYear();

  copyright.innerHTML = `The Green Bay Guy &copy ${year}`
}

//Text button function
textBtn.addEventListener('click', () => {
  window.location.href = "sms:9207703933";
})

//Email button function
emailBtn.addEventListener('click', () => {
  window.location.href= "mailto:thegreenbayguy@gmail.com"
})

navListMenu();
generateCopyright();


