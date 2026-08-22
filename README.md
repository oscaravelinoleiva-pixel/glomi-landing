# Sitio web GLOMI

Sitio estático con navegación interna por hash. Debe servirse desde un servidor web; abrir `index.html` directamente puede impedir que el navegador cargue las páginas internas mediante `fetch`.

## Antes de publicar

1. Configurar una recepción real para el formulario de solicitud, incluyendo envío de archivos y aviso al cliente.
2. Incorporar fotos autorizadas en `img/historia/` y reactivar la galería.
3. Confirmar teléfono/WhatsApp corporativo antes de añadirlo al sitio.
4. Proteger el panel `admin/` con autenticación del lado del servidor. No debe publicarse tal como está porque sus datos se guardan sólo en el navegador.
5. Crear `sitemap.xml`, favicon e imágenes para redes sociales, y actualizar la URL canónica al dominio definitivo.

## Desarrollo

No hay dependencias ni proceso de compilación. Cualquier servidor web estático local es suficiente para revisar el sitio.
