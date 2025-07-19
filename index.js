
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let started = false

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
let resetGameEl = document.getElementById('resetGame-el')

messageEl.textContent = "Welcome to Blackjack!"

function startGame() {
    renderGame()
    started = true
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent = "Sum: " + sum
}

function hitMe() {
    if (isAlive === true && hasBlackJack === false & started === true) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1 && sum <= 10) {
        return 11
    } else {
        return randomNumber
    }
}

function resetGame() {
    if (isAlive === false || hasBlackJack === true) {
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        hasBlackJack = false
        isAlive = true
        started = false

        messageEl.textContent = "Welcome to Blackjack!"
        cardsEl.textContent = "Cards: "
        sumEl.textContent = "Sum: "
        playerEl.textContent = "Player: "
    }
    
}
