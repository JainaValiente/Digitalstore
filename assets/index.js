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

  let contado = 0;
  let cuotas3 = 0;
  let cuotas6 = 0;
  let cuotas12 = 0;

  $.getJSON("cuotas.JSON", function(data){
    $.each(data, function(index, value){
      if(index == "Contado"){
        contado = Number(value.replace('%','') / 100);
      }
      if(index == "3 Cuotas"){
        cuotas3 = Number(value.replace('%','') / 100);;
      }
      if(index == "6 Cuotas"){
        cuotas6 = Number(value.replace('%','') / 100);;
      }
      if(index == "12 Cuotas"){
        cuotas12 = Number(value.replace('%','') / 100);;
      }
    })

  

    var feeAccept = prompt("Como desea pagar? Contado, 3 Cuotas, 6 Cuotas o 12 Cuotas?");

    if(feeAccept == 'contado'){
      buyAccepted(contado);
    } else if(feeAccept == '3 cuotas'){
      buyAccepted(cuotas3);
    } else if(feeAccept == '6 cuotas'){
      buyAccepted(cuotas6);
    } else if(feeAccept == '12 cuotas'){
      buyAccepted(cuotas12);
    } else {
      alert('No eligio una forma de pago');
    }
  })
}

function buyAccepted(fee){
  sessionStorage.clear();

  var name = $("#Modalname").val();
  var phone = $("#Modalphone").val();
  var address = $("#Modaladdress").val();
  var email = $("#Modalemail").val();

  console.log(fee);

  sessionStorage.Name = name;
  sessionStorage.Phone = phone;
  sessionStorage.Address = address;
  sessionStorage.Email = email;

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItems');
  let item = [];
  let cardTitle = '';
  let cardPrice = 0;

  shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemTitleElement = shoppingCartItem.querySelector('.card-title');
    const shoppingCartItemTitle = shoppingCartItemTitleElement.textContent;

    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingcartitemPrice');
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));

    cardPrice = shoppingCartItemPrice;
    cardTitle = shoppingCartItemTitle;
    item.push('Title', cardTitle, 'Price', cardPrice);
  });

  let total = Number(document.querySelector('.shoppingCartTotal').textContent.replace('$', ''));
  total = Number(total + (total*fee));

  alert(
    "The name of buyer is: " +
      name +
      ".\n Phone: " +
      phone +
      ".\n Address: " +
      address +
      ".\n Email: " +
      email +
      ".\n Total of Buy: $" + 
      total
  );

  var newBuy = {
    name: sessionStorage.Name,
    phone: sessionStorage.Phone,
    address: sessionStorage.Address,
    email: sessionStorage.Email,
    items: [
      {
        item
      },
    ],
    total: total
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


/* Todo sobre el carrito */

//Agregar funcion al evento click
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartCardsContainer = document.querySelector('.modal-body');


//Agregar valores obtenidos del click a las variables
function addToCartClicked(e){
  const button = e.target;
  const card = button.closest('.card');
  
  const cardTitle = card.querySelector('.title').textContent;
  const cardPrice = card.querySelector('.price').textContent;
  const cardImage = card.querySelector('.card-img-top').src;

addItemToShoppingCart(cardTitle, cardPrice, cardImage);

}

//Agregando el item al carrito
function addItemToShoppingCart(cardTitle, cardPrice, cardImage){
  const shoppingCartRow = document.createElement('div');
  
  const shoppingCartContent = `
    <div class="card mb-3 shoppingCartItems" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src=${cardImage} class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${cardTitle}</h5>
            <p class="card-text shoppingcartitemPrice">${cardPrice}</p>
          </div>
        </div>
      </div>
    </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartCardsContainer.append(shoppingCartRow);

    updateShoopingCartTotal();
}

//Actualizando el precio total
function updateShoopingCartTotal(){
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItems');

  shoppingCartItems.forEach(shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingcartitemPrice');
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));

    total = total + shoppingCartItemPrice;
  });
  shoppingCartTotal.innerHTML = `$${total}`;
}