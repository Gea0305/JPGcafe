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


//Realizamos operacion de comprobacion de usuario, cuando se pulsa el boton entrar.
var eleForm = document.getElementById("form");
eleForm.addEventListener("submit", function(){
    var username = document.getElementById("nom1");
  var userpass = document.getElementById("pas");
  var juntar= username + "=" + userpass;//juntamos para comparar
  var buscacookie = document.cookie;//buscamos al usuario en las cookies
    var encuentracookie = buscacookie.indexOf(" " + username + "=") +1;
  if (encuentracookie == 0)//si no lo encuentra, tal vez sea el primer usuario
  {
  encuentracookie = buscacookie.indexOf(username + "=");
  } if(encuentracookie == -1){//si no lo encuentra, solo puede ser que el usuario no existe
  alert ("usuario no registrado, por favor, haga clik en registrarse para añadir usuario");
  return false;
  }
   var fin = buscacookie.indexOf(";", encuentracookie);//buscamos el fin de la cookie
   if (fin == -1){//si no encuentra el ; es que es el ultimo
   fin= buscacookie.length;
   }
  var juntar2 = unescape(buscacookie.substring(encuentracookie,fin));//tomamos el substring de usuario=contraseña
  if (juntar2 == juntar){//comparamos para ver si la contraseña es correcta. Si lo es, el usuario entra
  alert ("bienvenido " + username);
  //cambiar a pagina de perfil
  return true;
  }//si no es correcta la contraseña, se muestra el mensaje
  alert ("contraseña invalida");
  return false;
 }); 


function emailcorrecto(){
var emailID = document.getElementById("em");
var emailconfID = document.getElementById("confem");
 if (emailID.value == emailconfID.value){
     return true;
}
else{
alert("La confirmacion de email no coincide con el email");
    return false; 
     }
}
//funcion que guarda una cookie
function setCookie() {
    var name = document.getElementById("nom1");//selecciona el nombre
  var pass = document.getElementById("pas");//y la comtraseña
    document.cookie = name.value + "=" + pass.value  ; //lo junta y lo guarda en una cookie
}
var eleForm = document.getElementById("form");
eleForm.addEventListener("submit", function(){
  if (emailcorrecto()){
  setCookie();//se guarda la cookie
    //ir a la pagina de entrada para que se vea lo chulo que es la cookie
  return true
  } else{
  return false;
  }
});  




