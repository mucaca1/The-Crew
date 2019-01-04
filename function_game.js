var b = 0;
b++;

function dragStart1(event){
    event.dataTransfer.setData("choice1", event.target.id);
}
function dragStart2(event){
    event.dataTransfer.setData("choice2", event.target.id);
}
function dragStart3(event){
    event.dataTransfer.setData("choice3", event.target.id);
}
function dragStart4(event){
    event.dataTransfer.setData("choice4", event.target.id);
}
function dragStart5(event){
    event.dataTransfer.setData("choice5", event.target.id);
}
function dragStart6(event){
    event.dataTransfer.setData("choice6", event.target.id);
}
function dragStart7(event){
    event.dataTransfer.setData("choice7", event.target.id);
}
function dragStart8(event){
    event.dataTransfer.setData("choice8", event.target.id);
}


function allowDrop1(event){
    event.preventDefault();
}
function allowDrop2(event){
    event.preventDefault();
}
function allowDrop3(event){
    event.preventDefault();
}
function allowDrop4(event){
    event.preventDefault();
}
function allowDrop5(event){
    event.preventDefault();
}
function allowDrop6(event){
    event.preventDefault();
}
function allowDrop7(event){
    event.preventDefault();
}
function allowDrop8(event){
    event.preventDefault();
}


function drop6(event){
    var data = event.dataTransfer.getData("choice1");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop7(event){
    var data = event.dataTransfer.getData("choice2");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop8(event){
    var data = event.dataTransfer.getData("choice3");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop9(event){
    var data = event.dataTransfer.getData("choice4");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop10(event){
    var data = event.dataTransfer.getData("choice5");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop11(event){
    var data = event.dataTransfer.getData("choice6");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop12(event){
    var data = event.dataTransfer.getData("choice7");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}
function drop13(event){
    var data = event.dataTransfer.getData("choice8");
    event.target.appendChild(document.getElementById(data));
    skore1.innerHTML = b++;
}

function submit1(){
    if(b > 7){
        message.innerHTML = "Vihral si!";
        clearInterval(timeCounter);
    }
}

function gameTime(){
        var time = new Date().getTime();
        timeCounter = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        distance = now - time;
      
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";
      }, 1000);
}

$(document).ready(function(){
  $(".demo").click(function(){
    $("#target1").animate({left: '320%', top: '390%'});
    $("#target2").animate({left: '550%', top: '390%'});
    $("#target3").animate({left: '350%', top: '420%'});
    $("#target4").animate({right: '5%', top: '455%'});
    $("#target5").animate({left: '25%', top: '390%'});
    $("#target6").animate({right: '210%', top: '310%'});
    $("#target7").animate({right: '340%', top: '420%'});
    $("#target8").animate({right: '350%', top: '310%'});
  });
    
});
