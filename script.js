const gameArea = document.querySelector("#game");
const form = document.querySelector("#numberSelectionForm");

function prepareGame(numberOfBulbs) {

    for (let i = numberOfBulbs - 1; i >= 0; i--) {
        createBulb();
    }
}


function changeColorOfBulb() {
   this.parentNode.classList.toggle("clicked")
}

function getNumbersOfBulbsFromForm() {
    let numberOfBulbs = 0;
    for (let i = 0; i < form.length; i++) {
        if (form[i].checked) {
            numberOfBulbs = form[i].value
        }
    }
    return numberOfBulbs;
}

function startGame() {
   let numberOfBulbs = getNumbersOfBulbsFromForm();
    document.getElementById("startGamePanel").style.display = 'none';

    prepareGame(numberOfBulbs);
}

function createBulb(){
   const bulb =  document.createElement("div");
    bulb.classList.add("bulb");
    const btn = createButton();
    bulb.appendChild(btn);
    gameArea.appendChild(bulb);
}


function createButton(){
    const button = document.createElement("div");
    button.classList.add("button");
    button.onclick = changeColorOfBulb;
    return button
}
