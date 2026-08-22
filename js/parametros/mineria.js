/* Parámetros para solicitudes asociadas a faenas mineras. */
const parametrosMineria = {
    "mantencion-minera": { campos: [{ tipo: "text", nombre: "faena", etiqueta: "Faena o instalación" }, { tipo: "text", nombre: "equipoMinero", etiqueta: "Equipo a intervenir" }] },
    "mecanica": { campos: [{ tipo: "text", nombre: "equipoMinero", etiqueta: "Equipo o maquinaria" }, { tipo: "textarea", nombre: "fallaMinera", etiqueta: "Falla o trabajo requerido" }] },
    "electricidad": { campos: [{ tipo: "text", nombre: "equipoElectricoMinero", etiqueta: "Equipo o instalación eléctrica" }, { tipo: "textarea", nombre: "requerimientoElectricoMinero", etiqueta: "Requerimiento técnico" }] },
    "servicios-en-terreno": { campos: [{ tipo: "text", nombre: "faena", etiqueta: "Faena o ubicación" }, { tipo: "select", nombre: "turno", etiqueta: "Modalidad requerida", opciones: ["Jornada diurna", "Jornada nocturna", "Sistema de turnos", "Por coordinar"] }] }
};
