document.querySelector('button').addEventListener('click', () => {
    let userInput = document.getElementById('input').value

    let message = `<p>You guessed ${userInput}</p>`
    let div = document.getElementById('user')
    div.insertAdjacentHTML('beforeend', message)
})