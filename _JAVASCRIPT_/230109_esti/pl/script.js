var i = 1;
var ido1;
function hatterValt(){
    document.body.style.backgroundColor = "red";
}

function hatterValt2(szin){
    setTimeout(function(){
        document.body.style.backgroundColor = szin;  
    },3000);
}

function szamStart(){
    ido1 = setInterval(function(){
        document.getElementById("szamolo").innerHTML = i;
        i++;
    },1000);
}
function idoStop(){
    clearInterval(ido1);
}