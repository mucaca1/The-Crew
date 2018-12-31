var photoJSON = {
    "photos": [
        {
          "src": "/rukaLavaHore.png",
          "alt": "rukaLavaHore"
        },
        {
          "src": "/rukaLavaDole.png",
          "alt": "rukaLavaDole"
        },
        {
          "src": "/telo.png",
          "alt": "telo"
        },
        {
            "src": "/nohavice.png",
            "alt": "nohavice"
        },
        {
            "src": "/hlava.png",
            "alt": "hlava"
        },
        {
            "src": "/rukaPravaHore.png",
            "alt": "rukaPravaHore"
        },
        {
            "src": "/rukaPravaDole.png",
            "alt": "rukaPravaDole"
        },
        {
          "src": "/oko.png",
          "alt": "oko"
        },
        {
          "src": "/ruka.png",
          "alt": "ruka"
        },
        {
            "src": "/nohaDole.png",
            "alt": "nohaDole"
        },
        {
          "src": "/nohaHore.png",
          "alt": "nohaHore"
        },
        {
          "src": "/noha.png",
          "alt": "noha"
        }   
    ]
}

var hlava;
var telo;
var noha;
var oko;
var nohaHore;
var nohaDole;
var nohavice;
var ruka;
var rukaPravaHore;
var rukaPravaDole;
var rukaLavaHore;
var rukaLavaDole;

var t = [false,false,false,false,false,false,false,false,false,false];

var time = null;

var timeCounter;

var distance;

function load_JSON(){
    var img;
    for(let i = 0; i < photoJSON.photos.length; i++){
        img = new Image();
        img.src = "./game_krc/matej_pic" + photoJSON.photos[i].src;
        img.alt = photoJSON.photos[i].alt;
        img.id = photoJSON.photos[i].alt;
        img.className = "drag";

        img.style.position = 'absolute';

        document.getElementById('play_area').appendChild(img);
    }
    get_objects();
    set_dragg();
    mobile();
}

function set_dragg() {
    var drag = document.getElementsByClassName("drag");
    for(let i = 0; i < drag.length; i++){
        $(drag[i]).draggable(
            {
                drag: function() {
                    follow(drag[i]);
                },
                stop: function() {
                    control();
                }
            }
        );
    }
  }

  function follow(who){
    if(t[0] == true){
        
        if(who == hlava){
            join(hlava, telo, -100,80);
        }
        else{
            join(telo, hlava, 100,-80);
        }
            
    }

    if(t[1] == true){
        if(who == nohavice){
            join(nohavice, telo, -16,-150);
        }
        else
            join(telo, nohavice, 16,150);
    }

    if(t[2] == true){
        if(who == rukaLavaHore)
        join(rukaLavaHore, telo, -90,-42);
        else
        join(telo, rukaLavaHore, 90,42);
    }
if(t[3] == true){
        if(who == rukaPravaHore)
        join(rukaPravaHore, telo, -60,-40);
        else
        join(telo, rukaPravaHore, 60,40);
    }

    if(t[4] == true){
        if(who == nohaHore){
            join(nohaHore, nohavice, -15,-18);
        }
        else
        join(nohavice, nohaHore, 15,18);
    }
if(t[5] == true){
        if(who == nohaDole){
            join(nohaDole, nohaHore, 2,-100);
        }
        else
        join(nohaHore, nohaDole, -2,100);
    }
if(t[6] == true){
        if(who == noha){
            join(noha, nohaDole, 12,-40);
        }
        else
        join(nohaDole, noha, -12,40);
    }
if(t[7] == true){
        if(who == rukaPravaDole){
            join(rukaPravaDole, rukaPravaHore, -13,-117);
        }
        join(rukaPravaHore, rukaPravaDole, 13,117);
    }
if(t[8] == true){
        if(who == rukaLavaDole){
            join(rukaLavaDole, rukaLavaHore, -13,-101);
        }
        else
        join(rukaLavaHore, rukaLavaDole, 13,101);
    }
if(t[9] == true){
        if(who == ruka){
            join(ruka, rukaPravaDole, 10,-66);
        }
        join(rukaPravaDole, ruka, -10,66);
    }
if(t[10] == true){
        if(who == oko){
            join(oko, hlava, -69,-54);
        }
        else
        join(hlava, oko, 69,54);
    }
}

function join(position,changeStyle, x, y){
    let pos = getOffset(position);
    changeStyle.style.left = pos.left + x + 'px';
    changeStyle.style.top = pos.top + y + 'px';
}

  function get_objects(){
    hlava = document.getElementById("hlava");
    telo = document.getElementById("telo");
    noha = document.getElementById("noha");
    oko = document.getElementById("oko");
    nohaHore = document.getElementById("nohaHore");
    nohaDole = document.getElementById("nohaDole");
    nohavice = document.getElementById("nohavice");
    ruka = document.getElementById("ruka");
    rukaPravaHore = document.getElementById("rukaPravaHore");
    rukaPravaDole = document.getElementById("rukaPravaDole");
    rukaLavaHore = document.getElementById("rukaLavaHore");
    rukaLavaDole = document.getElementById("rukaLavaDole");
}

