$(window).keydown(function(event){
  var lastCell = $('tr td:nth-child(11)')
  if (event.which == 80 ){
    $('td.red').next().addClass("red")
    $('td.red').prev().removeClass("red")
    if (lastCell.hasClass('red')){
      alert('you da winna red!')
    }
  }
})


$(window).keydown(function(event){
  var lastCell = $('tr td:nth-child(11)')
  if (event.which == 81 ){
    $('td.blue').next().addClass("blue")
    $('td.blue').prev().removeClass("blue")
    if (lastCell.hasClass('blue')){
      alert('you da winna blue!')
    }
  }
})
