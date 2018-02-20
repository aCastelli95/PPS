var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "castelli",
  database: "cerradura"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Acciones (id_puerta,accion_puerta) VALUES ?";
  var values = [
    ['1', 'abrir'],
    ['2', 'abrir'],
    ['1', 'abrir'],
    ['2', 'abrir'],
    ['1', 'abrir'],
    ['2', 'abrir'],
    ['3', 'cerrar'],['3', 'abrir'],
    ['3', 'cerrar'],['3', 'abrir'],
    ['3', 'cerrar'],['3', 'abrir'],
    ['3', 'cerrar'],['3', 'abrir'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

