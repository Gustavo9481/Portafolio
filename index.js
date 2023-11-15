// -------------------------------------------------------- GUScode | Portafolio

$(document).ready(function() {

  // Panel Lateral
  var link = document.querySelectorAll(".menu")

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