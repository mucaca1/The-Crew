var file;
var day;
var dnes = new Date();
var dd = dnes.getDate();
var mm = dnes.getMonth() + 1; 
var yyyy = dnes.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
} 

if (mm < 10) {
    mm = '0' + mm;
} 

dnes = dd + '.' + mm + '.' + yyyy;


var ds = dd.toString();
/*console.log(ds);*/
var ms = mm.toString();
/*console.log(ms);*/
var check = ms + ds;
/*console.log(check);*/

let getXMLFile  = function(path, callback){
  let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("./JS/meniny.xml", function(xml){
    file = xml;
   for(var i = 0; i < xml.documentElement.getElementsByTagName('zaznam').length; i++){
       /*console.log(xml.documentElement.getElementsByTagName('den')[i].innerHTML);*/
       if(xml.documentElement.getElementsByTagName('den')[i].innerHTML === check){
           if(xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0101){
               document.getElementById("day").innerHTML = "Dátum: " ;
               document.getElementById("date").innerHTML = dnes;
               document.getElementById("names").innerHTML = ("<br>Sviatok: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.innerHTML);
           }
           if(xml.documentElement.getElementsByTagName('den')[i].innerHTML === 1225){
               document.getElementById("one").innerHTML = ("Dátum: ", dnes);
               document.getElementById("names").innerHTML = ("<br>Sviatok: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.nextElementSibling.innerHTML);
           }
           if(xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0501){
               document.getElementById("day").innerHTML = "Dátum: " ;
               document.getElementById("date").innerHTML = dnes;
               document.getElementById("names").innerHTML = ( "<br>Meno: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.nextElementSibling.nextElementSibling.innerHTML ,"<br>Sviatok: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.nextElementSibling.innerHTML);
           }
           if(xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0106 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0508 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0705 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0829 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0901 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 0915 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 1101 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 1117 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 1224 ||
              xml.documentElement.getElementsByTagName('den')[i].innerHTML === 1226 ){
               if(xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.nextElementSibling.innerHTML === "-")
               document.getElementById("day").innerHTML = "Dátum: " ;
               document.getElementById("date").innerHTML = dnes;
               document.getElementById("names").innerHTML = ("<br>Meno: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.innerHTML ,"<br>Sviatok: ", xml.documentElement.getElementsByTagName('den')[i].nextElementSibling.nextElementSibling.innerHTML);
           }
           day = i;
           document.getElementById("day").innerHTML = "Dátum: " ;
           document.getElementById("date").innerHTML = dnes;
       }
   } 
   /*console.log(xml.documentElement.getElementsByTagName('den')[0].childNodes[0]);*/
});

function change1(){
    document.getElementById("sk").checked = true;
    if(document.getElementById("sk").checked === true){
        try{
            document.getElementById("name").innerHTML = "Meno: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('SK')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je v kalendáry slovenské meno."
        }
    }
}
function change2(){
    document.getElementById("cz").checked = true;
    if(document.getElementById("cz").checked === true){
        try{
            document.getElementById("name").innerHTML = "Meno: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('CZ')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je v kalendáry české meno."
        }
    }
}
function change3(){
    document.getElementById("hu").checked = true;
    if(document.getElementById("hu").checked === true){
        try{
            document.getElementById("name").innerHTML = "Meno: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('HU')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je v kalendáry maďarské meno."
        }
    }
}
function change4(){
    document.getElementById("pl").checked = true;
    if(document.getElementById("pl").checked === true){
        try{
            document.getElementById("name").innerHTML = "Meno: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('PL')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je v kalendáry poľské meno."
        }
    }
}
function change5(){
    document.getElementById("au").checked = true;
    if(document.getElementById("au").checked === true){
        try{
            document.getElementById("name").innerHTML = "Meno: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('AU')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je v kalendáry rakúske meno."
        }
    }
}
function change6(){
    document.getElementById("sksv").checked = true;
    if(document.getElementById("sksv").checked === true){
        try{
            document.getElementById("name").innerHTML = "Sviatok: ";
            document.getElementById("names").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day].getElementsByTagName('SKsviatky')[0].innerHTML);
        }catch(Error){
            document.getElementById("names").innerHTML = "V tento deň nie je štátny sviatok."
        }
    }
}
/************************************************/
/************************************************/
/************************************************/

var d, m, y;
function findD(){
    var date_field = document.getElementById("ud").value.split('-');
    var d = date_field[2];
    var m = date_field[1];
    var to_find = m + d;
    for(var i = 0; i < file.documentElement.getElementsByTagName('zaznam').length; i++){
        day2 = i;
        if(file.documentElement.getElementsByTagName('den')[i].innerHTML === to_find){
           if(file.documentElement.getElementsByTagName('den')[i].innerHTML === 0101){
               if(document.getElementById("sk").checked === true){
                   ch1(day2);
               }
               else if(document.getElementById("cz").checked === true){
                   ch2(day2);
               }
               else if(document.getElementById("hu").checked === true){
                   ch3(day2);
               }
               else if(document.getElementById("pl").checked === true){
                   ch4(day2);
               }
               else if(document.getElementById("au").checked === true){
                   ch5(day2);
               }
               else if(document.getElementById("sksv").checked === true){
                   ch6(day2);
               }
           }
           if(file.documentElement.getElementsByTagName('den')[i].innerHTML === 1225){
               if(document.getElementById("sk").checked === true){
                   ch1(day2);
               }
               else if(document.getElementById("cz").checked === true){
                   ch2(day2);
               }
               else if(document.getElementById("hu").checked === true){
                   ch3(day2);
               }
               else if(document.getElementById("pl").checked === true){
                   ch4(day2);
               }
               else if(document.getElementById("au").checked === true){
                   ch5(day2);
               }
               else if(document.getElementById("sksv").checked === true){
                   ch6(day2);
               }
           }
           if(file.documentElement.getElementsByTagName('den')[i].innerHTML === 0501){
               if(document.getElementById("sk").checked === true){
                   ch1(day2);
               }
               else if(document.getElementById("cz").checked === true){
                   ch2(day2);
               }
               else if(document.getElementById("hu").checked === true){
                   ch3(day2);
               }
               else if(document.getElementById("pl").checked === true){
                   ch4(day2);
               }
               else if(document.getElementById("au").checked === true){
                   ch5(day2);
               }
               else if(document.getElementById("sksv").checked === true){
                   ch6(day2);
               }
           }
           if(file.documentElement.getElementsByTagName('den')[i].innerHTML === 0106 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 0508 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 0705 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 0829 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 0901 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 0915 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 1101 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 1117 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 1224 ||
              file.documentElement.getElementsByTagName('den')[i].innerHTML === 1226 ){
               if(document.getElementById("sk").checked === true){
                   ch1(day2);
               }
               else if(document.getElementById("cz").checked === true){
                   ch2(day2);
               }
               else if(document.getElementById("hu").checked === true){
                   ch3(day2);
               }
               else if(document.getElementById("pl").checked === true){
                   ch4(day2);
               }
               else if(document.getElementById("au").checked === true){
                   ch5(day2);
               }
               else if(document.getElementById("sksv").checked === true){
                   ch6(day2);
               }
           }
       }
        if(file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('den')[0].innerHTML === to_find){
               if(document.getElementById("sk").checked === true){
                   ch1(day2);
               }
               else if(document.getElementById("cz").checked === true){
                   ch2(day2);
               }
               else if(document.getElementById("hu").checked === true){
                   ch3(day2);
               }
               else if(document.getElementById("pl").checked === true){
                   ch4(day2);
               }
               else if(document.getElementById("au").checked === true){
                   ch5(day2);
               }
               else if(document.getElementById("sksv").checked === true){
                   ch6(day2);
               }
        }
    }
}

function ch1(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('SK')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je v kalendáry slovenské meno."
    }
}
function ch2(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('CZ')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je v kalendáry české meno."
    }
}
function ch3(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('HU')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je v kalendáry maďarské meno."
    }
}
function ch4(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('PL')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je v kalendáry poľské meno."
    }
}
function ch5(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('AU')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je v kalendáry rakúske meno."
    }
}
function ch6(day2){

    try{
        document.getElementById("n").innerHTML = (file.documentElement.getElementsByTagName('zaznam')[day2].getElementsByTagName('SKsviatky')[0].innerHTML);
    }catch(Error){
        document.getElementById("n").innerHTML = "V tento deň nie je žiaden sviatok."
    }
}

