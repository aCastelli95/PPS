
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
    var sql = 'SELECT COUNT(Usuario) AS "cantidad" FROM Usuarios WHERE Usuario="pablito" AND password="1234" AND id_equipo=1';
    conexion.query(sql,function(err,result){
        if(err) throw err;
        if (result[0].cantidad == 1){console.log(result[0].cantidad)}
        

    })
});