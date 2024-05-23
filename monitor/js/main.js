let respuesta = document.getElementById("respuesta");
let respuestaServidor;

function callApiRequest(estatus) {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get("https://18.220.71.26/iot-car-control/back-end/apis/getRegistro.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      respuestaServidor =
        respuesta.data == "W"
          ? "Adelante": 
          response.data == "S"
          ? "Retroceder":
          response.data == "A"
          ? "Izquierda":
          response.data == "D"
          ? "Derecha": 
          response.data == "X"
          ? "Detenerse": "";

      respuesta.innerHTML =
        "<strong> Respuesta: " + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre será ejecutado
    });
}

setInterval(callApiRequest, 2000);
