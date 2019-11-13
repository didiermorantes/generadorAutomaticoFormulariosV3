//directiva para usar vue dev tools en chrome
Vue.config.devtools = true;


/*
LA CLAVE ES OBTENER EL JSON MEDIANTE EL SCRIPT recuperaJson.js, Y LUEGO ALMACENAR EL RESULTADO EN LOCALSTORAGE
LUEGO, modeloVUE.js , IMPORTAMOS EL OBJETO ALMACENADO EN LOCALSTORGAE Y ALMACENARLO EN EL OBJETO VUE

*/

/*
if (typeof(Storage) !== "undefined") {

	//convertimos en string en JSON para poderlo intercambiar con los servidores
	

	//A common use of JSON is to exchange data to/from a web server.

//	When sending data to a web server, the data has to be a string.

//	Convert a JavaScript object into a string with JSON.stringify().

	
	var stringRecuperadoLocalStorage = localStorage.getItem('jsonAStringTransferido'); //recuperamos el json almacenado en localstorage

	var stringConvertidoAObjeto=JSON.parse(stringRecuperadoLocalStorage); //Convertimos de nuevo el string en objeto javascript para ser manipulado
	console.log("Mensaje de modeloVUE.js: el string convertido a objeto recibido por localstorage es: ");
	console.log(stringConvertidoAObjeto);



} else {
	
  document.getElementById("demo").innerHTML = "Lo sentimos, su navegador no soporta Web Storage...";
}

*/

