const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const codeSnip= document.querySelector("#cta-img");
codeSnip.src = "img/header-img.png";


let navMenu = document.querySelectorAll('a');
navMenu[0].textContent = siteContent['nav']['nav-item-1'];
navMenu[1].textContent = siteContent['nav']['nav-item-2'];
navMenu[2].textContent = siteContent['nav']['nav-item-3'];
navMenu[3].textContent = siteContent['nav']['nav-item-4'];
navMenu[4].textContent = siteContent['nav']['nav-item-5'];
navMenu[5].textContent = siteContent['nav']['nav-item-6'];

const dom= document.querySelector('h1');
dom.textContent = siteContent['cta']['h1'];
dom.style.width= '11rem';
dom.style.textAlign= 'center';
dom.style.marginRight= "5rem"
const ctaBox= document.querySelector('button');
ctaBox.textContent = siteContent['cta']['button'];
ctaBox.style.marginRight="2rem";
let mainh4 = document.querySelectorAll('h4');
mainh4[0].textContent = siteContent['main-content']['features-h4'];
mainh4[1].textContent = siteContent['main-content']['about-h4'];
mainh4[2].textContent = siteContent['main-content']['services-h4'];
mainh4[3].textContent = siteContent['main-content']['product-h4'];
mainh4[4].textContent = siteContent['main-content']['vision-h4'];

let mainP= document.querySelectorAll('p');
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];


const midImg= document.querySelector("#middle-img");
midImg.src = "img/mid-page-accent.jpg";

let contacth4 = document.querySelectorAll('h4');
contacth4[5].textContent = siteContent['contact']['contact-h4'];

let contactP= document.querySelectorAll('p');
contactP[5].textContent = siteContent['contact']['address'];

contactP[6].textContent = siteContent['contact']['phone'];
contactP[7].textContent = siteContent['contact']['email'];

let footerP= document.querySelectorAll('p');
footerP[8].textContent = siteContent['footer']['copyright'];

const contact = document.querySelector('.contact');
contact.style.width = '9rem';
