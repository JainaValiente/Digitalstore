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

function buy() {

  sessionStorage.clear();

  var name = document.getElementById("Modalname").value;
  var phone = document.getElementById("Modalphone").value;
  var address = document.getElementById("Modaladdress").value;
  var email = document.getElementById("Modalemail").value;

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

document.getElementById("date").addEventListener("click", function (e) {
  var newDate = (document.getElementById("demo").value = Date());

  this.classList.toggle("btn-info");

  dateArray.push(newDate);

  console.log(dateArray);

  for (var i = 0; i < dateArray.length; i++) {
    if (dateArray.length <= 5) {
      document.getElementById("demo").innerHTML = dateArray.join("<br>");
    }
  }
});

document.getElementById("suscribe").addEventListener("click", function (e) {
  e.preventDefault();

  var sucriber = document.getElementById("suscriber").value;
  var message = document.getElementById("messageSuccess");

  if (sucriber != "") {
    message.classList.add("badge");
    message.classList.add("badge-success");
    message.innerHTML = "Se ha suscripto con el email: " + sucriber;
  }
});
