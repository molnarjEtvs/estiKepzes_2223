var seged = 0;
var arak = [];
var vegosszeg = 0;
var myVegosszeg = document.getElementById("vegosszeg");
function tetelHozzaAdasa(){
    vegosszeg = 0;
    var tetel_neve = document.getElementById("tetel_neve").value;
    var db = parseInt(document.getElementById("db").value);
    var tetelDbAr = parseInt(document.getElementById("db_ar").value);
    var myTBody = document.getElementById("myTBody");
    

    var myTr = document.createElement("tr");//<tr></tr>
    myTr.setAttribute("id","sor_"+seged);
    var osszAr = (tetelDbAr*db);
    arak[seged] = osszAr;
    var myArr = [tetel_neve,tetelDbAr,db,osszAr];
    for(i=0;i<=4;i++){
        //Létrehozom a td-t
        var myTd = document.createElement("td");
        if(i<4){
            var myTdText = document.createTextNode(myArr[i]);
            myTd.appendChild(myTdText);  
        }else{
            var myButton = document.createElement("button");
            var myButtonText = document.createTextNode("törlés");
            myButton.setAttribute("class","btn btn-danger");
            myButton.setAttribute("onclick","sorTorles("+seged+");");
            myButton.appendChild(myButtonText);
            myTd.appendChild(myButton);
        }
        myTr.appendChild(myTd);
    }
    document.getElementById("tetel_neve").value = "";
    document.getElementById("db").value = "";
    document.getElementById("db_ar").value = "";

    //Tétel neve cella
   /* var myTd1 = document.createElement("td");
    var myTd1Text = document.createTextNode("Tétel neve");
    myTd1.appendChild(myTd1Text); //<td>Tétel neve</td>

    //ár/db cella
    var myTd2 = document.createElement("td");
    var myTd2Text = document.createTextNode("db ár");
    myTd2.appendChild(myTd2Text);

    //db cella
    var myTd3 = document.createElement("td");
    var myTd3Text = document.createTextNode("db");
    myTd3.appendChild(myTd3Text);

    //db cella
    var myTd4 = document.createElement("td");
    var myTd4Text = document.createTextNode("ár");
    myTd4.appendChild(myTd4Text);

    //db cella
    var myTd5 = document.createElement("td");
    var myTd5Text = document.createTextNode("törlés gomb");
    myTd5.appendChild(myTd5Text);

    myTr.appendChild(myTd1);//<tr><td>Tétel neve</td></tr>
    myTr.appendChild(myTd2);
    myTr.appendChild(myTd3);
    myTr.appendChild(myTd4);
    myTr.appendChild(myTd5);*/

    myTBody.appendChild(myTr);

    arak.forEach(osszeszamol);

    myVegosszeg.innerHTML = vegosszeg;
    //console.log(vegosszeg);


    seged++;
    console.log(arak);
}
function osszeszamol(item) {
    vegosszeg += item;
}
function sorTorles(sorszam){
    vegosszeg = 0;
    document.getElementById("sor_"+sorszam).remove();
    arak[sorszam] = 0;
    arak.forEach(osszeszamol);
    myVegosszeg.innerHTML = vegosszeg;
}