var crystal = {
    crystal1:
    {
        name: "Crystal1",
        value: 0
    },
    crystal2:
    {
        name: "Crystal2",
        value: 0
    },
    crystal3:
    {
        name: "Crystal3",
        value: 0
    },
    crystal4:
    {
        name: "Crystal4",
        value: 0
    }
};

// -------------Current and Target scores-----------
var currentScore = 0;
var targetScore = "";

var winCount = 0;
var lossCount = 0;


// --------------------

    function randomTargeScore () {

    currentScore = 0;

    targetScore = Math.floor(Math.random() * 102) + 19;

    targetScore = getRandom(19,120);

    crystal.crystal1.value = getRandom(1,12);
    crystal.crystal2.value = getRandom(1,12);
    crystal.crystal3.value = getRandom(1,12);
    crystal.crystal4.value = getRandom(1,12);

    for (var i = 0; i < 4; i++) {

    getRandom = (Math.floor(Math.random() * 11 ) + 1);


    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // console.log("Target Score: " = targetScore);

    console.log("Crystal1: " + crystal.crystal1.value + " | Crystal2: " + crystal.crystal2.value | "Crystal3: " + crystal.crystal3.value | "Crystal4: " + crystal.crystal4.value);
}

var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);
   
    checkWin();


    console.log("your score: " + currentScore);

    var checkWin = function() {
        if(currentScore > targetScore) {
            alert("Sorry. You lost!");
            // console.log("You lost!");
            lossCount++;

            $("#lossCount").html(lossCount);
        } 
        
        else if (currentScore = targetScore) {
            alert("Yay! You won!");
            // console.log("You won");
            winCount++;

            $("#winCount").html(winCount);
        }
    }

// ----------------------------------------------

startGame();
$("#crystal1").on("click", function() {
    addValues(crystal.crystal1);
},

$("#crystal2").on("click",function() {
    addValues(crystal.crystal2);
},

$("#crystal3").on("click",function() {
    addValues(crystal.crystal3);
},

$("#crystal4").on("click",function() {
    addValues(crystal.crystal4);
});