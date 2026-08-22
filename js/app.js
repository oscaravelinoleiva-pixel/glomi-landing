/*
==========================================================
 GLOMI - SISTEMA PRINCIPAL DE NAVEGACIÓN
 Versión corregida
==========================================================

 Estructura esperada:

 paginas/
 ├── inicio.html
 ├── servicios.html
 ├── historia.html
 ├── contacto.html
 │
 └── servicios/
     ├── electricidad.html
     ├── mecanica.html
     ├── electromecanica.html
     ├── soldadura.html
     └── ...

 Los enlaces utilizan:

 data-page="inicio"
 data-page="servicios"
 data-page="servicios/electricidad"
 data-page="servicios/mecanica"

==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ======================================================
    ELEMENTOS PRINCIPALES
    ======================================================
    */

    const app =
        document.getElementById("app") ||
        document.getElementById("contenido");

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.querySelector(".main-nav");

    const year =
        document.getElementById("year");


    /*
    ======================================================
    COMPROBAR CONTENEDOR PRINCIPAL
    ======================================================
    */

    if (!app) {

        console.error(
            "GLOMI: No se encontró #app ni #contenido."
        );

        return;
    }


    /*
    ======================================================
    AÑO AUTOMÁTICO
    ======================================================
    */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /*
    ======================================================
    MENÚ MÓVIL
    ======================================================
    */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            mainNav.classList.toggle("active");

        });

    }


    /*
    ======================================================
    NORMALIZAR RUTA
    ======================================================

    Permite recibir:

    inicio
    servicios
    servicios/electricidad
    /servicios/electricidad
    servicios/electricidad.html

    y convertirlo a:

    servicios/electricidad
    ======================================================
    */

    function normalizarPagina(pagina) {

        if (!pagina) {
            return "inicio";
        }


        pagina = pagina
            .trim()
            .replace(/^#/, "")
            .replace(/^\/+/, "")
            .replace(/\.html$/i, "");


        if (!pagina) {
            return "inicio";
        }


        return pagina;

    }


    /*
    ======================================================
    CONSTRUIR URL DEL ARCHIVO HTML
    ======================================================
    */

    function obtenerRutaArchivo(pagina) {

        pagina =
            normalizarPagina(pagina);


        return `paginas/${pagina}.html`;

    }


    /*
    ======================================================
    ACTUALIZAR ENLACES ACTIVOS
    ======================================================
    */

    function actualizarMenuActivo(pagina) {

        pagina =
            normalizarPagina(pagina);


        const enlaces =
            document.querySelectorAll(
                "[data-page]"
            );


        enlaces.forEach(enlace => {

            enlace.classList.remove("active");


            const paginaEnlace =
                normalizarPagina(
                    enlace.dataset.page
                );


            /*
            ----------------------------------------------
            Coincidencia exacta
            ----------------------------------------------
            */

            if (paginaEnlace === pagina) {

                enlace.classList.add("active");

                return;
            }


            /*
            ----------------------------------------------
            Si estamos dentro de una categoría:

            servicios/electricidad

            también puede marcar como activo:

            servicios
            ----------------------------------------------
            */

            if (
                pagina.startsWith(
                    paginaEnlace + "/"
                )
            ) {

                enlace.classList.add("active");

            }

        });

    }


    /*
    ======================================================
    CERRAR MENÚ MÓVIL
    ======================================================
    */

    function cerrarMenu() {

        if (mainNav) {

            mainNav.classList.remove("active");

        }

    }


    /*
    ======================================================
    MOSTRAR ERROR
    ======================================================
    */

    function mostrarError(error) {

        console.error(
            "GLOMI - Error de navegación:",
            error
        );


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
                            type="button"
                            class="btn btn-primary"
                            data-page="inicio">

                            Volver al inicio

                        </button>

                    </div>

                </div>

            </section>

        `;

    }


    /*
    ======================================================
    CARGAR PÁGINA
    ======================================================
    */

    async function cargarPagina(
        pagina,
        actualizarURL = true
    ) {

        pagina =
            normalizarPagina(pagina);


        const ruta =
            obtenerRutaArchivo(pagina);


        try {

            /*
            ----------------------------------------------
            Activar estado de carga
            ----------------------------------------------
            */

            app.classList.add("loading");


            /*
            ----------------------------------------------
            Solicitar HTML
            ----------------------------------------------
            */

            const respuesta =
                await fetch(ruta, {
                    method: "GET",
                    cache: "no-cache"
                });


            /*
            ----------------------------------------------
            Comprobar respuesta
            ----------------------------------------------
            */

            if (!respuesta.ok) {

                throw new Error(
                    `HTTP ${respuesta.status}: ${ruta}`
                );

            }


            /*
            ----------------------------------------------
            Obtener HTML
            ----------------------------------------------
            */

            const html =
                await respuesta.text();


            /*
            ----------------------------------------------
            Insertar página
            ----------------------------------------------
            */

            app.innerHTML =
                html;


            /*
            ----------------------------------------------
            Actualizar URL
            ----------------------------------------------
            */

            if (actualizarURL) {

                const nuevoHash =
                    `#${pagina}`;


                if (
                    window.location.hash !==
                    nuevoHash
                ) {

                    history.pushState(
                        {
                            pagina: pagina
                        },
                        "",
                        nuevoHash
                    );

                }

            }


            /*
            ----------------------------------------------
            Actualizar menú
            ----------------------------------------------
            */

            actualizarMenuActivo(
                pagina
            );


            /*
            ----------------------------------------------
            Cerrar menú móvil
            ----------------------------------------------
            */

            cerrarMenu();


            /*
            ----------------------------------------------
            Volver arriba
            ----------------------------------------------
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /*
            ----------------------------------------------
            Inicializar funcionalidades
            ----------------------------------------------
            */

            inicializarPagina(
                pagina
            );


        } catch (error) {

            mostrarError(error);

        } finally {

            /*
            ----------------------------------------------
            Quitar estado de carga
            ----------------------------------------------
            */

            app.classList.remove(
                "loading"
            );

        }

    }


    /*
    ======================================================
    INICIALIZAR FUNCIONALIDADES DE LA PÁGINA
    ======================================================
    */

    function inicializarPagina(pagina) {

        /*
        ----------------------------------------------
        Página de servicios
        ----------------------------------------------
        */

        if (
            pagina === "servicios"
        ) {

            inicializarServicios();
            
        }


        /*
        ----------------------------------------------
        Historia / galería
        ----------------------------------------------
        */

        if (
            pagina === "historia"
        ) {

            inicializarGaleria();

        }


        /*
        ----------------------------------------------
        También inicializamos si la galería
        está presente en otra página.
        ----------------------------------------------
        */

        const galeria =
            document.querySelector(
                ".gallery-item"
            );


        if (galeria) {

            inicializarGaleria();

        }


        /*
        ----------------------------------------------
        Formularios dinámicos
        ----------------------------------------------
        */
        inicializarCategorias();
        inicializarFormularios();

        if (pagina === "solicitar-servicio" && window.inicializarSolicitud) {
            window.inicializarSolicitud();
        }

    }

    function cargarParametrosServicio(servicio) {

        const contenedor =
            document.getElementById("parametrosServicio");

        if (!contenedor) {
            return;
        }

        contenedor.innerHTML = "";

        const configuracion =
            parametrosServicios[servicio];

        if (!configuracion) {
            return;
        }


        const titulo =
            document.createElement("h2");

        titulo.textContent =
            "Información técnica";

        contenedor.appendChild(titulo);


        const grid =
            document.createElement("div");

        grid.className =
            "parametros-grid";


        configuracion.campos.forEach(campo => {

            const grupo =
                document.createElement("div");

            grupo.className =
                "form-group";


            const label =
                document.createElement("label");

            label.textContent =
                campo.etiqueta;

            label.htmlFor =
                campo.nombre;

            grupo.appendChild(label);


            let elemento;


            if (campo.tipo === "select") {

                elemento =
                    document.createElement("select");

                elemento.name =
                    campo.nombre;

                elemento.id =
                    campo.nombre;


                const opcionInicial =
                    document.createElement("option");

                opcionInicial.value = "";

                opcionInicial.textContent =
                    "Seleccionar";

                elemento.appendChild(
                    opcionInicial
                );


                campo.opciones.forEach(opcion => {

                    const option =
                        document.createElement("option");

                    option.value =
                        opcion;

                    option.textContent =
                        opcion;

                    elemento.appendChild(
                        option
                    );

                });

            }


            else if (campo.tipo === "textarea") {

                elemento =
                    document.createElement("textarea");

                elemento.name =
                    campo.nombre;

                elemento.id =
                    campo.nombre;

                elemento.placeholder =
                    campo.placeholder || "";

            }


            else {

                elemento =
                    document.createElement("input");

                elemento.type =
                    campo.tipo;

                elemento.name =
                    campo.nombre;

                elemento.id =
                    campo.nombre;

                elemento.placeholder =
                    campo.placeholder || "";

            }


            grupo.appendChild(elemento);

            grid.appendChild(grupo);

        });


        contenedor.appendChild(grid);

    }
    /*
    ======================================================
    NAVEGACIÓN GLOBAL
    ======================================================

    IMPORTANTE:

    Este listener utiliza delegación de eventos.

    Por eso también funciona con botones/enlaces
    que fueron cargados posteriormente mediante
    innerHTML.

    Ejemplo:

    <a data-page="servicios/electricidad">
        Electricidad
    </a>

    ======================================================
    */

    document.addEventListener(
        "click",
        event => {

            const enlace =
                event.target.closest(
                    "[data-page]"
                );


            /*
            ----------------------------------------------
            No es un enlace de navegación
            ----------------------------------------------
            */

            if (!enlace) {

                return;

            }


            /*
            ----------------------------------------------
            Evitar comportamiento HTML
            ----------------------------------------------
            */

            event.preventDefault();


            /*
            ----------------------------------------------
            Obtener página
            ----------------------------------------------
            */

            const pagina =
                enlace.dataset.page;


            /*
            ----------------------------------------------
            Cargar página
            ----------------------------------------------
            */

            cargarPagina(
                pagina
            );

        }
    );


    /*
    ======================================================
    BOTONES ATRÁS / ADELANTE
    ======================================================
    */

    window.addEventListener(
        "popstate",
        () => {

            const pagina =
                obtenerPaginaDesdeURL();


            cargarPagina(
                pagina,
                false
            );

        }
    );


    /*
    ======================================================
    CAMBIO DE HASH
    ======================================================

    Esto permite también:

    #inicio
    #servicios
    #servicios/electricidad

    ======================================================
    */

    window.addEventListener(
        "hashchange",
        () => {

            const pagina =
                obtenerPaginaDesdeURL();


            cargarPagina(
                pagina,
                false
            );

        }
    );


    /*
    ======================================================
    OBTENER PÁGINA DESDE LA URL
    ======================================================
    */

    function obtenerPaginaDesdeURL() {

        let pagina =
            window.location.hash;


        pagina =
            normalizarPagina(
                pagina
            );


        if (!pagina) {

            pagina =
                "inicio";

        }


        return pagina;

    }


    /*
    ======================================================
    FILTRO DE SERVICIOS
    ======================================================
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


        /*
        ----------------------------------------------
        Si no hay filtros, salir
        ----------------------------------------------
        */

        if (
            !botones.length ||
            !servicios.length
        ) {

            return;

        }


        botones.forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        const filtro =
                            boton.dataset.filter;


                        /*
                        ----------------------------------
                        Activar botón
                        ----------------------------------
                        */

                        botones.forEach(
                            otroBoton => {

                                otroBoton.classList.remove(
                                    "active"
                                );

                            }
                        );


                        boton.classList.add(
                            "active"
                        );


                        /*
                        ----------------------------------
                        Filtrar servicios
                        ----------------------------------
                        */

                        servicios.forEach(
                            servicio => {

                                const categoria =
                                    servicio.dataset.category;


                                if (
                                    filtro === "todos" ||
                                    categoria === filtro
                                ) {

                                    servicio.style.display =
                                        "";

                                } else {

                                    servicio.style.display =
                                        "none";

                                }

                            }
                        );

                    }
                );

            }
        );

    }

    function inicializarCategorias() {

        const categorias =
            document.querySelectorAll(
                ".servicio-categoria"
            );

        if (!categorias.length) {
            return;
        }

        categorias.forEach(categoria => {

            const boton =
                categoria.querySelector(
                    ".categoria-header"
                );

            const contenido =
                categoria.querySelector(
                    ".categoria-contenido"
                );

            if (!boton || !contenido) {
                return;
            }

            /*
            ----------------------------------------------
            Evitar duplicar eventos
            ----------------------------------------------
            */

            if (
                boton.dataset.inicializado === "true"
            ) {
                return;
            }

            boton.dataset.inicializado = "true";


            /*
            ----------------------------------------------
            Estado inicial
            ----------------------------------------------
            */

            categoria.classList.remove("abierta");


            /*
            ----------------------------------------------
            Click
            ----------------------------------------------
            */

            boton.addEventListener(
                "click",
                () => {

                    const estabaAbierta =
                        categoria.classList.contains(
                            "abierta"
                        );


                    /*
                    ------------------------------------------
                    Cerrar las demás categorías
                    ------------------------------------------
                    */

                    categorias.forEach(
                        otraCategoria => {

                            otraCategoria.classList.remove(
                                "abierta"
                            );

                        }
                    );


                    /*
                    ------------------------------------------
                    Abrir la seleccionada
                    ------------------------------------------
                    */

                    if (!estabaAbierta) {

                        categoria.classList.add(
                            "abierta"
                        );

                    }

                }
            );

        });

    }


    /*
    ======================================================
    GALERÍA / LIGHTBOX
    ======================================================
    */

    function inicializarGaleria() {

        const items =
            document.querySelectorAll(
                ".gallery-item"
            );


        const lightbox =
            document.getElementById(
                "lightbox"
            );


        const image =
            document.getElementById(
                "lightboxImage"
            );


        const close =
            document.getElementById(
                "lightboxClose"
            );


        const previous =
            document.getElementById(
                "lightboxPrev"
            );


        const next =
            document.getElementById(
                "lightboxNext"
            );


        /*
        ----------------------------------------------
        Comprobar elementos
        ----------------------------------------------
        */

        if (
            !items.length ||
            !lightbox ||
            !image
        ) {

            return;

        }


        let indice = 0;


        /*
        ----------------------------------------------
        Mostrar imagen
        ----------------------------------------------
        */

        function mostrarImagen(numero) {

            indice =
                (
                    numero +
                    items.length
                ) %
                items.length;


            const imagen =
                items[indice].querySelector(
                    "img"
                );


            if (!imagen) {

                return;

            }


            image.src =
                imagen.src;


            image.alt =
                imagen.alt || "";


            lightbox.classList.add(
                "active"
            );

        }


        /*
        ----------------------------------------------
        Abrir imágenes
        ----------------------------------------------
        */

        items.forEach(
            (item, index) => {

                item.addEventListener(
                    "click",
                    () => {

                        mostrarImagen(
                            index
                        );

                    }
                );

            }
        );


        /*
        ----------------------------------------------
        Cerrar
        ----------------------------------------------
        */

        if (close) {

            close.addEventListener(
                "click",
                () => {

                    lightbox.classList.remove(
                        "active"
                    );

                }
            );

        }


        /*
        ----------------------------------------------
        Anterior
        ----------------------------------------------
        */

        if (previous) {

            previous.addEventListener(
                "click",
                () => {

                    mostrarImagen(
                        indice - 1
                    );

                }
            );

        }


        /*
        ----------------------------------------------
        Siguiente
        ----------------------------------------------
        */

        if (next) {

            next.addEventListener(
                "click",
                () => {

                    mostrarImagen(
                        indice + 1
                    );

                }
            );

        }


        /*
        ----------------------------------------------
        Cerrar haciendo clic fuera
        ----------------------------------------------
        */

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    lightbox
                ) {

                    lightbox.classList.remove(
                        "active"
                    );

                }

            }
        );


        /*
        ----------------------------------------------
        Teclado
        ----------------------------------------------
        */

        /*
        IMPORTANTE:

        Se utiliza una función local para evitar
        registrar múltiples listeners cada vez
        que se cambia de página.
        */

        if (
            !window.__glomiGaleriaTeclado
        ) {

            window.__glomiGaleriaTeclado =
                true;


            document.addEventListener(
                "keydown",
                event => {

                    const lightboxActual =
                        document.getElementById(
                            "lightbox"
                        );


                    if (
                        !lightboxActual ||
                        !lightboxActual.classList.contains(
                            "active"
                        )
                    ) {

                        return;

                    }


                    const imagenes =
                        document.querySelectorAll(
                            ".gallery-item"
                        );


                    if (!imagenes.length) {

                        return;

                    }


                    if (
                        event.key ===
                        "Escape"
                    ) {

                        lightboxActual.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }

    }


    /*
    ======================================================
    FORMULARIOS
    ======================================================

    Esta función no interfiere con tus formularios.

    Solamente detecta formularios cargados
    dinámicamente y permite agregar posteriormente
    validaciones o envío mediante fetch.

    ======================================================
    */

    function inicializarFormularios() {

        const formularios =
            document.querySelectorAll(
                "form[data-form]"
            );


        if (!formularios.length) {

            return;

        }


        formularios.forEach(
            formulario => {

                /*
                ------------------------------------------
                Evitar registrar el mismo formulario
                ------------------------------------------
                */

                if (
                    formulario.dataset.inicializado ===
                    "true"
                ) {

                    return;

                }


                formulario.dataset.inicializado =
                    "true";


                /*
                ------------------------------------------
                Aquí puedes conectar posteriormente
                el formulario con tu backend.
                ------------------------------------------
                */

            }
        );

    }


    /*
    ======================================================
    CARGA INICIAL
    ======================================================
    */

    const paginaInicial =
        obtenerPaginaDesdeURL();


    cargarPagina(
        paginaInicial,
        false
    );
const servicioSelect = document.getElementById("servicio");

    if (!servicioSelect) {
        return;
    }


    /*
     * Buscar parámetros enviados
     * desde el botón "Solicitar servicio"
     */

    const parametros = sessionStorage.getItem(
        "solicitudServicio"
        );


        if (!parametros) {
            return;
        }


        try {

            const datos = JSON.parse(parametros);


            /*
            * Seleccionar automáticamente
            * el servicio solicitado
            */

            if (datos.servicio) {

                const opciones =
                    servicioSelect.querySelectorAll("option");

                opciones.forEach(opcion => {

                    if (
                        opcion.textContent.trim() ===
                        datos.servicio.trim()
                    ) {

                        opcion.selected = true;

                    }

                });

            }


            /*
            * Limpiar los datos después
            * de utilizarlos
            */

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
});
/* =====================================================
   ACORDEÓN GLOBAL
===================================================== */

