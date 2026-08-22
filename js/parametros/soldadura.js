/* Parámetros para solicitudes de soldadura. */
const parametrosSoldadura = {
    "estructuras-metalicas": { campos: [{ tipo: "text", nombre: "tipoEstructura", etiqueta: "Tipo de estructura", placeholder: "Ej: pasarela, soporte, galpón" }, { tipo: "select", nombre: "material", etiqueta: "Material", opciones: ["Acero al carbono", "Acero inoxidable", "Aluminio", "Otro"] }, { tipo: "textarea", nombre: "alcanceSoldadura", etiqueta: "Alcance del trabajo", placeholder: "Indica medidas, cantidad o planos disponibles" }] },
    "soldadura-industrial": { campos: [{ tipo: "select", nombre: "procesoSoldadura", etiqueta: "Proceso requerido", opciones: ["SMAW", "MIG/MAG", "TIG", "No estoy seguro"] }, { tipo: "text", nombre: "materialSoldadura", etiqueta: "Material a intervenir" }, { tipo: "textarea", nombre: "alcanceSoldadura", etiqueta: "Alcance del trabajo" }] },
    "reparaciones": { campos: [{ tipo: "text", nombre: "piezaReparar", etiqueta: "Pieza o estructura a reparar" }, { tipo: "textarea", nombre: "daño", etiqueta: "Daño observado", placeholder: "Describe grietas, desgaste o deformaciones" }] }
};
