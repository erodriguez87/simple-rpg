// Creating variables to hold the numbers
var player = "";
var playerHealth = 0;
var playerAp =0;
var playerCap = 0;
var scoreDiv = $(".score");
var target = Math.floor(Math.random() * 90)+19; console.log ('target', target);
var targetDiv = $(".target");

var emerald = Math.floor(Math.random() * 12); console.log ('emerald', emerald);
var wins = 0;
var losses = 0;

$('.char').click(function() {
  console.log('in char click')
  player = this.name;
  playerHealth = ($(this).attr('hp'));
  playerAp = ($(this).attr('ap'));
  playerCap = ($(this).attr('cap'));
  playerImg = ($(this).attr('src'));
  console.log('player name post click', player,'health', playerHealth, 'attack power', playerAp, 'counter', playerCap, playerImg);
  // winCondition();
});


// $(".crystalDiv").on("click", ".emerald", function() {
//   score += emerald;
//   console.log('score after', score)
//   winCondition();
// });

// $(".crystalDiv").on("click", ".gem", function() {
//   score += gem;
//   console.log('score after', score)
//   winCondition();
// });
// $(".crystalDiv").on("click", ".ruby", function() {
//   score += ruby;
//   console.log('score after', score)
//   winCondition();
// });

// function empty() {
//   // $(".targetDiv").empty();
//   // $(".scoreDiv").empty();
//   score = 0;
//   target = Math.floor(Math.random() * 90)+19; console.log ('target', target);
//   emerald = Math.floor(Math.random() * 12); console.log ('emerald', emerald);
//   diamond = Math.floor(Math.random() * 12); console.log ('diamond', diamond);
//   gem = Math.floor(Math.random() * 12); console.log ('gem', gem);
//   ruby = Math.floor(Math.random() * 12); console.log ('ruby', ruby);
// };

// function winCondition(){
//   targetDiv.text(target);
//   scoreDiv.text(score);
//   if (target === score){
//     wins++
//     statusDiv.text('You win! ' + 'wins: '+ wins + ' losses: ' + losses);
//     statusDiv.attr('class','win');
//     empty();
//   } else if (target < score) {
//     losses++
//     statusDiv.text('Big L! '+ 'wins: '+ wins + 'losses: ' + losses);
//     statusDiv.attr('class','lose');
//     empty();
//   } 
// }



