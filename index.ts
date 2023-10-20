// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i: number;
for (i = 0; i < myNodelist.length; i++) {
  const span: HTMLElement = document.createElement("SPAN");
  const txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (i = 0; i < closeButtons.length; i++) {
  let closeButton: Element = closeButtons[i];
  closeButtons[i].addEventListener("click", (): void => {
    const li = closeButton.parentElement;
    if (li) li.style.display = "none";
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector("ul");
if (list !== null) {
  list.addEventListener(
    "click",
    function (ev: MouseEvent) {
      if (ev.target !== null) {
        let target = <HTMLElement>ev.target;
        if (target.tagName === "LI") {
          target.classList.toggle("checked");
        }
      }
    },
    false
  );
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
  if (!input) {
    return;
  }
  let inputValue = input.value;
  const textNode: Text = document.createTextNode(inputValue);
  li.appendChild(textNode);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const myUL: HTMLElement | null = document.getElementById("myUL");
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
