//cambiar el tema
function cambioFondo(color) {
  console.log(color.value);

  var fondo = document.getElementById("theme");
  fondo.style.backgroundColor = color.value;
}

//ocultar mostrar los elementos
const mostrarOcultar = (id) => {
  let elemento = document.getElementById(id);
  if(!elemento) {
    return true;
  }
  if(elemento.style.display == "none") {
    elemento.style.display = "block";
  }else{
    elemento.style.display = "none";
  };
  return true;
};





