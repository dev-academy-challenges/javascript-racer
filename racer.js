$(function() {
//put your js in here
  $(window).keydown(function(event) {
    //if q is pressed do something
    //if p is pressed do something else
    console.log(event.keyCode)
  })
})

function movePlayer(playerNumber) {
  //find the active cell for this player - $()
  //stop it being active - # removeClass()
  //find the cells neighbour # next()
  //make it active # addClass()
  //if I don't have a neighbour, create an alert saying game over # alert() if
}


//bonus points
//reset a game
//count the number of wins for each player
//display the high scores on the page # - text()

