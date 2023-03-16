// bg-color should be changed according to selcted block
// scrolling to a block also changes its bg-color
// scroll input 
// keys input = up and down keys
// set background size of cards to full viewport
// index font to bold when block is active

let bgChange = document.querySelector(".wrapper");

let link6 = document.querySelector("#link-6");
let link5 = document.querySelector("#link-5");
let link4 = document.querySelector("#link-4");
let link3 = document.querySelector("#link-3");
let link2 = document.querySelector("#link-2");
let link1 = document.querySelector("#link-1");

link6.onclick = () => (bgChange.style.backgroundColor = "#fff");
link5.onclick = () => (bgChange.style.backgroundColor = "#00c1b5");
link4.onclick = () => (bgChange.style.backgroundColor = "#ff651a");
link3.onclick = () => (bgChange.style.backgroundColor = "#ffbe00");
link2.onclick = () => (bgChange.style.backgroundColor = "#1d3fbb");
link1.onclick = () => (bgChange.style.backgroundColor = "#e30512");