function control(){
    
    
    /***************************** */
    /*TELO*/
    /***************************** */
    //telo a hlava kontrola
        if(this.spread( telo, hlava,100,-80,10)){
            t[0] = true;
            //console.log("dobre");
        }
    //telo a nohavice
        if(this.spread( telo, nohavice,16,150,10)){
            t[1] = true;
            //console.log("dobre");
        }
    //telo a ruka lava
        if(this.spread( telo, rukaLavaHore,90,42,17)){
            t[2] = true;
            //console.log("dobre");
        }
    //telo a ruka prava
        if(this.spread( telo, rukaPravaHore,60,40,15)){
            t[3] = true;
            //console.log("dobre");
        }
    /***************************** */
    /*NOHY*/
    /***************************** */
    //nohavice a noha
        if(this.spread( nohavice, nohaHore,15,18,12)){
            t[4] = true;
            //console.log("dobre");
        }
    //noha horna a dolna
        if(this.spread( nohaHore, nohaDole,-2,100,12)){
            t[5] = true;
            //console.log("dobre");
        }
    //noha dole a noha
        if(this.spread( nohaDole, noha,-12,40,12)){
            t[6] = true;
            //console.log("dobre");
        }
    /***************************** */
    /*RUKY*/
    /***************************** */
    //ruka prava hore a dole
        if(this.spread( rukaPravaHore, rukaPravaDole,13,117,14)){
            t[7] = true;
            //console.log("dobre");
        }
    //ruka lava hore a dole

        if(this.spread( rukaLavaHore, rukaLavaDole,13,101,14)){
            t[8] = true;
            //console.log("dobre");
        }

    //ruka prava dole a ruka
        if(this.spread( rukaPravaDole, ruka,-10,66,12)){
            t[9] = true;
            //console.log("dobre");
        }
    /***************************** */
    /*HLAVA*/
    /***************************** */
    //hlava a oko
        if(this.spread( hlava, oko,69,54,13)){
            t[10] = true;
            //console.log("dobre");
        }
    console.log(t);
    if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8] && t[9] && t[10]){
        console.log("SPRAVNE !");
        clearInterval(timeCounter);
        timeCounter = null;
        this.victory();
    }
}

  function spread(position1, position2, x, y, estimate){
    var first = false;
    var second = false;

    position1 = getOffset(position1);
    position2 = getOffset(position2);

    //console.log(position2[0] - position1[0]);
    if(position2.left - position1.left - estimate  && position2.left - position1.left < x + estimate){
        first = true;
    }
    //console.log(position2[1] - position1[1]);
    if(position2.top - position1.top > y-estimate && position2.top - position1.top < y + estimate){
        second = true;
    }

    return (first && second);
}

function colision(check){
    var images = document.getElementsByTagName('img');
    if(check.checked == true){
        for(var index = 0; index < images.length; index++){
            images[index].style.border = '1px solid red';
        }
    }
    else{
        for(var index = 0; index < images.length; index++){
            images[index].style.border = '0px';
        }
    }
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

function buttonStart(){
    console.log("Start");
    var questionbar = document.getElementById("questionStart");
    questionbar.style.display = "none";
    document.getElementById('black').style.display = "none";
    start();
}

function buttonExit(){
    console.log("Exit");
    window.history.back();
}


function start(){
    if(time == null){
        time = new Date().getTime();
    }
    timeCounter = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        distance = now - time;
      
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";
      }, 1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function victory(){
    
    timeCounter = null;

    await sleep(4000);
    var menu = document.getElementById('wictoryTable');
    document.getElementById("winnerTime").innerHTML = document.getElementById("timer").innerHTML;
    document.getElementById('black').style.display = "block";
    menu.style.display = "block";
}

function repeat(){
    location.reload();
}

async function animation(){
    let position;
    $("#telo").animate({ top: "50%", left: "50%"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(telo,  100,-80);
    $("#hlava").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(telo,  16,150);
    $("#nohavice").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(telo, 60,40);
    $("#rukaPravaHore").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(telo, 90,42);
    $("#rukaLavaHore").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(nohavice, 15,18);
    $("#nohaHore").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(nohaHore, -2,100);
    $("#nohaDole").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(nohaDole, -12,40);
    $("#noha").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect( rukaPravaHore, 13,117);
    $("#rukaPravaDole").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(rukaLavaHore, 13,101);
    $("#rukaLavaDole").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(rukaPravaDole, -10,66);
    $("#ruka").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    position = joinWithoutConnect(hlava, 69,54);
    $("#oko").animate({ top: position.top + "px", left: position.left + "px"}, 1000);
    await sleep(1000);
    victory();
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

function mobile(){
    var drag = document.getElementsByClassName("drag");
    for(let i = 0; i < drag.length; i++){
        drag[i].addEventListener('touchmove',function(ev){
        })
    }
}

function joinWithoutConnect(pos, x, y){
    let posT = getOffset(pos)
    return {left:posT.left + x, top: posT.top + y};
}