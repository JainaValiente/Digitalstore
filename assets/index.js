var dateArray = [];

document.getElementById("send").addEventListener("click", function (event) {
  event.preventDefault();

  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("message").value;

  var cotizacion = {
    nombre: nombre,
    email: email,
    mensaje: mensaje,
  };

  console.log(cotizacion);
});

document.getElementById("date").addEventListener("click", function (e) {
  var newDate = (document.getElementById("demo").value = Date());

  this.classList.toggle("btn-info");

  dateArray.push(newDate);

  console.log(dateArray);

  for (var i = 0; i < dateArray.length; i++) {
    if(dateArray.length <= 5){
      document.getElementById("demo").innerHTML = dateArray.join("<br>");
    }
  }
});

document.getElementById("suscribe").addEventListener("click", function(e){
  e.preventDefault();
  
  var sucriber = document.getElementById("suscriber").value;
  var message = document.getElementById("messageSuccess");

  if(sucriber != ""){
    message.classList.add("badge");
    message.classList.add("badge-success");
    message.innerHTML = "Se ha suscripto con el email: " + sucriber;
  }
});