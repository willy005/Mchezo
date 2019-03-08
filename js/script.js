var round = 0;
$(document).ready(function() {
    $("img#rock").click(function() {
        chooseWinner("rock");

    });
    $("img#paper").click(function() {
        chooseWinner("paper");

    });
    $("button#newgame").click(function() {
        newGame();

    });

    $("img#scissors").click(function() {
        chooseWinner("scissors");

    });
    $("button#round3.play").click(function() {
        console.log("round3");
        round = 3;
        $("h1#3or5").text("First one to reach 3 points wins!!");

    });
    $("button#round5.play").click(function() {
        console.log("round3");
        round = 5;
        $("h1#3or5").text("First one to reach 5 points wins!!");
    });
});

var compScore = 0,
    playerScore = 0;

function chooseWinner(player) {
    var choices = ["rock", "paper", "scissors"];
    var comp = Math.floor(3 * Math.random());
    console.log(player);
    console.log(choices[comp]);

    if (choices[comp] === player) {
        $("h2#choice").text("You both chose " + player);
        $("h2#won_round").text("Its a draw!!");
    } else if ((player === "rock" && choices[comp] === "scissors") ||
        (player === "paper" && choices[comp] === "rock") ||
        (player === "scissors" && choices[comp] === "paper")) {
        $("h2#choice").text(player + " crushes " + choices[comp]);
        $("h2#won_round").text("Player won round");
        addScore(0, 1);

    } else {
        addScore(1, 0);
        $("h2#choice").text(choices[comp] + " smashes " + player);
        $("h2#won_round").text("Computer won round");
    }

}

function addScore(computer, player1) {

    compScore += parseInt(computer);
    playerScore += parseInt(player1);
    $("h1#player_score").text(playerScore);
    $("h1#comp_score").text(compScore);
    console.log(compScore, playerScore);
    if (compScore === round) {
        $("h1#winner").text("Computer wins game");
        hideButtons();
    } else if (playerScore === round) {
        $("h1#winner").text("player wins game");
        hideButtons();
    }
}

function newGame() {
    playerScore = 0;
    compScore = 0;
    showButtons();
    $("h1#player_score").text(0);
    $("h1#comp_score").text(0);
    $("h1#winner").text("");
    $("h2#choice").text("");
    $("h2#won_round").text("");
    $("h1#3or5").text("");
}

function hideButtons() {
    $("img#rock").hide();
    $("img#paper").hide();
    $("img#scissors").hide();
}

function showButtons() {
    $("img#rock").show();
    $("img#paper").show();
    $("img#scissors").show();
}