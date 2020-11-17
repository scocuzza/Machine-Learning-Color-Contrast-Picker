const net = new brain.NeuralNetwork()

const data = [
  {
    input: {r: 0, g: 0, b: 0 },
    output: [1]
  },
  {
    input: {r: 1, g: 1, b: 1 },
    output: [0]
  },
]

net.train(data)

//background color div
const colorEl = document.getElementById('color')
//guess element
const guessEl = document.getElementById('guess')
//Button to click when text should be white
const whiteButton = document.getElementById('white-button')
//Button to click when text should be black
const blackButton = document.getElementById('black-button')
//print data gathered to console
const printButton = document.getElementById('print-button')

let color
setRandomColor()

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})

blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

// When a color is chosed (Whether the text should be white/black)
// push the current background color as input
// push the value to output as to what color the text should be
function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

//prints the data to the console in JSON format
function print() {
  console.log(JSON.stringify(data))
}

// Generates a random color
// Sets the background the randomized color 
// Multiples by 255 to get RGB value since Math.random generates 0 to 1
// Set the Guess Element text by running through neural net > .5 white if < .5 black
function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0]
  guessEl.style.color = guess > .5 ? '#FFF' : '#000'
  colorEl.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}