
/* ==================================================
   PARAMETROS - ELECTRICIDAD
================================================== */

const parametrosElectricidad = {

    "instalaciones-electricas": {

        titulo: "Instalaciones eléctricas",

        campos: [

            {
                tipo: "select",
                nombre: "tipoInstalacion",
                etiqueta: "Tipo de instalación",
                opciones: [
                    "Residencial",
                    "Comercial",
                    "Industrial",
                    "Agrícola",
                    "Faena minera",
                    "Otra"
                ]
            },

            {
                tipo: "select",
                nombre: "tipoTrabajo",
                etiqueta: "Tipo de trabajo",
                opciones: [
                    "Instalación nueva",
                    "Ampliación",
                    "Modificación",
                    "Reubicación",
                    "Reemplazo"
                ]
            },

            {
                tipo: "select",
                nombre: "tension",
                etiqueta: "Tensión eléctrica",
                opciones: [
                    "220 V",
                    "380 V",
                    "220/380 V",
                    "Otra"
                ]
            },

            {
                tipo: "number",
                nombre: "potencia",
                etiqueta: "Potencia estimada (kW)",
                placeholder: "Ej: 15"
            },

            {
                tipo: "select",
                nombre: "instalacionExistente",
                etiqueta: "¿Existe instalación eléctrica actualmente?",
                opciones: [
                    "Sí",
                    "No",
                    "No estoy seguro"
                ]
            },

            {
                tipo: "select",
                nombre: "planos",
                etiqueta: "¿Dispone de planos eléctricos?",
                opciones: [
                    "Sí",
                    "No",
                    "No estoy seguro"
                ]
            },

            {
                tipo: "select",
                nombre: "certificacion",
                etiqueta: "¿Requiere certificación?",
                opciones: [
                    "Sí",
                    "No",
                    "No estoy seguro"
                ]
            }

        ]
    },


    "mantencion-electrica": {

        titulo: "Mantención eléctrica",

        campos: [

            {
                tipo: "select",
                nombre: "tipoInstalacion",
                etiqueta: "Tipo de instalación",
                opciones: [
                    "Residencial",
                    "Comercial",
                    "Industrial",
                    "Agrícola",
                    "Minera"
                ]
            },

            {
                tipo: "select",
                nombre: "tipoMantencion",
                etiqueta: "Tipo de mantenimiento",
                opciones: [
                    "Preventivo",
                    "Correctivo",
                    "Inspección",
                    "Revisión general"
                ]
            },

            {
                tipo: "text",
                nombre: "equipoAfectado",
                etiqueta: "Equipo o instalación afectada",
                placeholder: "Ej: Motor, tablero, bomba, iluminación..."
            },

            {
                tipo: "textarea",
                nombre: "fallaObservada",
                etiqueta: "Falla o problema observado",
                placeholder: "Describe el problema..."
            },

            {
                tipo: "date",
                nombre: "ultimaMantencion",
                etiqueta: "Fecha de última mantención"
            },

            {
                tipo: "select",
                nombre: "equipoDetenido",
                etiqueta: "¿El equipo está detenido?",
                opciones: [
                    "Sí",
                    "No",
                    "No aplica"
                ]
            }

        ]
    },


    "diagnostico-fallas": {

        titulo: "Diagnóstico de fallas",

        campos: [

            {
                tipo: "select",
                nombre: "tipoInstalacion",
                etiqueta: "Tipo de instalación",
                opciones: [
                    "Residencial",
                    "Comercial",
                    "Industrial",
                    "Agrícola",
                    "Minera"
                ]
            },

            {
                tipo: "text",
                nombre: "equipo",
                etiqueta: "Equipo afectado",
                placeholder: "Ej: Motor, bomba, tablero..."
            },

            {
                tipo: "textarea",
                nombre: "sintoma",
                etiqueta: "Síntoma o falla",
                placeholder: "Describe qué está ocurriendo..."
            },

            {
                tipo: "text",
                nombre: "tiempoFalla",
                etiqueta: "¿Desde cuándo ocurre?",
                placeholder: "Ej: Desde ayer, una semana..."
            },

            {
                tipo: "select",
                nombre: "fallaIntermitente",
                etiqueta: "¿La falla es intermitente?",
                opciones: [
                    "Sí",
                    "No",
                    "No estoy seguro"
                ]
            },

            {
                tipo: "select",
                nombre: "equipoDetenido",
                etiqueta: "¿El equipo está detenido?",
                opciones: [
                    "Sí",
                    "No"
                ]
            }

        ]
    },


    "tableros-electricos": {

        titulo: "Tableros eléctricos",

        campos: [

            {
                tipo: "select",
                nombre: "tipoTablero",
                etiqueta: "Tipo de tablero",
                opciones: [
                    "Tablero general",
                    "Tablero de distribución",
                    "Tablero de fuerza",
                    "Tablero de control",
                    "Tablero de automatización",
                    "Otro"
                ]
            },

            {
                tipo: "select",
                nombre: "estadoInstalacion",
                etiqueta: "Estado de la instalación",
                opciones: [
                    "Instalación nueva",
                    "Tablero existente",
                    "Reemplazo de tablero",
                    "Ampliación"
                ]
            },

            {
                tipo: "select",
                nombre: "tension",
                etiqueta: "Tensión",
                opciones: [
                    "220 V",
                    "380 V",
                    "220/380 V",
                    "Otra"
                ]
            },

            {
                tipo: "number",
                nombre: "cantidadCircuitos",
                etiqueta: "Cantidad aproximada de circuitos",
                placeholder: "Ej: 12"
            },

            {
                tipo: "number",
                nombre: "potencia",
                etiqueta: "Potencia estimada (kW)",
                placeholder: "Ej: 30"
            },

            {
                tipo: "select",
                nombre: "trabajoTablero",
                etiqueta: "Trabajo requerido",
                opciones: [
                    "Fabricación",
                    "Instalación",
                    "Reparación",
                    "Ampliación",
                    "Modificación",
                    "Reemplazo"
                ]
            },

            {
                tipo: "select",
                nombre: "planos",
                etiqueta: "¿Dispone de planos eléctricos?",
                opciones: [
                    "Sí",
                    "No",
                    "No estoy seguro"
                ]
            }

        ]
    }

}; 