/************************************************************************/
/************************************************************************/
/************************************************************************/
function findN(){
    document.getElementById("d").innerHTML = "";
    document.getElementById("d1").innerHTML = "";
    document.getElementById("d2").innerHTML = "";
    document.getElementById("d3").innerHTML = "";
    document.getElementById("d4").innerHTML = "";
    document.getElementById("d5").innerHTML = "";
    document.getElementById("d6").innerHTML = "";
    document.getElementById("d7").innerHTML = "";
    document.getElementById("d8").innerHTML = "";
    document.getElementById("d9").innerHTML = "";
    var text = document.getElementById("un").value;
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    findIt(text);
}

function findIt(text){
    for(var i = 0; i < file.documentElement.getElementsByTagName('zaznam').length; i++){
        for(var j = 1; j < file.documentElement.getElementsByTagName('zaznam')[i].childNodes.length; j+=2){
            var full = file.documentElement.getElementsByTagName('zaznam')[i].childNodes[j].innerHTML;
            if(file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('SK')[0] !== undefined){
                var skn = file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('SK')[0].innerHTML;
            }
            if(file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('HU')[0] !== undefined){
                var skn1 = file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('HU')[0].innerHTML;
            }
            if(file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('PL')[0] !== undefined){
                var skn2 = file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('PL')[0].innerHTML;
            }
            if(file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('AT')[0] !== undefined){
                var skn3 = file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('AT')[0].innerHTML;
            }
            if(skn !== undefined){
                var skp = skn.split(', ');                
            }
            if(skn1 !== undefined){
                var skp1 = skn1.split(', ');                
            }if(skn2 !== undefined){
                var skp2 = skn2.split(', ');                
            }if(skn3 !== undefined){
                var skp3 = skn3.split(', ');                
            }
            var parts = full.split(', ');
            for(var k = 0; k < parts.length; k++){
                if(parts[k] === text){
                    var first = file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('den')[0].innerHTML;
                    first = first[2] + first[3] + '.' + first[0] + first [1] + '.';
                    if(file.documentElement.getElementsByTagName('zaznam')[i].getElementsByTagName('CZ')[0].innerHTML === parts[k]){
                        document.getElementById("d").innerHTML = "  CZ: ";
                        document.getElementById("d1").innerHTML = first;
                    }
                    if(skp[0] === parts[k] || skp[1] === parts[k]){
                        document.getElementById("d2").innerHTML = "   SK: ";
                        document.getElementById("d3").innerHTML = first;
                    }
                    if(skp1[0] === parts[k] || skp1[1] === parts[k]){
                        document.getElementById("d4").innerHTML = "   HU: ";
                        document.getElementById("d5").innerHTML = first;
                    }
                    if(skp2[0] === parts[k] || skp2[1] === parts[k]){
                        document.getElementById("d6").innerHTML = "   PL: ";
                        document.getElementById("d7").innerHTML = first;
                    }
                    if(skp3[0] === parts[k] || skp3[1] === parts[k]){
                        document.getElementById("d8").innerHTML = "   AT: ";
                        document.getElementById("d9").innerHTML = first;
                    }
                }
            }
        }
    }
}
