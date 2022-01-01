const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
let colorGrid = document.querySelector("#colorGrid");
let colorInput = document.querySelector("#colorInput");
newRow = document.createElement("div");
newRow.className = "row";
colorGrid.appendChild(newRow);

const form = document.querySelector("#colorAddForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    newColor = colorInput.value;
    let match = newColor.match(/#(?:[0-9a-fA-F]{3}){1,2}/g);
    if (match != null) {
        for (let m of match) {
            let notDuplicate = true;
            let currentCards = document.querySelectorAll(".color-box");
            for (let card of currentCards) {
                let hex = rgb2hex(card.style.backgroundColor);
                if (hex === m) {
                    notDuplicate = false;
                    break;
                }
            }
            if (notDuplicate) {
                newRow.innerHTML += `<div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                <div class="card my-3">
                    <div class="card-header color-box" style="background-color: ${m};">
                    </div>
                    <div class="card-body row py-2 hex-text">
                        <h5 class="card-title col-10">${m}</h5>
                        <button class="btn btn-light px-1 py-1 col-2" onclick="parentNode.parentNode.parentNode.remove();"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></button>
                    </div>
                </div>`
            } else {

            }
        }
        colorInput.value = "";
    } else {

    }
})

function closeCard(card) {
    console.log("peanuts");
    console.log(card);
}

function closeCard() {
    console.log("cashews");
    console.log(this);
}