

$(document).on( 'keyup', function (event) {
if ( event.keyCode === 81) {
  moveRed()
} else if ( event.keyCode === 80 ) {
  moveBlue()
}})

function startBoard () {
  $('.red').removeClass()
  $('.blue').removeClass()
  $('.player1 td:first-child').addClass('red')
  $('.player2 td:first-child').addClass('blue')
}

startBoard()

function moveRed () {
  $('.red').removeClass().next().addClass('red')
  winningCondition( 'red', '1')
}

function moveBlue () {
  $('.blue').removeClass().next().addClass('blue')
  winningCondition( 'blue', '2')
}

function winningCondition (color, player) {
  if ( $('.player' + player + ' td:last-child').hasClass(color) ) {
    alert('Player ' + player + ' is the winner!')
    startBoard()
  }
}



// player 2 = p = keyCode 80
// player 1 = q = keyCode 81


// if
