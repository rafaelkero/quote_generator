const apiUrl = "https://api.thecatapi.com/v1/images/search"
const image = document.querySelector("img")
const quoteDisplay = document.getElementById("quoteDisplay")
const quoteAuthor = document.getElementById("author")
const button = document.getElementById("button")

const randomPic = () => {
    fetch(apiUrl).then((response) => {
        response.json().then((img) => {
            image.src = img[0].url
        })
    })
}

let randomQuote = () => {
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

randomQuote()
randomPic()

button.addEventListener("click", () => {
    randomQuote()
    randomPic()
})
