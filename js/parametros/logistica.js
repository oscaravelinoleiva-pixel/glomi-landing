/* Parámetros para solicitudes logísticas. */
const parametrosLogistica = {
    "transporte-carga": {
        campos: [
            { tipo: "text", nombre: "origen", etiqueta: "Origen de la carga", placeholder: "Comuna, ciudad o faena" },
            { tipo: "text", nombre: "destino", etiqueta: "Destino de la carga", placeholder: "Comuna, ciudad o faena" },
            { tipo: "textarea", nombre: "carga", etiqueta: "Tipo de carga", placeholder: "Indica dimensiones, peso estimado y condiciones especiales" }
        ]
    },
    "coordinacion-logistica": {
        campos: [
            { tipo: "select", nombre: "tipoOperacion", etiqueta: "Tipo de operación", opciones: ["Despacho puntual", "Distribución recurrente", "Proyecto", "Apoyo a faena", "Otro"] },
            { tipo: "textarea", nombre: "requerimientoLogistico", etiqueta: "Requerimiento logístico", placeholder: "Describe volúmenes, frecuencia, destinos y restricciones" }
        ]
    },
    "apoyo-bodega": {
        campos: [
            { tipo: "select", nombre: "servicioBodega", etiqueta: "Servicio requerido", opciones: ["Recepción", "Inventario", "Preparación de pedidos", "Despacho", "Apoyo operativo"] },
            { tipo: "textarea", nombre: "detalleBodega", etiqueta: "Detalle de la operación", placeholder: "Indica volumen, ubicación y duración estimada" }
        ]
    }
};
