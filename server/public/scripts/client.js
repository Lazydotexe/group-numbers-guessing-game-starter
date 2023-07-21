$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $("#submitBtn").on('click', submitBtn)
  // $("#resetBtn").on('click', resetBtn)


  getGuess()
  getRandomNumber()

}
//-------------------------------------------------------------------------------------------
let guessNumber;
let timesGuessed = 0;
let magicNbr;

//-------------------------------------------------------------------------------------------


let submitBtn = () => {  
  const playerGuess = { // This saves both players inputs as an object
    player1: $("#input1").val(),
    player2: $("#input2").val(),
  }

  $('.inputs').val('');  // This clears the value in the input fields
  console.log(playerGuess)
  $('span').text(''); //------------------
  timesGuessed += 1; //--------------------This clears the span area and appends the times
  $('span').append(`${timesGuessed}`) //-- Guessed variable in increments of 1

  $.ajax({
    method: "POST",  // this block will "POST" the playerGuess var to "/guessed" located server side.
    url: "/guessed",
    data: playerGuess
  }).then((response) => {
    console.log("POST was successful:", response)

    // $.ajax({
    //   method: "POST",
    //   url: "/getRandom",
    //   data: playerGuess
    // }).then((response) => {
    //   console.log("POST was successful:", response)



      getGuess()
      render()

    }).catch((error) => {
      console.log("Error with POST request:", error)
      alert("Error with POST")
    })
  

  }

//-------------------------------------------------------------------------------------------


let getGuess = () => {
    console.log("getGuess")

    $.ajax({
      method: 'GET',
      url: '/listOfGuesses'
    }).then((response) => {
      console.log(response)
      guessNumber = response

      
      render()

    }).catch((error) => {
      alert("Request Failed")
      console.log("Request failed, error:", error)
    })      
  }
  let getRandomNumber = () => {
    console.log("getRandomNumber");
  
    $.ajax({
      method: 'GET',
      url: '/getRandom'
    }).then((response) => {
      console.log('this is the random number', response);
      magicNbr = response
      render()

      // Do something with the random number response
    }).catch((error) => {
      alert("Request Failed");
      console.log("Request failed, error:", error);
    });
    
    
  };

//-------------------------------------------------------------------------------------------
let getRandom = () => {
    console.log("getRandom")

    $.ajax({
      method: 'GET',
      url: '/listOfGuesse'
    }).then((response) => {
      console.log(response)
      guessNumber = response
      render()

    }).catch((error) => {
      alert("Request Failed")
      console.log("Request failed, error:", error)
    })
  }


//-------------------------------------------------------------------------------------------


let render = () => {
    $('#tableInfo').empty()

    for (let guess of guessNumber) {
      console.log(guess)
      $('#tableInfo').append(`
      <tr>
          <td class="bold">${guess.player1}:</td>
          <td class="bold">${magicNbr}:</td>
          <td class="bigText">${guess.player2}</td>
      </tr>`)

    }

  }


// let resetBtn = () => console.log('inside reset')

//GO BACK UNTIL 