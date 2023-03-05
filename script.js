const el = document.querySelector(".flex-container-3");
const rowButton = document.querySelector(".row-button")
const rowReverseButton = document.querySelector(".row-reverse-button");
const columnButton = document.querySelector(".column-button");
const columnReverseButton = document.querySelector("column-reverse-button");


function changeRow() {
    el.classList.add("flex-row");
}

function changeRowReverse() {
    el.classList.add("flex-row-reverse");
}

function changeColumn() {
    el.classList.add("flex-column");
}



rowButton.addEventListener("click", changeRow);
rowReverseButton.addEventListener("click", changeRowReverse);
columnButton.addEventListener("click", changeColumn);

