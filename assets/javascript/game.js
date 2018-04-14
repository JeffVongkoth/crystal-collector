$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var randHorsepower;
    var yourHorsepower;
    var modsRand = [];
    $("#wins").text("wins: " + wins);
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
    $(".mod").on("click", function () {

        $("#result").empty();

        yourHorsepower += modsRand[$(this).val()];

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

