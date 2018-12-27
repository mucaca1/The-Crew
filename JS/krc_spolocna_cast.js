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