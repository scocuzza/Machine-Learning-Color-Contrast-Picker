# Machine Learning & Neural Networks with Javascript - Brain.js
## Project Instructions
### Step 1
- include brain.js CDN in index.html 
```
<script src="//unpkg.com/brain.js" defer></script>
```
### Step 2
Create your HTML
```
  div id="color">
    <div class="white">White Text</div>
    <div>Black Text</div>
    <div id="guess">Guess Text</div>
  </div>

  <button id="white-button">White</button>
  <button id="black-button">Black</button>
  <button id="print-button">Print</button>
```
### Step 3
Add the Style
```
<style>
    #color {
      width: 200px;
      height: 200px;
      border: 5px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .white {
      color: white;
    }
  </style>
```
## Step 4
- initalize the Neural Network and start with some data
``` 
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
```
# Step 5
- Add Listeners to Buttons
```
const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})

blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

```
# Step 6
- Create Functions and set the color
```
let color
setRandomColor()

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print() {
  console.log(JSON.stringify(data))
}

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
```