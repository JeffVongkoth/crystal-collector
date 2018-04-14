$(document).ready(function() {

var wins = 0;
var losses = 0;
var randHorsepower;
var yourHorsepower;
var modsRand = [];
$("#wins").text("wins: " + wins );
$("#losses").text("losses: " + losses);





function startGame() {
//when game starts set all scores to 0 or be empty
    yourHorsepower = 0; 
    modsRand = [];
//create a for loop that gives a random number between 19-120
randHorsepower;
//create a for loop that assigns the buttons a random value
 randHorsepower = Math.floor(Math.random() * 120) + 19; 
$(".rand-hp").text(randHorsepower);
//generate numbers and push to an array
for (var i = 0; i < 12; i++) { 
    var mods = Math.floor((Math.random() * 12) + 1);
    modsRand.push(mods);
}
}

$(".mod").on("click", function(){
    
    $("#result").empty();

    yourHorsepower += modsRand[$(this).val()];
    console.log("your horsepower - " + yourHorsepower)

    
$("#result").text(modsRand);

    if (yourHorsepower === randHorsepower) {
        wins++
        $(".message").text("winner winner chicken dinner");
        startGame();
    }
     else if (yourHorsepower > randHorsepower) {
        losses++
        $(".message").text("You lose, upgrade driver mod");
        startGame();
}
$("#result").text(yourHorsepower);
$("#wins").text("wins: " + wins);
$("#losses").text("losses: " + losses);
})

startGame()
});


// getRandHorsepower()
// getRandMod()
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
