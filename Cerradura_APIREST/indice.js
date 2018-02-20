var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var abrir = document.getElementById('abrir');
var cerrar = document.getElementById('cerrar');


abrir.addEventListener('click',function(){
    /*
        Consulto el estado de la puerta, y segun eso veo si puedo accionar
            si se puede accionar, se abrir (encender Led verde)
            sino
                mandar algun error correspondiente a la falla.
    */
    xhr.open("GET", "http://localhost:8080/abrir", false);
    // Add your code below!
    xhr.send();
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("tarjetasBotones").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Abriendo</blockquote>";
})

cerrar.addEventListener('click',function(){
   /*
        Consulto el estado de la puerta, y segun eso veo si puedo accionar
            si se puede accionar, se cerrar (encender Led verde)
            sino
                mandar algun error correspondiente a la falla.
    */
    xhr.open("GET", "http://localhost:8080/cerrar", false);
    xhr.send();
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("tarjetasBotones").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Cerrar</blockquote>";
})