var app = new Vue({
    el: 'main',
    data: {
      label_codigo_ejemplo: "Código Ejemplo",
      label_codigo_evento: "Código Evento",
      label_nombre_evento: "Nombre Evento",
      label_nombre_ejemplo: "Nombre Ejemplo",
      codigo_seleccionado_evento:null,
      codigo_seleccionado_ejemplo:null,
      nombre_seleccionado_evento:null,
      nombre_seleccionado_ejemplo:null,
      id_tabla_evento:null,
      jsonDatosINS:null
    },
    methods:{

      		
      nombre_ejemplo: function(){
        console.log("Mensaje de modeloVUE.js. funciona el evento v-on:change del elemento html <select> con id=codigo_ejemplo ");
        var codigoEjemploLocal= this.codigo_seleccionado_ejemplo;
        console.log("Mensaje de modeloVUE.js. Este es el código del ejemplo: ");
        console.log(codigoEjemploLocal);
  
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
                  var miJsonEj = this.jsonDatosINS;
  
                  //Almaceno el elemento "upgd" del objeto JavaScript en una variable para ser recorrida, pues contiene arrays
                  var municipiosEj=miJsonEj.municipios;

           
  
                  //obtenemos el índice del arreglo que contiene el código del evento seleccionado
                
                  indexEj = municipiosEj.findIndex(key => key.codigo_municipio==codigoEjemploLocal);
              
                  //mostramos en consola el índice
                  console.log("Mensaje de modeloVUE.js.Este es el índice del ejemplo: ");
                  console.log(indexEj);

                  
                  //asignamos a la variable del modelo nombre_seleccionado_ejemplo, el valor obtenido de explorar el arreglo del modelo Json
                  //con  el indice obtenido en el paso anterior. Con ese indice podemos obtener el nombre del evento
                  this.nombre_seleccionado_ejemplo=municipiosEj[indexEj].nombre_municipio;
                  console.log("Mensaje de modeloVUE.js.Este es el nombre del ejemplo: ");
                  console.log(this.nombre_seleccionado_ejemplo);

       

  
  

  
      },//fin funcion nombre_ejemplo
		
      nombre_evento: function(){
        console.log("Mensaje de modeloVUE.js. funciona el evento v-on:change del elemento html <select> con id=codigo_evento ");
        var codigoEventoLocal= this.codigo_seleccionado_evento;
        console.log("Mensaje de modeloVUE.js. Este es el código del evento: ");
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
  
                  //Almaceno el elemento "eventos" del objeto JavaScript en una variable para ser recorrida, pues contiene arrays
                  var eventos=miJson.eventos;

                  //Almaceno el elemento "correlacionTablasEventos" del objeto JavaScript en una variable para ser recorrida, pues contiene arrays
                  var correlacionTablasEventos=miJson.correlacionTablasEventos;
  
                  //obtenemos el índice del arreglo que contiene el código del evento seleccionado
                
                  index = eventos.findIndex(key => key.codigoEvento==codigoEventoLocal);
              
                  //mostramos en consola el índice
                  console.log("Mensaje de modeloVUE.js.Este es el índice del evento: ");
                  console.log(index);

                  
                  //asignamos a la variable del modelo nombre_seleccionado_evento, el valor obtenido de explorar el arreglo del modelo Json
                  //con  el indice obtenido en el paso anterior. Con ese indice podemos obtener el nombre del evento
                  this.nombre_seleccionado_evento=eventos[index].nombreEvento;
                  console.log("Mensaje de modeloVUE.js.Este es el nombre del evento: ");
                  console.log(this.nombre_seleccionado_evento);


                  //conseguimos el valor del idTablaEvento con el valor del codigo evento. Convertimos a entero dicho valor
                  this.id_tabla_evento=parseInt(correlacionTablasEventos[index].idTablaEvento);
                  console.log("Mensaje de modeloVUE.js.Este es el idTablaEvento del codigo del evento seleccionado: ");
                  console.log(this.id_tabla_evento);      
                  
                  //borramos el div padre solo si existe, es decir, solamente si ya se dibujo algun formulario

                  if(document.getElementById("div_padre")==null){
                    //no hace nada, pues no existe todavia el div_padre

                  }
                  else{
                    this.borraDivPadre();
                    if(document.getElementById("mi_footer")==null){
                      //no hace nada, pues no existe todavia el div mi_footer
                     }
                     else{
                      this.borraDivFooter();
                     } 

                  }
              

                  //SI  NO EXISTE IDTABLAEVENTO ASOCIADO NO SE DIBUJARÁ LA TABLA, POR TANTO NO INVOCAMOS LA FUNCION PARA NO GENERAR ERRORES DE CONSOLA

                    if(this.id_tabla_evento == 0){
                          //si el idTablaEvento es cero, no hay datos asociados en la tabla, por tanto no se dibuja ningún formulario
                          document.getElementById("demo2").innerHTML = "No existe idTablaEvento " + this.id_tabla_evento+ " en la tabla, por tanto no se dibuja ningún formulario";
                    }
                    else{

                            //como el evento v-on:change de la lista de codigos de eventos llama al nombre_evento, al finalizar esta llamada, se llama a la funcion que genera el formulario
                            this.leerBDListaEspecificos();
                    }

  
  

  
      },//fin funcion nombre_evento
       /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
 leerBDListaEspecificos:function(){
//El json que reside en la base de datos proporcionada por ICONOI tiene como campo importante en idTablaEvento que ser corresponde reciprocamente con las tablas del sivigila escritorio
//Debemos hacer una conversión del id del evento que hemos seleccionado con el idTablaEvento correspóndiente para que el generador automatico funcione
//por ejemplo, el evento 155 se correlaciona con idTablaEvento 79, que a su vez se corresponde reciprocamente con la tabla de sivigila escritorio EVENTOS_79
    
//en este caso, se usará el id_tabla_evento capturado en la función nombre_evento para que trabaje el generador automatico de formularios
//¿lo convertimos en String?
//debe ser String pues vue necesita declaración explicita de datos para que funcione igual al desarrollo hecho enteramente en javascript
  var datoSeleccionadoLista10 = String(this.id_tabla_evento);
  
  document.getElementById("demo2").innerHTML = "Eligio Tabla Evento : " + datoSeleccionadoLista10;


  var datoLeido14=0;
  var datoLeido15=0;//variable para contabilizar la cantidad de elementos en el objeto de la
   //fetch toma como argumento la ruta del recurso que quiere obtener
   //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
   //fetch('http://localhost:8181/api_db/tipoEvento/leer.php') --DESCOMENTARIAR SI SE USA XAMPP CON PUERTO 8181

   var myJsonProcesado10 =0; //variable para guardar el json procesado
   var myJsonProcesado12 =0; //variable para guardar el json procesado
   var datoLeidoJsonProcesado10 =0;  //Variable para guardar la seleccion de la lista desplegable
   var idMyJsonProcesado10=0;//Variable para guardar el id del primer valor del jsonProcesado
   var idMyJsonProcesado12=0;//Variable para guardar el id del ultimo valor del jsonProcesado
   var contadorListaDesplegable=0;//variable para almacenar la cantidad de listas desplegables

   
   fetch('https://vitalsaludem.com/services3/generadorAutomaticoFormulariosV3/api_db/tipoEvento/leerLista.php')
   .then(function(response14) {
       //devuelve un objeto promise conteniendo la respuesta, el objeto response
           //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
       return response14.json();
   })
   .then(function(myJson14) {
     
       //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
       //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
     //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
  
          //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
       //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
     datoLeido14=Object.keys(myJson14.registros).length; //esto arroja la cantidad de registros TOTAL que tiene el json
     
    //contenido del myJson14
     console.log('1. El json mostrado por consola es: ');
       //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
       console.log(myJson14);

    // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
     console.log('2. La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido14);
     //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
     alert(JSON.stringify(myJson14));
   
     /* PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE */
     console.log('3. El id del evento elegido es : '+datoSeleccionadoLista10);
                  myJsonProcesado10 =myJson14.registros[datoSeleccionadoLista10]; 
          

                  var testigoPrimerDato10=0;//variable para encontrar el primer dato que tenga el idTablaEvento
                  var testigoUltimoDato10=0;//Variable para encontrar el ultimo dato que tenga el idTablaEvento
                  //ciclo para encontrar los id de los elementos que coinciden con lo seleccionado en la lista desplegable   
                  for(var p14 = 0; p14 < datoLeido14; p14++){
                     
                        if(myJson14.registros[p14].idTablaEvento == datoSeleccionadoLista10){
                              //Validamos que sea el primer dato que se encuentra para no usar break
                              if(testigoPrimerDato10 == 0){

                                  //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                  idMyJsonProcesado10=myJson14.registros[p14].id;
                                  //encontramos el indice de dicho id
                                  myJsonProcesado10 = p14;
                                  
                                  console.log("Este es el id del primer dato que coincide con lo seleccionado en la lista: "+idMyJsonProcesado10);
                                  console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado10);
                                  //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                  testigoPrimerDato10=1;
                              }//cierre if

                                          
                          
                        }//cierre if

                        //validamos si el idTablaEvento es superior a lo seleccionado en la lista
                        //como la consulta está ordenada de manera ascendente, si el idTablaEvento es superior al seleccionado significa que llegamos al ultimo valor
                        //es decir, ya estamos en un nuevo idTablaEvento
                        //comparamos String???. Debe haberse definidio datoSeleccionadoLista10 como String explicitamente en Vue o de lo contrario no funcionará
                        if(myJson14.registros[p14].idTablaEvento > datoSeleccionadoLista10){
                          //Validamos que sea el primer dato que se encuentra para no usar break
                          if(testigoUltimoDato10 == 0){

                              //obtenemos el id del registro que coincide con lo seleccionado en la lista
                              idMyJsonProcesado12=myJson14.registros[p14].id;
                              //encontramos el indice de dicho id
                              myJsonProcesado12 = p14;
                              
                              console.log("Este es el id del ultimo dato que coincide con lo seleccionado en la lista (ya no es de la tabla seleccionada): "+idMyJsonProcesado12);
                              console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado12);
                              //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                              testigoUltimoDato10=1;
                          }//cierre if

                                      
                      
                    }//cierre if
                        
                      }//cierre for
                    


                  //luego de obtener la respuesta  con el contenido del json processado, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                  
                  
                          
                  datoLeidoJsonProcesado10 = Object.keys(myJson14.registros[myJsonProcesado10]).length;
                          
                  console.log('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion '+datoSeleccionadoLista10+' es : '+datoLeidoJsonProcesado10);
                  
                         //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                   alert(JSON.stringify(myJson14.registros[myJsonProcesado10]));
                   alert('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion  '+datoSeleccionadoLista10+' es : '+datoLeidoJsonProcesado10);

                   //tenemos que extraer el id del primer elemento de la tabla seleccionada para comenzar a pintar desde ahi. El ordenamiento en la consulta cambia todo
                  
                   console.log('El id del primer valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado10);
                   alert('El id del primer valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado10);

                   console.log('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado12);
                   alert('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado12);





      // crea un nuevo div 
      // y añade contenido 
      var newParentDiv14 = document.createElement("div"); 
      //newParentDiv14.setAttribute('class', ' flex-sm-fill flex-md-fill justify-content-center flex-grow-1 ');
      newParentDiv14.setAttribute('class', 'd-flex flex-wrap justify-content-center ');
      newParentDiv14.setAttribute('style','justify-content: space-around');
      newParentDiv14.setAttribute('id','div_padre');
      // añade el elemento creado y su contenido al DOM 
      var currentDiv14 = document.getElementById("div"); 
      document.body.insertBefore(newParentDiv14, currentDiv14); 
      //el ciclo creará cajas hasta el límite determinado por el datoLeido
      //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
             
     // for(var i4=0; i4<datoLeido4;i4++){ //DESCOMENTARIAR SI SE QUIEREN PINTAR TODOS LOS CAJONES i=O


      //LOS LIMITES DE ESTE CICLO SON EL idTablaEvento y el lenght obtenido  de ese registro
                      var limiteInferior10 = parseInt(myJsonProcesado10);
                      console.log('El limite inferior del ciclo es '+limiteInferior10);
                      var limiteSuperior10 =  parseInt(myJsonProcesado12)
                      console.log('El limite superior del ciclo es '+limiteSuperior10);



                      console.log('El primer elemento del objeto completo segun el id de la lista es: ');
                      console.log(myJson14.registros[limiteInferior10]);
                      console.log('El ultimo elemento del objeto completo segun el id de la lista es: ');
                      console.log(myJson14.registros[limiteSuperior10]);

              //Almacenamos en un arreglo aparte los datos del json, pero ordenado de acuerdo al campo orden
                      var arregloOrdenadoJson = []; //Array para almacenar el json de acuerdo al campo Orden
                      var indiceArregloOrdenado=0;//Variable para almacenar el indice del arreglo
//no lo hacemos menor o igual al limite superior, pues el limite superior ya es parte de otra tabla
                  for(var i14=limiteInferior10; i14<limiteSuperior10;i14++){

indiceArregloOrdenado=myJson14.registros[i14].orden; //el indice del arreglo sera el campo orden
 arregloOrdenadoJson[indiceArregloOrdenado]=  myJson14.registros[i14];  //guardamos todo el json en esa posicion                 
 console.log("El orden visualizado en el arreglo es : "+arregloOrdenadoJson[indiceArregloOrdenado].orden);
                  }

                  limiteInferior10 = 1;//limite inferior para recorrer el arreglo especial
                  limiteSuperior10=arregloOrdenadoJson.length;//el limite superior será  el limite del arreglo
          

                  for(var i14=limiteInferior10; i14<limiteSuperior10;i14++){
//ANTES DE CREAR EL DIV VERIFICAMOS SI EL CAMPO ES EDITABLE PARA VISUALIZARLO O NO

let testigo=arregloOrdenadoJson[i14].editable;
//let testigo=myJson14.registros[i14].editable; //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let nombreTestigo = arregloOrdenadoJson[i14].descripcion;
//let nombreTestigo = myJson14.registros[i14].descripcion; //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let grupo =  arregloOrdenadoJson[i14].grupo; //variable para almacenar el grupo del elemento
//let grupo =  myJson14.registros[i14].grupo; //variable para almacenar el grupo del elemento DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let ordenGrupo=10; //variable para tener en cuenta el orden en que se pintaran los div. Asignamos el valor 10 que es el valor por defecto que tiene en la tabla
let ordenGrupoEnvoltorio="";
let claseOrdenGrupo="";//variable que almacenará la clase de orden grupo que se usará en el flex
let claseOrdenGrupoEnvoltorio="";
let tooltip = arregloOrdenadoJson[i14].expresionRegular;//el tooltip será la información que se encuentre en el campo expresionRegular de la tabla
//let tooltip = myJson14.registros[i14].expresionRegular;//el tooltip será la información que se encuentre en el campo expresionRegular de la tabla  //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO


//var nombreCampos = []; //Array para almacenar los nombres de los campos que vengan de la tabla. Esto solucionará problemas a futuro

//al parecer el testigo retorna un caracter vacio (espacio) cuando es falso
//evaluamos por el caracter Unicode ya que otras validaciones fallaron
//validamos la posición(0) de testigo (El primer  bit)
//los que tienen valor cero no se muestran
if(testigo.charCodeAt(0) == 0){

  //no hacemos nada, y por tanto no se pintará
  console.log('El valor Unicode del carácter en el índice proporcionado  de la variable testigo es '+testigo.charCodeAt(0)+' para el campo '+nombreTestigo);
console.log('El valor del campo '+nombreTestigo+ ' es: ' + testigo);
}
else
{
//MOSTRAMOS 
console.log('El valor Unicode del carácter en el índice proporcionado  de la variable testigo es '+testigo.charCodeAt(0)+' para el campo '+nombreTestigo);
  console.log('El valor del campo '+nombreTestigo+ ' es: ' + testigo);




                  //VERIFICAMOS SI HAY ENVOLTORIOS PARA CREAR 
              //HACEMOS ESTA VERIFICACION PARA CREAR DIVS INDEPENDIENTES  PARA LOS ENVOLTORIOS EN EL LUGAR ADECUADO
            //  let envoltorio = myJson14.registros[i14].envoltorio;  //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
              let envoltorio = arregloOrdenadoJson[i14].envoltorio;
              //si el envoltorio no tiene longitud, significa que no hay datos
              //generalmente el envoltorio estará vacio o nulo, pero si no es nullo o indefinido o vacio, procedemos a imprimir lo que haya en el campo envoltorio
              if(envoltorio == null ){

                  //no hacemos nada, porque generalmente el envoltorio es null

                  //OJO EL ENVOLTORIO SOLAMENTE DEBE IR EN EL MISMO REGISTRO DONDE COMIENZA EL ENVOLTORIO PARA QUE ESTE CODIGO FUNCIONE, LOS DEMAS ENVOLTORIOS DEBEN IR NULL
              }
              else{

                          //creamos un div especial para el envoltorio en la secuencia adecuada


                              // crea un nuevo div 
                              // y añade contenido 
                              var newDivEnvoltorio= document.createElement("div"); 
                              //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO

//ASIGNAMOS EL ORDEN AL FLEX DE ENVOLTORIO DE ACUERDO AL ORDEN DE GRUPO QUE TENGA EN LA TABLA, SI NO TIENE, NO ASIGNAMOS ORDEN Y SE MUESTRA SEGÚN SE VAYA GENERANDO
//EN LA TABLA Grupo NO PUEDE SER NULO Y TIENE UN VALOR POR DEFECTO DE TIPO STRING CON EL NOMBRE DEL EVENTO 
//VERIFICAREMOS QUE GRUPO SEA UN NUMERO PARA PODER TENER EN CUENTA EL ORDEN GRUPO
//ordenGrupoEnvoltorio= myJson14.registros[i14].grupo;//DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
ordenGrupoEnvoltorio= arregloOrdenadoJson[i14].grupo;
//validamos que la variable tenga un valor diferente al valor que tiene por defecto
//ordenamiento del flex
if(!isNaN(parseInt(ordenGrupoEnvoltorio))){//convertimos a entero el grupo, y luego evaluamos si es un numero

  console.log("El orden de grupo del elemento Padres es: "+ordenGrupoEnvoltorio); 
  claseOrdenGrupoEnvoltorio='order-'+ordenGrupoEnvoltorio;
  

}




                              newDivEnvoltorio.setAttribute('class', 'd-sm-flex flex-column '+claseOrdenGrupoEnvoltorio); //DIV DE TIPO FLEX DE TIPO COLUMNA y su orden flex
                              newDivEnvoltorio.setAttribute('style','border: thin solid black');





                              
                          // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
                          //asignamos el nombre del campo de acuerdo al contenido del json envoltorio
                              // var newContentEnvoltorio = document.createTextNode(myJson14.registros[i14].envoltorio); //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO 
                              var newContentEnvoltorio = document.createTextNode(arregloOrdenadoJson[i14].envoltorio); 
                          
                              
                              newDivEnvoltorio.appendChild(newContentEnvoltorio); //añade texto al div creado.  
                              // añade el elemento creado y su contenido al DOM 
                              var currentDivEnvoltorio = document.getElementById("div"); 
                              document.body.insertBefore(newDivEnvoltorio, currentDivEnvoltorio); 

                              
                               
                          newParentDiv14.appendChild(newDivEnvoltorio); //añadimos cada div a su padre

                           


              }//fin else interno






              
                  // crea un nuevo div 
                              // y añade contenido 
                              var newDiv14 = document.createElement("div"); 
                              //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO



                              newDiv14.setAttribute('class', 'd-sm-flex '); //DIV DE TIPO FLEX 






                              
                          // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
                          //asignamos el nombre del campo de acuerdo al contenido del json
                             // var newContent14 = document.createTextNode(myJson14.registros[i14].descripcion); //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
                              var newContent14 = document.createTextNode(arregloOrdenadoJson[i14].descripcion); 
                          
                              
                              newDiv14.appendChild(newContent14); //añade texto al div creado.  
                              // añade el elemento creado y su contenido al DOM 
                              var currentDiv14 = document.getElementById("div"); 
                              document.body.insertBefore(newDiv14, currentDiv14); 
                  
                  
                          //creamos elemento de tipo input
                              var input14 = document.createElement("input");     
                              //establecemos el tipo texto
                              //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
                  
                              //asignamos el tipo de dato, de acuerdo al json
                              //input14.setAttribute('type', myJson14.registros[i14].tipo);


//VALIDACION DEL CAMPO COMO LISTA DESPLEGABLE
//DEBE CUMPLIR DOS CONDICIONES: QUE EL INPUT TYPE SEA NUMBER Y QUE EL CAMPO "valorPorDefecto" TENGA EL VALOR "listaDesplegable"
//HACEMOS LA VALIDACION ANTES DE AGREGAR EL INPUT TYPE

if((arregloOrdenadoJson[i14].tipo=="NUMBER") && (arregloOrdenadoJson[i14].valorPorDefecto =="listaDesplegable")){
//aumentamos en uno el contador de listas desplegables
contadorListaDesplegable=contadorListaDesplegable+1;
//si se cumplen estas dos condiciones, dibujamos un campo tipo <select> lista desplegable auxiliar,que luego se poblará dinámicamente
var lista14 = document.createElement("select");
//Agregamos nombre y id a la lista teniendo en cuenta el contador, por si llegan a existir muchas listas en el form
lista14.name = "lista"+contadorListaDesplegable;
lista14.id= "lista"+contadorListaDesplegable;
//Agregamos clase al select
lista14.setAttribute('class', 'd-sm-flex');
//Agregamos evento
lista14.setAttribute('onchange', 'correlacionarListaDesplegable()');
}




                              input14.setAttribute('type', arregloOrdenadoJson[i14].tipo);


                         
                              











                              //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                              //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
                  
                                  //asignamos como name e id, la información del nombre del campo proveniente del json
                            //  input14.name = myJson14.registros[i14].nombre; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO
                            //  input14.id=myJson14.registros[i14].nombre; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO

                              input14.name = arregloOrdenadoJson[i14].nombre;
                              input14.id=arregloOrdenadoJson[i14].nombre;

                              //nombreCampos.push(myJson14.registros[i14].nombre); //añadimos elementos al array nombreCampos
                  
                              //campos en linea
                              //input.setAttribute('class', 'd-sm-inline-flex');
                              input14.setAttribute('class', 'd-sm-flex');




//
//ASIGNAMOS EL ORDEN AL FLEX DE ACUERDO AL ORDEN DE GRUPO QUE TENGA EN LA TABLA, SI NO TIENE, NO ASIGNAMOS ORDEN Y SE MUESTRA SEGÚN SE VAYA GENERANDO
//EN LA TABLA ordenGrupo NO PUEDE SER NULO Y TIENE UN VALOR POR DEFECTO DE 10   
//VERIFICAREMOS QUE ORDEN GRUPO SEA DIFERENTE DE 10 PARA PODER TENER EN CUENTA EL ORDEN GRUPO
//ordenGrupo= myJson14.registros[i14].ordenGrupo; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO
ordenGrupo= arregloOrdenadoJson[i14].ordenGrupo; 

//validamos que la variable tenga un valor diferente al valor que tiene por defecto
//ordenamiento del flex
if(ordenGrupo != 10){

  console.log("El orden de grupo del elemento es: "+ordenGrupo); 
  claseOrdenGrupo='order-'+ordenGrupo;
  

}




                              //le damos bordes al div
                                  //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                                 // input14.setAttribute('onblur',myJson14.registros[i14].jsEvento); //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO

                                  input14.setAttribute('onblur',arregloOrdenadoJson[i14].jsEvento);
                  
                  
                             //AÑADIMOS TOOLTIP A LOS CAMPOS INPUT CON EL TOOLTIP QUE SE ENCUENTRE EN LA TABLA CAMPO EXPRESION REGULAR
                             
                             input14.setAttribute('data-toggle','tooltip');
                             input14.setAttribute('data-placement','top');
                             input14.setAttribute('title',tooltip);




                              newDiv14.setAttribute('style','border: thin solid black');
                              //asignamos un color a los div pares y otro a los impares
                                  if(i14%2==0){
                                      //color azul turquesa a los pares
                                      newDiv14.setAttribute('class','p-2 bg-info '+claseOrdenGrupo); //añadimos el orden flex
                                  }
                                  else{
                                      //color amarillo a los impares
                                      newDiv14.setAttribute('class','p-2 bg-secondary '+claseOrdenGrupo);//añadimos el orden flex
                                  }
                  
                              newDiv14.appendChild(input14); //añade la caja de texto al div creado recientemente. 
                          //se crearán tantos div como el número que se haya ingresado en la caja de texto

                          //AGREGAMOS EL CAMPO ESPECIAL AL DIV EN CASO DE EXISTIR LISTAS DESPLEGABLES
                          if((arregloOrdenadoJson[i14].tipo=="NUMBER") && (arregloOrdenadoJson[i14].valorPorDefecto =="listaDesplegable")){
                              newDiv14.appendChild(lista14);
                          }



//AGREGAMOS CADA CONTENIDO A SU ENVOLTORIO, SI Y SOLO SI EL GRUPO ES UN VALOR NUMERICO
//EN LA TABLA LOS GRUPOS SON LETRAS
//if(myJson14.registros[i14].grupo == grupo && !isNaN(grupo)){//DESCOMENTARIRAR SI NO SE USA EL ARREGLO ORDENADO
if(arregloOrdenadoJson[i14].grupo == grupo && !isNaN(grupo)){
  //si hay envoltorio agregamos el div al div envoltorio
  newDivEnvoltorio.appendChild(newDiv14); //añadimos cada div a su envoltorio
}
else{
//si no hay envoltorio agregamos el div al div padre
  newParentDiv14.appendChild(newDiv14); //añadimos cada div a su padre
}

                         




   

}//fin else

        
      }//fin for
  
  //guardamos el valor de la cantidad de listas desplegables del formulario en el web storage
  // Store
localStorage.totalListasDesplegables = contadorListaDesplegable;

//generamos el footer dinamicamente

app.generaFooter();
  
  
   });//fin  then function(myJson14)
  
  
   },//fin leerBDListaEspecificos


   borraDivPadre: function(){
//función para remover el div_padre
var myobj = document.getElementById("div_padre");
myobj.remove(); 
   },

   borraDivFooter: function(){
    //función para borrar el body
    var myobj2 = document.getElementById("mi_footer");
    myobj2.remove(); 
       },


  recuperaJson: function(){
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
	console.log("Mensaje de funcion Modelo VUE recuperaJson(). Los datos obtenidos por fetch son : ");
	console.dir( datos );
	console.log("Mensaje de funcion Modelo VUE recuperaJson(). El tipo de datos del elemento recibido por fetch es : ");
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
  //localStorage.setItem('jsonAStringTransferido', objetoConvertidoaString);
  
  this.jsonDatosINS= datos;

})
.catch( e => {
	 
	 console.error( 'Mensaje de funcion Modelo VUE recuperaJson(). Algo salio mal. Error en la siguiente linea: ' ) ;
	 console.log(e);
	 });


},//fin recuperaJson

generaFooter: function(){
  var newFooter= document.createElement("div"); 
  
  newFooter.setAttribute('id','mi_footer');
  newFooter.setAttribute('class', 'd-sm-flex justify-content-center');


                                  // añade el elemento creado y su contenido al DOM 
                                  var currentDiv = document.getElementById("div"); 
                                  
                                  document.body.insertBefore(newFooter, currentDiv); 

  
  var newImg = document.createElement("img");
  newImg.setAttribute('src', 'img/footer.jpg');
  newImg.setAttribute('class', 'img-fluid');


  newFooter.appendChild(newImg); //añade la caja de img al footer creado recientemente. 
},//fin genera footer


   },//fin methods
   
created: function(){
  //Created, ejecutara el codigo justo después de que toda la instancia de Vue que declaraste sea cargada
    //que se recupere el json apenas se cargue la pagina
    this.recuperaJson();
    }//fin created

  });