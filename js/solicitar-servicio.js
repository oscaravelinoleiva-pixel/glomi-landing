/* ==================================================
   SOLICITUD DE SERVICIO
================================================== */

window.inicializarSolicitud = inicializarSolicitud;


function inicializarSolicitud() {

    const servicioSelect =
        document.getElementById("servicio");

    if (!servicioSelect) {
        return;
    }

    if (servicioSelect.dataset.inicializado === "true") {
        return;
    }

    servicioSelect.dataset.inicializado = "true";

    const formulario = document.getElementById("solicitudServicioForm");


    /*
     * Cambio manual del servicio
     */

    servicioSelect.addEventListener(
        "change",
        manejarCambioServicio
    );


    /*
     * Servicio enviado desde
     * una página de detalle
     */

    cargarSolicitudDesdeSession();


    /*
     * Si existe un servicio seleccionado,
     * cargar sus parámetros
     */

    if (servicioSelect.value) {

        cargarParametrosServicio(
            servicioSelect.value
        );

    }

    if (formulario) {
        formulario.addEventListener("submit", manejarEnvioSolicitud);
    }

}
function manejarCambioServicio(event) {

    const servicio =
        event.target.value;

    cargarParametrosServicio(
        servicio
    );

}
function cargarSolicitudDesdeSession() {

    const datosGuardados =
        sessionStorage.getItem(
            "solicitudServicio"
        );

    if (!datosGuardados) {
        return;
    }


    try {

        const datos =
            JSON.parse(datosGuardados);

        const servicioSelect =
            document.getElementById("servicio");


        if (
            servicioSelect &&
            datos.servicio
        ) {

            servicioSelect.value = datos.servicio;


            cargarParametrosServicio(
                servicioSelect.value
            );

        }


        sessionStorage.removeItem(
            "solicitudServicio"
        );


    } catch (error) {

        console.error(
            "Error al cargar la solicitud:",
            error
        );

        sessionStorage.removeItem(
            "solicitudServicio"
        );

    }

}

function manejarEnvioSolicitud(event) {
    event.preventDefault();

    const formulario = event.currentTarget;
    const mensaje = document.getElementById("formMessage");

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    if (mensaje) {
        mensaje.textContent = "La recepción de solicitudes se habilitará al configurar el servicio de correo del sitio.";
        mensaje.className = "form-message form-message--warning";
    }
}
