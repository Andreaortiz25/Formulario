let intentos = 0;

function validarAcceso() {

    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        mensaje.style.color = "green";
        mensaje.innerText = "Bienvenido al sistema";
    } else {
        intentos++;
        mensaje.style.color = "red";
    

        if (intentos < 3) {
            mensaje.innerText = "Datos incorrectos. Intento " + intentos + " de 3";
        } else {
            mensaje.innerText = "Usuario bloqueado. Ha superado los intentos";
            document.querySelector("button").disabled = true;
        }
    }
}
