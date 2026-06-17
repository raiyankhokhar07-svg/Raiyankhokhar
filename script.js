/* ========================= */
/* LOADING SCREEN */
/* ========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        navbar.style.background =
        "rgba(0,0,0,0.95)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.5)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.8)";

        navbar.style.boxShadow =
        "none";

    }

});

/* ========================= */
/* HERO BUTTON EFFECT */
/* ========================= */

const buttons = document.querySelectorAll(
".btn1,.btn2,.gold-btn"
);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0px)";

});

});

/* ========================= */
/* COUNTER ANIMATION */
/* ========================= */

const counters =
document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

let start = 0;

const target =
parseInt(counter.innerText);

const speed = target / 100;

const update = ()=>{

if(start < target){

start += speed;

counter.innerText =
Math.floor(start) + "+";

requestAnimationFrame(update);

}

else{

counter.innerText =
target + "+";

}

};

update();

});

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const revealElements =
document.querySelectorAll(
".studio-card,.collection-card,.portfolio-grid img,.price-card,.feature"
);

const revealOnScroll = ()=>{

revealElements.forEach(item=>{

const windowHeight =
window.innerHeight;

const revealTop =
item.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

item.classList.add("active");

}

});

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ========================= */
/* FLOATING GOLD PARTICLES */
/* ========================= */

const particles =
document.querySelector(".particles");

for(let i=0;i<40;i++){

const dot =
document.createElement("span");

dot.style.position = "absolute";

dot.style.width =
Math.random()*6+2+"px";

dot.style.height =
dot.style.width;

dot.style.background =
"#d4af37";

dot.style.borderRadius =
"50%";

dot.style.left =
Math.random()*100+"%";

dot.style.top =
Math.random()*100+"%";

dot.style.opacity =
Math.random();

particles.appendChild(dot);

}

/* ========================= */
/* PORTFOLIO HOVER ZOOM */
/* ========================= */

document.querySelectorAll(
".portfolio-grid img"
).forEach(img=>{

img.addEventListener(
"mousemove",
()=>{

img.style.transform =
"scale(1.08)";

});

img.addEventListener(
"mouseleave",
()=>{

img.style.transform =
"scale(1)";

});

});

/* ========================= */
/* AI CHAT DEMO */
/* ========================= */

const aiMessages = [

"Generating luxury design...",

"Analyzing fashion trends...",

"Creating premium outfit...",

"Applying AI styling...",

"Generating runway concept..."

];

setInterval(()=>{

const ai =
document.querySelector(".ai");

if(ai){

ai.innerHTML =
aiMessages[
Math.floor(
Math.random()
* aiMessages.length
)
];

}

},3000);

/* ========================= */
/* SMOOTH SCROLL */
/* ========================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener(
'click',

function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});

/* ========================= */
/* GOLD GLOW EFFECT */
/* ========================= */

setInterval(()=>{

const glow =
document.querySelector(
".circle-glow"
);

if(glow){

glow.style.opacity =
Math.random()*0.3+0.15;

}

},1000);

console.log(
"FashionVerse AI Premium Loaded"
);