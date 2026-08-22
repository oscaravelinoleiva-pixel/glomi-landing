/* Parámetros para solicitudes de gestión de residuos. */
const parametrosResiduos = {
    "gestion-residuos": {
        campos: [
            { tipo: "select", nombre: "tipoResiduo", etiqueta: "Tipo de residuo", opciones: ["Industrial no peligroso", "Peligroso", "Escombro", "Reciclable", "Orgánico", "No estoy seguro"] },
            { tipo: "textarea", nombre: "detalleResiduo", etiqueta: "Descripción del residuo", placeholder: "Indica composición, estado, embalaje y volumen estimado" }
        ]
    },
    "retiro-residuos": {
        campos: [
            { tipo: "text", nombre: "origenResiduo", etiqueta: "Origen del residuo", placeholder: "Comuna, ciudad o faena" },
            { tipo: "select", nombre: "volumenResiduo", etiqueta: "Volumen estimado", opciones: ["Menos de 1 m³", "1 a 5 m³", "Más de 5 m³", "Por definir"] },
            { tipo: "textarea", nombre: "detalleRetiro", etiqueta: "Detalle para retiro", placeholder: "Indica tipo de residuo, accesos y frecuencia requerida" }
        ]
    },
    "disposicion-final": {
        campos: [
            { tipo: "select", nombre: "tipoResiduoFinal", etiqueta: "Tipo de residuo", opciones: ["Industrial no peligroso", "Peligroso", "Escombro", "Reciclable", "Otro"] },
            { tipo: "textarea", nombre: "antecedentesDisposicion", etiqueta: "Antecedentes disponibles", placeholder: "Indica volumen, origen, ficha técnica o documentación disponible" }
        ]
    }
};
