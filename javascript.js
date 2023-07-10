const container = document.getElementById("grid-container");

function makeGrid(row,col) {
  container.style.setProperty("--grid-rows", row);
  container.style.setProperty("--grid-cols", col);
  for (i = 0; i < (row * col); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function colorChange() {
    	cell.classList.add("colorChange");
    })
  }
}

makeGrid(16, 16);

const button = document.getElementById("button");

button.addEventListener("click", function changeSize(size) {
  size = prompt("Enter a value between 0 to 101",16);
  container.innerHTML = "";
  if (size <= 0 || size > 100) {
 		makeGrid(16, 16);
    alert("Only type values between 1 to 100");
  } else {
    makeGrid(size,size);
  }
});
