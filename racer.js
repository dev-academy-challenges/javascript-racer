document.addEventListener('keypress', redMove, false)

function redMove(event) {
  if(event.keyCode === 112){
    var redCell = $('.red')
    redCell.removeClass('red')
    redCell.next().addClass('red')
    checkForWin()
  }
}

document.addEventListener('keypress', blueMove, false)

function blueMove(event) {
  if(event.keyCode === 113){
    var blueCell = $('.blue')
    blueCell.removeClass('blue')
    blueCell.next().addClass('blue')
    checkForWin()
  }
}
