var casillas=document.getElementsByClassName("casilla");
var elemento=document.getElementById("divSel");
for(i=0; i<casillas.length; i++){
	casillas[i].addEventListener("click",function(){
		if(this.src.match("images/casilla2.png")){
			this.src="images/casilla.png";
		}
		else{
			this.src="images/casilla2.png";
		}
		for(j=0; j<casillas.length; j++){
			if(casillas[j].src.match("images/casilla2.png")){
				if(i!=j){
					elemento.style.display="block";
					break;
				}
			}
			else{
				if(j==casillas.length-1){
					elemento.style.display="none";
				}
			}
		}
	});
}
var elementos=document.getElementById("listaMensajes").getElementsByTagName("li");
for(i=0; i<elementos.length; i++){
	elementos[i].addEventListener("click",function(){
		for(j=0; j<elementos.length; j++){
				elementos[j].style.backgroundColor="rgb(190,190,190)";
		}
		for(k=0; k<elementos.length; k++){
			if(this===elementos[k]){
				break;
			}
		}
		this.style.backgroundColor="white";
	});
}
	
