function kiszamol(){
    var bruttoBer = parseInt(document.getElementById("brutto_ber").value);
    var kor = parseInt(document.getElementById("kor").value);
    var tb = bruttoBer*0.185;
    //SZJA = Bruttó bér 15% -a (HA 25 alatti akkor ez a z érték 0!) 
    var szja = bruttoBer*0.15;
    if(kor == "0"){
       szja = 0;
    }
    //Nettó bér = Bruttó bér-SZJA-TB 
    var nettoBer = bruttoBer-szja-tb;
    var szocho = bruttoBer*0.13;
    var munkKtsg = bruttoBer+szocho;

    document.getElementById("nettoEredmeny").innerHTML = nettoBer;
    document.getElementById("szjaEredmeny").innerHTML = szja;
    document.getElementById("tbEredmeny").innerHTML = tb;
    document.getElementById("mktsgEredmeny").innerHTML = munkKtsg;
    

}