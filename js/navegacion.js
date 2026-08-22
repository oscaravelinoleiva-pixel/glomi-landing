document.addEventListener("click", event => {

    const boton =
        event.target.closest("[data-page]");

    if (!boton) {
        return;
    }

    const pagina =
        boton.dataset.page;

    const servicio =
        boton.dataset.servicio;

    const categoria =
        boton.dataset.categoria;


    if (pagina === "solicitar-servicio") {

        sessionStorage.setItem(
            "solicitudServicio",
            JSON.stringify({
                categoria: categoria,
                servicio: servicio
            })
        );

    }

});