team = [
    "Praca","Tomáš", "Miro", "Matej"
];

praca = [
    "Návrh grafického dizajnu", "Trojúrovňové menu","Kalendár s menami","Zobrazenie počítadla prístupov na stránku",  "Prehľad posledných stránok",  "Texty", "Minihra", "Kontakt", "Tabuľka" 
];

log = [
    [true,false, true],
    [true,false,false],
    [false, true, false],
    [false, false,true],
    [false, false,true],
    [true, false, false],
    [true, true, true],
    [false, false,true],
    [false, false,true]
];

function createTable(){
    var  tabulka = document.createElement('table');

    let riad = 10;
    let stl = 4
    for(let r = 0; r < riad; r++){
        let riadok = document.createElement('tr');
        riadok.style.border = "1px solid black";
        riadok.style.padding = "8px";
        for(let s = 0; s < stl; s++){
            let stlpec = document.createElement('th');
            stlpec.style.border = "1px solid black";
            stlpec.style.padding = "8px";
            if(r == 0){
                let text = document.createTextNode(team[s]);
                stlpec.appendChild(text);
            }
            else if(r > 0 && s == 0){
                let text = document.createTextNode(praca[r-1]);
                stlpec.appendChild(text);
            }
            else{
                let ch = document.createElement('input');
                ch.type = "checkbox";
                if(log[r-1][s-1] == true){
                    ch.checked = true;
                }
                ch.disabled = true;
                stlpec.appendChild(ch);
            }
            
            riadok.appendChild(stlpec);
        }
        tabulka.appendChild(riadok);
    }

    document.getElementById('table').appendChild(tabulka);
}