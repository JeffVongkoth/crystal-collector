$(document).ready(function() {

//string for wins
var wins = 0;
//string for losses
var losses = 0;
var gameHorsepower= 0;
var yourHorsepower= 0;
var modsRand = [];

//when game starts set all scores to 0 or be empty
function startGame() {

    yourHorsepower = 0; 


$("#hp-score, #hp-result").empty();
}

//create a for loop that gives a random number between 19-120
function getRandHorsepower() {
for (var i = 0; i < 12; i++) {
    var gameHorsepower = Math.floor(Math.random() * 120) + 19; 
    // console.log(gameHorsepower)
    $(".rand-hp").text(gameHorsepower);
}
};

//create a for loop that assigns the buttons a random value
function getRandMod() {
for (var i = 0; i < 12; i++) { 
    var mods = Math.floor((Math.random() * 12) + 1);
console.log(mods);

$(".image").on("click", function(){
    $("#hp-result").text(mods);
})
};
}

getRandHorsepower()
getRandMod()
});

// * There will be four crystals displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
