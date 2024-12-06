let userData = {};

function renderQuestion(questionId) {
  const questionData = cuestionario[questionId];
  const container = document.querySelector('.container');

  container.innerHTML = `
    <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
    </div>
    <h1>Encuesta de Analítica de Datos</h1>
    <div class="question" id="${questionId}">
      <p>${questionData.texto}</p>
    </div>
  `;

  const questionDiv = container.querySelector('.question');

  questionData.opciones.forEach(op => {
    const btn = document.createElement('button');
    btn.classList.add('primary');
    btn.innerText = op.texto;
    btn.onclick = () => {
      // Guardar respuesta
      userData[questionId] = op.valor;
      updateProgress(op.progreso || 0);

      // Manejar la lógica especial de Q_Compromiso
      if (questionId === 'Q_Compromiso' && op.next === '[IR SEGÚN ROL]') {
        // Según el rol (Q1), definimos el siguiente paso
        const rol = userData.Q1;
        let nextStep;
        if (rol === "Analista técnico" || rol === "Consultor/Freelance") {
          nextStep = "Q_TechLevel";
        } else if (rol === "Responsable de negocio" || rol === "Marketing/Ventas") {
          nextStep = "Q_BusinessFocus";
        } else {
          nextStep = "Q_GeneralNeed";
        }
        renderQuestion(nextStep);
      } else if (op.next === 'showFinalRec') {
        showFinalRecommendations();
      } else {
        // Siguiente pregunta normal
        renderQuestion(op.next);
      }
    };
    questionDiv.appendChild(btn);
  });
}

function showFinalRecommendations() {
  const recommendedCourses = getRecommendations(userData);
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class="progress-container">
      <div class="progress-bar" id="progressBar" style="width:100%"></div>
    </div>
    <h1>Itinerario recomendado</h1>
    <div id="recommendation-list"></div>
    <div id="personalized-message"></div>
    <button class="secondary" onclick="restart()">Volver a empezar</button>
  `;

  const list = document.getElementById('recommendation-list');
  recommendedCourses.forEach(course => {
    const p = document.createElement('p');
    p.innerText = course;
    list.appendChild(p);
  });

  const msgDiv = document.getElementById('personalized-message');
  const message = buildPersonalizedMessage(userData, recommendedCourses);
  msgDiv.innerText = message;
}

function restart() {
  for (let key in userData) userData[key] = null;
  renderQuestion('Q1');
  updateProgress(0);
}

function updateProgress(value) {
  const progressBar = document.getElementById('progressBar');
  if (progressBar) progressBar.style.width = value + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion('Q1');
});
