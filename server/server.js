const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
  
})

// function randomNumber(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1) + num1);
    
// }

// console.log(randomNumber(1, 25))

let timesGuessed;

let guesses = [];

app.post("/randomNbr",(req, res) => {
    console.log("in randomNbr");

    // let addItem = req.body
    // inventory.push(addItem)

    // console.log("currentInventory:", inventory)
    // res.send(inventory)
    // res.sendStatus(201)
})

app.get('/listOfGuesses', (req, res) => {
  console.log("Arrived at /Guesses", guesses)
  
  // res.send(timesGuessed)
  res.send(guesses)
})


app.post("/guessed",(req, res) => {
  console.log("Body for addquote:", req.body);

  let addGuess = req.body
  guesses.push(addGuess)

  console.log("Guesses:", guesses)
  res.send(guesses)
  res.sendStatus(201)
})


// timesGuessed += 1;