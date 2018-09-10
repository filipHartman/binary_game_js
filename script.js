let buttons = document.querySelectorAll('.button');

function prepareGame(numberOfBulbs) {
    let gameContainer = document.getElementById('game');
    let htmlToCreateBulbs = '<div id="bulbsContainer">';
    let htmlToCreateButtons = '<div id="buttonsContainer">';

    for (let i = numberOfBulbs - 1; i >= 0; i--) {
        let bulbId = 'bulb' + i;
        let buttonId = 'button' + i;
        htmlToCreateBulbs += '<span class="bulb" id="' + bulbId + '"></span>';
        htmlToCreateButtons += '<span class="button" id="' + buttonId + '" onclick="changeColorOfBulb('+ bulbId + ')"></span>';
    }

    htmlToCreateBulbs +='</div>';
    htmlToCreateButtons +='</div>';

    gameContainer.innerHTML= htmlToCreateBulbs + htmlToCreateButtons;

}
function changeColorOfBulb(bulbId) {
    console.log(bulbId.innerHTML);
    console.log(bulbId.style.backgroundColor === 'red');
    // let bulb = document.getElementById(bulbId);
    if (bulbId.style.backgroundColor === 'red') {
        bulbId.style.backgroundColor = 'green';
    } else {
        bulbId.style.backgroundColor = 'red';
    }
}

function startGame() {
    let numberOfBulbs = document.querySelector('input[name="numberOfBulbs"]:checked').value;
    document.getElementById("startGamePanel").style.display = 'none';
    prepareGame(numberOfBulbs);
}
// prepareGame(4);