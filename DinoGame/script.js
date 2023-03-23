const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var dinoHit = false;

function jump() {
    if (dispatchEvent.classList != "jump") {
        //first it checks if the dino is mid-jump. If not, it makes it jump.
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
            //removes the jump class from the dino once it has jumped so that it can jump again
        }, 500);
    }
}
let checkAlive = setInterval(function () {
    //using bounding client rect instead of "parseInt(window.getComputedStyle(dino).getPropertyValue("top")" since they are moved with the gpu not the cpu with translate3d
    //translate3d does not update cpu position
    let dinoRect = dino.getBoundingClientRect();
    let cactusRect = cactus.getBoundingClientRect();

    //collision check
    if(dinoRect.bottom >= cactusRect.top && cactusRect.left < dinoRect.right){
        dino.style.borderColor = "red";
        dinoHit = true;
        /*dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(");
        window.location.reload();*/
    }
    else
        dino.style.borderColor = "grey";

}, 10);

document.addEventListener("keydown", event => {
    if(event.code === "Space")
        jump();
});
document.addEventListener("mousedown", event => {
    jump();
});

cactus.addEventListener("animationend", function () {
    let num = randomFloat(0.7, 1.5);

    cactus.style.animation = "none";
    cactus.offsetHeight;/*reflow*/ 
    cactus.style.animation = null;
    cactus.style.animationDuration = num +"s";

    if(!dinoHit){
        var scoreString = document.getElementById("score").innerHTML;
        var points = scoreString.substring(scoreString.length - 6);
        var newPoints = (Number.parseInt(points) + 100).toString().padStart(6, '0');
        document.getElementById("score").innerHTML = scoreString.replace(points, newPoints);
    }
    dinoHit = false;
});

function randomFloat(min, max) {
    let num = (Math.random() * (max - min)) + min;
    return Number.parseFloat(num).toFixed(2);
  }
  