let size = 16;
function Draw(size) {
    const board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let square = size * size;
    for (let i = 0; i < square; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.addEventListener("mouseover", () =>
        {
            div.style.backgroundColor = color;
        });
        board.insertAdjacentElement("beforeend", div)
    }
}

let color = "black"
function colorDiv(color_selected) {
    if (color_selected === "random") {
        color = `hsla(${Math.random() * 360}, 100%, 50%, 1)`
    }
    else {
        color = color_selected
    }
}

function reset() {
    const boardDiv = document.querySelector(".board");
  
    const nestedDivs = boardDiv.querySelectorAll("div");
    nestedDivs.forEach(div => {
        div.style.backgroundColor = "white";
    });
    size = parseInt(prompt("Enter Size: ", "16"));
    nestedDivs.forEach(div => {
        boardDiv.removeChild(div)
    });
    Draw(size)
}



Draw(size)


