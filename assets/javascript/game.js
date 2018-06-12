// Creating variables to hold the numbers
var player = "";
var playerHealth = 0;
var playerAp =0;

var defender = "";
var defenderHealth = 0 ;
var defenderCap = 0;
var defeatedCount = 0;

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
    ($('.instructions').text('Pick a defender'));
    ($('.heroHP').text('Health: ' + playerHealth + ' Attack Power ' + playerAp));
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
    $('.attackBtn').prop('disabled', false);
    ($('.defenderHP').text('Health: ' + defenderHealth + ' Counter Power ' + defenderCap));    
    console.log('defender name post click', defender,'health', defenderHealth, 'counter', defenderCap, defenderImg);
  } 
});

var heroAni = $('.hero');

function winReset(){
  ($('.aragorn').attr('src','assets/images/aragorn.png'));
  ($('.gandalf').attr('src','assets/images/gandalf.png'));
  ($('.legolas').attr('src','assets/images/legolas.png'));
  ($('.gimli').attr('src','assets/images/gimli.png'));
  ($('.defeated').attr('src',''));
  ($('.hero').attr('src',''));
  ($('.defender').attr('src',''));
  ($('.instructions').text('welcome back challenger, chose the same hero or try a different adventure'));
  bullpenBool = true;
  bullpenBool2 =  true;
  player = "";
  playerHealth = 0;
  playerAp =0;
  defender = "";
  defenderHealth = 0 ;
  defenderCap = 0;
  defeatedCount = 0;
 }

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
    $('.heroHP').text('Health: ' + playerHealth + ' Player Attack Power ' + playerAp);
    $('.defenderHP').text('Health: ' + defenderHealth + ' Counter Power ' + defenderCap);  
    console.log('player hp ',playerHealth, 'defender hp', defenderHealth, 'player AP',playerAp);
  // player health is still above zero but defender is dead
  } else if((playerHealth >= 0) &&(defenderHealth <= 0 )){
    ($('.instructions').text('you took down that guy down, please choose a new enemy'));
    bullpenBool2 = true;
    ($('.heroHP').text('Health: ' + playerHealth + ' Player Attack Power ' + playerAp));    
    ($('.defender').attr('src',''));
    ($('.defeated').attr('src',defenderImg));
    defeatedCount++;
    $('.attackBtn').prop('disabled', true);
      if (defeatedCount === 3) {
        wins++;
        alert('you win!!');
        winReset();
      }
      $('.heroHP').text('Health: ' + playerHealth + ' Player Attack Power ' + playerAp);
      $('.defenderHP').text('Health: ' + defenderHealth + ' Counter Power ' + defenderCap);  
  // player is dead... lost game
  } else if ((playerHealth <= 0) &&(defenderHealth >= 0)){
    alert('you lose, try again')
    losses++;
    winReset();
  }
    
});



