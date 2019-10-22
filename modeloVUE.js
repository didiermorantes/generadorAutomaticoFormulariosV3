//directiva para usar vue dev tools en chrome
Vue.config.devtools = true;

//directva para usar el componente dropdown

Vue.use(Dropdown);

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
	
  document.getElementById("demo").innerHTML = "Lo sentimos, su navegador no soporta Web Storage...";
}
var app = new Vue({
    el: 'main',
    data: {
      label_codigo_evento: "Código Evento",
      label_nombre_evento: "Nombre Evento",
      codigo_seleccionado_evento:null,
      nombre_seleccionado_evento:null,
      jsonDatosINS:stringConvertidoAObjeto
    },
    methods:{
		
      nombre_evento: function(){
        console.log("Mensaje de main.js. funciona el evento v-on:change del elemento html <select> con id=codigo_evento ");
        var codigoEventoLocal= this.codigo_seleccionado_evento;
        console.log("Mensaje de main.js. Este es el código del evento: ");
        console.log(codigoEventoLocal);
  
          /* 
            BUSCAR CLAVES EN JSON
              var json = { "key1" : "watevr1", "key2" : "watevr2", "key3" : "watevr3" };
              var keytoFind = "key2";
              var index = Object.keys(json).indexOf(keytoFind);
              alert(index);
          */	
  
  //return Object.keys(obj)[Object.values(obj).indexOf(value)];
  
  
  
                  
                
  
                  
  /*
  
  EJEMPLO DE OBTENER INDICES DE UN JSON
  a = [
    {prop1:"abc",prop2:"qwe"},
    {prop1:"bnmb",prop2:"yutu"},
    {prop1:"zxvz",prop2:"qwrq"}];
      
  index = a.findIndex(x => x.prop2=="yutu");
  
  console.log(index);
  
  */
  
                  //obtenemos el modelo
                  var miJson = this.jsonDatosINS;
  
                  //Almaceno el elemenento "eventos" del objeto JavaScript en una variable para ser recorrida, pues contiene arrays
                  var eventos=miJson.eventos;
  
                  //obtenemos el índice del arreglo que contiene el código del evento seleccionado
                
                  index = eventos.findIndex(key => key.codigoEvento==codigoEventoLocal);
              
                  //mostramos en consola el índice
                  console.log("Mensaje de main.js.Este es el índice del evento: ");
                  console.log(index);
                  //asignamos a la variable del modelo nombre_seleccionado_evento, el valor obtenido de explorar el arreglo del modelo Json
                  //con  el indice obtenido en el paso anterior. Con ese indice podemos obtener el nombre del evento
                  this.nombre_seleccionado_evento=eventos[index].nombreEvento;
                  console.log("Mensaje de main.js.Este es el nombre del evento: ");
                  console.log(this.nombre_seleccionado_evento);

  
  
  
  
  
      }//fin funcion nombre_evento
   }//fin methods
  });