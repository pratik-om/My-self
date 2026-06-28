// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

        nav.classList.remove("active");
    });
});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "⬆";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// HERO TYPING EFFECT
// ===============================

const typingElement = document.querySelector(".hero-text h2");

const words = [

"AI Developer",

"Web Developer",

"Python Programmer",

"Machine Learning Enthusiast",

"Frontend Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;
        }

    }else{

        typingElement.textContent =
        current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 60 : 120);

}

type();

// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".box h4");

counters.forEach(counter=>{

let started=false;

window.addEventListener("scroll",()=>{

const top=counter.getBoundingClientRect().top;

if(top<window.innerHeight && !started){

started=true;

let count=0;

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

const interval=setInterval(()=>{

count++;

counter.innerText=count+"+";

if(count>=target){

clearInterval(interval);

}

},30);

}

});

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("🚀 Portfolio Loaded Successfully");
