var $cards = $(".battle-card");
var $deckCards = $(".deck-card");
var $style = $(".hover");

const attacks={
  'yveltal' : ['Evil Ball', 'Y Cyclone'],
  'skarmory' : ['Joust', 'Tailspin Piledriver'],
  'dialga' : ['Shred', 'Timeless GX'],
  'kingdra' : ['Hydro Pump', 'Reverse Thrust'],
  'charizard' : ['Wing Attack', 'Combustion Blast'],
  'venusaur' : ['Pollen Hazard', 'Solarbeam'],
  'greninja' : ['Mat Block', 'Aqua Edge'],
  'reshiram' : ['Scorching Column', 'Vermilion GX'],
  'snorlax' : ['Rock Smash', 'Strength'],
  'lucario' : ['Aura Sphere', 'Beatdown Smash'],
}

$cards.on("mousemove", function(e) {
  var $card = $(this);
  var l = e.offsetX;
  var t = e.offsetY;
  var h = $card.height();
  var w = $card.width();
  var lp = Math.abs(Math.floor(100 / w * l)-100);
  var tp = Math.abs(Math.floor(100 / h * t)-100);
  // console.log(lp, tp);
  var bg = `background-position: ${lp}% ${tp}%;`
  // console.log(bg);
  var style = `.battle-card.active:before { ${bg} }`
  $cards.removeClass("active");
  $card.addClass("active");
  $style.html(style);
}).on("mouseout", function() {
  $cards.removeClass("active");
});

$('#deck1').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'))
});
$('#deck2').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'))
});
$('#deck3').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'))
});
$('#deck4').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'), $('.atk-name1'), $('.atk-name2'))
});
$('#deck5').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'))
});
$('#deck6').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'))
});
$('#deck7').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'))
});
$('#deck8').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'), $('.atk-name3'), $('.atk-name4'))
});
function switch_w_battle1(deck_card1, battle_card1, atk1, atk2){
  const currentbattleimage = $(battle_card1).css('backgroundImage');
  const currentdeckimage = $(deck_card1).css('backgroundImage');
  const currentbattleid=$(battle_card1).data("id");
  const currentdeckid=$(deck_card1).data("id");
  const newlabels = attacks[currentdeckid];
  $(battle_card1).data('id', currentdeckid);
  $(deck_card1).data('id', currentbattleid);
  atk1.text(newlabels[0]);
  atk2.text(newlabels[1]);
  $(battle_card1).css('backgroundImage', currentdeckimage);
  $(deck_card1).css('backgroundImage', currentbattleimage);
  console.log(battle_card1);
  console.log("Success");
}
