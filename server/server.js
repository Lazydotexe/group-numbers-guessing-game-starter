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
//-------------------------------------------------------------------------------------------


let randomNbr = Math.floor(Math.random() * (25 - 1) + 1);
console.log(randomNbr);
let guesses = [];


// app.post("/randomNbr",(req, res) => {
//     console.log("in randomNbr");

//     let addItem = req.body
//     inventory.push(addItem)

//     console.log("currentInventory:", inventory)
//     res.send(inventory)
//     res.sendStatus(201)
// })

//-------------------------------------------------------------------------------------------


app.get('/listOfGuesses', (req, res) => {
  console.log("Arrived at /Guesses", guesses)
  
  res.send(guesses)
})

//-------------------------------------------------------------------------------------------



app.post("/guessed",(req, res) => {
  console.log("Body for guess:", req.body);

  let addGuess = req.body
  guesses.push(addGuess)
 
  console.log("Guesses:", guesses)
  res.send(guesses)
  // res.sendStatus(201)
})

//-------------------------------------------------------------------------------------------


// app.get('/getRandom', (req, res) => {
//   // Generate a random number (e.g., between 1 and 100) to send as the response
//   // const randomNbr = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNbr);
//   res.send(randomNbr.toString());
// });

//-------------------------------------------------------------------------------------------

app.get('/getRandom', (req, res) => {
  const mostRecentGuess = guesses[guesses.length - 1];
  let toLow = "player1 is to low"
  let toHigh = "player1 is to high"
  let justRight = "player1 Wins"
  let hint;
  
  if (mostRecentGuess.player1 < randomNbr) {
    hint = toLow

  } else if (mostRecentGuess.player1 > randomNbr) {
     hint = toHigh

  } else {
    hint = justRight

  }
  res.send(hint)
  

});





