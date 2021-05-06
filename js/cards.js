var $cards = $(".battle-card");
var $deckCards = $(".deck-card");
var $style = $(".hover");

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
  switch_w_battle1(this, document.getElementById('battle1'))
});
$('#deck2').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'))
});
$('#deck3').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'))
});
$('#deck4').click(function(){
  switch_w_battle1(this, document.getElementById('battle1'))
});
$('#deck5').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'))
});
$('#deck6').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'))
});
$('#deck7').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'))
});
$('#deck8').click(function(){
  switch_w_battle1(this, document.getElementById('battle2'))
});
function switch_w_battle1(deck_card1, battle_card1){
  const style1 = $(battle_card1).css('backgroundImage');
  const style2 = $(deck_card1).css('backgroundImage');
  $(battle_card1).css('backgroundImage', style2);
  $(deck_card1).css('backgroundImage', style1);

  console.log("Success")
}
