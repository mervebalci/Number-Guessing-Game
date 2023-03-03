document.querySelector('button').addEventListener('click', () => {
    let userInput = document.getElementById('input').value
    input.value = ""

    // Showing user the number they guessed
    // alert(`You guessed ${userInput}!`)

    // OR another way
    // let message = `<p>You guessed ${userInput}!</p>`
    // let div = document.getElementById('user')
    // div.insertAdjacentHTML('beforeend', message)


    function score(userInput) {
        let target = 32
        if (userInput > target) {
            let high = "Go lower..."
            return high
        } if (userInput < target) {
            let low = "Go higher..."
            return low
        } if (userInput == target) {
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