var Dcookie = document.cookie;

function saveCookie(name, value, exdays, path, domain, source) {
    if(name == '') return;
    var cookie = name + '=' + escape(value);
    if(exdays){
        var d = new Date((new Date()).getTime() + exdays*24*60*60*1000);
        cookie += '; expires=' + d.toGMTString();
    }
    if(path){
        cookie += '; path=' + path;
    }
    if(domain){
        cookie += '; domain=' + domain;
    }
    if(source){
        cookie += '; source=' + source;
    }
    console.log('ulozil som cookies');
    Dcookie = cookie;
    console.log(Dcookie);
  }

function loadCookie(name){
    console.log('nacitavam cookies -> ' + name);
    var cookie = Dcookie;
    if(cookie == "") return "";
    var start = cookie.indexOf (name+"=");
    if(start == -1) return "";
    start += name.length + 1;
    var end = cookie.indexOf(';', start);
    if(end == -1) end = cookie.length;
    return (unescape(cookie.substring(start,end)));
}

function lastPages(){
    document.getElementById('past').innerHTML = listCookies();
}

function listCookies() {
    var theCookies = Dcookie.split(';');
    console.log(theCookies);
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

function pageLoadCounter() {
    let n = localStorage.getItem("loadCounter");
    if (n === null) {
        n = 0;
    }
    n++;
    localStorage.setItem("loadCounter", n);
    document.getElementById("counter").innerHTML = "Počet prístupov na stránku: " + n.toString();
}