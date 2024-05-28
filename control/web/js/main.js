//alert("Hola mundo");
let adelante =document.getElementById("adelante");
let atras =document.getElementById("atras");
let izquierda =document.getElementById("izquierda");
let derecha =document.getElementById("derecha");
let detener =document.getElementById("detener");

function callApi(estatus) {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "https://3.135.185.227/iot-car-control/back-end/apis/setRegistro.php?val_estatus=" + estatus)
      
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);
      mensaje.InnerHTML = "Respuesta: " + response.data;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

adelante.addEventListener("click", function () {
    callApi('W');
});

atras.addEventListener("click", function () {
  callApi('S');
});

izquierda.addEventListener("click", function () {
  callApi('A');
});

derecha.addEventListener("click", function () {
  callApi('D');
});

detener.addEventListener("click", function () {
  callApi('X');
});
