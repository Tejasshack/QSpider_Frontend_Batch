// To target the body
// document.body

const body = document.body;
body.style.backgroundColor = "violet";

// To target the element by Id
const element = document.getElementById("root");
element.style.color = "black";
element.style.fontSize = "100px";
element.style.cssText = "color:wheat,font-size:100px,padding:20px";
// element.appendChild("h2")

// To target Multiple elements by the help of class name
const classElements = document.getElementsByClassName("item"); //Takes and Send Html collection ,and we get and impure object
console.log(classElements);
classElements[0].style.cssText = "color:yellow";
classElements[3].style.cssText = "color:yellow";

// Targeting elements by Tag Name
const tags = document.getElementsByTagName("div");
console.log("Targeted Tags" + tags);
tags["parent"].style.cssText = "background-Color : Grey , color:red";






const div = document.querySelector(".item");
console.log(div);




