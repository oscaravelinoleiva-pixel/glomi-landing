# Integración de solicitudes

La carpeta queda reservada para el servicio que recibirá las solicitudes del formulario. No se incluyeron credenciales ni un envío ficticio: para habilitarlo se requiere elegir el proveedor (correo transaccional, CRM o API propia) y sus credenciales seguras.

El endpoint deberá validar los datos en servidor, limitar el tamaño y tipo de adjuntos, protegerse frente a spam, guardar los archivos fuera del directorio público y devolver mensajes de éxito o error que el formulario pueda mostrar.
