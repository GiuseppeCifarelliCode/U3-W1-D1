const firstPlayerInput = document.getElementById("#first-player") as HTMLInputElement
const secondPlayerInput = document.getElementById("#second-player") as HTMLInputElement
const formReference = document.querySelector('form') as HTMLFormElement
const listReference = document.querySelector('ul')
let firstPlayerValue:undefined|number
let secondPlayerValue:undefined|number

formReference.addEventListener('submit', (e) => {
    e.preventDefault()
    firstPlayerValue = parseFloat((<HTMLInputElement>document.getElementById("first-player")).value);
    secondPlayerValue = parseFloat((<HTMLInputElement>document.getElementById("second-player")).value);
    const firstPlayerLi = document.createElement('li')
    const secondPlayerLi = document.createElement('li')
    firstPlayerLi.innerText = firstPlayerValue.toString() + '' + ' Player1'
    secondPlayerLi.innerText = secondPlayerValue.toString() + '' + ' Player2'
    listReference?.appendChild(firstPlayerLi)
    listReference?.appendChild(secondPlayerLi)
    const result = document.createElement('li')
    result.innerText = calculateWinner(firstPlayerValue, secondPlayerValue)
    listReference?.appendChild(result)
})


function calculateWinner( firstPlayerNumber:number, secondPlayerNumber:number) {
    if(firstPlayerNumber < 1 || firstPlayerNumber > 100 || secondPlayerNumber < 1 || secondPlayerNumber > 100) {
        return ("one or both numbers are < 1 or > 100")
    } else {
        let rngNumber:number = Math.floor((Math.random()*100) + 1)
        let firstDifference:number = Math.abs(rngNumber - firstPlayerNumber)
        let secondDifference:number = Math.abs(rngNumber - secondPlayerNumber)
        const rngLi = document.createElement('li')
        rngLi.innerText = rngNumber.toString() + '' + ' Random number'
        listReference?.appendChild(rngLi)
        if(firstDifference === 0) {
            return ("Player 1 guessed the Random Number")
        } else if(secondDifference === 0) {
            return ("Player 2 guessed the Random Number");
        } else if(firstDifference < secondDifference) {
            return ("Player 1 is nearest the Random Number")
        } else return("Player 2 is nearest the Random Number")
    }
}



