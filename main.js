// Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
let randomNumber = Math.random() * 100

// Converting float value into integer
let target = Math.round(randomNumber)


document.querySelector('button').addEventListener('click', () => {
    let userInput = document.getElementById('input').value
    input.value = ""

    // Showing user the number they guessed
    // alert(`You guessed ${userInput}!`)

    // OR another way
    // let message = `<p>You guessed ${userInput}!</p>`
    // let div = document.getElementById('user')
    // div.insertAdjacentHTML('beforeend', message)


    // Every programming language retrieves user input as a STRING.
    // parseInt() forces user input to be interpreted as an INTEGER
    userInput = parseInt(userInput)

    function score(userInput) {
        // let target = 32
        if (userInput > target) {
            let high = "Go lower..."
            return high
        } if (userInput < target) {
            let low = "Go higher..."
            return low
        } if (userInput === target) {
            let correct = "Congratulations! You found it."
            return correct
        }
    }
    // Calling the function
    let answer = score(userInput)

    // Showing user the number they guessed and tell them go higher or lower till they find the target number
    let message = `<p>You guessed ${userInput}! ${answer}</p>`
    let div = document.getElementById('user')
    div.insertAdjacentHTML('beforeend', message)
})

// Letting user to type ONLY 2 digits of number
document.querySelector('input').addEventListener('keyup', () => {
    let userInput = document.getElementById('input').value
    if (userInput.length > 2) {
        var digits = userInput.toString().split('');
        number = "" + digits[0] + digits[1]
        document.getElementById('input').value = number
    }
})