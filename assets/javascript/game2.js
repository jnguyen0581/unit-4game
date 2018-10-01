
var winCount = 0;
var lostCount = 0;

// random targetScore from 19-120
var targetScore = Math.floor(Math.random() * 120 - 19) + 19;
$("#targetScore").text(targetScore);

// random number from 1-12 for each crystal after being clicked



var crystal1 = Math.floor(Math.random() * 12 - 1) + 1;
$("#crystal1").text(crystal1);

var crystal2 = Math.floor(Math.random() * 12 - 1) + 1;
var crystal3 = Math.floor(Math.random() * 12 - 1) + 1;
var crystal4 = Math.floor(Math.random() * 12 - 1) + 1;

$("#winCount").html(winCount);
$("#lostCount").html(lostCount);

var count = 0;
$("#currentScore").text(count);

function restartGame() {

    targetNumber = Math.floor(Math.random() * 120 - 19) + 19;
    $("#targetScore").text(targetScore);
    crystal1 = Math.floor(Math.random() * 12 - 1) + 1;
    crystal2 = Math.floor(Math.random() * 12 - 1) + 1;
    crystal3 = Math.floor(Math.random() * 12 - 1) + 1;
    crystal4 = Math.floor(Math.random() * 12 - 1) + 1;
    count = 0;
    $("#currentScore").text(count);

}

function win() {

    alert("You win!");
    winCount++;
    $("#winCount").text(winCount);
    restartGame();
}

function lose() {

    alert("You lose!");
    lostCount++;
    $("#lostCount").text(lostCount);
    restartGame();
}

$("#crystal1").on("click", function () {
    count = count + crystal1;

    $("#currentScore").text(count);

    if (count == targetScore) {
        winCount();
    }
    else if (count > targetScore) {
        lostCount();
    }
});

$("#crystal2").on("click", function () {
    count = count + crystal2;

    $("#currentScore").text(count);

    if (count == targetScore) {
        winCount();
    }
    else if (count > targetScore) {
        lostCount();
    }
});

$("#crystal3").on("click", function () {
    count = count + crystal3;

    $("#currentScore").text(count);

    if (count == targetScore) {
        winCount();
    }
    else if (count > targetScore) {
        lostCount();
    }
});

$("#crystal4").on("click", function () {
    count = count + crystal4;

    $("#currentScore").text(count);

    if (count == targetScore) {
        winCount();
    }
    else if (count > targetScore) {
        lostCount();
    }
});  