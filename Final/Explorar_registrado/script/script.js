 var eleCompartir = document.getElementsByClassName("compartir");

    for (var i = 0; i < eleCompartir.length; i++ ){
 
      eleCompartir[i].addEventListener("click", function(){
      padre= this.parentNode;
      padre=padre.parentNode;

     //Creamos un div, donde meteremos el texto
    var div_texto = document.createElement('div');
    div_texto.class="iconos_compartir";

    var offset_horizontal= this.getBoundingClientRect().left + window.scrollX; //Posicion horizontal 

   var offset_vertical=this.getBoundingClientRect().top + window.scrollY;
   
    div_texto.style.top= offset_vertical + 40+ "px";
    
    div_texto.style.left= offset_horizontal+ -20 +"px";
    div_texto.style.position= "absolute";
    div_texto.style.borderRadius=" 6px";
    div_texto.style.border="2.5px solid rgb(160,160,160)";
  div_texto.style.backgroundColor="white";
    
  
    var a_facebook = document.createElement('a');
    var img_facebook = document.createElement("img");
    img_facebook.alt="Compartir en Faceebok";
    img_facebook.height="25";
    img_facebook.src="images/facebook.png";
    img_facebook.title="Compartir en Faceebok";
    img_facebook.width="25";
    a_facebook.appendChild(img_facebook);
    a_facebook.title = "Compartir en Faceebok";
    a_facebook.href = "https://www.facebook.com/";
    a_facebook.target="_blank"
    a_facebook.addEventListener("click", function(){
      document.body.removeChild(div_texto);
      
    });
    

    var a_google = document.createElement('a');
    var img_google = document.createElement("img");
    img_google.alt="Compartir en Google";
    img_google.height="25";
    img_google.src="images/google.png";
    img_google.title="Compartir en Google";
    img_google.width="25";
    a_google.appendChild(img_google);
    a_google.title = "Compartir en Google";
    a_google.href = "https://plus.google.com/"
    a_google.target="_blank"
    a_google.addEventListener("click", function(){
      document.body.removeChild(div_texto);
    });

    var a_twitter = document.createElement('a');
    var img_twitter = document.createElement("img");
    img_twitter.alt="Compartir en Twitter";
    img_twitter.height="25";
    img_twitter.src="images/twitter.png"
    img_twitter.title="Compartir en Twitter";
    img_twitter.width="25";
    a_twitter.appendChild(img_twitter);
    a_twitter.title = "Compartir en Twitter";
    a_twitter.href = "https://twitter.com/?lang=es";
    a_twitter.target="_blank"
    a_twitter.addEventListener("click", function(){
      document.body.removeChild(div_texto);
    });


    div_texto.appendChild(a_google);
    div_texto.appendChild(a_facebook);
    div_texto.appendChild(a_twitter);

    
    //Metemos en el div, el texto que ha introducido
    document.body.appendChild(div_texto);
  
    });

    }

var eleCorazon = document.getElementsByClassName("corazon");
for (var i = 0; i < eleCorazon.length; i++ ){
  eleCorazon[i].addEventListener("click", function(){
    if(this.getAttribute("src")=="images/like.png"){
    this.setAttribute("src", "images/like2.png"); 
  }else{
    this.setAttribute("src", "images/like.png"); 
  }
   
  
 });
  }





var eleImagen = document.getElementsByClassName("imagen_fondo");
for (var i = 0; i < eleImagen.length; i++ ){
	eleImagen[i].addEventListener("click", function(){

	funcion(this);
	
   });
}
var eleComentar = document.getElementsByClassName("comentar");
var cont =0;
var imgDiv;
for (var i = 0; i < eleComentar.length; i++ ){
	eleComentar[i].addEventListener("click", function(){
		if(cont==0){
			imgDiv=this.parentNode.parentNode.parentNode.parentNode.children[0].children[0];
			funcion(imgDiv);
			cont=1;
		}
		else{
			imgDiv=this.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
			funcion(imgDiv);
			cont=0;
		}
   });
}

