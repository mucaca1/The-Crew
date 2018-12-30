var menuJSON = {
    "menu" : [
      {
        "title" : "Hry",
        "href" : "hry.html",
        "menu" : [
          {
            "title" : "Tomáš Macho",
            "href" : "tomihra.html"
          },
          {
            "title" : "Miroslav Belák",
            "href" : "mirihra.html"
          },
          {
            "title" : "Matej Krč",
            "href" : "matohra.html"
          }
        ]
      },
      {
        "title" : "Články",
        "href" : "clanky.html",
        "menu" : [
          {
            "title" : "Technika",
            "href" : "technika.html",
            "menu" : [
              {
                "title" : "Smartfóny",
                "href" : "technika-smartfony.html"
              },
              {
                "title" : "Gadgets",
                "href" : "technika-gadgets.html"
              }
            ]
          },
          {
            "title" : "Zaujímavosti",
            "href" : "zaujimavosti.html",
            "menu" : [
              {
                "title" : "Ľudia",
                "href" : "zaujimavosti-ludia.html"
              },
              {
                "title" : "Miesta",
                "href" : "zaujimavosti-miesta.html"
              }
            ]
          }
        ]
      },
      {
        "title" : "Kontakt",
        "href" : "kontakt.html"
      }
    ]
  }

  //generovanie menu podla aktualnej urovne - levelu
function generateMenu(){

    let startIndex = window.location.href.lastIndexOf('/');    
    let sub = window.location.href.substring(startIndex+1);
    //premennymi zistujem v ktorej urovni a na ktorej pozicii sa nachadzam
    var section = 0; 
    var layer = 0;
    var index = 0;
    var index2 = 0;

    var i,i2,i3;

    for(i = 0; i < menuJSON.menu.length; i++){
        section = i; 
        layer = 0;
        index = i;
        if (menuJSON.menu[i].href == sub){
        console.log("A");
            fillMenu(section,layer,index,index2);
            return;
        }

        if(menuJSON.menu[i].menu != null){
    
            for(i2 = 0; i2 < menuJSON.menu[i].menu.length; i2++){
                layer = 1;
                index = i2;
                if(menuJSON.menu[i].menu[i2].href == sub){
                    console.log("B");
                    fillMenu(section,layer,index,index2);
                    return;
                }

                if (menuJSON.menu[i].menu[i2].menu != null){

                    for(i3 = 0; i3 < menuJSON.menu[i].menu[i2].menu.length; i3++){
                        layer = 2;
                        index2 = i3;
                        if(menuJSON.menu[i].menu[i2].menu[i3].href == sub){
                            console.log("C");
                            fillMenu(section,layer,index,index2);
                            return;
                        }
                    }
                }
            }
        }
    }

    //generovanie menu
    //sekcie - hry, clanky, kontakt
    //vrstvy - ako hlboko som v danej sekcii
    //index - na akom indexe v poli som v danej urovni v danej sekcii
    //index2 - pomocny index ked som pri tretej urovni
    //ani sa nad tym zbytocne nemusite zamyslat dalo by sa to nakodit aj ovela viac pochopitelnejsie :-D
    //len som si to dopredu poriadne nerozmyslel a v polovici sa mi to uz nechcelo prerabat
}


function fillMenu(section,layer,index,index2){

    let menuBar = document.getElementById("menu");
    console.log(section,layer,index);
    switch (layer){

        case 0: 

        //ak existuje dalsia uroven zobrazim ju v menu
        if(menuJSON.menu[section].menu != null){

            let span = Math.round(12/menuJSON.menu[section].menu.length);
            let spanString = span.toString();

            for(i = 0; i < menuJSON.menu[section].menu.length; i++){

                let column = document.createElement('div');
                column.setAttribute("class","col-sm-"+spanString); 

                let a = document.createElement('a');
                a.setAttribute("class","menu");

                a.innerHTML = menuJSON.menu[section].menu[i].title;
                a.href = menuJSON.menu[section].menu[i].href;
    
                column.appendChild(a);
                menuBar.appendChild(column);

            }

        } else {

        let span = Math.round(12/menuJSON.menu.length);
        let spanString = span.toString();
        for(i = 0; i < menuJSON.menu.length; i++){

            let column = document.createElement('div');
            column.setAttribute("class","col-sm-"+spanString);

            let a = document.createElement('a');
            a.setAttribute("class","menu");
            if (i == index){
                a.setAttribute("id","active");
            }
            a.innerHTML = menuJSON.menu[i].title;
            a.href = menuJSON.menu[i].href;

            column.appendChild(a);
            menuBar.appendChild(column);

        }

        }
        break;

        case 1:

        if (menuJSON.menu[section].menu[index].menu != null){

            let span = Math.round(12/menuJSON.menu[section].menu[index].menu.length);
            let spanString = span.toString();

            for(i = 0; i < menuJSON.menu[section].menu[index].menu.length; i++){

                let column = document.createElement('div');
                column.setAttribute("class","col-sm-"+spanString); 

                let a = document.createElement('a');
                a.setAttribute("class","menu");

                a.innerHTML = menuJSON.menu[section].menu[index].menu[i].title;
                a.href = menuJSON.menu[section].menu[index].menu[i].href;
    
                column.appendChild(a);
                menuBar.appendChild(column);

            }


        } else {

        let span = Math.round(12/menuJSON.menu[section].menu.length);
        let spanString = span.toString();

        for(i = 0; i < menuJSON.menu[section].menu.length; i++){

            let column = document.createElement('div');
            column.setAttribute("class","col-sm-"+spanString);

            let a = document.createElement('a');
            a.setAttribute("class","menu");
            if (i == index){
                a.setAttribute("id","active");
            }
            a.innerHTML = menuJSON.menu[section].menu[i].title;
            a.href = menuJSON.menu[section].menu[i].href;

            column.appendChild(a);
            menuBar.appendChild(column);

        }

        }

        break;

        case 2:

        let span = Math.round(12/menuJSON.menu[section].menu[index].menu.length);
        let spanString = span.toString();

        for(i = 0; i < menuJSON.menu[section].menu[index].menu.length; i++){

            let column = document.createElement('div');
            column.setAttribute("class","col-sm-"+spanString);

            let a = document.createElement('a');
            a.setAttribute("class","menu");
            if (i == index2){
                a.setAttribute("id","active");
            }
            a.innerHTML = menuJSON.menu[section].menu[index].menu[i].title;
            a.href = menuJSON.menu[section].menu[index].menu[i].href;

            column.appendChild(a);
            menuBar.appendChild(column);

        }


        default: return;
    }

}