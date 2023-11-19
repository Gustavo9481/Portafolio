// -------------------------------------------------------- GUScode | Portafolio

$(document).ready(function() {

  // Menú Panel Lateral
  var link = document.querySelectorAll(".panel-menu")

  function cambio(){

    link.forEach(function(link) {
      link.classList.remove("visitado");
    });

    this.classList.add("visitado")
  }

  link.forEach(function(link) {
    link.addEventListener("click", cambio, false);
  });


});