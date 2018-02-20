var abrir = document.getElementById('abrir');
var cerrar = document.getElementById('cerrar');
var name_table = document.getElementById("tabla_historial");
var row = name_table.insertRow(0+1);// para hacer referencia a el primero de los 3 reportes de Historial, el 0 son los titulos
var cell1;
var cell2;
var cell3;
var cell0;
var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"castelli",
    database:"cerradura"
  });

/*
    Consultas utiles
    Para el Historial:  SELECT * FROM `Acciones` ORDER BY `Acciones`.`id_puerta` DESC LIMIT 3  TENDRIA que limitar la salida
*/

abrir.addEventListener('click',function(){
    /*
        Consulto el estado de la puerta, y segun eso veo si puedo accionar
            si se puede accionar, se abrir (encender Led verde)
            sino
                mandar algun error correspondiente a la falla.
    */
    document.getElementById("tarjetasBotones").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Abriendo</blockquote>";
})
cerrar.addEventListener('click',function(){
   /*
        Consulto el estado de la puerta, y segun eso veo si puedo accionar
            si se puede accionar, se cerrar (encender Led verde)
            sino
                mandar algun error correspondiente a la falla.
    */
    
    document.getElementById("tarjetasBotones").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Cerrar</blockquote>";
})

/*-------------------Manejo de tabla para la aplicacion ----------------------*/
// veo de realizar la consulta para mostrar en la tabla
// Consultas utiles
//Para el Historial:  SELECT * FROM `Acciones` ORDER BY `Acciones`.`id_puerta` DESC LIMIT 3  TENDRIA que limitar la salida
conexion.connect(function(err){
    if(err) throw err; // caso contrario sigo con la ejecucion de la consulta
    var sql = "SELECT * FROM `Acciones` ORDER BY `Acciones`.`id_puerta` DESC LIMIT 3";
    conexion.query(sql,function(err,result){
        if(err) throw document.getElementById("tarjetaError").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Ingreso de contraseña y usuario incorecto </blockquote>";
        for (i = 0; i<3 ; i++){
            row = name_table.insertRow(i+1);
            cell0 = row.insertCell(0);
            cell1 = row.insertCell(1);
            cell2 = row.insertCell(2);
            cell3 = row.insertCell(3);
            cell1.innerHTML = '<p name="idPuerta_f[]" class="non-margin">'+1/*result[].usuarioValor consulta base de datos*/+'</p>';
            cell1.innerHTML = '<p name="idPuerta_f[]" class="non-margin">'+result[i].id_puerta/*Valor consulta base de datos*/+'</p>';
            cell2.innerHTML = '<p name="accion_p[]" class="non-margin">'+result[i].accion_puerta/*Valor consulta base de datos*/+'</p>';
            cell3.innerHTML = '<p name="tiempo_p[]" class="non-margin">'+result[i].horario.getDate()+'/'+(result[i].horario.getMonth()+1)+'/'+result[i].horario.getFullYear()/*Valor consulta base de datos*/+'</p>';
        }   
    })
    
    
});

