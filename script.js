const el = document.querySelector(".flex-container-3");
const rowButton = document.querySelector(".row-button")


function changeRow() {
    el.classList.toggle("flex-row");
}

rowButton.addEventListener("click", changeRow);


