function createMaze (number) {
  var maze = new Array(number).fill(0).map( function (cell) {
    return new Array(number).fill(0).map( function (cell) {
      return Math.random() * 10 < 2 ? 1 : 0
    })
  })
  return maze
}


// 0 = moveable space
// 1 = blocked space
// for each space math.random * 10 (anything lower than 3 is a blocked space)

function renderMaze (maze) {
  for (var i=0; i<maze.length; i++) {
    $('#maze').append('<tr></tr>')
    for (var j=0; j<maze.length; j++) {
      var space = maze[i][j] === 1 ? 'blocked' : 'open'
      $('#maze tr:last-child').append('<td class="' + space + '"></td>')
    }
  }
  startingPosition(maze)
  endPosition(maze)
  return true;
}

function startingPosition (maze) {
  $('#maze tr:first-child .open:first-child').removeClass().addClass('player')
}

function endPosition (maze) {
  $('#maze tr:last-child .open:last-child').removeClass().addClass('goal')
}


$(document).ready(function(){
  renderMaze(createMaze(30))
})
console.log()
