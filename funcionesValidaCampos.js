/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
																	FUNCIONES GENÉRICAS

*/

function validaVacio(miCampo,miMensaje){
    
    if ( miCampo.value.length == 0 ||  miCampo.value  =='' ||  miCampo.value ==null || /^\\s+$/.test( miCampo.value )) {
        //alert('Diligencie Datos.No se pueden dejar campos vacios.');
        $.confirm({
            title: 'Alerta',
            content: 'Diligencie Datos.No se pueden dejar campos vacios.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        //alert(miMensaje);
        miCampo.value='0';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}

function validaNumeros(miCampo,miMensaje){
    
    if ( isNaN(miCampo.value)) {
        //alert('Diligencie Datos.No se pueden dejar campos vacios.');
        $.confirm({
            title: 'Alerta',
            content: 'No se permiten letras. Ingrese números',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        //alert(miMensaje);
        miCampo.value='0';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}


function validaPositivos(miCampo,miMensaje){
    
    if ( miCampo.value  < 0 ) {
        //alert('Diligencie Datos.No se pueden dejar campos vacios.');
        $.confirm({
            title: 'Alerta',
            content: 'Solo valores positivos. Ingrese números mayores o iguales que cero',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        //alert(miMensaje);
        miCampo.value='0';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}

function validaMayorQue1(miCampo,miMensaje){
    
    if ( miCampo.value  < 1 ) {
        //alert('Diligencie Datos.No se pueden dejar campos vacios.');
        $.confirm({
            title: 'Alerta',
            content: 'Solo valores positivos. Digite un valor mayor o igual que uno',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        //alert(miMensaje);
        miCampo.value='0';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}


function validaMayorQueTres(miCampo,miMensaje){
    
    if ( miCampo.value <3 || isNaN(miCampo.value) || miCampo.value.length == 0 ||  miCampo.value  =='' ||  miCampo.value ==null || /^\\s+$/.test( miCampo.value )) {
        //alert('Diligencie Datos.No se pueden dejar campos vacios.');
        $.confirm({
            title: 'Alerta',
            content: 'Diligencie Datos.No se pueden dejar campos vacios. Digite un valor mayor o igual que tres',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        //alert(miMensaje);
        miCampo.value='3';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}



function validaFechaSuperior(miCampo){


    var currentTime = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTime.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas
    // console.log(currentTime);

    var fechaFormulario =miCampo.value; //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual
    //console.log(fechaFormulario);

    var parts =fechaFormulario.split('/');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    var mydate = new Date(parts[2], parts[1] - 1, parts[0]); 

    fechaFormularioCompara = mydate.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    //fechaFormularioCompara=mydate.toDateString();
   
   // console.log(fechaFormularioCompara);


 
    if( fechaFormularioCompara > currentTime ){
        //alert('La fecha digitada no puede ser mayor a la fecha del sistema.');
        $.confirm({
            title: 'Alerta',
            content: 'La fecha digitada no puede ser mayor a la fecha del sistema.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        miCampo.value=0;
        miCampo.focus();
                //retornamos 1 indicando que la fecha es superior
                return 1;

    }
    else{
         //de lo contrario retornamos cero
        return 0;
    }

}

function compara2Fechas(fecha1,fecha2){


    var currentTime = new Date();

    var ano=currentTime.getFullYear();
    var mes=(currentTime.getMonth())+1;//el mes es entre 0 y 11
    var dia=currentTime.getDate();
    var estaFecha="";
    estaFecha+=dia;
    estaFecha+="/";
    estaFecha+=mes;
    estaFecha+="/";
    estaFecha+=ano;

 

    var mensaje="Digite un valor entre ";
    mensaje+=fecha1.value;
    mensaje+=" y ";
    mensaje+=estaFecha;

//console.log(fecha1);
//console.log(fecha2);
//console.log(estaFecha);

	if(fecha2.value < fecha1.value){


					 //alert('La fecha digitada no puede ser mayor a la fecha del sistema.');
			        $.confirm({
			            title: 'Alerta',
			            content: mensaje,
			            icon: 'fa fa-warning',
			            type: 'red',
			            typeAnimated: true,
			            buttons: {
			                close: {
			                    text: 'Aceptar',
			                    btnClass: 'btn-red',
			                    action: function(){
			                    }
			                }
			            }
			        });
			       fecha2.value=currentTime;
			        fecha2.focus();
			                //retornamos 1 indicando que la fecha es superior
			                return 1;

			    }
			    else{
			         //de lo contrario retornamos cero
			        return 0;
			    }


}//fin compara2Fechas


function valida_si_no(miCampo){

    if(miCampo.value<0 || miCampo.value>2 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 2.');
        //alert('1 Si.\n2 No.');

        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 2.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        $.confirm({
            title: 'Alerta',
            content: '1=Si, 2=No',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
        //retornamos 1 indicando que los datos no estaban en el rango
        return 1;
    }else{
        //De lo contrario retornamos cero
        return 0;
    }
}

function valida_1_2(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>2 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 2.');
        //alert(miMensaje);

        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 2.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });
        
        miCampo.value="0";
        miCampo.focus();
                //retornamos 1 indicando que los datos no estaban en el rango
                return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}

function valida_1_3(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>3 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 3.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 3.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}


function valida_1_4(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>4 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 3.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 4.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}

function valida_1_5(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>5 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 3.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 5.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}


function valida_1_8(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>8 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 3.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 8.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}



function valida_1_14(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>14 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 14.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 14.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}


function valida_0_19(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>19 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 14.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 0 y 19.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}



function valida_1_19(miCampo,miMensaje){
    if(miCampo.value<1 || miCampo.value>19 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 14.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 19.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="1";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}



function valida_1_40(miCampo,miMensaje){
    if(miCampo.value<1 || miCampo.value>40 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 14.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y 40.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="1";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}



function valida_0_50(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>50 || isNaN(miCampo.value)){
        //alert('Digite un valor entre 1 y 14.');
        //alert(miMensaje);


        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 0 y 50.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        $.confirm({
            title: 'Alerta',
            content: miMensaje,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

        
        miCampo.value="0";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}
/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
                                                     FUNCIONES CÁNCER DE MAMA Y CUELLO UTERINO

*/

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIPO CÁNCER  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaTipoCancer(){

    var miTipoCancer = document.getElementById('TIPO_CANCE');
    
    var miTexto = '1 Cáncer de Mama.\n2 Cáncer de Cuello Uterino.\n3 Ambos.';

    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    //validamos campo vacio
    miValidaVacio=validaVacio(miTipoCancer,miTexto);

    //validamos valor entre 1 y 3
    miValidaValor=valida_1_3(miTipoCancer,miTexto);

    //si ambas validaciones retornan cero significa que los datos ingresados son validos
    if(miValidaVacio==0 && miValidaValor==0){
//invocamos la función para habilitar los campos de acuerdo a la seleccion
        habilitaCamposTipoCancer(miTipoCancer);
    
    }//fin if




}//fin validaTipoCancer





/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos tipo cancer

*/

function habilitaCamposTipoCancer(miCampo){


//el dato no es vacio y está dentro del rango de 1  y 3
    //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO

    //variables cáncer cuello uterino
    var miFecTomaE = document.getElementById('FEC_TOMA_E');
    var miFecResEx = document.getElementById('FEC_RES_EX');
    var miBiopExoce = document.getElementById('BIOP_EXOCE');
    var miResBExoc = document.getElementById('RES_B_EXOC');
    var miGradoHist = document.getElementById('GRADO_HIST');
    var miBiopEndoc = document.getElementById('BIOP_ENDOC');
    var miResBAden = document.getElementById('RES_B_ADEN');
    var miResBHist = document.getElementById('RES_B_HIST');



//variables cáncer de mama
    var miFecProCo = document.getElementById('FEC_PRO_CO');
    var miFecResBi = document.getElementById('FEC_RES_BI');
    var miResBiops9 = document.getElementById('RES_BIOPS9');
    var miGradHisto = document.getElementById('GRAD_HISTO');

    //validamos el tipo de cancer para inhabilitar los demás controles
    if(miCampo.value  ==1){
       //deshabilitamos campos de cancer de cuello uterino
        miFecTomaE.disabled=true;
        miFecResEx.disabled=true;
        miBiopExoce.disabled=true;
        miResBExoc.disabled=true;
        miGradoHist.disabled=true;
        miBiopEndoc.disabled=true;
        miResBAden.disabled=true;
        miResBHist.disabled=true;

        //limpiamos los campos de cancer de cuello uterino
        miFecTomaE.value="";
        miFecResEx.value="";
        miBiopExoce.value="";
        miResBExoc.value="";
        miGradoHist.value="";
        miBiopEndoc.value="";
        miResBAden.value="";
        miResBHist.value="";



        //habilitamos campos de cáncer de mama
        miFecProCo.disabled=false;
        miFecResBi.disabled=false;
        miResBiops9.disabled=false;
        miGradHisto.disabled=false;


    }
    else if(miCampo.value  ==2){
      //deshabilitamos campos de cancer de mama
        miFecProCo.disabled=true;
        miFecResBi.disabled=true;
        miResBiops9.disabled=true;
        miGradHisto.disabled=true;

              //limpiamos campos de cancer de mama
        miFecProCo.value="";
        miFecResBi.value="";
        miResBiops9.value="";
        miGradHisto.value="";

        //habilitamos campos de cancer de cuello uterino
        miFecTomaE.disabled=false;
        miFecResEx.disabled=false;
        miBiopExoce.disabled=false;
        miResBExoc.disabled=false;
        miGradoHist.disabled=false;
        miBiopEndoc.disabled=false;
        miResBAden.disabled=false;
        miResBHist.disabled=false;       

    }
    else if(miCampo.value  ==3){

        //habilitamos campos de cáncer de mama
        miFecProCo.disabled=false;
        miFecResBi.disabled=false;
        miResBiops9.disabled=false;
        miGradHisto.disabled=false;
        //habilitamos campos de cancer de cuello uterino
        miFecTomaE.disabled=false;
        miFecResEx.disabled=false;
        miBiopExoce.disabled=false;
        miResBExoc.disabled=false;
        miGradoHist.disabled=false;
        miBiopEndoc.disabled=false;
        miResBAden.disabled=false;
        miResBHist.disabled=false;  

         }


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_PRO_CO  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaProCo(){

    var miFecProCo = document.getElementById('FEC_PRO_CO');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecProCo,miTexto);
    validaFechaSuperior(miFecProCo);

  }//fin validFechaExam



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_BI  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaResult(){

    var miFecResBi = document.getElementById('FEC_RES_BI');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecResBi,miTexto);
    validaFechaSuperior(miFecResBi);
    validaFechaResultMayorFechaExamen();


  }//fin validaFechaResult


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_BI  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaResultMayorFechaExamen(){

	var miFechaProCo = document.getElementById('FEC_PRO_CO');
    var miFecResBi = document.getElementById('FEC_RES_BI');
    
    compara2Fechas(miFechaProCo,miFecResBi);


  }//fin validaFechaResult






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_BIOPS9

*/
function validaResultBiopsia(){
    var miResBiops = document.getElementById('RES_BIOPS9');

    var miTexto = "1 Carcinoma Ductal.\n 2 Carcinoma Lobulillar.";

    //validamos campo vacio
    validaVacio(miResBiops,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResBiops,miTexto);
    

}//fin validaResultBiopsia



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA GRAD_HISTO

*/

function validaGradHisto(){
    var miGradHisto = document.getElementById('GRAD_HISTO');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miGradHisto,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miGradHisto,miTexto);
    


}//fin validaGradHisto






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_TOMA_E

*/

function validaFechaTomaE(){
    var miFecTomaE = document.getElementById('FEC_TOMA_E');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecTomaE,miTexto);
    validaFechaSuperior(miFecTomaE);


}//fin validaFechaTomaE



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_EX

*/

function validaFechaResEx(){
    var miFecResEx = document.getElementById('FEC_RES_EX');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecResEx,miTexto);
    validaFechaSuperior(miFecResEx);


}//fin validaFechaResEx



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA BIOP_EXOCE

*/

function validaBiopExocervix(){
    var miBiopExocer = document.getElementById('BIOP_EXOCE');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miBiopExocer,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miBiopExocer);


        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposBiopExocer(miBiopExocer);
                
                }//fin if



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos BiopExocer

*/

function habilitaCamposBiopExocer(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miResultadoExoc = document.getElementById('RES_B_EXOC');

    
        //validamos el valor, si es uno (1=si) habilitamos RES_B_EXOC
        //validamos el valor, si es dos (2=no) inhabilitamos RES_B_EXOC
        if(miCampo.value  ==1){
           //habilitamos RES_B_EXOC
           miResultadoExoc.disabled=false;    
    
        }
        else if(miCampo.value  ==2){
          //deshabilitamos RES_B_EXOC
          miResultadoExoc.disabled=true; 
           
        }

    
    
    }//fin funcion habilitaCamposBiopExocer



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_EXOC

*/
function validaResExoc(){
    var miResExoc = document.getElementById('RES_B_EXOC');
    var miTexto = "1=LEI AG.\n2=Carcinoma Escamocelular.";

    //validamos campo vacio
    validaVacio(miResExoc,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResExoc,miTexto);

}




/*

---------------------------------------------------------------------------------------------------------------------------------------------------------

VALIDA GRADO_HIST
*/

function validaGradoHist(){
    var miGradoHist = document.getElementById('GRADO_HIST');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miGradoHist,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miGradoHist,miTexto);
    


}//fin validaGradoHist



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA BIOP_ENDOC

*/

function validaBiopEndocervix(){
    

    var miBiopEndocer = document.getElementById('BIOP_ENDOC');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miBiopEndocer,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miBiopEndocer);


        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposBiopEndocer(miBiopEndocer);
                
                }//fin if





}





/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos BiopEndocer

*/

function  habilitaCamposBiopEndocer(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miResultadoEndocer = document.getElementById('RES_B_ADEN');
        var miResultadoHist = document.getElementById('RES_B_HIST');

    
        //validamos el valor, si es uno (1=si) habilitamos RES_B_ADEN y RES_B_HIST
        //validamos el valor, si es dos (2=no) inhabilitamos RES_B_ADEN y RES_B_HIST
        if(miCampo.value  ==1){
           //habilitamos RES_B_ADEN y RES_B_HIST
           miResultadoEndocer.disabled=false;   
           miResultadoHist.disabled=false; 
    
        }
        else if(miCampo.value  ==2){
          //deshabilitamos RES_B_ADEN y RES_B_HIST
          miResultadoEndocer.disabled=true;
          miResultadoHist.disabled=true; 
           
        }

    
    
    }//fin funcion  habilitaCamposBiopEndocer






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_ADEN

*/


function validaAdenocarcinoma(){

    var miResBAden = document.getElementById('RES_B_ADEN');
    var miTexto = "1=Positivo.\n2=Negativo.";

    //validamos campo vacio
    validaVacio(miResBAden,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResBAden,miTexto);


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_HIST

*/



function validaResBHist(){
    var miResBHist = document.getElementById('RES_B_HIST');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miResBHist,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miResBHist,miTexto);


}//fin validaResBHist


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------

VALIDA SEG_TRAT_I
*/
function validaSegTratI(){


    var miValidaSegTratI = document.getElementById('SEG_TRAT_I');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miValidaSegTratI,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miValidaSegTratI);

    //invocamos la función para habilitar los campos de acuerdo a la seleccion
    //como los campos estarán deshabilitados por defecto, si el usuario no digita una opción valida, se deshabilitarán
    //por eso no es necesario el siguiente if, pues así no se digiten datos válidos, los campos estarán deshabilitados
    habilitaCamposSegTratI(miValidaSegTratI);

    
        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposSegTratI(miValidaSegTratI);
                
                }//fin if



}




/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos SegTratI

*/

function  habilitaCamposSegTratI(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miRadioterapia = document.getElementById('radioterap');
        var miQuirurgico = document.getElementById('quirurgico');
        var miQuimiotera = document.getElementById('quimiotera');
        var miHormonoter = document.getElementById('hormonoter');
        var miCuidPalia = document.getElementById('cuid_palia');
        var miInmunotera = document.getElementById('inmunotera');
        var miFechaSegTr = document.getElementById('FCH_SEG_TR');

    
        //validamos el valor, si es uno (1=si) habilitamos los campos anteriores
        //validamos el valor, si es dos (2=no) inhabilitamos los campos anteriores
        if(miCampo.value  ==1){
           //habilitamos 
           
           miRadioterapia.disabled=false;
           miQuirurgico.disabled=false;
           miQuimiotera.disabled=false;
           miHormonoter.disabled=false;
           miCuidPalia.disabled=false;
           miInmunotera.disabled=false;
           miFechaSegTr.disabled=false;
    
        }
        else{
          //deshabilitamos de lo contrario. No tenemos que validar el 2, porque viene de una verificar unos datos validos
         
          miRadioterapia.disabled=true;
          miQuirurgico.disabled=true;
          miQuimiotera.disabled=true;
          miHormonoter.disabled=true;
          miCuidPalia.disabled=true;
          miInmunotera.disabled=true;
          miFechaSegTr.disabled=true;
           
        }

    
    
    }//fin funcion  habilitaCamposSegTratI


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA radioterap

*/
function validaRadioterap(){
    var miRadioterap = document.getElementById('radioterap');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miRadioterap,miTexto);

    //validamos valor entre si y no
    valida_si_no(miRadioterap);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA quirurgico

*/
function validaQuirurgico(){
    var miQuirurgico = document.getElementById('quirurgico');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miQuirurgico,miTexto);

    //validamos valor entre si y no
    valida_si_no(miQuirurgico);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA quimiotera

*/
function validaQuimiotera(){
    var miQuimiotera = document.getElementById('quimiotera');
    var miTexto = "1=Si. \n2=No.";

    //validamos campo vacio
    validaVacio(miQuimiotera,miTexto);

    //validamos valor entre si y no
    valida_si_no(miQuimiotera);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA hormonoter

*/
function validaHormonoter(){
    var miHormonoter = document.getElementById('hormonoter');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miHormonoter,miTexto);

    //validamos valor entre si y no
    valida_si_no(miHormonoter);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA hormonoter

*/
function validaHormonoter(){
    var miHormonoter = document.getElementById('hormonoter');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miHormonoter,miTexto);

    //validamos valor entre si y no
    valida_si_no(miHormonoter);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA cuid_palia

*/
function validaCuidPalia(){
    var miCuidPalia = document.getElementById('cuid_palia');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miCuidPalia,miTexto);

    //validamos valor entre si y no
    valida_si_no(miCuidPalia);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA inmunotera

*/
function validaInmunotera(){
    var miInmunotera = document.getElementById('inmunotera');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miInmunotera,miTexto);

    //validamos valor entre si y no
    valida_si_no(miInmunotera);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FCH_SEG_TR

*/
function validaFCH_SEG_TR(){

    var miFCH_SEG_TR = document.getElementById('FCH_SEG_TR');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFCH_SEG_TR,miTexto);
    validaFechaSuperior(miFCH_SEG_TR);

  }//fin validFechaExam



/*



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             FUNCIONES TIPO CANCER MENOR 18

*/


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIPO CÁNCER  _ MENOR 18

*/


function validaTipoCancerMenor18(){

    var miTipoCancerM = document.getElementById('TIPO_CA');
    

    var miTextoM="";
    miTextoM+="1: Leucemia Linfoide Aguda.\n 2: Leucemia Mieloide Aguda.\n 3: Otras Leucemias.\n 4: Linfomas y Neoplasias Reticuloendoteliales.\n 5: Tumores del Sistema Nervioso Central.\n";
    miTextoM+="6: Neuroblastoma y otros tumores de celulas nerviosas periféricas.\n 7: Retinoblastoma.\n 8: Tumores Renales.\n 9: Tumores Hepáticos.\n 10: Tumores Óseos Malignos.\n";
    miTextoM+="11: Sarcomas de Tejidos Blandos y Extraóseos.\n 12: Tumores Germinales, Trofoblásticos, y otros Gonadales.\n 13: Tumores Epiteliales Malignos y Melanoma.\n 14: Otras Neoplasias Malignas No Especificadas.\n";
    var miValidaVacioM =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValorM=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    //validamos campo vacio
    miValidaVacioM=validaVacio(miTipoCancerM,miTextoM);

    //validamos valor entre 1 y 3
    miValidaValorM=valida_1_14(miTipoCancerM,miTextoM);


    /*
    //si ambas validaciones retornan cero significa que los datos ingresados son validos
    if(miValidaVacioM==0 && miValidaValorM==0){
//invocamos la función para habilitar los campos de acuerdo a la seleccion
        habilitaCamposTipoCancer(miTipoCancerM);
    
    }//fin if


*/

}//fin validaTipoCancerMenor18


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_DX2NEO

*/

function validaFecDx2Neo(){

    var miFecDx2Neo = document.getElementById('FEC_DX2NEO');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecDx2Neo,miTexto);
    validaFechaSuperior(miFecDx2Neo);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_DX

*/

function validaFecDx(){

    var miFecDx = document.getElementById('FEC_DX');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecDx,miTexto);
    validaFechaSuperior(miFecDx);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_TOMADP

*/

function validaFecTomaDp(){

    var miFecTomaDp = document.getElementById('FEC_TOMADP');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecTomaDp,miTexto);
    validaFechaSuperior(miFecTomaDp);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_DP

*/

function validaFecResDp(){

    var miFecResDp = document.getElementById('FEC_RES_DP');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecResDp,miTexto);
    validaFechaSuperior(miFecResDp);
    validaFechaResultMayorFechaExamen2();

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_TOMADD

*/

function validaFecTomaDd(){

    var miFecTomaDd = document.getElementById('FEC_TOMADD');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecTomaDd,miTexto);
    validaFechaSuperior(miFecTomaDd);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_DD

*/

function validaFecResDd(){

    var miFecResDd = document.getElementById('FEC_RES_DD');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecResDd,miTexto);
    validaFechaSuperior(miFecResDd);
    validaFechaResultMayorFechaExamen3();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CONSX2_NEO

*/

function validaConsx2Neo(){

    var miConsx2Neo = document.getElementById('CONSX2_NEO');
    var miTexto = '1=Si, 2=No';
    validaVacio(miConsx2Neo,miTexto);
    valida_si_no(miConsx2Neo);
    validaFechaPrimerDiag();

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RECAIDA

*/

function validaRecaida(){

    var miRecaida = document.getElementById('RECAIDA');
    var miTexto = '1=Si, 2=No';
    validaVacio(miRecaida,miTexto);
    valida_si_no(miRecaida);
    validaFechaPrimerDiag();

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA validaFechaPrimerDiag

*/

function validaFechaPrimerDiag(){
var miConsx2Neo2 = document.getElementById('CONSX2_NEO');
var miRecaida2 = document.getElementById('RECAIDA');
var miFecDx2 = document.getElementById('FEC_DX');

//inHabilitamos y borramos el contenido del campo FEC_DX si  recaida es 2 y 2Neo es 2, de lo contrario lo habilitamos 

			if(miConsx2Neo2.value==1 && miRecaida2.value==1){

			        $.confirm({
			            title: 'Alerta',
			            content: 'Las variables Segunda Neoplasia y Recaida son Excluyentes.',
			            icon: 'fa fa-warning',
			            type: 'red',
			            typeAnimated: true,
			            buttons: {
			                close: {
			                    text: 'Aceptar',
			                    btnClass: 'btn-red',
			                    action: function(){
			                    }
			                }
			            }
			        });

			        miConsx2Neo2.value="0";
			        miRecaida2.value="0";

			}
		if(miConsx2Neo2.value==2 && miRecaida2.value==2 ){

			miFecDx2.disabled=true;
			miFecDx2.value="";
			$('#FEC_DX').data('kendoDatePicker').enable(false);
			

			

		}
		else{
			miFecDx2.disabled=false;
			$('#FEC_DX').data('kendoDatePicker').enable(true);
			

		}

}




/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CRIT_DX_PR

*/

function validaCritDxPr(){

    var miCritDxPr = document.getElementById('CRIT_DX_PR');
    var miTexto = '1=Extendido de sangre periférica, 2=Radiología diagnóstica, 3=Gammagrafía, 4=MarcadoresTumorales, 5=Clínica sin otra ayuda diagnóstica';
          //validamos campo vacio
    miValidaVacioCritDxPr=validaVacio(miCritDxPr,miTexto);

    //validamos valor entre 1 y 5
    miValidaValorCritDxPr=valida_1_5(miCritDxPr,miTexto);


    //si ambas validaciones retornan cero significa que los datos ingresados son validos
    if(miValidaVacioCritDxPr==0 && miValidaValorCritDxPr==0){

    		//validamos si se ingreso un valor de 5
    	if(miCritDxPr.value==5){
		//invocamos la función para inhabilitar los campos de acuerdo a la seleccion
        	inhabilitaCamposDiagnosticoProbable();

    		}
    	else{
    			//si es un valor diferente de 5 habilitamos todos los campos
			habilitaCamposDiagnosticoProbable();
    		}

    
    }//fin if

}//fin validaCritDxPr

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para inhabilitaCamposDiagnosticoProbable

*/

function inhabilitaCamposDiagnosticoProbable(){


//el dato no es vacio y tiene el valor de 5
    // DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO

    var miFechaTomaDP = document.getElementById('FEC_TOMADP');
    var miFechaResDP = document.getElementById('FEC_RES_DP');
    var miCritDxDE = document.getElementById('CRIT_DX_DE');
    var miFecTomaDd = document.getElementById('FEC_TOMADD');
    var miFecResDd = document.getElementById('FEC_RES_DD');

    //deshabilitamos campos 

	miFechaTomaDP.disabled=true;
	miFechaResDP.disabled=true;
	miCritDxDE.disabled=true;
	miFecTomaDd.disabled=true;
	miFecResDd.disabled=true;

	//borramos campos

	miFechaTomaDP.value="";
	miFechaResDP.value="";
	miCritDxDE.value="";
	miFecTomaDd.value="";
	miFecResDd.value="";

} //fin inhabilitaCamposDiagnosticoProbable

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para  habilitaCamposDiagnosticoProbable

*/

function habilitaCamposDiagnosticoProbable(){


//el dato no es vacio y tiene el valor diferente de 5
    // HABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO

    var miFechaTomaDP = document.getElementById('FEC_TOMADP');
    var miFechaResDP = document.getElementById('FEC_RES_DP');
    var miCritDxDE = document.getElementById('CRIT_DX_DE');
    var miFecTomaDd = document.getElementById('FEC_TOMADD');
    var miFecResDd = document.getElementById('FEC_RES_DD');

    //habilitamos campos 

	miFechaTomaDP.disabled=false;
	miFechaResDP.disabled=false;
	miCritDxDE.disabled=false;
	miFecTomaDd.disabled=false;
	miFecResDd.disabled=false;



} //fin habilitaCamposDiagnosticoProbable




/*


---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA validaFechaResultMayorFechaExamen2

*/
function validaFechaResultMayorFechaExamen2(){

	var miFechaTomaDp2 = document.getElementById('FEC_TOMADP');
    var miFecResDp2 = document.getElementById('FEC_RES_DP');
    
    compara2Fechas(miFechaTomaDp2,miFecResDp2);


  }//fin validaFechaResult

/*


---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA validaFechaResultMayorFechaExamen3

*/
function validaFechaResultMayorFechaExamen3(){

	var miFechaTomaDd2 = document.getElementById('FEC_TOMADD');
    var miFecResDd2 = document.getElementById('FEC_RES_DD');
    
    compara2Fechas(miFechaTomaDd2,miFecResDd2);


  }//fin validaFechaResult


/*


---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CritDxDe

*/
function validaCritDxDe(){

	var miCritDxDe2 = document.getElementById('CRIT_DX_DE');

	  var miTexto2 = '1=Mielograma, 2=Histopatología o citología de fluido corporal, 3=Inmunotipificación, 4=Criterio médico especializado, 5=Certificado de defunción, 7=Citogenética, 8=Radiología diagnóstica.';
          //validamos campo vacio
    miValidaVacioCritDxPr=validaVacio(miCritDxDe2,miTexto2);

    //validamos valor entre 1 y 5
    miValidaValorCritDxPr=valida_1_8(miCritDxDe2,miTexto2);



  }//fin CritDxDe


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
                                                     FUNCIONES FIEBRE AMARILLA

*/

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CARNE VACU

*/
function validaCarneVacu(){

	var miCarneVacu = document.getElementById('CARNE_VACU');
	var miVacFa1 = document.getElementById('VAC_FA1');
	var miFecFa1 = document.getElementById('FEC_FA1');


	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    miValidaVacioCarneVacu=validaVacio(miCarneVacu,miTexto);

    //validamos valor si no
    miValidaValorCarneVacu=valida_si_no(miCarneVacu);

    if(miCarneVacu.value==1){

    	
			miVacFa1.disabled=false;
	
			miFecFa1.disabled=false;
		
			$('#FEC_FA1').data('kendoDatePicker').enable(true);


    }
    else {

			miVacFa1.disabled=true;
			miVacFa1.value="";
			miFecFa1.disabled=true;
			miFecFa1.value="";
			$('#FEC_FA1').data('kendoDatePicker').enable(false);
    }



  }//fin CritDxDe



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA VAC_FA1

*/
function validaVacFa1(){

	var miVacFa1 = document.getElementById('VAC_FA1');
	var miFecFa1 = document.getElementById('FEC_FA1');


	  var miTexto = '1=Si, 2=No , 3=Desconocida';
          //validamos campo vacio
    miValidaVacioVacFa1=validaVacio(miVacFa1,miTexto);

    //validamos valor entre 1 y 3
    miValidaValorVacFa1=valida_1_3(miVacFa1,miTexto);

    if(miVacFa1.value==1){

    	
	
			miFecFa1.disabled=false;
		
			$('#FEC_FA1').data('kendoDatePicker').enable(true);


    }
    else {


			miFecFa1.disabled=true;
			miFecFa1.value="";
			$('#FEC_FA1').data('kendoDatePicker').enable(false);
    }



  }//fin CritDxDe

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_FA1

*/

function validaFecFa1(){

	var miFecFa1 = document.getElementById('FEC_FA1');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecFa1,miTexto);
    validaFechaSuperior(miFecFa1);
}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FIEBRE

*/
function validaFiebre(){

	var miFiebre = document.getElementById('FIEBRE');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFiebre,miTexto);

    //validamos valor si no
    valida_si_no(miFiebre);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA MALGIAS

*/
function validaMalgias(){

	var miMalgias = document.getElementById('MALGIAS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miMalgias,miTexto);

    //validamos valor si no
    valida_si_no(miMalgias);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA ARTRALGIA

*/
function validaArtralgia(){

	var miArtralgia = document.getElementById('ARTRALGIA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miArtralgia,miTexto);

    //validamos valor si no
    valida_si_no(miArtralgia);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CEFALEA

*/
function validaCefalea(){

	var miCefalea = document.getElementById('CEFALEA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miCefalea,miTexto);

    //validamos valor si no
    valida_si_no(miCefalea);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA VOMITO

*/
function validaVomito(){

	var miVomito = document.getElementById('VOMITO');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miVomito,miTexto);

    //validamos valor si no
    valida_si_no(miVomito);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA ICTERICIA

*/
function validaIctericia(){

	var miIctericia = document.getElementById('ICTERICIA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miIctericia,miTexto);

    //validamos valor si no
    valida_si_no(miIctericia);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA SFAGET

*/
function validaSFaget(){

	var miSFaget= document.getElementById('SFAGET');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miSFaget,miTexto);

    //validamos valor si no
    valida_si_no(miSFaget);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA OLIGURIA

*/
function validaOliguria(){

	var miOliguria= document.getElementById('OLIGURIA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miOliguria,miTexto);

    //validamos valor si no
    valida_si_no(miOliguria);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CHOQUE

*/
function validaChoque(){

	var miChoque= document.getElementById('CHOQUE');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miChoque,miTexto);

    //validamos valor si no
    valida_si_no(miChoque);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA BRADICARDI

*/
function validaBradicardi(){

	var miBradicardi= document.getElementById('BRADICARDI');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miBradicardi,miTexto);

    //validamos valor si no
    valida_si_no(miBradicardi);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_RENA

*/
function validaFallaRena(){

	var miFallaRena= document.getElementById('FALLA_RENA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaRena,miTexto);

    //validamos valor si no
    valida_si_no(miFallaRena);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_HEPA

*/
function validaFallaHepa(){

	var miFallaHepa= document.getElementById('FALLA_HEPA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaHepa,miTexto);

    //validamos valor si no
    valida_si_no(miFallaHepa);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA HEPATOMEGA

*/
function validaHepatomega(){

	var miHepatomega= document.getElementById('HEPATOMEGA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miHepatomega,miTexto);

    //validamos valor si no
    valida_si_no(miHepatomega);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA HEMOPTISIS

*/
function validaHemoptisis(){

	var miHemoptisis= document.getElementById('HEMOPTISIS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miHemoptisis,miTexto);

    //validamos valor si no
    valida_si_no(miHemoptisis);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA HIPIREMIA

*/
function validaHipiremia(){

	var miHipiremia= document.getElementById('HIPIREMIA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miHipiremia,miTexto);

    //validamos valor si no
    valida_si_no(miHipiremia);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA HEMATEMESI

*/
function validaHematemesi(){

	var miHematemesi= document.getElementById('HEMATEMESI');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miHematemesi,miTexto);

    //validamos valor si no
    valida_si_no(miHematemesi);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA PETEQUIAS

*/
function validaPetequias(){

	var miPetequias= document.getElementById('PETEQUIAS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miPetequias,miTexto);

    //validamos valor si no
    valida_si_no(miPetequias);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA METRORRAGI

*/
function validaMetrorragi(){

	var miMetrorragi= document.getElementById('METRORRAGI');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miMetrorragi,miTexto);

    //validamos valor si no
    valida_si_no(miMetrorragi);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA METRORRAGI

*/
function validaMetrorragi(){

	var miMetrorragi= document.getElementById('METRORRAGI');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miMetrorragi,miTexto);

    //validamos valor si no
    valida_si_no(miMetrorragi);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA MELENAS

*/
function validaMelenas(){

	var miMelenas= document.getElementById('MELENAS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miMelenas,miTexto);

    //validamos valor si no
    valida_si_no(miMelenas);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA EQUIMOSIS

*/
function validaEquimosis(){

	var miEquimosis= document.getElementById('EQUIMOSIS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miEquimosis,miTexto);

    //validamos valor si no
    valida_si_no(miEquimosis);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA EPISTAXIS

*/
function validaEpistaxis(){

	var miEpistaxis= document.getElementById('EPISTAXIS');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miEpistaxis,miTexto);

    //validamos valor si no
    valida_si_no(miEpistaxis);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA EPISTAXIS

*/
function validaHematuria(){

	var miHematuria= document.getElementById('HEMATURIA');



	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miHematuria,miTexto);

    //validamos valor si no
    valida_si_no(miHematuria);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CAS_FA

*/
function validaCasFa(){

	var miCasFa= document.getElementById('CAS_FA');



	  var miTexto = '1=Selvático, 2=Urbano';
          //validamos campo vacio
    validaVacio(miCasFa,miTexto);

    //validamos valor si no
    valida_1_2(miCasFa,miTexto);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CODMUNINFE

*/

function validaCodMunInfe(){

	var miCodMunInfe= document.getElementById('CODMUNINFE');



	  var miTexto = 'Seleccione un código de la lista';
          //validamos campo vacio
    validaVacio(miCodMunInfe,miTexto);
    validaNumeros(miCodMunInfe,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
															FUNCIONES MORBILIDAD MATERNA EXTREMA

*/

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA PTE_REMTDA

*/

function validaPteRemtda(){

	var miPteRemtda= document.getElementById('PTE_REMTDA');

	var miCodInstR1= document.getElementById('CODINST_R1');

	var miInstRefe1= document.getElementById('INST_REFE1');

	var miCodInstR2= document.getElementById('CODINST_R2');

	var miInstRefe2= document.getElementById('INST_REFE2');

	var miTiemRemis= document.getElementById('TIEM_REMIS');

	var miSemCPren= document.getElementById('SEM_C_PREN');

    var miTtlCriter= document.getElementById('TTL_CRITER');

    var miAdic1Otro= document.getElementById('ADIC1_OTRO');

    var miAdic2Otro= document.getElementById('ADIC2_OTRO');

    var miCausAgrup= document.getElementById('CAUS_AGRUP');

    var miDiasCInt= document.getElementById('DIAS_C_INT');

    var miUndsTrans= document.getElementById('UNDS_TRANS');


	  var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miPteRemtda,miTexto);
      //validamos valor si no
    valida_si_no(miPteRemtda);

     if(miPteRemtda.value==1){

    	
	
			miCodInstR1.disabled=false;
			miCodInstR2.disabled=false;
			miInstRefe1.disabled=true;
			miInstRefe2.disabled=true;
			miTiemRemis.disabled=false;
			miSemCPren.disabled=true;
            miTtlCriter.disabled=true;
            miAdic1Otro.disabled=true;
            miAdic2Otro.disabled=true;
            miCausAgrup.disabled=true;
            miDiasCInt.disabled=true;
            miUndsTrans.disabled=true;
		


    }
    else {


			miCodInstR1.disabled=true;
			miCodInstR2.disabled=true;
			miInstRefe1.disabled=true;
			miInstRefe2.disabled=true;
			miTiemRemis.disabled=true;
			miSemCPren.disabled=true;
            miTtlCriter.disabled=true;
            miAdic1Otro.disabled=true;
            miAdic2Otro.disabled=true;
            miCausAgrup.disabled=true;
            miDiasCInt.disabled=true;
            miUndsTrans.disabled=true;

			miCodInstR1.value="";
			miCodInstR2.value="";
			miInstRefe1.value="";
			miInstRefe2.value="";
			miTiemRemis.value="";

    }



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CODINST_R1

*/

function validaCodInstR1(){

	var miCodInstR1= document.getElementById('CODINST_R1');



	  var miTexto = 'Seleccione un código de la lista';
          //validamos campo vacio
    validaVacio(miCodInstR1,miTexto);
    validaNumeros(miCodInstR1,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CODINST_R2

*/

function validaCodInstR2(){

	var miCodInstR2= document.getElementById('CODINST_R2');



	  var miTexto = 'Seleccione un código de la lista';
          //validamos campo vacio
    validaVacio(miCodInstR2,miTexto);
    validaNumeros(miCodInstR2,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIEM_REMIS

*/

function validaTiemRemis(){

		var miTiemRemis= document.getElementById('TIEM_REMIS');



	  var miTexto = 'Digite un valor mayor o igual que cero';
          //validamos campo vacio
    validaVacio(miTiemRemis,miTexto);
    validaNumeros(miTiemRemis,miTexto);
    validaPositivos(miTiemRemis,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIEM_REMIS

*/

function validaNumGestac(){

		var miNumGestac= document.getElementById('NUM_GESTAC');
		var miFecUlGes= document.getElementById('FEC_UL_GES');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumGestac,miTexto);
    valida_1_19(miNumGestac,miTexto);

    if(miNumGestac.value>1){

    	

			$('#FEC_UL_GES').data('kendoDatePicker').enable(true);
			miFecUlGes.disabled=false;
		


    }
    else {



			$('#FEC_UL_GES').data('kendoDatePicker').enable(false);
			miFecUlGes.disabled=true;
			miFecUlGes.value="";


    }



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_PARVAG

*/

function validaNumParVag(){

		var miNumParVag= document.getElementById('NUM_PARVAG');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumParVag,miTexto);
    valida_0_19(miNumParVag,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_CESARE

*/

function validaNumCesare(){

		var miNumCesare= document.getElementById('NUM_CESARE');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumCesare,miTexto);
    valida_0_19(miNumCesare,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_ABORTO

*/

function validaNumAborto(){

		var miNumAborto= document.getElementById('NUM_ABORTO');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumAborto,miTexto);
    valida_0_19(miNumAborto,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_MOLAS

*/

function validaNumMolas(){

		var miNumMolas= document.getElementById('NUM_MOLAS');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumMolas,miTexto);
    valida_0_19(miNumMolas,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_ECTOPI

*/

function validaNumEctopi(){

		var miNumEctopi= document.getElementById('NUM_ECTOPI');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumEctopi,miTexto);
    valida_0_19(miNumEctopi,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_MUERTO

*/

function validaNumMuerto(){

		var miNumMuerto= document.getElementById('NUM_MUERTO');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumMuerto,miTexto);
    valida_0_19(miNumMuerto,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NUM_VIVOS

*/

function validaNumVivos(){

		var miNumVivos= document.getElementById('NUM_VIVOS');



	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miNumVivos,miTexto);
    valida_0_19(miNumVivos,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_UL_GES

*/

function validaFecUlGes(){

	var miFecUlges = document.getElementById('FEC_UL_GES');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecUlges,miTexto);
    validaFechaSuperior(miFecUlges);
}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA NO_CON_PRE

*/

function validaNoConPre(){

	var miNoConPre = document.getElementById('NO_CON_PRE');
    var miSemCPren = document.getElementById('SEM_C_PREN');

		
	  var miTexto = 'Mayor o igual que cero y Menor o igual que 50 (>=0 y <=50)';
          //validamos campo vacio
    validaVacio(miNoConPre,miTexto);
    valida_0_50(miNoConPre,miTexto);

    if(miNoConPre.value >= 1){

        miSemCPren.disabled=false;

    }
    else{
         miSemCPren.disabled=true;
         miSemCPren.value="";
    	
    }


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA SEM_C_PREN

*/

function validaSemCPren(){

	var miSemCPren = document.getElementById('SEM_C_PREN');
	  var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miSemCPren,miTexto);
    valida_1_40(miSemCPren,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TERM_GESTA

*/

function validaTermGesta(){

    var miTermGesta = document.getElementById('TERM_GESTA');
    var miTexto = '1=Aborto, 2=Parto Vaginal, 3=Parto Instrumentado, 4=Cesárea, 5=Continua Embarazada';
          //validamos campo vacio
    validaVacio(miTermGesta,miTexto);
    valida_1_5(miTermGesta,miTexto);



}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA MOC_REL_TG

*/

function validaMocRelTg(){

    var miMocRelTg = document.getElementById('MOC_REL_TG');
    var miTexto = '1=Antes, 2=Durante, 3=Después';
          //validamos campo vacio
    validaVacio(miMocRelTg,miTexto);
    valida_1_3(miMocRelTg,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
SUMA TOTAL CRITERIOS

*/

function sumaTotalCriterios(){

   
    var miTtlCriter= document.getElementById('TTL_CRITER');
    var acumulado=0;


    var miEclampsia= document.getElementById('ECLAMPSIA');
    var dato1=0;
    var miChoqSepti= document.getElementById('CHOQ_SEPTI');
    var dato2=0;
    var miRuptUteri= document.getElementById('RUPT_UTERI');
    var dato3=0;
    var miPreclamsia= document.getElementById('PRECALMSI');
    var dato4=0;
    var miChoqHipov= document.getElementById('CHOQ_HIPOV');
    var dato5=0;
    var miFallaCard= document.getElementById('FALLA_CARD');
    var dato6=0;
    var miFallaVasc= document.getElementById('FALLA_VASC');
    var dato7=0;
    var miFallaRena= document.getElementById('FALLA_RENA');
    var dato8=0;
    var miFallaHepa= document.getElementById('FALLA_HEPA');
    var dato9=0;
    var miFallaMeta= document.getElementById('FALLA_META');
    var dato10=0;
    var miFallaCere= document.getElementById('FALLA_CERE');
    var dato11=0;
    var miFallaResp= document.getElementById('FALLA_RESP');
    var dato12=0;
    var miFallaCoag= document.getElementById('FALLA_COAG');
    var dato13=0;
    var miIngresUci= document.getElementById('INGRES_UCI');
    var dato14=0;
    var miCirAdicio= document.getElementById('CIR_ADICIO');
    var dato15=0;
    var miTransfusio= document.getElementById('TRANSFUSIO');
    var dato16=0;



    if(miTtlCriter.value==""){
        miTtlCriter.value=0;
    }




    if(miEclampsia.value==0){
        dato1=0;
    }
    else if(miEclampsia.value==1){

        dato1=1;
    }
    else if(miEclampsia.value==2){
        dato1=0;

    }

    if(miChoqSepti.value==0){
        dato2=0;
    }
    else if(miChoqSepti.value==1){

        dato2=1;
    }
    else if(miChoqSepti.value==2){
        dato2=0;

    }

    if(miRuptUteri.value==0){
        dato3=0;

    }
    else if(miRuptUteri.value==1){

        dato3=1;
    }
    else if(miRuptUteri.value==2){
        dato3=0;

    }

    if(miPreclamsia.value==0){
        dato4=0;

    }
    else if(miPreclamsia.value==1){

        dato4=1;
    }
    else if(miPreclamsia.value==2){
        dato4=0;

    }

    if(miChoqHipov.value==0){
        dato5=0;

    }
    else if(miChoqHipov.value==1){

        dato5=1;
    }
    else if(miChoqHipov.value==2){
        dato5=0;

    }

    if(miFallaCard.value==0){

        dato6=0;

    }
    else if(miFallaCard.value==1){

        dato6=1;
    }
    else if(miFallaCard.value==2){
        dato6=0;

    }


        if(miFallaVasc.value==0){

        dato7=0;

    }
    else if(miFallaVasc.value==1){

        dato7=1;
    }
    else if(miFallaVasc.value==2){
        dato7=0;

    }


        if(miFallaRena.value==0){

        dato8=0;

    }
    else if(miFallaRena.value==1){

        dato8=1;
    }
    else if(miFallaRena.value==2){
        dato8=0;

    }


        if(miFallaHepa.value==0){

        dato9=0;

    }
    else if(miFallaHepa.value==1){

        dato9=1;
    }
    else if(miFallaHepa.value==2){
        dato9=0;

    }

            if(miFallaMeta.value==0){

        dato10=0;

    }
    else if(miFallaMeta.value==1){

        dato10=1;
    }
    else if(miFallaMeta.value==2){
        dato10=0;

    }


            if(miFallaCere.value==0){

        dato11=0;

    }
    else if(miFallaCere.value==1){

        dato11=1;
    }
    else if(miFallaCere.value==2){
        dato11=0;

    }



    if(miFallaResp.value==0){

        dato12=0;

    }
    else if(miFallaResp.value==1){

        dato12=1;
    }
    else if(miFallaResp.value==2){
        dato12=0;

    }



    if(miFallaCoag.value==0){

        dato13=0;

    }
    else if(miFallaCoag.value==1){

        dato13=1;
    }
    else if(miFallaCoag.value==2){
        dato13=0;

    }




    if(miIngresUci.value==0){

        dato14=0;

    }
    else if(miIngresUci.value==1){

        dato14=1;
    }
    else if(miIngresUci.value==2){
        dato14=0;

    }




        if(miCirAdicio.value==0){

        dato15=0;

    }
    else if(miCirAdicio.value==1){

        dato15=1;
    }
    else if(miCirAdicio.value==2){
        dato15=0;

    }




            if(miTransfusio.value==0){

        dato16=0;

    }
    else if(miTransfusio.value==1){

        dato16=1;
    }
    else if(miTransfusio.value==2){
        dato16=0;

    }

acumulado=dato1+dato2+dato3+dato4+dato5+dato6+dato7+dato8+dato9+dato10+dato11+dato12+dato13+dato14+dato15+dato16;

    

    miTtlCriter.value=parseInt(acumulado);




}





/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA ECLAMPSIA

*/
function validaEclampsia(){

    var miEclampsia= document.getElementById('ECLAMPSIA');
    


      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miEclampsia,miTexto);

    //validamos valor si no
    valida_si_no(miEclampsia);

    sumaTotalCriterios();



}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CHOQ_SEPTI

*/
function validaChoqSepti(){

    var miChoqSepti= document.getElementById('CHOQ_SEPTI');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miChoqSepti,miTexto);

    //validamos valor si no
    valida_si_no(miChoqSepti);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RUPT_UTERI

*/
function validaRuptUteri(){

    var miRuptUteri= document.getElementById('RUPT_UTERI');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miRuptUteri,miTexto);

    //validamos valor si no
    valida_si_no(miRuptUteri);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA PRECALMSI

*/
function validaPreclamsia(){

    var miPreclamsia= document.getElementById('PRECALMSI');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miPreclamsia,miTexto);

    //validamos valor si no
    valida_si_no(miPreclamsia);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CHOQ_HIPOV

*/
function validaChoqHipov(){

    var miChoqHipov= document.getElementById('CHOQ_HIPOV');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miChoqHipov,miTexto);

    //validamos valor si no
    valida_si_no(miChoqHipov);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_CARD

*/
function validaFallaCard(){

    var miFallaCard= document.getElementById('FALLA_CARD');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaCard,miTexto);

    //validamos valor si no
    valida_si_no(miFallaCard);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_VASC

*/
function validaFallaVasc(){

    var miFallaVasc= document.getElementById('FALLA_VASC');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaVasc,miTexto);

    //validamos valor si no
    valida_si_no(miFallaVasc);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_RENA

*/
function validaFallaRena(){

    var miFallaRena= document.getElementById('FALLA_RENA');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaRena,miTexto);

    //validamos valor si no
    valida_si_no(miFallaRena);

    sumaTotalCriterios();

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_HEPA

*/
function validaFallaHepa(){

    var miFallaHepa= document.getElementById('FALLA_HEPA');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaHepa,miTexto);

    //validamos valor si no
    valida_si_no(miFallaHepa);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_META

*/
function validaFallaMeta(){

    var miFallaMeta= document.getElementById('FALLA_META');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaMeta,miTexto);

    //validamos valor si no
    valida_si_no(miFallaMeta);

    sumaTotalCriterios();

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_CERE

*/
function validaFallaCere(){

    var miFallaCere= document.getElementById('FALLA_CERE');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaCere,miTexto);

    //validamos valor si no
    valida_si_no(miFallaCere);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_RESP

*/
function validaFallaResp(){

    var miFallaResp= document.getElementById('FALLA_RESP');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaResp,miTexto);

    //validamos valor si no
    valida_si_no(miFallaResp);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FALLA_COAG

*/
function validaFallaCoag(){

    var miFallaCoag= document.getElementById('FALLA_COAG');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miFallaCoag,miTexto);

    //validamos valor si no
    valida_si_no(miFallaCoag);

    sumaTotalCriterios();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA INGRES_UCI

*/
function validaIngresUci(){

    var miIngresUci= document.getElementById('INGRES_UCI');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miIngresUci,miTexto);

    //validamos valor si no
    valida_si_no(miIngresUci);

    sumaTotalCriterios();

    habilitaDiasUci();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
HABILITADIASUCI

*/
function habilitaDiasUci(){

    var miIngresUci= document.getElementById('INGRES_UCI');

    var miDiasCInt= document.getElementById('DIAS_C_INT');



        if(miIngresUci.value==1){

                miDiasCInt.disabled=false;
              

        }
        else{

               miDiasCInt.disabled=true;
               miDiasCInt.value="";
             

        }

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CIR_ADICIO

*/
function validaCirAdicio(){

    var miCirAdicio= document.getElementById('CIR_ADICIO');





      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miCirAdicio,miTexto);

    //validamos valor si no
    valida_si_no(miCirAdicio);

    sumaTotalCriterios();

    habilitaCirAdicio();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
HABILITACIRADICIO

*/
function habilitaCirAdicio(){

    var miCirAdicio= document.getElementById('CIR_ADICIO');

    var miCirAdic1= document.getElementById('CIR_ADIC_1');
    var miCirAdic2= document.getElementById('CIR_ADIC_2');


        if(miCirAdicio.value==1){

                miCirAdic1.disabled=false;
                 miCirAdic2.disabled=false;

        }
        else{

                miCirAdic1.disabled=true;
                 miCirAdic2.disabled=true;


                 miCirAdic1.value="";
                 miCirAdic2.value="";

        }

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TRANSFUSIO

*/
function validaTransfusio(){

    var miTransfusio= document.getElementById('TRANSFUSIO');



      var miTexto = '1=Si, 2=No';
          //validamos campo vacio
    validaVacio(miTransfusio,miTexto);

    //validamos valor si no
    valida_si_no(miTransfusio);

    sumaTotalCriterios();

    habilitaUnidTransf();

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
HABILITADIASUCI

*/
function habilitaUnidTransf(){

    var miTransfusio= document.getElementById('TRANSFUSIO');

    var miUndsTrans= document.getElementById('UNDS_TRANS');



        if(miTransfusio.value==1){

                miUndsTrans.disabled=false;
              

        }
        else{

               miUndsTrans.disabled=true;
               miUndsTrans.value="";
             

        }

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA DIAS_HOSPI

*/
function validaDiasHospi(){

    var miDiasHospi= document.getElementById('DIAS_HOSPI');



      var miTexto = 'Números';


    validaVacio(miDiasHospi,miTexto);
    validaNumeros(miDiasHospi,miTexto);
    validaPositivos(miDiasHospi,miTexto);


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA DIAS_C_INT

*/
function validaDiasCInt(){

    var miDiasCInt= document.getElementById('DIAS_C_INT');



      var miTexto = 'Números';


    validaVacio(miDiasCInt,miTexto);
    validaNumeros(miDiasCInt,miTexto);
    validaPositivos(miDiasCInt,miTexto);


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA UNDS_TRANS

*/
function validaUndsTrans(){

    var miUndsTrans= document.getElementById('UNDS_TRANS');



      var miTexto = 'Números';


    validaMayorQueTres(miUndsTrans,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CIR_ADIC_1

*/

function validaCirAdic1(){

    var miCirAdic1= document.getElementById('CIR_ADIC_1');



      var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miCirAdic1,miTexto);
    valida_1_4(miCirAdic1,miTexto);

    habilitaCircAdic1Otro();



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
HABILITACIRCADIC1OTRO

*/
function habilitaCircAdic1Otro(){

     var miCirAdic1= document.getElementById('CIR_ADIC_1');

    var miAdic1Otro= document.getElementById('ADIC1_OTRO');



        if(miCirAdic1.value==4){

                miAdic1Otro.disabled=false;
              

        }
        else{

               miAdic1Otro.disabled=true;
               miAdic1Otro.value="";
             

        }

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CIR_ADIC_2

*/

function validaCirAdic2(){

    var miCirAdic2= document.getElementById('CIR_ADIC_2');



      var miTexto = 'Números';
          //validamos campo vacio
    validaVacio(miCirAdic2,miTexto);
    valida_1_4(miCirAdic2,miTexto);

    habilitaCircAdic2Otro();



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
HABILITACIRCADIC2OTRO

*/
function habilitaCircAdic2Otro(){

     var miCirAdic2= document.getElementById('CIR_ADIC_2');

    var miAdic2Otro= document.getElementById('ADIC2_OTRO');



        if(miCirAdic2.value==4){

                miAdic2Otro.disabled=false;
              

        }
        else{

               miAdic2Otro.disabled=true;
               miAdic2Otro.value="";
             

        }

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CAUS_PRINC

*/

function validaCausPrinc(){

    var miCausPrinc= document.getElementById('CAUS_PRINC');



      var miTexto = 'Código del evento según CIE X';
          //validamos campo vacio
    validaVacio(miCausPrinc,miTexto);
    validaNumeros(miCausPrinc,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CAUS_ASOC1

*/

function validaCausAsoc1(){

    var miCausAsoc1= document.getElementById('CAUS_ASOC1');



      var miTexto = 'Según tabla de referencia';
          //validamos campo vacio
    validaVacio(miCausAsoc1,miTexto);
    validaNumeros(miCausAsoc1,miTexto);



}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CAUS_ASOC2

*/

function validaCausAsoc2(){

    var miCausAsoc2= document.getElementById('CAUS_ASOC2');



      var miTexto = 'Según tabla de referencia';
          //validamos campo vacio
    validaVacio(miCausAsoc2,miTexto);
    validaNumeros(miCausAsoc2,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA CAUS_ASOC3

*/

function validaCausAsoc3(){

    var miCausAsoc3= document.getElementById('CAUS_ASOC3');



      var miTexto = 'Según tabla de referencia';
          //validamos campo vacio
    validaVacio(miCausAsoc3,miTexto);
    validaNumeros(miCausAsoc3,miTexto);



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_EGRESO

*/

function validaFecEgreso(){

    var miFecEgreso = document.getElementById('FEC_EGRESO');
    var miTexto = 'Fecha Incorrecta';
    validaVacio(miFecEgreso,miTexto);
    validaFechaSuperior(miFecEgreso);
}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA egreso

*/

function validaEgreso(){

    var miEgreso= document.getElementById('egreso');



      var miTexto = '1=Sale para la casa, 2=Sale remitida';
          //validamos campo vacio
    validaVacio(miEgreso,miTexto);
    valida_1_2(miEgreso,miTexto);



}
/*  FUNCION PARA POBLAR LISTA DESPLEGABLE CON JAVASCRIPT PURO

function poblarListaTipoCancerMenor18(){


    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.

        var miListaTipoCancerMenor18 = document.getElementById('TIPO_CA');
        var miListaTipoCancerMenor18_datos = document.getElementById('lista1');
     

//recuperamos el total de listas deplegables.
// Retrieve
var totalListasDesplegablesProcesar = localStorage.totalListasDesplegables ;
//alert("La cantidad de listas deplegables en este formulario es : "+totalListasDesplegablesProcesar);
console.log("La cantidad de listas deplegables en este formulario es : "+totalListasDesplegablesProcesar);
//arreglo para guardar los nombres de todas las listas desplegables
var nombresListasDesplegables = [];


var totalDatoLeido18=0;//variable para la cantidad de elementos del json
//recuperamos del localStorage el valor del total del json
totalDatoLeido18= localStorage.totalElementosJson;
     //Creamos tantas posiciones en el arreglo como total de listas desplegables hay
     //iniciamos el contador en 1 ya que no existe la variable que inicie en cero  ver script.js 852
     for(var lst=1; lst<=totalListasDesplegablesProcesar;lst++){
        nombresListasDesplegables[lst] = document.getElementById('lista'+lst) ;
      }

      //añadimos opción vacia a la lista desplegable auxiliar
         var tipoCancer = new Object();
         tipoCancer.valor="0";
         tipoCancer.nombre=" ";

     
     var options18="";
     options18 += '<option value="' +tipoCancer.valor +'">' +tipoCancer.nombre +'</option>';
     nombresListasDesplegables[1].innerHTML = options18;


     miListaTipoCancerMenor18.min=1; //agregamos el valor mínimo a la caja de tipo number
   

     //validamos si dejan vacio el campo
        if ( miListaTipoCancerMenor18.value.length == 0 ||  miListaTipoCancerMenor18.value  =='' ||  miListaTipoCancerMenor18.value ==null || /^\\s+$/.test( miListaTipoCancerMenor18.value )) {
            //alert('Diligencie Datos.No se pueden dejar campos vacios en tipo cáncer.');

            $.confirm({
                title: 'Alerta',
                content: 'Diligencie Datos.No se pueden dejar campos vacios en tipo cáncer.',
                icon: 'fa fa-warning',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    close: {
                        text: 'Aceptar',
                        btnClass: 'btn-red',
                        action: function(){
                        }
                    }
                }
            });
            
            miListaTipoCancerMenor18.focus();
            miListaTipoCancerMenor18.value='Diligencie datos';
        }//fin if
        else{
//EL CAMPO NO ESTÁ VACIO, PROCEDEMOS A LEER EL JSON DE LA LISTA DESPLEGABLE
      
            
//PROCESO PARA LEER EL JSON QUE TIENE LOS TIPÓS DE CANCER
var misCabeceras = new Headers();

misCabeceras.append("Content-Type", "application/json");
misCabeceras.append("Access-Control-Allow-Origin", "*");
misCabeceras.append('Access-Control-Allow-Headers','*');
misCabeceras.append('Access-Control-Allow-Methods','GET');



var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

               var myRequest = new Request('https://vitalsaludem.com/services2/api_db/listasDesplegables/leerListasDesplegables.php',miInit);
               var myContentType = myRequest.headers.get('Content-Type');
                    //fetch toma como argumento la ruta del recurso que quiere obtener
                    //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    fetch('https://vitalsaludem.com/services2/api_db/listasDesplegables/leerListasDesplegables.php',miInit)
                    .then(function(response18) {

                        //si no hay respuesta 
                        if(!response18.ok){ 

                            console.log('No se pudo resolver la promesa');
                            console.log("La respuesta no fue satisfactoria");
                            console.log("HTTP status " + response18.status);
                            console.log("Contenido de respuesta: "+JSON.stringify(response18)); // mostramos el estado
          
                            console.log("La cabecera solicitada de contenido fue: "+myContentType);
  
                        }
                        else{
                                          //devuelve un objeto promise conteniendo la respuesta, el objeto response
                            //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
                            return response18.json();   
                        }
    
                    })
                    .then(function(myJson18) {
                    
                        //contamos la cantidad de elementos que tiene el json en el objeto "personas" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto personas
                    //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS

                            //contamos la cantidad de elementos que tiene el json en el objeto "tipo" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto tipoCancer
                    datoLeido18=Object.keys(myJson18.tipoCancer).length ;
                        //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                    console.log("eL JSON obtenido fue "+myJson18);
                    // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    console.log('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);
                    //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                    //alert("EL json obtenido fue: "+JSON.stringify(myJson18));
                    // alert('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                   // alert('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);

                    //la cantidad de elementos del json será el atributo máximo para la caja tipo number
                    //con la cantidad de elementos que tiene el json limitamos la cantidad de datos que se pueden ingresar en la caja tipo number
                    miListaTipoCancerMenor18.max = datoLeido18;
                    //guardamos en la variable web storage el valor que desaparecerá
                    localStorage.totalElementosJson=datoLeido18;
                            //recorremos el json
            for(var i18=0; i18<datoLeido18;i18++){
                        
    //rellenamos la lista desplegable nueva con la información obtenida del json
                options18 += '<option value="' +myJson18.tipoCancer[i18].valor +'">' +myJson18.tipoCancer[i18].nombre +'</option>';
                nombresListasDesplegables[1].innerHTML = options18;
                 }//fin for




                    })//fin  //then(function(myJson18)
                    .catch(function(error18) {
                        console.log('Hubo un problema con la petición Fetch:' + error18.message);
                        console.log("La cabecera solicitada de contenido fue: "+myContentType);
                      });


                      //DESPUES DE OBTENER LOS DATOS Y SABER QUE NO GENERÓ ERROR, VALIDAMOS SI LO QUE SE ESCRIBA EN LA CAJA NUMBER ESTÁ DENTRO DEL RANGO
                     //convierto a entero los datos tipo texto para validacion
    if((miListaTipoCancerMenor18.value<1) || (miListaTipoCancerMenor18.value>totalDatoLeido18)){
        //alert('Digite un valor entre 1 y '+ totalDatoLeido18);

        $.confirm({
            title: 'Alerta',
            content: 'Digite un valor entre 1 y '+ totalDatoLeido18,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });   
        var mensajeAlerta="";
        mensajeAlerta+="1: Leucemia Linfoide Aguda.\n 2: Leucemia Mieloide Aguda.\n 3: Otras Leucemias.\n 4: Linfomas y Neoplasias Reticuloendoteliales.\n 5: Tumores del Sistema Nervioso Central.\n";
        mensajeAlerta+="6: Neuroblastoma y otros tumores de celulas nerviosas periféricas.\n 7: Retinoblastoma.\n 8: Tumores Renales.\n 9: Tumores Hepáticos.\n 10: Tumores Óseos Malignos.\n";
        mensajeAlerta+="11: Sarcomas de Tejidos Blandos y Extraóseos.\n 12: Tumores Germinales, Trofoblásticos, y otros Gonadales.\n 13: Tumores Epiteliales Malignos y Melanoma.\n 14: Otras Neoplasias Malignas No Especificadas.\n";
       // alert(mensajeAlerta);

        $.confirm({
            title: 'Alerta',
            content: mensajeAlerta,
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });   

        miListaTipoCancerMenor18.focus();// no podemos dejar el foco en el campo porque volveria 
        miListaTipoCancerMenor18.value=1;
    }//fin if


    
                    




            



        }//fin else vacio




 
                



      } else {
        // Sorry! No Web Storage support..
       // alert("Lo siento. Su navegador no soporta Web Storage. Intente con otro navegador");
        $.confirm({
            title: 'Alerta',
            content: 'Lo siento. Su navegador no soporta Web Storage. Intente con otro navegador.',
            icon: 'fa fa-warning',
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: {
                    text: 'Aceptar',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                }
            }
        });

      }//else web storage



}



*/


/*

-----------------------------------------------------------------------------------------------------------------------------------------------

*/

/*  FUNCION PARA CORRELACIONAR LISTA DESPLEGABLE CON JAVASCRIPT PURO

function correlacionarListaDesplegable(){

    var miListaTipoCancerMenor18_datos = document.getElementById('lista1');
    var miListaTipoCancerMenor18 = document.getElementById('TIPO_CA');

    miListaTipoCancerMenor18.value=miListaTipoCancerMenor18_datos.value;

}


*/


/*

-----------------------------------------------------------------------------------------------------------------------------------------------

*/