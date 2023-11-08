const quoteDisplay = document.getElementById("quoteDisplay")
const quoteAuthor = document.getElementById("author")
const button = document.getElementById("button")

let randomQuotes = () => {
    fetch("quotes.json").then((response) => {
        response.json().then((message) => {
            let random = (item) => {
                return item[Math.floor(Math.random() * item.length)]
            }
            quoteDisplay.innerText = `"${random(message.authors).msg}"`
            quoteAuthor.innerText = `— ${random(message.authors).author}`
        })
    })
}

randomQuotes()

button.addEventListener("click", () => {
    randomQuotes()
})
