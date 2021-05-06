jQuery(document).ready(function(){
	var hitBtn = $('.atk1'),
		hBar = $('.hb1'),
		bar = hBar.find('.bar1'),
		hit = hBar.find('.hit1');

	var pokemoves = {
		"Charizard": ["Wing Attack", "Combustion Blast"],
		"Venusaur": ["Pollen Hazard", "Solarbeam"]
	};

	var moveDamage = {
		"Wing Attack": "60",
		"Combustion Blast": "150",
		"Pollen Hazard": "20",
		"Solarbeam": "90"
	};
	
	hitBtn.on("click", function(){
	
	  var total = hBar.data('total'),
		  value = hBar.data('value');
	  
	  var damage = 100;
	  var newValue = value - damage;
	  var barWidth = (newValue / total) * 100;
	  var hitWidth = (damage / value) * 100 + "%";
	  
	  // show hit bar and set the width
	  hit.css('width', hitWidth);
	
	  if(newValue < 200){
		  console.log("Hello")
		  bg = '#c54'
		  bar.css('background', bg);
	  }

	  hBar.data('value', newValue);
	  
	  setTimeout(function(){
		hit.css({'width': '0'});
		bar.css('width', barWidth + "%");
	  }, 500);

	});
  });

  