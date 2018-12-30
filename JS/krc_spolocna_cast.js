
function start(){
    pageLoadCounter();
    lastPages();
}

/* Prida a zobrazi pocet navstevnosti na stranku */
function pageLoadCounter() {
    let n = localStorage.getItem("loadCounter");
    if (n === null) {
        n = 0;
    }
    n++;
    localStorage.setItem("loadCounter", n);
    document.getElementById("counter").innerHTML = "Počet prístupov na stránku: " + n.toString();
}


/* Nulovanie pamate */
function clearLocalStorage(){
    localStorage= null;
}

/* Kontrola ci podporuje localStorage */
function supports_html5_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  /* Prida a zaroven zobrazuje posledne navstivene stranky */
function lastPages(){

    if (!supports_html5_storage())
        {console.log("supportsLocalStorage nie je podporovany"); return; }
    console.log("supportsLocalStorage je podporovany");
    if(localStorage.length == 0)
        {for(let i = 0; i < 5 ; i++) {localStorage[i] = 'undefined'}};

    var i = 0;
    for (i = 0; i < 5; i++) {
        if(localStorage[i] == 'undefined'){
            localStorage[i] = window.location.href;
            i = 6;
        }
    }
    if(i == 5){
        for (i = 0; i< 4;i++){
            localStorage[i] = localStorage[i+1];
        }
        localStorage[i] = window.location.href;
    }

    var put = document.getElementById('breadcrumb');

    for(i = 0; i < 5 ; i++){
        if(localStorage[i] == 'undefined'){
            break;
        }
        else{

            let li = document.createElement('li');
            let a = document.createElement('a');

            let endIndex = localStorage[i].indexOf('.html');
            let sub = localStorage[i].substring(0,endIndex);
            let startIndex = sub.lastIndexOf('/');
            sub = localStorage[i].substring(startIndex+1,endIndex);
            let linkText = null;
            linkText = document.createTextNode(sub);

            if(localStorage[i+1] == 'undefined' | i == localStorage.length -1 | i == 4){
                li.setAttribute("class","breadcrumb-item active")
                li.setAttribute("aria-current","page");
                li.innerHTML = sub;

            } else {

                a.appendChild(linkText);
                a.title = localStorage[i];
                a.href = localStorage[i];
                li.appendChild(a);

              }
              
            put.appendChild(li);  

            a = null;
        }
    }
}

/* Maze local storage */
function clearStorage(){
    localStorage.clear();
}