"use strict";
const firstPlayerInput = document.getElementById("#first-player");
const secondPlayerInput = document.getElementById("#second-player");
const formReference = document.querySelector('form');
const listReference = document.querySelector('ul');
let firstPlayerValue;
let secondPlayerValue;
formReference.addEventListener('submit', (e) => {
    e.preventDefault();
    firstPlayerValue = parseFloat(document.getElementById("first-player").value);
    secondPlayerValue = parseFloat(document.getElementById("second-player").value);
    const firstPlayerLi = document.createElement('li');
    const secondPlayerLi = document.createElement('li');
    firstPlayerLi.innerText = firstPlayerValue.toString() + '' + ' Player1';
    secondPlayerLi.innerText = secondPlayerValue.toString() + '' + ' Player2';
    listReference === null || listReference === void 0 ? void 0 : listReference.appendChild(firstPlayerLi);
    listReference === null || listReference === void 0 ? void 0 : listReference.appendChild(secondPlayerLi);
    const result = document.createElement('li');
    result.innerText = calculateWinner(firstPlayerValue, secondPlayerValue);
    listReference === null || listReference === void 0 ? void 0 : listReference.appendChild(result);
});
function calculateWinner(firstPlayerNumber, secondPlayerNumber) {
    if (firstPlayerNumber < 1 || firstPlayerNumber > 100 || secondPlayerNumber < 1 || secondPlayerNumber > 100) {
        return ("one or both numbers are < 1 or > 100");
    }
    else {
        let rngNumber = Math.floor((Math.random() * 100) + 1);
        let firstDifference = Math.abs(rngNumber - firstPlayerNumber);
        let secondDifference = Math.abs(rngNumber - secondPlayerNumber);
        const rngLi = document.createElement('li');
        rngLi.innerText = rngNumber.toString() + '' + ' Random number';
        listReference === null || listReference === void 0 ? void 0 : listReference.appendChild(rngLi);
        if (firstDifference === 0) {
            return ("Player 1 guessed the Random Number");
        }
        else if (secondDifference === 0) {
            return ("Player 2 guessed the Random Number");
        }
        else if (firstDifference < secondDifference) {
            return ("Player 1 is nearest the Random Number");
        }
        else
            return ("Player 2 is nearest the Random Number");
    }
}
