
function agregar(){
//Para internet explorer
if ((navigator.appName=="Microsoft Internet Explorer") && (parseInt(navigator.appVersion)>=4)) {
var url="http://www.kriyayogadebabaji.net/index.htm"; //Cambia esta dirección por la de tu web
var titulo="Kriya Yoga de Babaji - Agenda"; //Cambia esta nombre por el de tu web
window.external.AddFavorite(url,titulo);
}
//Para Netscape y Firefox
else {
if(navigator.appName == "Netscape")
alert ("Presione Crtl+D para agregar a este sitio en sus Bookmarks");  //Puedes personalizar este mensaje
}
}
