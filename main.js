var nombre = document.getElementById('nombre');
var mensaje = document.getElementById("mensaje");
var email = document.getElementById("email");
var form = document.getElementById("form");



form.addEventListener('submit', submitForm);

function submitForm (e) {
  e.preventDefault();

  console.log("123");
}
