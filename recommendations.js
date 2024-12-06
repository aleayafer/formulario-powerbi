function getRecommendations(userData) {
  let recommendedCourses = [];

  // Variables clave
  const rol = userData.Q1;
  const experiencia = userData.Q_AñosExp; 
  const nivelComp = userData.Q_NivelCompetencia; 
  const obj6Meses = userData.Q_Obj6Meses;
  const formacionPrevia = userData.Q_FormacionPrevia;
  const estudioItinerante = userData.Q_EstudioItinerante;
  const expectativas = userData.Q_Expectativas;
  const estiloAprendizaje = userData.Q_EstiloAprendizaje;
  const recursos = userData.Q_RecursosPreferidos;
  const tipoProyectos = userData.Q_TipoProyectos;
  const compromiso = userData.Q_Compromiso;
  const tiempo = userData.Q_Tiempo;
  const objetivoFinal = userData.Q_ObjetivoFinal;

  // Lógica orientativa:

  // 1. Si el objetivo final es certificación PL-300
  if (objetivoFinal === "Certificación PL-300") {
    recommendedCourses.push("📚 Preparatorio para la certificación PL-300");
  }

  // 2. Si el usuario tiene perfil técnico (Analista técnico o Consultor/Freelance) y experiencia avanzada:
  if ((rol === "Analista técnico" || rol === "Consultor/Freelance") && experiencia === "Más de 3 años") {
    // Si su objetivo a 6 meses es profundizar en análisis avanzado:
    if (obj6Meses === "Mejorar habilidades en análisis avanzado") {
      recommendedCourses.push("📚 Curso de DAX Avanzado");
      recommendedCourses.push("📚 Modelado de Datos en Estrella con Power BI");
    }

    // Si busca optimizar proyectos actuales (productividad):
    if (obj6Meses === "Aumentar la eficiencia en proyectos actuales") {
      recommendedCourses.push("📚 Bravo para Power BI");
      recommendedCourses.push("📚 Lenguaje M Intermedio");
    }
  }

  // 3. Si el usuario es de perfil negocio (Responsable de negocio/Marketing/Ventas)
  if (rol === "Responsable de negocio" || rol === "Marketing/Ventas") {
    // Interesado en storytelling o visualizaciones
    if (obj6Meses === "Desarrollar dashboards más eficientes" || expectativas === "Mejorar la calidad de mis entregables") {
      recommendedCourses.push("📚 Visualizaciones imprescindibles para negocio");
      recommendedCourses.push("📚 Diseño creativo para informes con Figma");
    }

    // Si busca cálculos avanzados:
    if (obj6Meses === "Mejorar habilidades en análisis avanzado") {
      recommendedCourses.push("📚 Curso de DAX");
    }
  }

  // 4. Perfil general (Otro ámbito)
  if (rol === "Otro ámbito") {
    // Aprender desde cero
    if (objetivoFinal === "Crear informes útiles y atractivos" && nivelComp === "Básico") {
      recommendedCourses.push("📚 Power BI de 0 a 100");
      recommendedCourses.push("📚 Introducción al análisis de datos");
    }
  }

  // 5. Ajustes según el tiempo disponible
  if (tiempo === "Menos de 2 horas") {
    // Usuario con poco tiempo: recomendar cursos esenciales
    recommendedCourses.push("📚 Curso de Power Query Esencial");
  } else if (tiempo === "Más de 5 horas") {
    // Usuario con más tiempo: recomendar formaciones más completas
    recommendedCourses.push("📚 Curso de DAX");
    recommendedCourses.push("📚 Modelado de datos en estrella con Power BI");
  }

  // 6. Si el usuario valora recursos audiovisuales y proyectos prácticos:
  if ((estiloAprendizaje === "Prefiero contenidos audiovisuales" || estiloAprendizaje === "Prefiero práctica directa y proyectos") && recursos === "Vídeos pregrabados y casos prácticos") {
    recommendedCourses.push("📚 Curso de análisis de datos con Python (video casos prácticos)");
  }

  // 7. Evitar duplicados
  recommendedCourses = [...new Set(recommendedCourses)];

  // Si no hay recomendaciones (no coincidió nada)
  if (recommendedCourses.length === 0) {
    recommendedCourses.push("📚 Introducción al análisis de datos");
    recommendedCourses.push("📚 Power BI de 0 a 100");
  }

  return recommendedCourses;
}


function buildPersonalizedMessage(userData, courses) {
  const rol = userData.Q1 || '';
  const experiencia = userData.Q_AñosExp || '';
  const nivelComp = userData.Q_NivelCompetencia || '';
  const obj6Meses = userData.Q_Obj6Meses || '';
  const objetivoFinal = userData.Q_ObjetivoFinal || '';

  let texto = "Has indicado que tu rol es " + rol.toLowerCase() + " y tienes " + experiencia.toLowerCase() + " de experiencia. ";
  texto += "Tu nivel de competencia es " + nivelComp.toLowerCase() + " y en los próximos 6 meses tu objetivo es " + obj6Meses.toLowerCase() + ". ";
  texto += "Finalmente, tu objetivo final es " + objetivoFinal.toLowerCase() + ". ";

  texto += "Basándonos en esta información, creemos que los siguientes cursos se adaptan a tus necesidades:";

  return texto;
}
