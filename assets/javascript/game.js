// Creating variables to hold the numbers
var player = "";
var playerHealth = 0;
var playerAp =0;

var defender = "";
var defenderHealth = 0 ;
var defenderCap = 0;

var scoreDiv = $(".score");
var target = Math.floor(Math.random() * 90)+19; console.log ('target', target);
var targetDiv = $(".target");
var bullpenBool = true;
var bullpenBool2 = true;

var wins = 0;
var losses = 0;

//Logic that determines what happens with clicks on the character images
$('.char').click(function() {
  //If there is no image in player or defender box then moved the first character to player box
  if ((bullpenBool) && (bullpenBool2)){
    bullpenBool = false;
    player = this.name;
    playerHealth = parseInt(($(this).attr('hp')));
    playerAp = parseInt(($(this).attr('ap')));
    playerImg = ($(this).attr('src'));
    ($(this).attr('src',""));
    ($(this).attr('alt',""));
    ($('.hero').attr('src',playerImg));
    ($('.instructions').text('Pick a defender'))
    console.log('player name post click', player,'health', playerHealth, 'attack power', playerAp, playerImg);
    // winCondition();

  //If there is an image in player box move next character to defender box
  } else if ((bullpenBool === false) && (bullpenBool2)) {
    bullpenBool2 = false;
    defender = this.name;
    defenderHealth = parseInt(($(this).attr('hp')));
    defenderCap = parseInt(($(this).attr('cap')));
    defenderImg = ($(this).attr('src'));
    ($(this).attr('src',""));
    ($(this).attr('alt',""));
    ($('.defender').attr('src',defenderImg));
    ($('.instructions').text('Good Luck! Click Attack to take him down'))
    console.log('defender name post click', defender,'health', defenderHealth, 'counter', defenderCap, defenderImg);
  } 
});

// function healthcheck();{

// }

$('.attackBtn').click(function() {
  // player health is above zero and defender health is above zero
  if ((playerHealth >= 0) && (defenderHealth >= 0)){
    playerHealth -= defenderCap;
      if (playerHealth <= 0) {
        console.log("in if");
        return;
      }
    defenderHealth -= playerAp;
      if (defenderHealth <=0) {
        console.log('in defender if');
        return;
      }
    playerAp += playerAp;
    console.log('player hp ',playerHealth, 'defender hp', defenderHealth, 'player AP',playerAp);
  // player health is still above zero but defender is dead
  } else if((playerHealth >= 0) &&(defenderHealth <= 0 )){
    ($('.instructions').text('you took down', defender, 'please choose a new enemy'));
    bullpenBool2 = true;
    ($('.defender').attr('src',''));
    ($('.defeated').attr('src',defenderImg));
  // player is dead... lost game
  } else if ((playerHealth <= 0) &&(defenderHealth >= 0)){
    alert('you lose, try again')
  }
    
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



