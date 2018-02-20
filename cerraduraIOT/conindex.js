var signIn = document.getElementById('entrar');
signIn.addEventListener('click', function(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('pw').value;
  var idPuerta = document.getElementById('idPuerta').value
  var mysql = require('mysql');
  var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"castelli",
    database:"cerradura"
  });

conexion.connect(function(err){
    if(err) throw err; // caso contrario sigo con la ejecucion de la consulta
    // Manejop de una variable global para ver la consulta que se quiere realizar
    //var sql = 'SELECT COUT(Usuario) FROM Usuario WHERE Usuario='+ global.localStorage.getItem("verificacionUsuario")+'AND password=' + global.localStorage.getItem("verificacionUsuario") + 'AND id_equipo='+global.localStorage.getItem("verificacionIdPuerta");
    var sql = "SELECT COUNT(Usuario) AS 'cantidad' FROM Usuarios WHERE Usuario='"+username+"' AND password='"+ password+"' AND id_equipo='"+idPuerta+"'";
    conexion.query(sql,function(err,result){
        if(err) throw document.getElementById("tarjetaError").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Ingreso de contraseña y usuario incorecto </blockquote>";
        if (result[0].cantidad == 1){          
          global.localStorage.setItem("verificacionUsuario",username); // agregado de variables globales
          global.localStorage.setItem("verificacionPassword",password); // agregado de variables globales
          global.localStorage.setItem("verificacionIdPuerta",idPuerta); // agregado de variables globales
          document.location.href = 'paginaTwo.html'
        }else{
            document.getElementById("tarjetaError").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>FALLIDO, su error es un exito! </blockquote>";
        }
        

    })
    
});
 
})
