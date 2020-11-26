//se inicia la funcion una vez que el documento esta listo
$( document ).ready(function() 
{
   console.log( "Hola! A partir de ahora vamos a utilizar JQuery" );
});

//funcion que obtiene el keycode de enter
$(document).on('keypress',function(e) {
  if(e.which == 13) {
    var accept = prompt("Seguro desea enviar estos datos?");
    if(accept == "Si" || accept == "si" || accept == "SI" || accept == "sI"){
      send();
    } else {
      return false;
    }
  }
});

//funciones que verifican en color rojo si no tiene texto y verde en caso contrario
$("#name").hover(function(){
  if($(this).val() != ''){
    $(this).css("background-color", "green");
    $(this).css("color", "black");
  } else {
    $(this).css("background-color", "red");
  }
}, function(){
  $(this).css("background-color", "transparent");
})

$("#email").hover(function(){
  if($(this).val() != ''){
    $(this).css("background-color", "green");
    $(this).css("color", "black");
  } else {
    $(this).css("background-color", "red");
  }
}, function(){
  $(this).css("background-color", "transparent");
})

$("#message").hover(function(){
  if($(this).val() != ''){
    $(this).css("background-color", "green");
    $(this).css("color", "black");
  } else {
    $(this).css("background-color", "red");
  }
}, function(){
  $(this).css("background-color", "transparent");
})
  


//creacion de variable array
var dateArray = [];

//Al presionar en el boton submit del formulario de contacto se genera un objeto JSON con los datos ingresados en los campos
$("#send").click(function (event) {
  event.preventDefault();
  send();
});

function send(){
  var nombre = $("#name").val();
  var email = $("#email").val();
  var mensaje = $("#message").val();

  var cotizacion = {
    nombre: nombre,
    email: email,
    mensaje: mensaje,
  };

  console.log(cotizacion);
};

//funcion buy con vista modal
function buy() {

  sessionStorage.clear();

  var name = $("#Modalname").val();
  var phone = $("#Modalphone").val();
  var address = $("#Modaladdress").val();
  var email = $("#Modalemail").val();

  sessionStorage.Name = name;
  sessionStorage.Phone = phone;
  sessionStorage.Address = address;
  sessionStorage.Email = email;

  var cardTitle = document.getElementById("cardName").textContent;
  var cardPrice = document.getElementById("cardPrice").textContent;

  alert(
    "You are buying: " +
      cardTitle +
      ", the price is: " +
      cardPrice +
      ".\n\n The name of buyer is: " +
      name +
      ".\n Phone: " +
      phone +
      ".\n Address: " +
      address +
      ".\n Email: " +
      email
  );

  var newBuy = {
    name: sessionStorage.Name,
    phone: sessionStorage.Phone,
    address: sessionStorage.Address,
    email: sessionStorage.Email,
    items: [
      {
        title: cardTitle,
        price: cardPrice,
      },
    ],
  };

  console.log(newBuy);
}

//al clickear en el boton se muestra la fecha y hora del click (se acumula 5 veces)
$("#date").click(function (e) {
  var demo = $("#demo").val();
  var newDate = (demo = Date());

  this.classList.toggle("btn-info");

  dateArray.push(newDate);

  console.log(dateArray);

  for (var i = 0; i < dateArray.length; i++) {
    if (dateArray.length <= 5) {
      document.getElementById("demo").innerHTML = dateArray.join("<br>");
    }
  }
});

$("#suscribe").click(function (e) {
  e.preventDefault();

  var sucriber = $("#suscriber").val();
  var message = $("#messageSuccess");

  if (sucriber != "") {
    message.addClass("badge");
    message.addClass("badge-success");
    message.text("Se ha suscripto con el email: " + sucriber);
  }
});

$("#mWow").click(function (e){
  e.preventDefault();

  $("html, body").animate({
    scrollTop: $('#wow').offset().top 
}, 2000);
});

$("#mGallery").click(function (e){
  e.preventDefault();

  $("html, body").animate({
    scrollTop: $('#gallery').offset().top 
}, 2000);
});

$("#mStore").click(function (e){
  e.preventDefault();

  $("html, body").animate({
    scrollTop: $('#store').offset().top 
}, 2000);
});

function fee(){
  $.getJSON("cuotas.JSON", function(data){
    $.each(data, function(index, value){
      alert(index + ": " + value);
    })
  });
};