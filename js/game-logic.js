jQuery(document).ready(function () {
	var hitBtn1 = $('.atk1'),
		hitBtn2 = $('.atk2'),
		hitBtn3 = $('.atk3'),
		hitBtn4 = $('.atk4'),
		hBar1 = $('.hb1'),
		bar1 = hBar1.find('.bar1'),
		hit1 = hBar1.find('.hit1'),
		hBar2 = $('.hb2'),
		bar2 = hBar2.find('.bar1'),
		hit2 = hBar2.find('.hit1'),
		$cards = $(".battle-card"),
		$style = $(".hover");

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
	const pokemonHP = {
		'yveltal': 170,
		'skarmory': 170,
		'dialga': 180,
		'kingdra': 230,
		'charizard': 180,
		'venusaur': 150,
		'greninja': 140,
		'reshiram': 180,
		'snorlax': 120,
		'lucario': 210,
	}
	var currentPokemonHP = {
		'yveltal': 170,
		'skarmory': 170,
		'dialga': 180,
		'kingdra': 230,
		'charizard': 180,
		'venusaur': 150,
		'greninja': 140,
		'reshiram': 180,
		'snorlax': 120,
		'lucario': 210,
	}
	const moveDamage = {
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

	const moveColor = {
		"Wing Attack": ["#A890F0", "#562dd1"],
		"Combustion Blast": ["#E24242", "#7e1313"],
		"Pollen Hazard": ["#7DB808", "#3e5b04"],
		"Solarbeam": ["#7DB808", "#3e5b04"],
		'Evil Ball': ['#2C2E2B', "#161615"],
		'Y Cyclone': ['#2C2E2B', "#161615"],
		'Joust': ['#8A776E', "#453b37"],
		'Tailspin Piledriver': ['#8A776E', "#453b37"],
		'Shred': ['#C6A114', "#63500a"],
		'Timeless GX': ['#8A776E', "#453b37"],
		'Hydro Pump': ['#6890F0', "#0f389c"],
		'Reverse Thrust': ['#6890F0', "#0f389c"],
		'Mat Block': ['#C03028', "#601814"],
		'Aqua Edge': ['#6890F0', "#0f389c"],
		'Scorching Column': ['#E24242', "#7e1313"],
		'Vermilion GX': ['#E24242', "#7e1313"],
		'Rock Smash': ['#C03028', "#601814"],
		'Strength': ['#A8A878', "#575738"],
		'Aura Sphere': ['#C03028', "#601814"],
		'Beatdown Smash': ['#C03028', "#601814"]
	}

	$("#atk-color1").css(
		"background-color", moveColor[$(".atk-name1").text().trim()][0]
	)

	$("#atk-color2").css(
		"background-color", moveColor[$(".atk-name2").text().trim()][0]
	)

	$("#atk-color3").css(
		"background-color", moveColor[$(".atk-name3").text().trim()][0]
	)

	$("#atk-color4").css(
		"background-color", moveColor[$(".atk-name4").text().trim()][0]
	)

	document.getElementById('color1').style.setProperty('--bgColor', moveColor[$(".atk-name1").text().trim()][1]);
	document.getElementById('color2').style.setProperty('--bgColor', moveColor[$(".atk-name2").text().trim()][1]);
	document.getElementById('color3').style.setProperty('--bgColor', moveColor[$(".atk-name3").text().trim()][1]);
	document.getElementById('color4').style.setProperty('--bgColor', moveColor[$(".atk-name4").text().trim()][1]);

	$cards.on("mousemove", function (e) {
		var $card = $(this);
		var l = e.offsetX;
		var t = e.offsetY;
		var h = $card.height();
		var w = $card.width();
		var lp = Math.abs(Math.floor(100 / w * l) - 100);
		var tp = Math.abs(Math.floor(100 / h * t) - 100);
		var bg = `background-position: ${lp}% ${tp}%;`
		var style = `.battle-card.active:before { ${bg} }`
		$cards.removeClass("active");
		$card.addClass("active");
		$style.html(style);
	}).on("mouseout", function () { $cards.removeClass("active"); });

	hitBtn1.click(function () {
		pokemon_name = $(document.getElementById('battle2')).data("id");
		attack_hp(pokemon_name, $('.atk-name1').html(), hBar2, hit2, bar2);
	});

	hitBtn2.click(function () {
		pokemon_name = $(document.getElementById('battle2')).data("id");
		attack_hp(pokemon_name, $('.atk-name2').html(), hBar2, hit2, bar2);
	});

	hitBtn3.click(function () {
		pokemon_name = $(document.getElementById('battle1')).data("id");
		attack_hp(pokemon_name, $('.atk-name3').html(), hBar1, hit1, bar1);
	});

	hitBtn4.click(function () {
		pokemon_name = $(document.getElementById('battle1')).data("id");
		attack_hp(pokemon_name, $('.atk-name4').html(), hBar1, hit1, bar1);
	});

	$('#deck1').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck2').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck3').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck4').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck5').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck6').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck7').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
		} else {
			alert('Pokemon has no more HP');
		}
	});
	$('#deck8').click(function () {
		if (currentPokemonHP[$(this).data('id')] != 0) {
			switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
		} else {
			alert('Pokemon has no more HP');
		}
	});

	function switch_w_battle1(deck_card1, battle_card1, atk1, atk2, hBar, bar) {
		const currentbattleimage = $(battle_card1).css('backgroundImage'); //getting current battle image
		const currentdeckimage = $(deck_card1).css('backgroundImage'); //getting the deck card img to switch with
		const currentbattleid = $(battle_card1).data("id"); //getting name of current battle poke
		const currentdeckid = $(deck_card1).data("id"); //getting name of deck poke to be switched with
		const newlabels = attacks[currentdeckid]; //getting list of new attacks

		$(battle_card1).data('id', currentdeckid);//switching pokemon names
		$(deck_card1).data('id', currentbattleid);

		$(hBar).data('total', pokemonHP[currentdeckid]) //setting total hp value for new poke
		$(hBar).data('value', currentPokemonHP[currentdeckid]) //setting current hp for new poke
		set_color_bar(bar, currentPokemonHP[currentdeckid], pokemonHP[currentdeckid]);

		atk1.text(newlabels[0]); //changing attack labels
		atk2.text(newlabels[1]);

		$(battle_card1).css('backgroundImage', currentdeckimage); //changing cards
		$(deck_card1).css('backgroundImage', currentbattleimage);
		get_hp_bars(currentdeckid, bar);

		$("#atk-color1").css(
			"background-color", moveColor[$(".atk-name1").text().trim()][0]
		)

		$("#atk-color2").css(
			"background-color", moveColor[$(".atk-name2").text().trim()][0]
		)

		$("#atk-color3").css(
			"background-color", moveColor[$(".atk-name3").text().trim()][0]
		)

		$("#atk-color4").css(
			"background-color", moveColor[$(".atk-name4").text().trim()][0]
		)
		document.getElementById('color1').style.setProperty('--bgColor', moveColor[$(".atk-name1").text().trim()][1]);
		document.getElementById('color2').style.setProperty('--bgColor', moveColor[$(".atk-name2").text().trim()][1]);
		document.getElementById('color3').style.setProperty('--bgColor', moveColor[$(".atk-name3").text().trim()][1]);
		document.getElementById('color4').style.setProperty('--bgColor', moveColor[$(".atk-name4").text().trim()][1]);
	}

	function get_hp_bars(pokemon_name, bar) {
		var totalhp = pokemonHP[pokemon_name];
		var currenthp = currentPokemonHP[pokemon_name];
		var barWidth = (currenthp / totalhp) * 100;
		bar.find('.hitbar-text').html(currenthp + '/' + totalhp);
		console.log(pokemon_name, currentPokemonHP, barWidth);
		bar.css('width', barWidth + "%");
	}
	function set_color_bar(bar, newValue, total) {
		console.log(bar.find('.hitbar-text').css('color'));
		if (newValue < 0.3 * total) {
			bg = '#c54'
			bar.css('background', bg);
		}
		else {
			bg = '#23b315'
			bar.css('background', bg);
		}
	}
	function attack_hp(pokemon_name, attack_name, hBar, hit, bar) {

		var total = hBar.data('total'),
			value = hBar.data('value');
		var damage = moveDamage[attack_name.trim()];
		var newValue = value - damage;
		if (newValue < 0) {
			newValue = 0;
			damage = value;
		}
		set_hp(pokemon_name, newValue);
		var barWidth = (newValue / total) * 100;
		var hitWidth = (damage / value) * 100 + "%";

		// show hit bar and set the width
		hit.css('width', hitWidth);
		set_color_bar(bar, newValue, total);
		bar.find('.hitbar-text').html(newValue + '/' + total);

		hBar.data('value', newValue);

		setTimeout(function () {
			hit.css({ 'width': '0' });
			bar.css('width', barWidth + "%");
		}, 500);
	}
	function set_hp(pokemon_name, new_hp) {
		currentPokemonHP[pokemon_name] = new_hp;

	}

});