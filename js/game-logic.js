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

	var turn = 0;

	var player1 = 0;
	var player2 = 0;

	// let checker = arr => arr.every(v => v === true);

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
		"Wing Attack": ["#A890F0", "#562dd1", '#44328a'],
		"Combustion Blast": ["#E24242", "#7e1313", '#58252b'],
		"Pollen Hazard": ["#7DB808", "#3e5b04", '#384924'],
		"Solarbeam": ["#7DB808", "#3e5b04", '#384924'],
		'Evil Ball': ['#2C2E2B', "#161615", '#24272c'],
		'Y Cyclone': ['#2C2E2B', "#161615", '#24272c'],
		'Joust': ['#8A776E', "#453b37", '#3c393d'],
		'Tailspin Piledriver': ['#8A776E', "#453b37", '#3c393d'],
		'Shred': ['#C6A114', "#63500a", '#4b4427'],
		'Timeless GX': ['#8A776E', "#453b37", '#3c393d'],
		'Hydro Pump': ['#6890F0', "#0f389c", "#213870"],
		'Reverse Thrust': ['#6890F0', "#0f389c", "#213870"],
		'Mat Block': ['#C03028', "#601814", '#49282c'],
		'Aqua Edge': ['#6890F0', "#0f389c", "#213870"],
		'Scorching Column': ['#E24242', "#7e1313", '#58252b'],
		'Vermilion GX': ['#E24242', "#7e1313", '#58252b'],
		'Rock Smash': ['#C03028', "#601814", '#49282c'],
		'Strength': ['#A8A878', "#575738", '#45473e'],
		'Aura Sphere': ['#C03028', "#601814", '#49282c'],
		'Beatdown Smash': ['#C03028', "#601814", '#49282c']
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

	if (turn == 0) {
		$("#atk-btn1").prop("disabled", false)
		$("#atk-btn2").prop("disabled", false)
		$("#atk-btn3").prop("disabled", true)
		$("#atk-btn4").prop("disabled", true)
		turn += 1
	}

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
	// player1_vals=currentPokemonHP[$('#deck1').data('id')]+currentPokemonHP[$('#deck2').data('id')]+currentPokemonHP[$('#deck3').data('id')]+currentPokemonHP[$('#deck4').data('id')]+currentPokemonHP[$('#battle1').data('id')]
	// player2_vals=currentPokemonHP[$('#deck5').data('id')]+currentPokemonHP[$('#deck6').data('id')]+currentPokemonHP[$('#deck7').data('id')]+currentPokemonHP[$('#deck8').data('id')]+currentPokemonHP[$('#battle2').data('id')]
	hitBtn1.click(function () {
		pokemon_name = $(document.getElementById('battle2')).data("id");
		attack_hp(pokemon_name, $('.atk-name1').html(), hBar2, hit2, bar2);
		setTimeout(function () {
			document.body.style.backgroundColor = moveColor[$(".atk-name1").text().trim()][2];
		}, 100);
		setTimeout(function () {
			document.body.style.backgroundColor = '#333844';
		}, 1200);
	});

	hitBtn2.click(function () {
		pokemon_name = $(document.getElementById('battle2')).data("id");
		attack_hp(pokemon_name, $('.atk-name2').html(), hBar2, hit2, bar2);
		setTimeout(function () {
			document.body.style.backgroundColor = moveColor[$(".atk-name2").text().trim()][2];
		}, 100);
		setTimeout(function () {
			document.body.style.backgroundColor = '#333844';
		}, 1200);
	});

	hitBtn3.click(function () {
		pokemon_name = $(document.getElementById('battle1')).data("id");
		attack_hp(pokemon_name, $('.atk-name3').html(), hBar1, hit1, bar1);
		setTimeout(function () {
			document.body.style.backgroundColor = moveColor[$(".atk-name3").text().trim()][2];
		}, 100);
		setTimeout(function () {
			document.body.style.backgroundColor = '#333844';
		}, 1200);
	});

	hitBtn4.click(function () {
		pokemon_name = $(document.getElementById('battle1')).data("id");
		attack_hp(pokemon_name, $('.atk-name4').html(), hBar1, hit1, bar1);
		setTimeout(function () {
			document.body.style.backgroundColor = moveColor[$(".atk-name4").text().trim()][2];
		}, 100);
		setTimeout(function () {
			document.body.style.backgroundColor = '#333844';
		}, 1200);
	});

	$('#deck1').click(function () {
		if (turn % 2 == 1) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
			}
			else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}
	});
	$('#deck2').click(function () {
		if (turn % 2 == 1) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}

	});
	$('#deck3').click(function () {
		if (turn % 2 == 1) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}
	});
	$('#deck4').click(function () {
		if (turn % 2 == 1) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'), hBar1, bar1);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}

	});
	$('#deck5').click(function () {
		if (turn % 2 == 0) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}

	});
	$('#deck6').click(function () {
		if (turn % 2 == 0) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}

	});
	$('#deck7').click(function () {
		if (turn % 2 == 0) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
		}

	});
	$('#deck8').click(function () {
		if (turn % 2 == 0) {
			if (currentPokemonHP[$(this).data('id')] != 0) {
				switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'), hBar2, bar2);
			} else {
				alert('Pokemon has no more HP');
			}
		}
		else {
			alert("Cannot switch to this pokemon.")
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

		if (turn % 2 == 0) {
			$("#atk-btn1").prop("disabled", false)
			$("#atk-btn2").prop("disabled", false)
			$("#atk-btn3").prop("disabled", true)
			$("#atk-btn4").prop("disabled", true)
		} else {
			$("#atk-btn1").prop("disabled", true)
			$("#atk-btn2").prop("disabled", true)
			$("#atk-btn3").prop("disabled", false)
			$("#atk-btn4").prop("disabled", false)
		}

		turn = turn + 1;
	}

	function get_hp_bars(pokemon_name, bar) {
		var totalhp = pokemonHP[pokemon_name];
		var currenthp = currentPokemonHP[pokemon_name];
		var barWidth = (currenthp / totalhp) * 100;
		bar.find('.hitbar-text').html(currenthp + '/' + totalhp);
		bar.css('width', barWidth + "%");
	}
	function set_color_bar(bar, newValue, total) {
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

		setTimeout(function () {
			if (hBar.data('value') == 0) {
				alert("Change Pokemon.")


				if (pokemon_name == 'yvetal' || pokemon_name == 'dialga' ||
					pokemon_name == 'kingdra' || pokemon_name == 'charizard' || pokemon_name == 'venusaur') {
					player1 += 1
				}
				else if (pokemon_name == 'skarmory' || pokemon_name == 'greninja' ||
					pokemon_name == 'reshiram' || pokemon_name == 'snorlax' || pokemon_name == 'lucario') {
					player2 += 1
				}

				if (player1 == 5) {
					console.log("Hello.")
					setTimeout(function () {
						localStorage.setItem("name", "Player1");
						window.location.href = "./winner.html";
					})
				}
				else if (player2 == 5) {
					console.log("Hello1.")
					setTimeout(function () {
						localStorage.setItem("name", "Player2");
						window.location.href = "./winner.html";
					})

				}
				$("#atk-btn1").prop("disabled", true)
				$("#atk-btn2").prop("disabled", true)
				$("#atk-btn3").prop("disabled", true)
				$("#atk-btn4").prop("disabled", true)
			}
		}, 1500)
		// player1_vals=currentPokemonHP[$('#deck1').data('id')]+currentPokemonHP[$('#deck2').data('id')]+currentPokemonHP[$('#deck3').data('id')]+currentPokemonHP[$('#deck4').data('id')]+currentPokemonHP[$('#battle1').data('id')]
		// player2_vals=currentPokemonHP[$('#deck5').data('id')]+currentPokemonHP[$('#deck6').data('id')]+currentPokemonHP[$('#deck7').data('id')]+currentPokemonHP[$('#deck8').data('id')]+currentPokemonHP[$('#battle2').data('id')]
		
		if (turn % 2 == 0) {
			// alert('player2');
			$("#atk-btn1").prop("disabled", false)
			$("#atk-btn2").prop("disabled", false)
			$("#atk-btn3").prop("disabled", true)
			$("#atk-btn4").prop("disabled", true)
		} else {
			// alert('player1')
			$("#atk-btn1").prop("disabled", true)
			$("#atk-btn2").prop("disabled", true)
			$("#atk-btn3").prop("disabled", false)
			$("#atk-btn4").prop("disabled", false)
		}

		turn = turn + 1;
	}
	function set_hp(pokemon_name, new_hp) {
		currentPokemonHP[pokemon_name] = new_hp;

	}

});