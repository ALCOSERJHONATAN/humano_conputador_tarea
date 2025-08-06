# Aplicación de Sueños - Frontend

Este proyecto es un prototipo de una aplicación web que cumple con los principios de accesibilidad definidos por las Pautas de Accesibilidad al Contenido Web (WCAG) 2.2. La aplicación está diseñada para ser intuitiva y accesible para todos los usuarios.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
aplicacion-suenos-frontend
├── src
│   ├── css
│   │   └── styles.css        # Estilos CSS para la aplicación
│   ├── js
│   │   └── main.js           # Lógica de JavaScript para la aplicación
│   ├── img                   # Imágenes utilizadas en la aplicación
│   ├── index.html            # Página de inicio
│   ├── login.html            # Vista de inicio de sesión
│   └── dashboard.html        # Vista del panel de control
├── informe
│   └── informe-accesibilidad.pdf # Informe de accesibilidad
├── README.md                 # Documentación del proyecto
```

## Despliegue de la Aplicación

Para desplegar la aplicación, puedes utilizar un servidor local o herramientas como `ngrok` para exponer tu aplicación a Internet. Asegúrate de tener instalado `ngrok` y ejecuta el siguiente comando en la raíz del proyecto:

```
ngrok http 3000
```

Esto abrirá un túnel a tu aplicación, permitiéndote compartir el enlace generado con otros usuarios.

## Accesibilidad

La aplicación ha sido diseñada teniendo en cuenta los siguientes principios de accesibilidad:

- **Uso adecuado de etiquetas semánticas HTML**: Se han utilizado etiquetas como `<header>`, `<nav>`, `<main>`, y `<footer>` para estructurar el contenido de manera semántica.
- **Contraste adecuado entre fondo y texto**: Se ha asegurado que el contraste entre el texto y el fondo sea suficiente para facilitar la lectura.
- **Navegación accesible mediante teclado**: Todos los elementos interactivos son accesibles mediante el teclado.
- **Textos alternativos en imágenes**: Se han incluido atributos `alt` descriptivos en todas las imágenes.
- **Enlaces y botones accesibles**: Todos los enlaces y botones tienen descripciones claras y son fácilmente identificables.
- **Títulos jerarquizados correctamente**: Se ha mantenido una jerarquía clara de títulos utilizando `<h1>`, `<h2>`, etc.
- **Validación de formularios**: Los formularios incluyen validación y mensajes claros para el usuario.
- **Diseño responsivo**: La aplicación se adapta a diferentes tamaños de pantalla.

## Enlace al Código Fuente

El código fuente de la aplicación está disponible en el siguiente enlace: [Código Fuente](https://github.com/tu_usuario/aplicacion-suenos-frontend) (reemplaza con el enlace real).

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Gracias por tu interés!