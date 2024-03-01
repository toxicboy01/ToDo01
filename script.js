let UL = document.getElementById("inputListing");
let input = document.getElementById("fruits");

const storeName = "listOfTask";
let emptyArray = getTaskMemory();

function InputFunction(event) {
  event.preventDefault();
  let space = input.value.trim();

  if(space === "") {
    input.value = "";
    return;
}

  if (event.keyCode === 13) {
    emptyArray.unshift(input.value);

    input.value = "";
    UpdateDisplay();
  }
}

function UpdateDisplay() {
  UL.innerText = "";
  emptyArray.forEach((newValue, index) => {
    let generate = createElement(newValue, index);

    UL.append(generate);
  });
  storeinMemory();
}

function createElement(value, index) {
  const LI = document.createElement("li");
  const span = document.createElement("span");
  LI.innerText = value;
  span.innerHTML = `&times`;
  LI.append(span);
  span.style.cursor = "pointer";
  span.onclick = Delete.bind(null, index);
  return LI;
}

function Delete(index) {
  emptyArray.splice(index, 1);
  UpdateDisplay();
}

function storeinMemory() {
  localStorage.setItem(storeName, emptyArray);
}

function getTaskMemory() {
  const storeedValue = localStorage.getItem(storeName);

  if (storeedValue) {
    return storeedValue.split(",");
  } else {
    return [];
  }
}
UpdateDisplay();
