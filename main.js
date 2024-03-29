var blueCar = document.getElementById("baby");
var blueCar2 = document.getElementById("baby2");
var blueCar3 = document.getElementById("baby3");
var raceCar = document.getElementById("bmw");
var raceCar2 = document.getElementById("bmw2");
var result = document.getElementById("result");
const score =  document.getElementById("score");
const scoreCount =  document.getElementById("score_count");


var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var squishsound = document.getElementById("squishsound");
var gameoversound = document.getElementById("gameoversound");
var driftsound = document.getElementById("driftsound");



let babyAnimationDuration = 1.5; // Default duration for baby
let baby2AnimationDuration = 1.7; // Default duration for baby2

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("background-music");

    // Check if the audio is paused before playing to avoid errors
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
}
document.getElementById("welcome-screen").addEventListener("click", playBackgroundMusic);



function restartGame() {
    // Reset game elements and show welcome screen
    document.getElementById("result").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    
    // Reset any other game-related variables or state if needed
    
    // Optionally, stop background music if it's playing
    document.getElementById("background-music").pause();
    document.getElementById("background-music").currentTime = 0;
}
setInterval(moveBackground, 200);


function setDifficultyLevel(difficulty) {
    switch (difficulty) {
        case 'easy':
            babyAnimationDuration = 3.0;
            baby2AnimationDuration = 3.1;
            break;
        case 'medium':
            babyAnimationDuration = 1.4;
            baby2AnimationDuration = 1.3;
            break;
        case 'impossible':
            babyAnimationDuration = 1;
            baby2AnimationDuration = 1.1;
            break;
        default:
            break;
    }
}



function moveBackground() {
    const gameElement = document.getElementById("game");
    const currentBackgroundPosition = parseInt(getComputedStyle(gameElement).backgroundPositionY) || 0;
    const newBackgroundPosition = currentBackgroundPosition === 0 ? -700 : 0;
    gameElement.style.backgroundPositionY = newBackgroundPosition + "px";
}
function updateScore() {
    document.getElementById("score_count").textContent = counter;
}

 function startGame(difficulty) {
         setDifficultyLevel(difficulty);

            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("game").style.display = "block";
       document.getElementById("baby").style.animation = `move ${babyAnimationDuration}s linear infinite`;
    document.getElementById("baby2").style.animation = `move ${baby2AnimationDuration}s linear infinite`;
        }


// baby move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 2)) * 100)
    blueCar.style.left = random + "px";
    counter++
    updateScore();
})

blueCar2.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 2)) * 100) + 200
    blueCar2.style.left = random + "px";
    counter++
    updateScore()
})

blueCar3.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 4)) * 100)
    blueCar3.style.left = random + "px";
    updateScore()
})

setInterval(function() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar3).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar3).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    var raceCar2Left = parseInt(window.getComputedStyle(raceCar2).getPropertyValue("left"));

    // Check collision with raceCar
    if (blueCarLeft === raceCarLeft && blueCarTop >= 525 && blueCarTop <= 600) {
        counter += 5;
        squishsound.play();
        updateScore();
    }

    // Check collision with raceCar2
    if (blueCarLeft === raceCar2Left && blueCarTop >= 525 && blueCarTop <= 600) {
        counter += 1;
        squishsound.play();
        updateScore();
    }
}, 10);


raceCar.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    
    // Assuming you want to toggle between left and right on each click
    if (raceCarLeft == 0) {
        // Move to the right
        raceCar.style.left = (raceCarLeft + 100) + "px";
        driftsound.play();
    } else {
        // Move to the left
        raceCar.style.left = (raceCarLeft - 100) + "px";
        driftsound.play();
    }
});

raceCar2.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar2).getPropertyValue("left"));
    
    // Assuming you want to toggle between left and right on each click
    if (raceCarLeft == 300) {
        // Move to the right
        raceCar2.style.left = (raceCarLeft - 100) + "px";
        driftsound.play();
    } else {
        // Move to the left
        raceCar2.style.left = (raceCarLeft + 100) + "px";
        driftsound.play();
    }
});
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if((blueCarLeft === raceCarLeft) && (blueCarTop >= 525 && blueCarTop <= 600)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
                gameoversound.play();

        }
}, 10)

setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar2).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar2).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar2).getPropertyValue("left"));
    
    if((blueCarLeft === raceCarLeft) && (blueCarTop >= 525 && blueCarTop <= 600)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;
            counter = 0;
        gameoversound.play();
        }
}, 10)




