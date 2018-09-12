const gameArea = document.querySelector("#game");
const form = document.querySelector("#numberSelectionForm");

function prepareGame(numberOfBulbs) {
    let generatedRandomNumberToConvert = generateRandomNumber(numberOfBulbs);
    createPanelWithGeneratedNumber(generatedRandomNumberToConvert);
    for (let i = numberOfBulbs - 1; i >= 0; i--) {
        createBulb(i);
    }
}

function createPanelWithGeneratedNumber(generatedNumber) {
    const panel = document.createElement("div");
    panel.classList.add("generatedNumberPanel");
    const panelText = document.createElement("label");
    panelText.setAttribute("id", "generatedNumber");
    panelText.setAttribute("value", generatedNumber);
    panelText.innerText = "Decimal number: " + generatedNumber;
    panel.appendChild(panelText);
    gameArea.appendChild(panel);
}

function changeColorOfBulb() {
    this.parentNode.firstChild.classList.toggle("clicked");
    let decimalNumberToGuess = document.getElementById("generatedNumber").getAttribute("value");
    console.log(decimalNumberToGuess);
    let bulbs = document.querySelectorAll(".bulb");
    let sum = 0;
    for(let bulb of bulbs) {
        if ( bulb.firstChild.className  === "far fa-lightbulb clicked") {
            sum += +bulb.getAttribute("value");
        }
    }
    if(sum === +decimalNumberToGuess) {
        console.log("got it");
    }
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
    const iTag = document.createElement("i");
    iTag.classList.add("far", "fa-lightbulb");
    bulb.appendChild(iTag);
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
