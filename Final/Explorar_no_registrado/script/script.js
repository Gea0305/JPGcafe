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






