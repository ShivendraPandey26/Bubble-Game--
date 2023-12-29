var time = 60;
var score = 0;
var hitNumber = 0 ;

function makeBubbles() {
for (let i = 0; i < 300; i++) {
    var Rnumber = Math.floor(Math.random() * 20);
    document.querySelector(".Bubble-section").innerHTML +=
    `<div class="Bubble">${Rnumber}</div>`;
}
}

function runTime() {
    var timeloop = setInterval(() => {
        if (time > 0) {
            time--;
            document.getElementById("time").innerHTML = time;
        }
        else {
            document.querySelector(".Bubble-section").innerHTML = "<h1> Game over </h1>"
            clearInterval(timeloop);
        }


    }, 1000);
}

function addScore() {
    score += 10;
    document.getElementById("score").textContent = score;
    }


function getNewHit() {
    hitNumber = Math.floor(Math.random() * 10);
    document.getElementById("hit").textContent = hitNumber;

}

document.querySelector(".Bubble-section").addEventListener( "click" ,function(value) {
    var no = Number(value.target.textContent);
    if (no === hitNumber) {
        addScore();  
        getNewHit();
        makeBubbles();
    }
    
    else{
        document.querySelector(".Bubble-section").innerHTML = "<h1> Game over </h1>"
    }
} );


runTime();
makeBubbles();
getNewHit();

