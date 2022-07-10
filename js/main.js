function smoothScroll(elem) {
  document.querySelector(elem).scrollIntoView({
    behavior: 'smooth'
  });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function specialSeed(varPrefix, varCount) {
  var seed = varPrefix + ('0' + (randomIntFromInterval(0, varCount-1).toString())).slice(-2);
  var varActive = varPrefix + 'active';
  // $(':root').css({varActive: 'var('+seed+')'});
  $(':root').attr('style', varActive + ':' + 'var('+ seed +')');
}

function getCenterPos(elem) {
  var pos = document.querySelector(elem).getBoundingClientRect();
  var centerXPos = (pos.left + (pos.right - pos.left)/2).toFixed(2);
  var centerYPos = (pos.top + (pos.bottom - pos.top)/2).toFixed(2);
  var centerPos = {centerXPos, centerYPos};
  return centerPos;
}
function setCenterPos(getter, setter, offsetX=0, offsetY=0, debug=false) {
  var x = ((getCenterPos(getter).centerXPos) - $(setter).width()/2 + offsetX).toString();
  var y = ((getCenterPos(getter).centerYPos) - $(setter).height()/2 + offsetY).toString();
  $(setter).css({'left': x + 'px', 'top': y + 'px'});
  if (debug) { console.log(x, y) };
}

function transcend(elem) {
  $(elem).toggleClass('hide');
}



$( window ).on({
  load: function() {
    specialSeed('--color-gradient-', 5);
    setCenterPos('#button-portal-pos', '#button-portal', 0, 7);
  },
  resize: function() {
    setCenterPos('#button-portal-pos', '#button-portal', 0, 7);
  }
})
