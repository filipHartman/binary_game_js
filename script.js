const gameArea = document.querySelector("#game");
const form = document.querySelector("#numberSelectionForm");

function prepareGame(numberOfBulbs) {
    let generatedRandomNumberToConvert = generateRandomNumber(numberOfBulbs);
    console.log(generatedRandomNumberToConvert);
    createPanelWithGeneratedNumber(generatedRandomNumberToConvert);
    for (let i = numberOfBulbs - 1; i >= 0; i--) {
        createBulb(i);
    }
}

function createPanelWithGeneratedNumber(generatedNumber) {
    const panel = document.createElement("div");
    panel.classList.add("generatedNumberPanel");
    const panelText = document.createElement("label");
    panelText.innerText = "Decimal number: " + generatedNumber;
    panel.appendChild(panelText);
    gameArea.appendChild(panel);
}

function changeColorOfBulb() {
   this.parentNode.classList.toggle("clicked");

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

function generateRandomNumber(numberOfBulbs) {
    return Math.floor(Math.random() * Math.pow(2, numberOfBulbs - 1) + 1);
}

function createBulb(value){
    const bulb =  document.createElement("div");
    bulb.classList.add("bulb");
    bulb.setAttribute("value", ""+Math.pow(2, value));
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
