$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $("#submitBtn").on('click', genericName)

  

}

let genericName = () => console.log('inside submit')

