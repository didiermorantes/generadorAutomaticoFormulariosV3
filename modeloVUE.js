/*
LA CLAVE ES OBTENER EL JSON MEDIANTE EL SCRIPT recuperaJson.js, Y LUEGO ALMACENAR EL RESULTADO EN LOCALSTORAGE
LUEGO, modeloVUE.js , IMPORTAMOS EL OBJETO ALMACENADO EN LOCALSTORGAE Y ALMACENARLO EN EL OBJETO VUE

*/
if (typeof(Storage) !== "undefined") {

	//convertimos en string en JSON para poderlo intercambiar con los servidores
	/*

	A common use of JSON is to exchange data to/from a web server.

	When sending data to a web server, the data has to be a string.

	Convert a JavaScript object into a string with JSON.stringify().

	*/
	var stringRecuperadoLocalStorage = localStorage.getItem('jsonAStringTransferido'); //recuperamos el json almacenado en localstorage

	var stringConvertidoAObjeto=JSON.parse(stringRecuperadoLocalStorage); //Convertimos de nuevo el string en objeto javascript para ser manipulado
	console.log("Mensaje de main.js: el string convertido a objeto recibido por localstorage es: ");
	console.log(stringConvertidoAObjeto);



} else {
	
  document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
}
var app = new Vue({
    el: 'main',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      jsonCodigoEventosColectivos:stringConvertidoAObjeto
    }
  });