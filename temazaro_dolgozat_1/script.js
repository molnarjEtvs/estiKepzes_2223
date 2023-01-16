var burkolat = ["Olcsó","Közepes","Drága"];
var burkolatAr = [3500,5000,6900];
var burkolatLista = document.getElementById("burkolatLista");
var jarolapTipusa = document.getElementById("jarolapTipusa");

function kiszamolas(){
    var szel = document.getElementById("szel").value;
    szel = parseInt(szel);
    var hossz = document.getElementById("hossz").value;
    hossz = parseInt(hossz);
    var nettom2 = document.getElementById("nettom2").value;
    nettom2 = parseInt(nettom2);
    var kivBurkolatAra = burkolatAr[burkolatLista.value];
    var kivBurkolatNeve = burkolat[burkolatLista.value];

    nm = szel*hossz;
    document.getElementById("helysegMeret").innerHTML = nm;

    alapAr = nm*nettom2;
    document.getElementById("alapAr").innerHTML = alapAr;

    document.getElementById("jarolapAr").innerHTML = nm*kivBurkolatAra;

    document.getElementById("jarolapTipusa").innerHTML = kivBurkolatNeve;

    fizetendo = Math.round((alapAr+(nm*kivBurkolatAra))*1.1);
    document.getElementById("fizetendo").innerHTML = fizetendo;
}


document.body.onload=function(){
    

    for(x=0;x<burkolat.length;x++){
        var option = document.createElement("option");
        option.text = burkolat[x]+" "+burkolatAr[x]+" Ft/m2";
        option.value = x;
        burkolatLista.add(option); 
    }
}