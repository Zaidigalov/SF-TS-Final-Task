"use strict";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeButtons = document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButtons[i].addEventListener("click", () => {
        const li = closeButton.parentElement;
        if (li)
            li.style.display = "none";
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
if (list !== null) {
    list.addEventListener("click", function (ev) {
        if (ev.target !== null) {
            let target = ev.target;
            if (target.tagName === "LI") {
                target.classList.toggle("checked");
            }
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    if (!input) {
        return;
    }
    let inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        const myUL = document.getElementById("myUL");
        if (!myUL) {
            return;
        }
        myUL.appendChild(li);
    }
    if (!inputValue) {
        return;
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
