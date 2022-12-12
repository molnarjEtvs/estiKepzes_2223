function szamolas(){
    var maximumLiter = 20;
    var arsapkasAr = parseInt(document.getElementById("arsapkaAr").value);
    var piaciAr = parseInt(document.getElementById("piaciAr").value);
    var tankoltMennyiseg = parseInt(document.getElementById("tankoltMennyiseg").value);
    if(tankoltMennyiseg>maximumLiter){
        var piacarLiter = tankoltMennyiseg-maximumLiter;
        var arSapkaFizetendo = maximumLiter*arsapkasAr;
        var arPiaciFizetendo = piacarLiter*piaciAr;
    }else{
        var arSapkaFizetendo = tankoltMennyiseg*arsapkasAr;
        var arPiaciFizetendo = 0;
    }
    var fizetendo = arSapkaFizetendo+arPiaciFizetendo;

    document.getElementById("piaciFizetendo").innerHTML = arPiaciFizetendo;
    document.getElementById("arSapkaFizetendo").innerHTML = arSapkaFizetendo;
    document.getElementById("osszFizetendo").innerHTML = fizetendo;
    

}