
document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.querySelector(".main-nav");

    const year =
        document.getElementById("year");


    /*
    ==================================================
    AÑO AUTOMÁTICO
    ==================================================
    */

    year.textContent = new Date().getFullYear();


    /*
    ==================================================
    MENÚ MÓVIL
    ==================================================
    */

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });


    /*
    ==================================================
    CARGAR PÁGINA
    ==================================================
    */

    async function cargarPagina(pagina, actualizarURL = true) {

        try {

            app.classList.add("loading");


            const respuesta =
                await fetch(`paginas/${pagina}.html`);


            if (!respuesta.ok) {

                throw new Error(
                    `No se encontró la página: ${pagina}`
                );

            }


            const contenido =
                await respuesta.text();


            app.innerHTML = contenido;


            /*
            ------------------------------------------
            Actualizar URL
            ------------------------------------------
            */

            if (actualizarURL) {

                history.pushState(
                    {
                        pagina: pagina
                    },
                    "",
                    `#${pagina}`
                );

            }


            /*
            ------------------------------------------
            Marcar menú activo
            ------------------------------------------
            */

            document
                .querySelectorAll("[data-page]")
                .forEach(enlace => {

                    enlace.classList.remove("active");

                });


            document
                .querySelectorAll(
                    `[data-page="${pagina}"]`
                )
                .forEach(enlace => {

                    enlace.classList.add("active");

                });


            /*
            ------------------------------------------
            Cerrar menú móvil
            ------------------------------------------
            */

            mainNav.classList.remove("active");


            /*
            ------------------------------------------
            Volver arriba
            ------------------------------------------
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /*
            ------------------------------------------
            Ejecutar scripts específicos
            ------------------------------------------
            */

            if (pagina === "servicios") {

                inicializarServicios();

            }


            app.classList.remove("loading");


        } catch (error) {

            console.error(error);


            app.innerHTML = `

                <section class="page-section">

                    <div class="container">

                        <div class="error-page">

                            <h1>
                                Página no encontrada
                            </h1>

                            <p>
                                No fue posible cargar
                                el contenido solicitado.
                            </p>

                            <button
                                class="btn btn-primary"
                                data-page="inicio">

                                Volver al inicio

                            </button>

                        </div>

                    </div>

                </section>

            `;


            app.classList.remove("loading");

        }

    }


    /*
    ==================================================
    NAVEGACIÓN
    ==================================================
    */

    document.addEventListener("click", event => {

        const enlace =
            event.target.closest("[data-page]");


        if (!enlace) {
            return;
        }


        event.preventDefault();


        const pagina =
            enlace.dataset.page;


        cargarPagina(pagina);

    });


    /*
    ==================================================
    BOTONES ATRÁS / ADELANTE DEL NAVEGADOR
    ==================================================
    */

    window.addEventListener("popstate", () => {

        const pagina =
            location.hash.replace("#", "") || "inicio";


        cargarPagina(pagina, false);

    });


    /*
    ==================================================
    FILTRO DE SERVICIOS
    ==================================================
    */

    function inicializarServicios() {

        const botones =
            document.querySelectorAll(
                "[data-filter]"
            );


        const servicios =
            document.querySelectorAll(
                "[data-category]"
            );


        botones.forEach(boton => {

            boton.addEventListener("click", () => {

                const filtro =
                    boton.dataset.filter;


                botones.forEach(b => {

                    b.classList.remove("active");

                });


                boton.classList.add("active");


                servicios.forEach(servicio => {

                    const categoria =
                        servicio.dataset.category;


                    if (
                        filtro === "todos" ||
                        categoria === filtro
                    ) {

                        servicio.style.display =
                            "block";

                    } else {

                        servicio.style.display =
                            "none";

                    }

                });

            });

        });

    }


    /*
    ==================================================
    CARGA INICIAL
    ==================================================
    */

    const paginaInicial =
        location.hash.replace("#", "") || "inicio";


    cargarPagina(
        paginaInicial,
        false
    );

});
