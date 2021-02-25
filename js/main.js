var ajaxRequest = new XMLHttpRequest();

ajaxRequest.onreadystatechange = function(){
    console.log("Página pronta");
}
ajaxRequest.open("GET", "http://192.168.1.6:3002", true);
ajaxRequest.send();

