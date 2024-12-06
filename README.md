# Formulario Modular de Analítica de Datos

Este repositorio contiene un formulario interactivo para segmentar estudiantes y recomendar cursos en analítica de datos. Incluye lógica modular para personalizar preguntas, diseño y recomendaciones.

## Estructura de Archivos
- **`index.html`**: Punto de entrada del formulario.
- **`style.css`**: Estilos y apariencia visual.
- **`questions.js`**: Configuración de las preguntas, opciones y flujo del cuestionario.
- **`recommendations.js`**: Lógica para generar recomendaciones finales basadas en las respuestas del usuario.
- **`app.js`**: Lógica principal para renderizar preguntas, capturar respuestas y mostrar resultados.

---

## Cómo Ejecutar
1. Coloca todos los archivos en el mismo directorio de tu repositorio.
2. Abre `index.html` en tu navegador para probar el formulario en funcionamiento.

---

## Cómo Modificar las Preguntas
1. Abre el archivo **`questions.js`**.
2. Añade, edita o elimina preguntas y opciones en el objeto del cuestionario.  
   - Cada pregunta contiene:
     - **Texto**: El contenido visible de la pregunta.
     - **Opciones**: Respuestas asociadas con:
       - **Texto**: Etiqueta visible de la opción.
       - **Valor**: Datos asociados a la respuesta.
       - **Next**: La siguiente pregunta o `showFinalRec` para finalizar.
       - **Progreso**: Porcentaje de avance asociado.

---

## Cómo Cambiar el Diseño
1. Abre el archivo **`style.css`**.
2. Ajusta los estilos para personalizar colores, fuentes, tamaños y márgenes según tus necesidades.

---

## Cómo Adaptar las Recomendaciones
1. Abre el archivo **`recommendations.js`**.
2. Edita la función `getRecommendations(userData)` para ajustar la lógica de recomendaciones basada en las respuestas del usuario.
3. Personaliza el mensaje final en la función `buildPersonalizedMessage(userData, courses)`.

---

## Cómo Ampliar la Lógica del Formulario
1. Abre el archivo **`app.js`**.
2. Personaliza el flujo principal y el renderizado dinámico del formulario:
   - **`renderQuestion()`**: Genera preguntas dinámicamente en la pantalla.
   - **`showFinalRecommendations()`**: Muestra los resultados finales al usuario.
   - **`updateProgress()`**: Actualiza la barra de progreso durante el cuestionario.

---

## Publicar el Formulario
1. Sube los archivos a tu repositorio y activa **GitHub Pages** en la configuración del repositorio.
2. Si utilizas un servidor web propio, sube todos los archivos al directorio raíz.
3. Accede a la URL pública generada para compartir el formulario.

---





## Prompt IA
Dispongo de un formulario modular que recomienda itinerarios formativos basados en las respuestas del usuario. Está dividido en estos archivos:

• index.html (punto de entrada)
• style.css (estilos)
• questions.js (define las preguntas, sus opciones, el texto mostrado, el 'next' y el 'progreso')
• recommendations.js (contiene la lógica para generar recomendaciones finales en base a las respuestas en 'userData')
• app.js (lógica principal que renderiza preguntas, almacena respuestas, actualiza el progreso y muestra recomendaciones finales)

Quiero que me ayudes a modificar y ampliar el formulario de forma que se añadan nuevas preguntas que influyan en las recomendaciones finales. No voy a escribir el código; quiero que tú produzcas todo el código necesario y me lo muestres completo. Además, quiero que me guíes en el proceso paso a paso. Es decir, primero pídeme el contenido de los archivos que consideres necesarios para entender su estado actual. Una vez que los analices, quiero que me indiques exactamente qué debo cambiar, añadir o eliminar. Finalmente, genera el código completo modificado (index.html, style.css, questions.js, recommendations.js, app.js) con las nuevas preguntas, la nueva lógica de recomendaciones y cualquier otro ajuste requerido.

Ten en cuenta:
• Yo copiaré y pegaré el contenido de mis archivos cuando tú me lo pidas.
• Después de analizarlo, quiero que me des el código completo ya modificado. No quiero tener que escribir nada por mi cuenta, solo copiar el nuevo código que tú generes.
• Guíame de forma clara y directa.
• Ofrece ejemplos de la nueva lógica y las nuevas preguntas.
• Asegúrate de que el formulario final resulte funcional y coherente.

¿Entendido?
