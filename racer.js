function movePlayer() {
  if (event.keyCode===80){
    var redCell = $('.red')
    redCell.next().addClass('red')
    redCell.removeClass('red')
    checkWin()
  }
    if (event.keyCode===81){
    var blueCell = $('.blue')
    blueCell.next().addClass('blue')
    blueCell.removeClass('blue')
    checkWin()
  }
}

function resetBoard(){
  var blueCell = $('.blue')
  var redCell = $('.red')
  blueCell.removeClass('blue')
  redCell.removeClass('red')
  $('.player1 td:first-child').addClass('red')
  $('.player2 td:first-child').addClass('blue')
}

function checkWin(){
  var blueCell = $('.blue')
  var redCell = $('.red')
  var b = blueCell.next().length
  var r = redCell.next().length
  if (b===0){
    alert('Blue Wins!')
    resetBoard()
  }
  if (r===0){
    alert('Red Wins!')
    resetBoard()
  }
}

$(document).on('keydown', movePlayer)
