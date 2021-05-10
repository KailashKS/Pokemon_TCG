jQuery(document).ready(function () {

	var bid = document.getElementById("battle-music");
	bid.volume = 0.02;

	pball = 0
	icon_array = [
		"./assets/pokeball (0).png",
		"./assets/pokeball (1).png",
		"./assets/pokeball (2).png",
		"./assets/pokeball (3).png",
		"./assets/pokeball (4).png",
		"./assets/pokeball (5).png",
		"./assets/pokeball (6).png",
		"./assets/pokeball (7).png",
		"./assets/pokeball (8).png",
		"./assets/pokeball (9).png",
		"./assets/pokeball (10).png",
		"./assets/pokeball (11).png",
		"./assets/pokeball (12).png",
		"./assets/pokeball (13).png",
		"./assets/pokeball (14).png",
		"./assets/pokeball (15).png",
		"./assets/pokeball (16).png",
		"./assets/pokeball (17).png",

	]
	setInterval(function () {
		faviconLnk = document.querySelector('link[rel*="icon"]');
		faviconLnk.href = icon_array[pball % 17]
		console.log(faviconLnk.href)
		pball += 1
	}, 300)


});