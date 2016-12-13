var ojos = document.getElementsByClassName("ojo");
	for (var i = 0; i < ojos.length; i++ ){
		ojos[i].addEventListener("click", function(){
			if(this.src.match("images/eye1.png")){
				this.src="images/eye2.png";
			}
			else{
				this.src="images/eye1.png";
			}
		});
	}
var papeleras = document.getElementsByClassName("papelera");
	for (var i = 0; i < papeleras.length; i++ ){
		papeleras[i].addEventListener("click", function(){
			var nodoCelda=this.parentNode.parentNode.parentNode.parentNode.parentNode;
			this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(nodoCelda)
		});
	}

var lapices=document.getElementsByClassName("lapiz");
var section = document.getElementById("mySection");
	for(var i=0; i<lapices.length; i++){
		lapices[i].addEventListener("click", function(){
			
			var imagen_apliada_comprobacion = document.getElementsByClassName("divImagen");
			if(!imagen_apliada_comprobacion || 0 === imagen_apliada_comprobacion.length ){  


			var divImagen=document.createElement("div");
			var imagenSel=this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0];
			divImagen.style.position="absolute";
			divImagen.style.width="50%";
			divImagen.style.height="400px";
			divImagen.setAttribute('class', 'divImagen')
			var offset=this.getBoundingClientRect().top + window.scrollY;
			divImagen.style.left="15%";
			divImagen.style.top=offset+ -120 +"px";

			var imagen_x = document.createElement("img");
			imagen_x.style.position="absolute";
			imagen_x.style.width="30px";
			imagen_x.style.height="30px";
			imagen_x.style.zIndex="100";
			imagen_x.style.left="66%";
			imagen_x.style.top= offset + -120 + "px";
			imagen_x.src= "images/x.png";
			imagen_x.addEventListener("click", function(){
				var elemento=imagen.parentNode.parentNode;
				elemento.removeChild(elemento.lastChild);
				elemento.removeChild(elemento.lastChild);
				section.removeAttribute("class");
			});
			document.body.appendChild(imagen_x);
	
			var imagen = document.createElement("img");
			imagen.alt="Imagen seleccionada";
			imagen.style.width="100%";
			imagen.src= imagenSel.getAttribute("src");
			imagen.title="Imagen seleccionada";
			
			divImagen.appendChild(imagen);
			document.body.appendChild(divImagen);
			section.setAttribute('class', 'blur');
			
			var divOpciones=document.createElement("div");
			divOpciones.style.backgroundColor="white";
			divOpciones.style.width="100%";
			divOpciones.style.height="15%";
			
			divImagen.appendChild(divOpciones);
			
			var iconoTijerasRef=document.createElement("a");
			iconoTijerasRef.href="#Recortar";
			divOpciones.appendChild(iconoTijerasRef);
			var iconoTijeras=document.createElement("img");
			iconoTijeras.alt="Recortar";
			iconoTijeras.style.width="15%";
			iconoTijeras.style.height="60%";
			iconoTijeras.src="images/tijeras.png";
			iconoTijeras.title="Recortar";
			iconoTijeras.style.float="left";
			iconoTijeras.style.marginLeft="4%";
			iconoTijeras.style.marginTop="10px";
			iconoTijerasRef.appendChild(iconoTijeras);
			
			var iconoGirarRef=document.createElement("a");
			iconoGirarRef.href="#Girar";
			divOpciones.appendChild(iconoGirarRef);
			var iconoGirar=document.createElement("img");
			iconoGirar.alt="Girar";
			iconoGirar.style.width="15%";
			iconoGirar.style.height="60%";
			iconoGirar.src="images/girar.png";
			iconoGirar.title="Girar";
			iconoGirar.style.float="left";
			iconoGirar.style.marginLeft="4%";
			iconoGirar.style.marginTop="10px";
			iconoGirarRef.appendChild(iconoGirar);
			
			var iconoFiltroRef=document.createElement("a");
			iconoFiltroRef.href="#Filtro";
			divOpciones.appendChild(iconoFiltroRef);
			var iconoFiltro=document.createElement("img");
			iconoFiltro.alt="Filtro";
			iconoFiltro.style.width="15%";
			iconoFiltro.style.height="60%";
			iconoFiltro.src="images/filtro.png";
			iconoFiltro.title="Filtro";
			iconoFiltro.style.float="left";
			iconoFiltro.style.marginLeft="4%";
			iconoFiltro.style.marginTop="10px";
			iconoFiltroRef.appendChild(iconoFiltro);
			
			var iconoMarcoRef=document.createElement("a");
			iconoMarcoRef.href="#Marco";
			divOpciones.appendChild(iconoMarcoRef);
			var iconoMarco=document.createElement("img");
			iconoMarco.alt="Enmarcar";
			iconoMarco.style.width="15%";
			iconoMarco.style.height="60%";
			iconoMarco.src="images/marco.png";
			iconoMarco.title="Enmarcar";
			iconoMarco.style.float="left";
			iconoMarco.style.marginLeft="4%";
			iconoMarco.style.marginTop="10px";
			iconoMarcoRef.appendChild(iconoMarco);
			
			var iconoBrilloRef=document.createElement("a");
			iconoBrilloRef.href="#Brillo";
			divOpciones.appendChild(iconoBrilloRef);
			var iconoBrillo=document.createElement("img");
			iconoBrillo.alt="Brillo";
			iconoBrillo.style.width="15%";
			iconoBrillo.style.height="60%";
			iconoBrillo.src="images/brillo.png";
			iconoBrillo.title="Brillo";
			iconoBrillo.style.float="left";
			iconoBrillo.style.marginLeft="4%";
			iconoBrillo.style.marginTop="10px";
			iconoBrilloRef.appendChild(iconoBrillo);
			
			
		
		});
	}
var listas = document.getElementById("lista").children;
for(var i=0; i<listas.length; i++){
		listas[i].firstChild.addEventListener("click", 
		function(aux){ 
		return function(){expandir(aux)};
		}(i));
	}
function expandir(cont){
			var display=listas[cont].children[1].style.display;
					if(display!="block"){
						listas[cont].children[1].style.display="block";
					}
					else{
						listas[cont].children[1].style.display="none";
				}
}
var elementos = document.getElementById("lista").getElementsByClassName("mes");
for(var i=0; i<elementos.length; i++){
	elementos[i].addEventListener("click", function(aux){return function(){
	marcar(aux)};
	}(i));
}
function marcar(cont){
	var fuente=elementos[cont].style.fontWeight;
		if(fuente!="bold"){
			for(i=0; i<elementos.length; i++){
				elementos[i].style.fontWeight="normal";
			}
			elementos[cont].style.fontWeight="bold";
		}
		else{
			elementos[cont].style.fontWeight="normal";
		}
}
