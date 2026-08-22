/* Parámetros para solicitudes de mantenimiento industrial. */
const parametrosMantenimientoIndustrial = {
    "mantenimiento-preventivo": { campos: [{ tipo: "text", nombre: "activo", etiqueta: "Equipo o instalación" }, { tipo: "select", nombre: "periodicidad", etiqueta: "Periodicidad requerida", opciones: ["Única vez", "Mensual", "Trimestral", "Semestral", "Anual"] }] },
    "mantenimiento-correctivo": { campos: [{ tipo: "text", nombre: "activo", etiqueta: "Equipo o instalación" }, { tipo: "textarea", nombre: "falla", etiqueta: "Falla detectada", placeholder: "Describe la falla y condición actual" }] },
    "emergencias": { campos: [{ tipo: "text", nombre: "activo", etiqueta: "Equipo o instalación afectada" }, { tipo: "select", nombre: "riesgoOperacion", etiqueta: "Impacto operacional", opciones: ["Detención parcial", "Detención total", "Riesgo de seguridad", "Otro"] }] }
};
