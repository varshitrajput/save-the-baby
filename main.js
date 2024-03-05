var blueCar = document.getElementById("baby");
var blueCar2 = document.getElementById("baby2");
var blueCar3 = document.getElementById("baby3");
var raceCar = document.getElementById("bmw");
var raceCar2 = document.getElementById("bmw2");
var result = document.getElementById("result")
const score =  document.getElementById("score")
const scoreCount =  document.getElementById("score_count")

var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");
var squishsound = document.getElementById("squishsound");



setInterval(moveBackground, 200);

function moveBackground() {
    const gameElement = document.getElementById("game");
    const currentBackgroundPosition = parseInt(getComputedStyle(gameElement).backgroundPositionY) || 0;
    const newBackgroundPosition = currentBackgroundPosition === 0 ? -700 : 0;
    gameElement.style.backgroundPositionY = newBackgroundPosition + "px";
}
function updateScore() {
    document.getElementById("score_count").textContent = counter;
}

 function startGame() {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("game").style.display = "block";
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

setInterval(function kill (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar3).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar3).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    var raceCar2Left = parseInt(window.getComputedStyle(raceCar2).getPropertyValue("left"));
    if(((blueCarLeft === raceCarLeft) || (blueCarLeft === raceCar2Left)) && (blueCarTop == 425)){

        counter = counter + 5;
        squishsound.play();

        updateScore();
        }
}, 10)


raceCar.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    
    // Assuming you want to toggle between left and right on each click
    if (raceCarLeft == 0) {
        // Move to the right
        raceCar.style.left = (raceCarLeft + 100) + "px";
        jumpSound.play();
    } else {
        // Move to the left
        raceCar.style.left = (raceCarLeft - 100) + "px";
        jumpSound.play();
    }
});

raceCar2.addEventListener("click", function () {
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar2).getPropertyValue("left"));
    
    // Assuming you want to toggle between left and right on each click
    if (raceCarLeft == 300) {
        // Move to the right
        raceCar2.style.left = (raceCarLeft - 100) + "px";
        jumpSound.play();
    } else {
        // Move to the left
        raceCar2.style.left = (raceCarLeft + 100) + "px";
        jumpSound.play();
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
        }
}, 10)




