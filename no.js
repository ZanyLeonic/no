function setNo(refuse)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var tLang=data[Math.floor(Math.random()*data.length)]; 

        document.getElementById("no").innerHTML = tLang.string;
        document.getElementsByTagName("html")[0].setAttribute("lang", tLang.locale);
      }
    };
    if (refuse == true)
    {
        xmlhttp.open("GET", "refuse.json", true);
    }
    else
    {
        xmlhttp.open("GET", "no.json", true);
    }
    xmlhttp.send();
}
// stolen from: https://stackoverflow.com/a/831060
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
 }