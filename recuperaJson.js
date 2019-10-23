
var url='json/informacionINS.json';
fetch(url,{
	headers: {
		"Content-Type": "application/json"
			}
		 }
	)
.then(respuesta =>{
	
	return respuesta.json();
})
.then(datos=>{
	console.log("Mensaje de recuperaJson. Los datos obtenidos por fetch son : ");
	console.dir( datos );
	console.log("Mensaje de recuperaJson. El tipo de datos del elemento recibido por fetch es : ");
    console.log(typeof datos);
    

    var jsonRecibidoEnObjeto=datos;//guardamos en jsonRecibidoObjeto el objeto recuperado por fetch
    




					//OJO: la función .stringify() no funcionará de manera paralela con .parse() si stringify() no se aplica a un objeto json
					//si  stringify() se aplica a un string, la función .parse() no devolverá un objeto
	var objetoConvertidoaString = JSON.stringify(jsonRecibidoEnObjeto);

		//mostramos el elemento recuperado y convertido en string en la seccion demo
	
	//debe habilitarse en el index el elemento demo para vsualizar el contendo
	//	document.getElementById("demo").innerHTML = objetoConvertidoaString;

    
        //A workaround can be to stringify your object before storing it, and later parse it when you retrieve it:
				  // Almacenamos en localStorage el json convertido a String
	localStorage.setItem('jsonAStringTransferido', objetoConvertidoaString);

})
.catch( e => {
	 
	 console.error( 'Mensaje de recuperaJson.js. Algo salio mal. Error en la siguiente linea: ' ) ;
	 console.log(e);
	 });