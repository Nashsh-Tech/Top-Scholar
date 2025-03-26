import './styles/index.css';
import './styles/infinityslider.css';
import LOGO from './assets/logo.webp';
import SEC1L from './assets/section-1.webp';
import SEC1M from './assets/Section-1ma.webp';
import SEC2P1 from './assets/section-2.1.webp';
import SEC2P2 from './assets/section-2.2.webp';
import SEC2P3 from './assets/section-2.3.webp';
import SEC2P4 from './assets/section-2.4a.webp';
import SEC2P5 from './assets/section-2.5.webp';
import SEC2P6 from './assets/section-2.6.webp';
import SEC3P4 from './assets/4.png';
import SEC3P6 from './assets/6.png';
import SEC3P7 from './assets/7.png';
import SEC3P8 from './assets/8.png';
import SEC3P9 from './assets/9.png';
import SEC3P10 from './assets/10.png';
import SEC3P11 from './assets/11.png';
import SEC3P12 from './assets/12.png';
import SEC3P13 from './assets/13.png';
import SEC3P14 from './assets/14.png';
import SEC3P15 from './assets/15.png';
import SEC3P16 from './assets/16.png';
import SEC3P17 from './assets/17.png';

import SEC5L from './assets/section-3.1.webp';
import SEC5M from './assets/section-3.1m.webp';

import SEC4 from './assets/toggle-arrow.png';

import SEC6 from './assets/section-6.1.png';

import SEC8 from './assets/section-8.1.webp';

import FOI from './assets/instagram.png';
import FOF from './assets/facebook.png';
import FOT from './assets/twitter.png';
import FOL from './assets/linkedin.png';


const bootUp = () => {
    console.log("$dEvZuVeEe:= System Booting Up....");
    console.log("$dEvZuVeEe:= System Online....");
    console.log("$dEvZuVeEe:= System Begin Initialing....");
};
bootUp();

const navbarLogo = document.getElementById('navbar-logo') as HTMLImageElement;

const sec1L = document.getElementById('sec1L') as HTMLImageElement;
const sec1M = document.getElementById('sec1M') as HTMLImageElement;

const sec2p1 = document.getElementById('sec2p1') as HTMLImageElement;
const sec2p2 = document.getElementById('sec2p2') as HTMLImageElement;
const sec2p3 = document.getElementById('sec2p3') as HTMLImageElement;
const sec2p4 = document.getElementById('sec2p4') as HTMLImageElement;
const sec2p5 = document.getElementById('sec2p5') as HTMLImageElement;
const sec2p6 = document.getElementById('sec2p6') as HTMLImageElement;

const sec3p4 = document.getElementById('sec3p4') as HTMLImageElement;
const sec3p6 = document.getElementById('sec3p6') as HTMLImageElement;
const sec3p7 = document.getElementById('sec3p7') as HTMLImageElement;
const sec3p8 = document.getElementById('sec3p8') as HTMLImageElement;
const sec3p9 = document.getElementById('sec3p9') as HTMLImageElement;
const sec3p10 = document.getElementById('sec3p10') as HTMLImageElement;
const sec3p11 = document.getElementById('sec3p11') as HTMLImageElement;
const sec3p12 = document.getElementById('sec3p12') as HTMLImageElement;
const sec3p13 = document.getElementById('sec3p13') as HTMLImageElement;
const sec3p14 = document.getElementById('sec3p14') as HTMLImageElement;
const sec3p15 = document.getElementById('sec3p15') as HTMLImageElement;
const sec3p16 = document.getElementById('sec3p16') as HTMLImageElement;
const sec3p17 = document.getElementById('sec3p17') as HTMLImageElement;

const sec4 = document.getElementById('sec4') as HTMLImageElement;

const sec6 = document.getElementById('sec6') as HTMLImageElement;
const sec6m = document.getElementById('sec6m') as HTMLImageElement;

const foi = document.getElementById('foInstagram') as HTMLImageElement;
const fof = document.getElementById('foFacebook') as HTMLImageElement;
const fot = document.getElementById('foTwitter') as HTMLImageElement;
const fol = document.getElementById('foLinkedin') as HTMLImageElement;

navbarLogo.src = LOGO;

sec1L.src = SEC1L;
sec1M.src = SEC1M;

sec2p1.src = SEC2P1;
sec2p2.src = SEC2P2;
sec2p3.src = SEC2P3;
sec2p4.src = SEC2P4;
sec2p5.src = SEC2P5;
sec2p6.src = SEC2P6;

sec3p4.src = SEC3P4;
sec3p6.src = SEC3P6;
sec3p7.src = SEC3P7;
sec3p8.src = SEC3P8;
sec3p9.src = SEC3P9;
sec3p10.src = SEC3P10;
sec3p11.src = SEC3P11;
sec3p12.src = SEC3P12;
sec3p13.src = SEC3P13;
sec3p14.src = SEC3P14;
sec3p15.src = SEC3P15;
sec3p16.src = SEC3P16;
sec3p17.src = SEC3P17;

sec4.src = SEC4;

sec6.src = SEC6;
sec6m.src = SEC6;

foi.src = FOI;
fof.src = FOF;
fot.src = FOT;
fol.src = FOL;



const statsSec = document.getElementById('statsSec') as HTMLDivElement;
const contactSec = document.getElementById('secCon') as HTMLDivElement;
contactSec.style.backgroundImage = `url("${SEC8}")`;
const screenWidth = window.innerWidth;
console.log(screenWidth);

if(screenWidth <= 768){
    statsSec.style.backgroundImage = `url("${SEC5L}")`;
    console.log("mobile");
    
}
else if(screenWidth > 768){
    statsSec.style.backgroundImage = `url("${SEC5M}")`;
    console.log("lappy");
    
}




window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-md");
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white", "shadow-md");
    }
});


const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});

// Smooth Scroll for nav links
document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjusted for navbar height
            behavior: "smooth"
        });

        // Close mobile menu after clicking a link
        mobileMenu.classList.add("translate-x-full");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('founderToggle') as HTMLInputElement;
    const withoutTopScholarContent = document.querySelectorAll('.without-top-scholar');
    const withTopScholarContent = document.querySelectorAll('.with-top-scholar');

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Toggle is ON (With Top Scholar)
            withoutTopScholarContent.forEach(el => el.classList.add('hidden')); // Hide "Without" content
            withTopScholarContent.forEach(el => el.classList.remove('hidden')); // Show "With" content
        } else {
            // Toggle is OFF (Without Top Scholar)
            withoutTopScholarContent.forEach(el => el.classList.remove('hidden')); // Show "Without" content
            withTopScholarContent.forEach(el => el.classList.add('hidden')); // Hide "With" content
        }
    });
});

const enrollNowBtn = document.getElementById('enrollNow');
enrollNowBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    window.location.href = './signin.html';
})