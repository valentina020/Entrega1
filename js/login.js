function iniciar(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    if((usuario !=="")&& (contraseña !=="")){
        window.location.href="./index.html";
    } 
    else{
      alert("Usuario y/o Contraseña incorrecto.")
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("iniciar").addEventListener("click",
    function(event){
        iniciar();
    })
})