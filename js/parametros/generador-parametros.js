/* ==================================================
   GENERADOR DE PARAMETROS
================================================== */

function cargarParametrosServicio(servicio) {

    const contenedor =
        document.getElementById(
            "parametrosServicio"
        );

    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    if (!servicio) {
        return;
    }


    const configuracion =
        parametrosServicios[servicio];


    if (!configuracion) {
        console.warn(
            "No existe configuración para:",
            servicio
        );

        return;
    }


    const titulo =
        document.createElement("h2");

    titulo.textContent =
        "Información técnica";


    contenedor.appendChild(
        titulo
    );


    const grid =
        document.createElement("div");

    grid.className =
        "parametros-grid";


    configuracion.campos.forEach(
        campo => {

            const grupo =
                document.createElement(
                    "div"
                );

            grupo.className =
                "form-group";


            const label =
                document.createElement(
                    "label"
                );

            label.textContent =
                campo.etiqueta;

            label.htmlFor =
                campo.nombre;


            grupo.appendChild(label);


            const elemento =
                crearCampoParametro(
                    campo
                );


            grupo.appendChild(
                elemento
            );


            grid.appendChild(
                grupo
            );

        }
    );


    contenedor.appendChild(
        grid
    );

}
function crearCampoParametro(campo) {

    let elemento;


    if (campo.tipo === "select") {

        elemento =
            document.createElement(
                "select"
            );

        elemento.name =
            campo.nombre;

        elemento.id =
            campo.nombre;


        const inicial =
            document.createElement(
                "option"
            );

        inicial.value = "";

        inicial.textContent =
            "Seleccionar";


        elemento.appendChild(
            inicial
        );


        campo.opciones.forEach(
            opcion => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    opcion;

                option.textContent =
                    opcion;


                elemento.appendChild(
                    option
                );

            }
        );

    }

    else if (
        campo.tipo === "textarea"
    ) {

        elemento =
            document.createElement(
                "textarea"
            );

        elemento.name =
            campo.nombre;

        elemento.id =
            campo.nombre;

        elemento.placeholder =
            campo.placeholder || "";

    }

    else {

        elemento =
            document.createElement(
                "input"
            );

        elemento.type =
            campo.tipo;

        elemento.name =
            campo.nombre;

        elemento.id =
            campo.nombre;

        elemento.placeholder =
            campo.placeholder || "";

    }


    return elemento;

}