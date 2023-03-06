const el = document.querySelector(".flex-container-3");
const rowButton = document.querySelector(".row-button")
const rowReverseButton = document.querySelector(".row-reverse-button");
const columnButton = document.querySelector(".column-button");
const columnReverseButton = document.querySelector(".column-reverse-button");


function changeRow(event) {
    el.classList.toggle("flex-row");
    
    const clickedButton = event.target;

    // Toggle the class "active" on all buttons except the clicked one
    if (clickedButton !== rowButton) {
        rowButton.classList.remove("active");
      }
      if (clickedButton !== rowReverseButton) {
        rowReverseButton.classList.remove("active");
      }
      if (clickedButton !== columnButton) {
        columnButton.classList.remove("active");
      }
      if (clickedButton !== columnReverseButton) {
        columnReverseButton.classList.remove("active");
      }
      
      // Toggle the class "active" on the clicked button
      clickedButton.classList.toggle("active");
    
    



}

function changeRowReverse(event) {
    el.classList.toggle("flex-row-reverse");

}

function changeColumn(event) {
    el.classList.toggle("flex-column");
}

function changeColumnReverse() {
    el.classList.toggle("flex-column-reverse");

}

rowButton.addEventListener("click", changeRow);
rowReverseButton.addEventListener("click", changeRowReverse);
columnButton.addEventListener("click", changeColumn);
columnReverseButton.addEventListener("click", changeColumnReverse)











