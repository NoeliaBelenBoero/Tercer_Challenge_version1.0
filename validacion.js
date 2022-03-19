function validarDatos() {
    window.event.preventDefault();
    const nombre = document.querySelector("#nombreapellido.input-padron").value;
    const email = document.querySelector("#correoelectronico.input-padron").value;
    const motivo = document.querySelector("#motivo.input-padron").value;
    if (nombre == "") {
        alert("El campo 'Nombre y Apellido' es obligatorio");
        document.querySelector("#nombreapellido").focus();
    } else if (email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("El campo 'Correo Electrónico' es obligatorio y debe contener '@' y '.'");
        document.querySelector("#correoelectronico").focus();
    } else if (motivo == "") {
        alert("El campo 'Motivo' es obligatorio");
        document.querySelector("#motivo").focus();
    }

}
const btn = document.querySelector(".enviar");
btn.addEventListener("click", validarDatos);