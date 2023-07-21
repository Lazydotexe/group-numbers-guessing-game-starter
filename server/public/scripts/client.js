$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $("#submitBtn").on('click', submitBtn)
  // $("#resetBtn").on('click', resetBtn)


  getGuess()

}
let guessNumber;
let timesGuessed = 0;

let submitBtn = () => {
    const playerGuess = {
      player1: $("#input1").val(),
      player2: $("#input2").val()

} // set up a class for the input's to clear both at once
  $('.inputs').val('');
    console.log(playerGuess)
    // $('span').text('');
    // timesGuessed += 1;
    // $('span').append(`${timesGuessed}`)





    $.ajax({
        method: "POST", 
        url: "/guessed", 
        data: playerGuess 
    }).then((response) => {
        console.log("POST was successful:", response)

        getGuess()
        render()

    }).catch((error) => {
        console.log("Error with POST request:", error)
        alert("Error with POST")
    })


}


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

let render = () => {
  $('#tableInfo').empty()

  for (let guess of guessNumber) {
      console.log(guess)
      $('#tableInfo').append(`
      <tr>
          <td class="bold">${guess.player1}:</td>
          <td class="bigText">${guess.player2}</td>
      </tr>`)
    //   $('span').text('');
    
    // $('span').append(`${timesGuessed}`)
  }
  
}


let resetBtn = () => console.log('inside reset')