function funcion(aux){
	var eleHeader= document.getElementsByClassName("imagen_fondo");

		var section = document.getElementById("mySection");


		var imagen_apliada_comprobacion = document.getElementsByClassName("div_imagen_ampliada");

		if(!imagen_apliada_comprobacion || 0 === imagen_apliada_comprobacion.length ){    
    

			var div_imagen = document.createElement('div');
			div_imagen.style.backgroundColor="white";
			div_imagen.style.position="absolute";
			div_imagen.style.width="40%";
			div_imagen.style.height="400px";
			div_imagen.style.boxShadow="2px 2px 1px #888888";
			div_imagen.style.zIndex="100";

			var offset=aux.getBoundingClientRect().top + window.scrollY;

			div_imagen.style.left="15%";
			div_imagen.style.top= offset + "px";
    
			var imagen = document.createElement("img");
			imagen.alt="Imagen seleccionada";
			imagen.style.width="100%";
			imagen.style.height="100%";
			imagen.src= aux.getAttribute("src");
			imagen.title="Imagen seleccionada";

			div_imagen.appendChild(imagen);
      
      
			section.setAttribute('class', 'blur');
      
			var div_informacion = document.createElement('div');
			div_informacion.style.backgroundColor="#F0F0F0";
			div_informacion.style.position="absolute";
			div_informacion.style.width="40%";
			div_informacion.style.height="100px";
			div_informacion.style.boxShadow="2px 2px 1px #888888";
			div_informacion.style.zIndex="100";
			div_informacion.style.left="15%";
			div_informacion.style.top= offset + 410 +"px";

    

			padre= aux.parentNode; //Obtengo el div class="foto"
			padre=padre.parentNode; //Obtengo el div class="contenedor"
      
      
      
			var paragraphs = padre.getElementsByTagName("p");

			//Ahora tendria que ver si ha clicado en la primera foto o en la segunda
			if(aux.getAttribute("alt")=="Icono" ){ //He clicado en la primera imagen
        
				var aux_photo= paragraphs[0].innerHTML
				var aux_nombre = paragraphs[1].innerHTML
        

			}
			else{
				var aux_photo= paragraphs[2].innerHTML
				var aux_nombre = paragraphs[3].innerHTML
			}
       
    

    
			var div_arriba = document.createElement('div');
			var div_abajo = document.createElement('div');
			var div_abajo_derecha = document.createElement('div');
			var div_abajo_izquierda = document.createElement('div');
			var nombre_foto_text_node = document.createTextNode(aux_photo);
			var nombre_usuario_text_node = document.createTextNode(aux_nombre);
			var fecha_text_node = document.createTextNode("(26/11/2016)");
			var texto_tags_text_node = document.createTextNode("Tags: ");
			var tag1_text_node = document.createTextNode("#hipster");
			var tag3_text_node = document.createTextNode("#skill");
			var tag4_text_node = document.createTextNode("#victory");
			var tag5_text_node = document.createTextNode("#chunk");
			var tag6_text_node = document.createTextNode("#smite");
			var coments_text_node = document.createTextNode("23 comentarios 3 favoritos");

			var coments_text = document.createElement("p");
			var texto_tags = document.createElement("p");
			var tag1 = document.createElement("p");
    
			var tag3 = document.createElement("p");
			var tag4 = document.createElement("p");
			var tag5 = document.createElement("p");
			var tag6 = document.createElement("p");
			var nombre_foto = document.createElement("p");
			var nombre_usuario = document.createElement("p");
			var fecha = document.createElement("p");
			var imagen_corazon = document.createElement("img");
			var imagen_comentar = document.createElement("img");
			var imagen_compartir = document.createElement("img");
			var imagen_x = document.createElement("img");

			texto_tags.appendChild(texto_tags_text_node);
			tag1.appendChild(tag1_text_node);
			coments_text.appendChild(coments_text_node);
			tag3.appendChild(tag3_text_node);
			tag4.appendChild(tag4_text_node);
			tag5.appendChild(tag5_text_node);
			tag6.appendChild(tag6_text_node);
			fecha.appendChild(fecha_text_node);
			nombre_foto.appendChild(nombre_foto_text_node);
			nombre_usuario.appendChild(nombre_usuario_text_node);


			imagen_corazon.style.position="relative";
			imagen_corazon.style.float="right";
			imagen_corazon.alt="Imagen corazon";
			imagen_corazon.style.width="25px";
			imagen_corazon.style.height="25px";
			imagen_corazon.src= "images/like.png" ;
			imagen_corazon.title="Imagen corazon";
			imagen_corazon.style.marginTop="3%";
			imagen_corazon.style.marginRight="2%";
			imagen_corazon.addEventListener("click", function(){
				
				if(aux.getAttribute("src")=="images/like.png"){
					aux.setAttribute("src", "images/like2.png"); 
				}
				else{
				this.setAttribute("src", "images/like.png"); 
				}

				var eleCorazon = document.getElementsByClassName("corazon");
				for (var i = 0; i < eleCorazon.length; i++ ){
					eleCorazon[i].addEventListener("click", function(){
						if(aux.getAttribute("src")=="images/like.png"){
							aux.setAttribute("src", "images/like2.png"); 
						}
						else{
							aux.setAttribute("src", "images/like.png"); 
						}
					});
				}
			});

			imagen_compartir.style.position="relative";
			imagen_compartir.style.float="right";
			imagen_compartir.alt="Imagen compartir";
			imagen_compartir.style.width="25px";
			imagen_compartir.style.height="25px";
			imagen_compartir.src= "images/share.png" ;
			imagen_compartir.title="Imagen compartir";
			imagen_compartir.style.marginTop="3%";
			imagen_compartir.style.marginRight="2%";

			imagen_comentar.style.position="relative";
			imagen_comentar.style.float="right";
			imagen_comentar.alt="Imagen comentar";
			imagen_comentar.style.width="25px";
			imagen_comentar.style.height="25px";
			imagen_comentar.src= "images/coment.png" ;
			imagen_comentar.title="Imagen comentar";
			imagen_comentar.style.marginTop="3%";
			imagen_comentar.style.marginRight="2%";


			fecha.style.position="relative";
			fecha.style.float="right";
			fecha.style.position="relative";
			fecha.style.float="left";
			fecha.style.marginLeft="3%";
			fecha.style.fontSize="small";
			fecha.style.top="5%";

			nombre_foto.style.position="relative";
			nombre_foto.style.float="left";
			nombre_foto.style.marginLeft="3%";

			nombre_usuario.style.position="relative";
			nombre_usuario.style.float="right";
			nombre_usuario.style.marginRight="3%";
			nombre_usuario.style.color="blue";

			//texto_tags.style.position="relative";
			texto_tags.style.position="relative";
			texto_tags.style.float="left";
			texto_tags.style.fontSize="small";
			texto_tags.style.marginLeft="3%";

			tag1.style.color="blue";
			tag1.style.position="relative";
			tag1.style.float="left";
			tag1.style.fontSize="small";
			tag1.style.marginLeft="1%";

			tag3.style.color="blue";
			tag3.style.position="relative";
			tag3.style.float="left";
			tag3.style.fontSize="small";
			tag3.style.marginLeft="1%";
    

			tag4.style.color="blue";
			tag4.style.position="relative";
			tag4.style.float="left";
			tag4.style.fontSize="small";
			tag4.style.marginLeft="1%";
    

			tag5.style.color="blue";
			tag5.style.position="relative";
			tag5.style.float="left";
			tag5.style.fontSize="small";
			tag5.style.marginLeft="1%";
    

			tag6.style.color="blue";
			tag6.style.position="relative";
			tag6.style.float="left";
			tag6.style.fontSize="small";
			tag6.style.left="1%";

			coments_text.style.position="relative";
			coments_text.style.float="right";
			coments_text.style.fontSize="small";
			coments_text.style.marginRight="1%";
    

			div_arriba.style.width="100%";
			div_arriba.style.overflow="hidden";
			div_arriba.style.height="45%";

			/*div_abajo_izquierda.style.width="65%";
			div_abajo_izquierda.style.overflow="hidden";
			div_abajo_izquierda.style.height="100%";  */

			/*
			div_abajo_derecha.style.width="30%";
			div_abajo_derecha.style.overflow="hidden";
			div_abajo_derecha.style.height="90%";
			div_abajo_derecha.style.float="right";
			div_abajo_derecha.style.position="relative"; */

			div_abajo.style.width="100%";
			div_abajo.style.overflow="hidden";
			div_abajo.style.height="45%";

			div_arriba.appendChild(nombre_foto);
			div_arriba.appendChild(fecha);
    
			div_arriba.appendChild(imagen_compartir);
			div_arriba.appendChild(imagen_corazon);
			div_arriba.appendChild(imagen_comentar);
			div_arriba.appendChild(nombre_usuario);


			div_abajo.appendChild(texto_tags);
			div_abajo.appendChild(tag1);
			div_abajo.appendChild(tag3);
			div_abajo.appendChild(tag4);
			div_abajo.appendChild(tag5);
			div_abajo.appendChild(tag6);
			div_abajo.appendChild(coments_text);

			div_informacion.appendChild(div_arriba);
			div_informacion.appendChild(div_abajo);
    
    
    

			//En este div, se encontraran el text area donde se escribe y los comentarios 
			var div_comentarios = document.createElement('div');
			div_comentarios.style.backgroundColor="#F0F0F0";
			div_comentarios.style.position="absolute";
			div_comentarios.style.width="15%";
			div_comentarios.style.height="510px";
			div_comentarios.style.boxShadow="2px 2px 1px #888888";
			div_comentarios.style.zIndex="100";
			div_comentarios.style.left="56%";
			div_comentarios.style.top= offset +"px";

			imagen_x.style.position="absolute";
			imagen_x.style.width="30px";
			imagen_x.style.height="30px";
			imagen_x.style.zIndex="100";
			imagen_x.style.left="73%";
			imagen_x.style.top= offset +"px";
			imagen_x.src= "images/x.png" ;
			imagen_x.addEventListener("click", function(){
				padre = div_informacion.parentNode;
				padre.removeChild(padre.lastChild);
				padre.removeChild(padre.lastChild);
				padre.removeChild(padre.lastChild);
				padre.removeChild(padre.lastChild);
				section.removeAttribute("class");
			});


			//En este div se iran mostrando los comentarios generados
			var div_texto_comentarios = document.createElement('div');
			div_texto_comentarios.style.width="100%";
			div_texto_comentarios.style.height="70%";
			div_texto_comentarios.style.overflowY="auto";
			div_texto_comentarios.style.overflowX="hidden";
      

			var text_area = document.createElement("TEXTAREA");
			text_area.setAttribute("placeholder", "Escriba su comentario...");
			text_area.style.width="90%";
			text_area.style.height="27%";
			text_area.style.position="relative";
			text_area.style.marginBottom="10px";
			text_area.style.marginLeft="8px";
			text_area.style.border=" 1px solid rgb(160,160,160)";
			text_area.style.borderRadius="6px";  
 
    


			//Creamos el boton que ira dentro del text area
			var boton_comentar = document.createElement("BUTTON");
      

			//Creamos el texto que ira dentro del boton
			var texto_boton_comentar = document.createTextNode("Comentar");    
    

			//Anidamos dicho texto en el boton
			boton_comentar.appendChild(texto_boton_comentar);
			boton_comentar.style.bottom="12px";
			boton_comentar.style.right="8px";
			boton_comentar.style.position="absolute";
			//boton_comentar.style.zIndex="150";
			boton_comentar.style.color="white";
			boton_comentar.style.height="40px";
			boton_comentar.style.backgroundColor="blue";
			boton_comentar.style.borderRadius="6px";
			//Si se clica añadimos el comentario
			boton_comentar.addEventListener("click", function(){

				//Texto del comentario
				var valor_text_area = text_area.value;
				if(valor_text_area.length>0){ //Si se escribe algo se crea el comentario

					//Antes de todo comentario añadimos el usuario
					var texto_nombre_usuario_text_node =  document.createTextNode("UserName#1...  ");
					var texto_nombre_usuario = document.createElement("p");
					texto_nombre_usuario.appendChild(texto_nombre_usuario_text_node);
					texto_nombre_usuario.style.color="blue";
					texto_nombre_usuario.style.float="left";
					texto_nombre_usuario.style.position="relative";

					//Tambien añadimos la fecha
					var f = new Date();
					var texto_fecha_text_node =  document.createTextNode(f.getDate() + "/" + (f.getMonth() +1));
					var texto_fecha = document.createElement("p");
					texto_fecha.appendChild(texto_fecha_text_node);
					texto_fecha.style.float="right";
					texto_fecha.style.position="relative";
  
  

					//Ahora habria que crear un campo de texto y meter los datos almacenados en valor_text_area
					var texto_recortado_text_node =  document.createTextNode(valor_text_area);
					var texto_recortado = document.createElement("p");
					texto_recortado.appendChild( texto_recortado_text_node);
					/* texto_recortado.style.aling="left";
					//texto_recortado.style.marginTop="100px";
					texto_recortado.style.position="relative";
					texto_recortado.style.float="left";*/
        
        

					//Creamos un div, donde meteremos el texto
					var div_texto = document.createElement('div');
					div_texto.style.width = "180px";
					div_texto.style.height = "100px";
					div_texto.style.marginLeft = "9px";
					div_texto.style.marginTop="3%";
					//div_texto.style.overflow = "auto";
					div_texto.style.wordWrap = "break-word";
					div_texto.appendChild(texto_nombre_usuario);
					div_texto.appendChild(texto_fecha);

					div_texto.appendChild(texto_recortado);
      
					//Metemos en el div, el texto que ha introducido
					div_texto_comentarios.appendChild(div_texto);
				}

    
			});


			div_comentarios.appendChild(div_texto_comentarios);
			div_comentarios.appendChild(text_area);
			div_comentarios.appendChild(boton_comentar);

			div_comentarios.setAttribute('class', 'div_imagen_ampliada');
			div_imagen.setAttribute('class', 'div_imagen_ampliada');
			div_informacion.setAttribute('class', 'div_imagen_ampliada');
			document.body.appendChild(div_imagen);
			document.body.appendChild(div_informacion);
			document.body.appendChild(div_comentarios);
			document.body.appendChild(imagen_x);
		}
}
