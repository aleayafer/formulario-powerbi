Instrucciones para el formulario modular de analítica de datos
Estructura de archivos

index.html: Punto de entrada del formulario.
style.css: Estilos y apariencia visual.
questions.js: Configuración de las preguntas, opciones y flujo del cuestionario.
recommendations.js: Lógica de recomendaciones finales basadas en las respuestas del usuario.
app.js: Lógica principal para renderizar preguntas, capturar respuestas y mostrar resultados.
Cómo ejecutar

Coloca todos los archivos en el mismo directorio de tu repositorio.
Abre index.html en tu navegador para ver el formulario en funcionamiento.
Cómo modificar las preguntas

Abre questions.js.
Añade, elimina o edita las preguntas y opciones en el objeto cuestionario.
Cada pregunta tiene un texto, un conjunto de opciones (con texto, valor, next y progreso).
next indica la siguiente pregunta o showFinalRec para mostrar el resultado final.
Cómo cambiar el diseño

Abre style.css.
Ajusta colores, fuentes, tamaños y márgenes para cambiar el aspecto visual del formulario.
Cómo adaptar las recomendaciones

Abre recommendations.js.
Modifica la función getRecommendations(userData) para ajustar la lógica que determina qué cursos se recomiendan según las respuestas del usuario.
Ajusta la función buildPersonalizedMessage(userData, courses) para personalizar el mensaje final.
Cómo ampliar la lógica del formulario

En app.js se gestiona el flujo principal y el renderizado dinámico.
Si necesitas cambiar la forma en que se navega entre preguntas o se muestran las recomendaciones, ajusta las funciones renderQuestion(), showFinalRecommendations() y updateProgress().
Publicar el formulario

Sube el contenido del repositorio a GitHub Pages o a tu servidor web.
Si usas GitHub Pages, asegúrate de tener activada la opción en la configuración del repositorio.
Accede a la URL pública para compartir el formulario.
