document.addEventListener("DOMContentLoaded", function () {


    /*
    ==================================================
    UTILIDADES
    ==================================================
    */

    function obtenerDatos(clave) {

        return JSON.parse(
            localStorage.getItem(clave) || "[]"
        );

    }


    function guardarDatos(clave, datos) {

        localStorage.setItem(
            clave,
            JSON.stringify(datos)
        );

    }


    /*
    ==================================================
    MODALES
    ==================================================
    */

    document
        .querySelectorAll("[data-close-modal]")
        .forEach(function (boton) {

            boton.addEventListener("click", function () {

                const modal =
                    boton.closest(".modal");

                if (modal) {

                    modal.classList.remove("active");

                }

            });

        });


    document
        .querySelectorAll(".modal")
        .forEach(function (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (event.target === modal) {

                        modal.classList.remove(
                            "active"
                        );

                    }

                }
            );

        });


    /*
    ==================================================
    LOGOUT
    ==================================================
    */

    const logout =
        document.getElementById("logoutButton");


    if (logout) {

        logout.addEventListener("click", function () {

            if (
                confirm(
                    "¿Desea cerrar la sesión?"
                )
            ) {

                window.location.href =
                    "login.html";

            }

        });

    }


    /*
    ==================================================
    USUARIOS
    ==================================================
    */

    const tablaUsuarios =
        document.getElementById(
            "tablaUsuarios"
        );


    if (tablaUsuarios) {

        cargarUsuarios();


        const botonNuevo =
            document.getElementById(
                "nuevoUsuario"
            );


        const modal =
            document.getElementById(
                "usuarioModal"
            );


        botonNuevo.addEventListener(
            "click",
            function () {

                modal.classList.add(
                    "active"
                );

            }
        );


        const formulario =
            document.getElementById(
                "usuarioForm"
            );


        formulario.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const usuarios =
                    obtenerDatos(
                        "glomi_usuarios"
                    );


                usuarios.push({

                    id:
                        Date.now(),

                    nombre:
                        document.getElementById(
                            "usuarioNombre"
                        ).value,

                    email:
                        document.getElementById(
                            "usuarioEmail"
                        ).value,

                    rol:
                        document.getElementById(
                            "usuarioRol"
                        ).value,

                    estado:
                        document.getElementById(
                            "usuarioEstado"
                        ).value

                });


                guardarDatos(
                    "glomi_usuarios",
                    usuarios
                );


                modal.classList.remove(
                    "active"
                );


                formulario.reset();


                cargarUsuarios();

            }
        );

    }


    function cargarUsuarios() {

        const tabla =
            document.getElementById(
                "tablaUsuarios"
            );


        if (!tabla) {
            return;
        }


        const usuarios =
            obtenerDatos(
                "glomi_usuarios"
            );


        tabla.innerHTML = "";


        usuarios.forEach(function (usuario) {

            const fila =
                document.createElement("tr");


            fila.innerHTML = `

                <td>
                    ${usuario.nombre}
                </td>

                <td>
                    ${usuario.email}
                </td>

                <td>
                    ${usuario.rol}
                </td>

                <td>

                    <span class="status
                        ${
                            usuario.estado === "Activo"
                                ? "status-active"
                                : "status-inactive"
                        }">

                        ${usuario.estado}

                    </span>

                </td>

                <td>

                    <button
                        class="btn btn-secondary"
                        onclick="eliminarUsuario(${usuario.id})">

                        Eliminar

                    </button>

                </td>

            `;


            tabla.appendChild(fila);

        });

    }


    window.eliminarUsuario =
        function (id) {

            const usuarios =
                obtenerDatos(
                    "glomi_usuarios"
                );


            const nuevos =
                usuarios.filter(
                    usuario =>
                        usuario.id !== id
                );


            guardarDatos(
                "glomi_usuarios",
                nuevos
            );


            cargarUsuarios();

        };


    /*
    ==================================================
    PERFILES
    ==================================================
    */

    const profilesGrid =
        document.getElementById(
            "profilesGrid"
        );


    if (profilesGrid) {

        cargarPerfiles();


        document
            .getElementById("nuevoPerfil")
            .addEventListener(
                "click",
                function () {

                    document
                        .getElementById(
                            "perfilModal"
                        )
                        .classList.add(
                            "active"
                        );

                }
            );


        document
            .getElementById("perfilForm")
            .addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const perfiles =
                        obtenerDatos(
                            "glomi_perfiles"
                        );


                    perfiles.push({

                        id:
                            Date.now(),

                        nombre:
                            document.getElementById(
                                "perfilNombre"
                            ).value,

                        cargo:
                            document.getElementById(
                                "perfilCargo"
                            ).value,

                        especialidad:
                            document.getElementById(
                                "perfilEspecialidad"
                            ).value,

                        bio:
                            document.getElementById(
                                "perfilBio"
                            ).value

                    });


                    guardarDatos(
                        "glomi_perfiles",
                        perfiles
                    );


                    document
                        .getElementById(
                            "perfilModal"
                        )
                        .classList.remove(
                            "active"
                        );


                    this.reset();


                    cargarPerfiles();

                }
            );

    }


    function cargarPerfiles() {

        const grid =
            document.getElementById(
                "profilesGrid"
            );


        if (!grid) {
            return;
        }


        const perfiles =
            obtenerDatos(
                "glomi_perfiles"
            );


        grid.innerHTML = "";


        perfiles.forEach(function (perfil) {

            const card =
                document.createElement("article");


            card.className =
                "profile-card";


            card.innerHTML = `

                <div class="profile-photo">
                    👤
                </div>

                <div class="profile-info">

                    <h3>
                        ${perfil.nombre}
                    </h3>

                    <p>
                        ${perfil.cargo}
                    </p>

                    <p>
                        ${perfil.especialidad}
                    </p>

                    <br>

                    <small>
                        ${perfil.bio}
                    </small>

                </div>

            `;


            grid.appendChild(card);

        });

    }


    /*
    ==================================================
    PROYECTOS
    ==================================================
    */

    const projectsGrid =
        document.getElementById(
            "projectsGrid"
        );


    if (projectsGrid) {

        cargarProyectos();


        document
            .getElementById("nuevoProyecto")
            .addEventListener(
                "click",
                function () {

                    document
                        .getElementById(
                            "proyectoModal"
                        )
                        .classList.add(
                            "active"
                        );

                }
            );


        document
            .getElementById("proyectoForm")
            .addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const proyectos =
                        obtenerDatos(
                            "glomi_proyectos"
                        );


                    proyectos.push({

                        id:
                            Date.now(),

                        nombre:
                            document.getElementById(
                                "proyectoNombre"
                            ).value,

                        cliente:
                            document.getElementById(
                                "proyectoCliente"
                            ).value,

                        categoria:
                            document.getElementById(
                                "proyectoCategoria"
                            ).value,

                        fecha:
                            document.getElementById(
                                "proyectoFecha"
                            ).value,

                        descripcion:
                            document.getElementById(
                                "proyectoDescripcion"
                            ).value

                    });


                    guardarDatos(
                        "glomi_proyectos",
                        proyectos
                    );


                    document
                        .getElementById(
                            "proyectoModal"
                        )
                        .classList.remove(
                            "active"
                        );


                    this.reset();


                    cargarProyectos();

                }
            );

    }


    function cargarProyectos() {

        const grid =
            document.getElementById(
                "projectsGrid"
            );


        if (!grid) {
            return;
        }


        const proyectos =
            obtenerDatos(
                "glomi_proyectos"
            );


        grid.innerHTML = "";


        proyectos.forEach(function (proyecto) {

            const card =
                document.createElement("article");


            card.className =
                "project-card";


            card.innerHTML = `

                <h3>
                    ${proyecto.nombre}
                </h3>

                <div class="project-meta">

                    ${proyecto.categoria}

                    <br>

                    ${proyecto.cliente || "Cliente no especificado"}

                    <br>

                    ${proyecto.fecha || ""}

                </div>

                <p>
                    ${proyecto.descripcion}
                </p>

            `;


            grid.appendChild(card);

        });

    }


    /*
    ==================================================
    GALERÍA
    ==================================================
    */

    const gallery =
        document.getElementById(
            "galleryAdmin"
        );


    if (gallery) {

        cargarGaleria();


        document
            .getElementById("nuevaFoto")
            .addEventListener(
                "click",
                function () {

                    document
                        .getElementById(
                            "fotoModal"
                        )
                        .classList.add(
                            "active"
                        );

                }
            );


        document
            .getElementById("fotoForm")
            .addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const archivo =
                        document.getElementById(
                            "fotoArchivo"
                        ).files[0];


                    if (!archivo) {

                        alert(
                            "Seleccione una fotografía."
                        );

                        return;

                    }


                    const reader =
                        new FileReader();


                    reader.onload =
                        function (e) {

                            const fotos =
                                obtenerDatos(
                                    "glomi_galeria"
                                );


                            fotos.push({

                                id:
                                    Date.now(),

                                titulo:
                                    document.getElementById(
                                        "fotoTitulo"
                                    ).value,

                                proyecto:
                                    document.getElementById(
                                        "fotoProyecto"
                                    ).value,

                                descripcion:
                                    document.getElementById(
                                        "fotoDescripcion"
                                    ).value,

                                imagen:
                                    e.target.result

                            });


                            guardarDatos(
                                "glomi_galeria",
                                fotos
                            );


                            document
                                .getElementById(
                                    "fotoModal"
                                )
                                .classList.remove(
                                    "active"
                                );


                            event.target.reset();


                            cargarGaleria();

                        };


                    reader.readAsDataURL(
                        archivo
                    );

                }
            );

    }


    function cargarGaleria() {

        const grid =
            document.getElementById(
                "galleryAdmin"
            );


        if (!grid) {
            return;
        }


        const fotos =
            obtenerDatos(
                "glomi_galeria"
            );


        grid.innerHTML = "";


        fotos.forEach(function (foto) {

            const item =
                document.createElement(
                    "article"
                );


            item.className =
                "gallery-admin-item";


            item.innerHTML = `

                <img
                    src="${foto.imagen}"
                    alt="${foto.titulo}">

                <div
                    class="gallery-admin-info">

                    <strong>
                        ${foto.titulo}
                    </strong>

                    <p>
                        ${foto.proyecto}
                    </p>

                    <small>
                        ${foto.descripcion}
                    </small>

                </div>

            `;


            grid.appendChild(item);

        });

    }


    /*
    ==================================================
    DASHBOARD
    ==================================================
    */

    const totalUsuarios =
        document.getElementById(
            "totalUsuarios"
        );


    if (totalUsuarios) {

        totalUsuarios.textContent =
            obtenerDatos(
                "glomi_usuarios"
            ).length;


        document.getElementById(
            "totalPerfiles"
        ).textContent =
            obtenerDatos(
                "glomi_perfiles"
            ).length;


        document.getElementById(
            "totalProyectos"
        ).textContent =
            obtenerDatos(
                "glomi_proyectos"
            ).length;


        document.getElementById(
            "totalFotos"
        ).textContent =
            obtenerDatos(
                "glomi_galeria"
            ).length;

    }

});