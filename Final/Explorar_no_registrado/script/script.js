 



 var eleCompartir = document.getElementsByClassName("compartir");

    for (var i = 0; i < eleCompartir.length; i++ ){
 
      eleCompartir[i].addEventListener("click", function(){

      alert("Se ha compartido la imagen");
   
  
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

