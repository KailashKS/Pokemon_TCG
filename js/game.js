var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('mousedown', function () {
		this.classList.add('btn-active');
	});
	buttons[i].addEventListener('mouseup', function () {
		this.classList.remove('btn-active');
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



