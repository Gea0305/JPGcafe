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
			imgDiv=this.parentNode.parentNode.parentNode.parentNode.children[0].children[0];
			funcion(imgDiv);
			i++;
   });
}

for (var i = 1; i < eleComentar.length; i++ ){
	eleComentar[i].addEventListener("click", function(){
			imgDiv=this.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
			funcion(imgDiv);
			i++;
   });
}

function funcion(aux){
	var eleHeader= document.getElementsByClassName("imagen_fondo");

		var section = document.getElementById("mySection");


		var imagen_apliada_comprobacion = document.getElementsByClassName("div_imagen_ampliada");

		if(!imagen_apliada_comprobacion || 0 === imagen_apliada_comprobacion.length ){    
			var offset=aux.getBoundingClientRect().top + window.scrollY;
			
			var div_todo=document.createElement("div");
			div_todo.style.position= "absolute";
			div_todo.style.top= offset+"px";
			div_todo.style.width="70%";
			div_todo.style.height="510px";
			div_todo.style.margin="15%";
			
			
			document.body.appendChild(div_todo);
			
			
			var div_todo1=document.createElement("div");
			div_todo1.style.width="70%";
			div_todo1.style.height="100%";
			div_todo1.style.float="left";
			
			
			div_todo.appendChild(div_todo1);
			
			
			var div_imagen = document.createElement('div');
			div_imagen.style.backgroundColor="white";
			div_imagen.style.width="100%";
			div_imagen.style.height="80%";
			

			div_todo1.appendChild(div_imagen);
			

			var imagen = document.createElement("img");
			imagen.alt="Imagen seleccionada";
			imagen.style.width="100%";
			imagen.style.height="100%";
			imagen.src= aux.getAttribute("src");
			imagen.title="Imagen seleccionada";

			div_imagen.appendChild(imagen);
   
      
			section.setAttribute('class', 'blur');
      
			var div_informacion = document.createElement('div');
			div_informacion.style.width="100%";
			div_informacion.style.height="20%";
			
			div_todo1.appendChild(div_informacion);

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
       
    

			/*Div arriba*/
			var div_arriba = document.createElement('div');
			div_arriba.style.width="100%";
			div_arriba.style.height="46%";
			div_arriba.style.overflow="hidden";
			div_arriba.style.backgroundColor="white";
			
			div_informacion.appendChild(div_arriba);
			

			var nombre_foto_text_node = document.createTextNode(aux_photo);
			var nombre_foto = document.createElement("p");
			nombre_foto.style.float="left";
			nombre_foto.style.marginLeft="3%";
			
			div_arriba.appendChild(nombre_foto);
			nombre_foto.appendChild(nombre_foto_text_node);
			
			var nombre_usuario_text_node = document.createTextNode(aux_nombre);
			var nombre_usuario = document.createElement("p");
			nombre_usuario.style.float="left";
			nombre_usuario.style.color="blue";
			nombre_usuario.style.marginLeft="3%";
			
			
			div_arriba.appendChild(nombre_usuario);
			nombre_usuario.appendChild(nombre_usuario_text_node);
			
			
			var fecha_text_node = document.createTextNode("(26/11/2016)");
			var fecha = document.createElement("p");
			fecha.style.float="left";
			fecha.style.fontSize="small";
			fecha.style.marginLeft="3%";
			
			div_arriba.appendChild(fecha);
			fecha.appendChild(fecha_text_node);
			
			
			var imagen_corazon = document.createElement("img");
			imagen_corazon.style.float="right";
			imagen_corazon.alt="Imagen corazon";
			imagen_corazon.style.width="25px";
			imagen_corazon.style.height="25px";
			imagen_corazon.src= "images/like.png" ;
			imagen_corazon.title="Imagen corazon";
			imagen_corazon.style.marginRight="1%";
			imagen_corazon.style.marginTop="2%";
			imagen_corazon.style.marginBottom="2%";
			div_arriba.appendChild(imagen_corazon);
			

			
			var imagen_comentar = document.createElement("img");
			imagen_comentar.style.float="right";
			imagen_comentar.alt="Imagen comentar";
			imagen_comentar.style.width="25px";
			imagen_comentar.style.height="25px";
			imagen_comentar.src= "images/coment.png" ;
			imagen_comentar.title="Imagen comentar";
			imagen_comentar.style.marginRight="1%";
			imagen_comentar.style.marginTop="2%";
			imagen_comentar.style.marginBottom="2%";
			div_arriba.appendChild(imagen_comentar);
			
			
			
			var imagen_compartir = document.createElement("img");
			imagen_compartir.style.float="right";
			imagen_compartir.alt="Imagen compartir";
			imagen_compartir.style.width="25px";
			imagen_compartir.style.height="25px";
			imagen_compartir.src= "images/share.png" ;
			imagen_compartir.title="Imagen compartir";
			imagen_compartir.style.marginRight="1%";
			imagen_compartir.style.marginTop="2%";
			imagen_compartir.style.marginBottom="2%";
			div_arriba.appendChild(imagen_compartir);
			
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

			
			/*Div abajo*/
			var div_abajo = document.createElement('div');
			div_abajo.style.width="100%";
			div_abajo.style.height="46%";
			div_abajo.style.overflow="hidden";
			div_abajo.style.backgroundColor="white";
			div_abajo.style.marginTop="8px";
			
			div_informacion.appendChild(div_abajo);
			
			var texto_tags_text_node = document.createTextNode("Tags: ");
			var texto_tags = document.createElement("p");
			texto_tags.style.float="left";
			texto_tags.style.fontSize="0.7em";
			texto_tags.style.marginLeft="2%";

			div_abajo.appendChild(texto_tags);
			texto_tags.appendChild(texto_tags_text_node);
			
			
			var tag1_text_node = document.createTextNode("#hipster");
			var tag1 = document.createElement("p");
			tag1.style.color="blue";
			tag1.style.float="left";
			tag1.style.fontSize="0.7em";
			tag1.style.marginLeft="2%";

			
			div_abajo.appendChild(tag1);
			tag1.appendChild(tag1_text_node);
			
			
			var tag3_text_node = document.createTextNode("#skill");
			var tag3 = document.createElement("p");
			tag3.style.color="blue";
			tag3.style.float="left";
			tag3.style.fontSize="0.7em";
			tag3.style.marginLeft="2%";
			
			div_abajo.appendChild(tag3);
			tag3.appendChild(tag3_text_node);
			
			
			var tag4_text_node = document.createTextNode("#victory");
			var tag4 = document.createElement("p");
			tag4.style.color="blue";
			tag4.style.float="left";
			tag4.style.fontSize="0.7em";
			tag4.style.marginLeft="2%";
			
			div_abajo.appendChild(tag4);
			tag4.appendChild(tag4_text_node);
			
			
			var tag5_text_node = document.createTextNode("#chunk");
			var tag5 = document.createElement("p");
			tag5.style.color="blue";
			tag5.style.float="left";
			tag5.style.fontSize="0.7em";
			tag5.style.marginLeft="2%";
			
			div_abajo.appendChild(tag5);
			tag5.appendChild(tag5_text_node);
			
			
			var tag6_text_node = document.createTextNode("#smite");
			var tag6 = document.createElement("p");
			tag6.style.color="blue";
			tag6.style.float="left";
			tag6.style.fontSize="0.7em";
			tag6.style.marginLeft="2%";
			
			div_abajo.appendChild(tag6);
			tag6.appendChild(tag6_text_node);
			
			
			var coments_text_node = document.createTextNode("23 comentarios 3 favoritos");
			var coments_text = document.createElement("p");
			coments_text.style.float="right";
			coments_text.style.fontSize="0.7em";
			coments_text.style.marginRight="2%";
			
			div_abajo.appendChild(coments_text);
			coments_text.appendChild(coments_text_node);

			
		
			/*Div comentarios*/
			var div_comentarios = document.createElement('div');
			div_comentarios.style.backgroundColor="#F0F0F0";
			div_comentarios.style.width="25%";
			div_comentarios.style.height="100%";
			div_comentarios.style.boxShadow="2px 2px 1px #888888";
			div_comentarios.style.float="left";
	
			div_todo.appendChild(div_comentarios);

			
			var imagen_x = document.createElement("img");
			imagen_x.style.width="5%";
			imagen_x.style.zIndex="100";
			imagen_x.src= "images/x.png" ;
			imagen_x.addEventListener("click", function(){
				padre = div_todo.parentNode;
				padre.removeChild(div_todo);
				section.removeAttribute("class");
			});

			div_todo.appendChild(imagen_x);
			
			//En este div se iran mostrando los comentarios generados
			var div_texto_comentarios = document.createElement('div');
			div_texto_comentarios.style.width="100%";
			div_texto_comentarios.style.height="70%";
			div_texto_comentarios.style.overflowY="auto";
			div_texto_comentarios.style.overflowX="hidden";
			
			div_comentarios.appendChild(div_texto_comentarios);

			
			
			
			var text_area = document.createElement("TEXTAREA");
			text_area.setAttribute("placeholder", "Escriba su comentario...");
			text_area.style.width="90%";
			text_area.style.height="27%";
			text_area.style.marginBottom="10px";
			text_area.style.marginLeft="8px";
			text_area.style.border=" 1px solid rgb(160,160,160)";
			text_area.style.borderRadius="6px";  
 
			div_comentarios.appendChild(text_area);
    


			
			var boton_comentar = document.createElement("BUTTON");
			boton_comentar.style.color="white";
			boton_comentar.style.height="40px";
			boton_comentar.style.backgroundColor="blue";
			boton_comentar.style.position="relative";
			boton_comentar.style.top="-10%";
			boton_comentar.style.left="57%";
			boton_comentar.style.borderRadius="6px";
			div_comentarios.appendChild(boton_comentar);
			
			
			var texto_boton_comentar = document.createTextNode("Comentar");    
			boton_comentar.appendChild(texto_boton_comentar);

			
			
			
			
			boton_comentar.addEventListener("click", function(){

				//Texto del comentario
				var valor_text_area = text_area.value;
				if(valor_text_area.length>0){ //Si se escribe algo se crea el comentario

					var div_texto = document.createElement('div');
					div_texto.style.width = "180px";
					div_texto.style.height = "100px";
					div_texto.style.marginLeft = "9px";
					div_texto.style.marginTop="3%";
					div_texto.style.wordWrap = "break-word";
					
					div_texto_comentarios.appendChild(div_texto);
				
					
					var texto_recortado_text_node =  document.createTextNode(valor_text_area);
					var texto_recortado = document.createElement("p");
					
					texto_recortado.appendChild( texto_recortado_text_node);
					div_texto.appendChild(texto_recortado);
		
					var texto_nombre_usuario_text_node =  document.createTextNode("UserName#1...  ");
					var texto_nombre_usuario = document.createElement("p");
					texto_nombre_usuario.style.color="blue";
					texto_nombre_usuario.style.float="left";
					
					texto_nombre_usuario.appendChild(texto_nombre_usuario_text_node);
					div_texto.appendChild(texto_nombre_usuario);
					
					
					var f = new Date();
					var texto_fecha_text_node =  document.createTextNode(f.getDate() + "/" + (f.getMonth() +1));
					var texto_fecha = document.createElement("p");
					texto_fecha.style.float="right";
					
					div_texto.appendChild(texto_fecha);
					texto_fecha.appendChild(texto_fecha_text_node);
				}
			});

			
			div_comentarios.setAttribute('class', 'div_imagen_ampliada');
			div_imagen.setAttribute('class', 'div_imagen_ampliada');
			div_informacion.setAttribute('class', 'div_imagen_ampliada');
			
			
		}
		
}
