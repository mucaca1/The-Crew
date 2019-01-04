let figurine = {
    "figurine" : [
      {
        "url" : "/head.png",
        "alt" : "head",
        "moved": false,
        "joints": [1],
        "connected": [false],
        "xys":[[30,150]],
        "puzzled": false
      },
      {
        "url" : "/body.png",
        "alt" : "body",
        "moved": false,
        "joints": [0,2,3,4,5],
        "connected": [false,false,false,false,false],
        "xys":[[-30,-150],[-80,6],[65,-11],[-14,123],[44,127]],
        "puzzled": false
      },
      {
        "url" : "/leftHand.png",
        "alt" : "leftHand",
        "moved": false,
        "joints": [1],
        "connected": [false],
        "xys":[[80,-6]],
        "puzzled": false
      },
      {
        "url" : "/rightHand.png",
        "alt" : "rightHand",
        "moved": false,
        "joints": [1],
        "connected": [false],
        "xys":[[-65,11]],
        "puzzled": false
      },
      {
        "url" : "/leftLeg.png",
        "alt" : "leftLeg",
        "moved": false,
        "joints": [1,6],
        "connected": [false,false],
        "xys":[[14,-123],[-15,103]],
        "puzzled": false
      },
      {
        "url" : "/rightLeg.png",
        "alt" : "rightLeg",
        "moved": false,
        "joints": [1,7],
        "connected": [false,false],
        "xys":[[-44,-127],[25,100]],
        "puzzled": false
      },
      {
        "url" : "/leftFoot.png",
        "alt" : "leftFoot",
        "moved": false,
        "joints": [4],
        "connected": [false],
        "xys":[[15,-103]]
      },
      {
        "url" : "/rightFoot.png",
        "alt" : "rightFoot",
        "moved": false,
        "joints": [5],
        "connected": [false],
        "xys":[[-25,-100]],
        "puzzled": false
      }
    ]
  }

var time = null;
var gameTime;

var gameState = 1;

function demoRestartButtonClicked(){

    //DEMO, END OF GAME
if(gameState == 1){
    document.getElementById("demoRestartButton").innerHTML = "RESTART";
    gameState = 0;
    clearInterval(gameTime);
    gameTime = null;
    runDemo();
    return;
}

    //RESTART, START OF GAME
if(gameState == 0){
    document.getElementById("demoRestartButton").innerHTML = "DEMO";
    gameState = 1;
    document.getElementById('winLabel').innerHTML = null;
    loadGameAndStart();
    return;
}

}

function loadGameAndStart(){
    
    //remove all parts for reload
    while (document.getElementById('gameDiv').firstChild) {
        document.getElementById('gameDiv').removeChild(document.getElementById('gameDiv').firstChild);
    }

    //set all parts unmoved
    for(var i = 0; i < figurine.figurine.length; i++){
        figurine.figurine[i].moved = false;
        figurine.figurine[i].puzzled = false;
        for(var i2 = 0; i2 < figurine.figurine[i].connected.length;i2++){
            figurine.figurine[i].connected[i2] = false;
        }
    }

    //SETUP IMAGES
    for(let i = 0; i < figurine.figurine.length; i++){
        var img = new Image();
        img.src = "game_tomi" + figurine.figurine[i].url;
        img.alt = figurine.figurine[i].alt;
        img.id =  figurine.figurine[i].alt;
        img.className = "drag";
        img.style.position = 'absolute';
        document.getElementById('gameDiv').appendChild(img);
    }

    //SETUP TIME
    time = new Date().getTime();

    document.getElementById("gameTime").innerHTML = "Uplynutý čas: 0h 0m 0s";
    gameTime = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        distance = now - time;
      
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("gameTime").innerHTML = "Uplynutý čas: " + hours + "h "
        + minutes + "m " + seconds + "s ";
      }, 1000);

      //SET DRAGGING FUNCTIONS
    var drag = document.getElementsByClassName("drag");
    for(let i = 0; i < drag.length; i++){
        $(drag[i]).draggable(
            {
                drag: function() {
                    //movingParts();
                },
                stop: function() {
                    checkConnection(drag[i],i);
                }
            }
        );
    }

}

//hlava telo
//lava ruka telo
//prava ruka telo
//lava noha telo
//prava noha telo
//lave chodidlo lava noha
//prave chodidlo prava noha

function checkConnection(dragged, i){

    figurine.figurine[i].moved = true;
    var fig = figurine.figurine[i];

    var joint;
    for(var joint = 0; joint < fig.joints.length; joint++){


        //este nebolo spojene
        if(fig.connected[joint] == false){

            let index = fig.joints[joint];
            //bolo dotknute aj spojitelnym predmetom
            if(figurine.figurine[index].moved == true){
    
                console.log(fig.alt, figurine.figurine[index].alt);
                //ak spreadne tak moze spojit!
            if(spread(dragged,document.getElementById('gameDiv').childNodes[index],fig.xys[joint][0],fig.xys[joint][1],20)){

                console.log("CONNECTED");
                figurine.figurine[i].puzzled = true;
                figurine.figurine[index].puzzled = true;
                figurine.figurine[i].connected[joint] = true;
                var drag = document.getElementsByClassName("drag");
                $(drag[i]).draggable("option", "disabled", true);
                $(drag[index]).draggable("option", "disabled", true);

                checkForFinish();
            } 
    
    
            }    
        }
    }
}

function checkForFinish(){

    var win = true;
    for(var i = 0; i < figurine.figurine.length; i++){
        if(figurine.figurine[i].puzzled == false){
            win = false;
        }
    }

    if(win){
        console.log("WIN");
        document.getElementById('winLabel').innerHTML = "PUZZLE COMPLETE!";
        document.getElementById("demoRestartButton").innerHTML = "RESTART";
        gameState = 0;
        clearInterval(gameTime);
        gameTime = null;

    } else {
        console.log("NOT WIN");
    }

}

function joinWithoutConnect(pos, x, y){
    let posT = getOffset(pos)
    return {left:posT.left + x, top: posT.top + y};
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function runDemo(){

    $("#head").animate({ top: "25%", left: "50%"}, 300);
    $("#body").animate({ top: "45%", left: "55%"}, 300);
    $("#leftHand").animate({ top: "47%", left: "45%"}, 300);
    $("#rightHand").animate({ top: "47%", left: "65%"}, 300);
    $("#leftLeg").animate({ top: "62%", left: "53%"}, 300);
    $("#rightLeg").animate({ top: "62%", left: "60%"}, 300);
    $("#leftFoot").animate({ top: "77%", left: "53%"}, 300);
    $("#rightFoot").animate({ top: "77%", left: "63%"}, 300);
}



function spread(position1, position2, x, y, estimate){
    var first = false;
    var second = false;

    position1 = getOffset(position1);
    position2 = getOffset(position2);

    console.log(position1);
    console.log(position2);

    console.log(position2.left - position1.left);

    if(position2.left - position1.left > x - estimate && position2.left - position1.left < x + estimate){
        first = true;
    }

    console.log(position2.top - position1.top);
    if(position2.top - position1.top > y-estimate && position2.top - position1.top < y + estimate){
        second = true;
    }

    console.log(first, second);
    return (first && second);
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }