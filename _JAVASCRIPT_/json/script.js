var text = '{"coord":{"lon":18.2333,"lat":46.0833},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"base":"stations","main":{"temp":281.13,"feels_like":279.18,"temp_min":281.13,"temp_max":281.13,"pressure":1002,"humidity":93},"visibility":8000,"wind":{"speed":3.09,"deg":20},"rain":{"1h":0.65},"clouds":{"all":100},"dt":1673286899,"sys":{"type":1,"id":6669,"country":"HU","sunrise":1673245689,"sunset":1673277564},"timezone":3600,"id":3046526,"name":"Pécs","cod":200}';

const obj = JSON.parse(text);

//document.getElementById("lat").innerHTML = obj['coord']['lat'];
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload=function(){
    alert("adatok betöltése kész");
}
xmlhttp.open("GET","./adat.txt");
xmlhttp.send();