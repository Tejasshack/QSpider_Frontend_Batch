const heading = document.createElement("h1");
heading.textContent = "Jai Shree Ram🙏";

const print = document.createElement("h2");
print.textContent = "Hello World❤️";
heading.style.color = "white";
print.style.color = "white";

//Insert an element
// 1. appendChild()

const body = document.body;
body.appendChild(heading);

body.appendChild(print);
body.style.backgroundColor = "black";


// Insert Adjacent Element 

// div.insertAdjacentElement(___________, ___________)
// Fisrt parameter "before begin" , "p1 " => element which need to be rendered


const first = document.createElement("p")
const last = document.createElement("p")

first.textContent = "Paragraph First child 1"
last.textContent ="Paragraph First child 4"


const div = document.querySelector('#box')


div.in