let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];


let played = false; level = 0;
let checkval=0
$(document).click(function() {
    if (!played) {
        $("#msg").text("Level " + level);
        played = true;
        nextSequence();
    }
   
});

$(".btn").click(function() {
    let clickedColor=this.id
    userClickedPattern.push(clickedColor);
    $(this).addClass('border');
    setTimeout(() => {
    $(this).removeClass('border');
        
    },100);
    
    checkval++
    checkAnswer()
});

function checkAnswer() {
    if(gamePattern[checkval-1]==userClickedPattern[checkval-1]){
        
        if(checkval==level){
            console.log('level pass');
            userClickedPattern=[];
            checkval=0;
            nextSequence();
        }
    }else{
        console.log('gameover');
        gameOver();
    }
}
function nextSequence() {

    level++;
    $("#msg").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
}
function startOver() {
    level = 0;
    gamePattern = [];
    played = false;
    $('body').removeClass('game-over');

    
}

function gameOver(){
    $('body').addClass('game-over');

    level=0;
    checkval=0;
    gamePattern=[];
    userClickedPattern=[];
    $('#msg').text('GAME OVER')
    
}