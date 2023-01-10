var mIdo;
var perc;
var mp;
var si;
var segedPerc=-1;
var pBar;
var pBarPct = 100;
var mpBen;
var mpBen2;
function vSzamlalo(){
  mIdo=document.getElementById("mIdo").value;
  mpBen2 = mpBen = mIdo*60;
  perc= document.getElementById("perc");
  mp = document.getElementById("mp");
  perc.innerHTML = mIdo;
  pBar = document.getElementById("pBar");
  
  si = setInterval(function(){
    if(segedPerc==-1){
        mIdo--;
        if(mIdo<10){
            perc.innerHTML = "0"+mIdo;
        }else{
            perc.innerHTML = mIdo;
        } 
        segedPerc = 59;
    }
    if(segedPerc<10){
        mp.innerHTML = "0"+segedPerc;
    }else{
        mp.innerHTML = segedPerc;
    }
    
    segedPerc--;
    mpBen2--;
    pBarPct = mpBen2/mpBen*100;
    pBar.style.width = pBarPct+"%";
    if(mIdo == 0 && segedPerc==-1){
        clearInterval(si);
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-danger");
    }
  },1000);
}