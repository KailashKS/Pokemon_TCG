jQuery(document).ready(function () {
	var hitBtn1 = $('.atk1'),
		hitBtn2 = $('.atk2'),
		hitBtn3 = $('.atk3'),
		hitBtn4 = $('.atk4'),
		hBar1 = $('.hb1'),
		bar1 = hBar1.find('.bar1'),
		hit1 = hBar1.find('.hit1');
		hBar2 = $('.hb2'),
		bar2 = hBar2.find('.bar1'),
		hit2 = hBar2.find('.hit1');
// var hitBtn = $('.atk1'),
// hBar=$('.hb1'),
// bar=hBar.find('.bar1'),
// hit=hBar.find('.hit1')
	const attacks = {
		'yveltal': ['Evil Ball', 'Y Cyclone'],
		'skarmory': ['Joust', 'Tailspin Piledriver'],
		'dialga': ['Shred', 'Timeless GX'],
		'kingdra': ['Hydro Pump', 'Reverse Thrust'],
		'charizard': ['Wing Attack', 'Combustion Blast'],
		'venusaur': ['Pollen Hazard', 'Solarbeam'],
		'greninja': ['Mat Block', 'Aqua Edge'],
		'reshiram': ['Scorching Column', 'Vermilion GX'],
		'snorlax': ['Rock Smash', 'Strength'],
		'lucario': ['Aura Sphere', 'Beatdown Smash'],
	}

	var moveDamage = {
		"Wing Attack": "60",
		"Combustion Blast": "150",
		"Pollen Hazard": "20",
		"Solarbeam": "90",
		'Evil Ball': '20',
		'Y Cyclone': '90',
		'Joust': '30',
		'Tailspin Piledriver': '80',
		'Shred': '80',
		'Timeless GX': '150',
		'Hydro Pump': '10',
		'Reverse Thrust': '30',
		'Mat Block': '40',
		'Aqua Edge': '80',
		'Scorching Column': '110',
		'Vermilion GX': '180',
		'Rock Smash': '10',
		'Strength': '70',
		'Aura Sphere': '40',
		'Beatdown Smash': '180'
	};
hitBtn1.click(function(){
	attack_hp($('.atk-name1').html(), hBar2, hit2, bar2);
});

hitBtn2.click(function(){
	attack_hp($('.atk-name2').html(), hBar2, hit2, bar2);
});

hitBtn3.click(function(){
	attack_hp($('.atk-name3').html(), hBar1, hit1, bar1);
});

hitBtn4.click(function(){
	attack_hp($('.atk-name4').html(), hBar1, hit1, bar1);
});
function attack_hp(attack_name, hBar, hit, bar) {

	var total = hBar.data('total'),
	value = hBar.data('value');
	var damage = moveDamage[attack_name.trim()];
	var newValue = value - damage;
	var barWidth = (newValue / total) * 100;
	var hitWidth = (damage / value) * 100 + "%";

	// show hit bar and set the width
	hit.css('width', hitWidth);

	if (newValue < 200) {
		console.log("Hello")
		bg = '#c54'
		bar.css('background', bg);
	}

	hBar.data('value', newValue);

	setTimeout(function () {
		hit.css({ 'width': '0' });
		bar.css('width', barWidth + "%");
	}, 500);
}

});
