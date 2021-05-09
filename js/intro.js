var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
  // Click
  buttons[i].addEventListener('mousedown', function () {
    this.classList.add('btn-active');
  });
  buttons[i].addEventListener('mouseup', function () {
    this.classList.remove('btn-active');
  });

  // Hover
  buttons[i].addEventListener('mouseleave', function () {
    this.classList.remove('btn-center', 'btn-right', 'btn-left', 'btn-active');
  });

  buttons[i].addEventListener("mousemove", function (e) {
    var leftOffset = this.getBoundingClientRect().left;
    var btnWidth = this.offsetWidth;
    var myPosX = e.pageX;
    var newClass = "";
    // if on left 1/3 width of btn
    if (myPosX < (leftOffset + .3 * btnWidth)) {
      newClass = 'btn-left'
    } else {
      // if on right 1/3 width of btn
      if (myPosX > (leftOffset + .65 * btnWidth)) {
        newClass = 'btn-right';
      } else {
        newClass = 'btn-center';
      }
    }
    // remove prev class
    var clearedClassList = this.className.replace(/btn-center|btn-right|btn-left/gi, "").trim();
    this.className = clearedClassList + " " + newClass;
  });
}


//
// ---Retro Submit Button---
//
var pButton = document.querySelector('.loader-button');

// Click
pButton.addEventListener('mousedown', function () {
  this.classList.add('btn-active');
});
pButton.addEventListener('mouseup', function () {
  this.classList.remove('btn-active');
});