function getRecommendations(userData) {
  let recommendedCourses = [];

  // Ejemplo simple de lógica (ajusta según tus necesidades):
  // Si el usuario tiene poca experiencia y nivel básico, recomendar cursos introductorios.
  if (userData.Q_AñosExp === "Menos de 1 año" && userData.Q_NivelCompetencia === "Básico") {
    recommendedCourses.push("📚 Power BI - De 0 a 100");
  } else if (userData.Q_ObjetivoFinal === "Certificación PL-300") {
    recommendedCourses.push("📚 Preparatorio para la certificación PL-300");
  } else {
    // Recomendaciones por defecto
    recommendedCourses.push("📚 Introducción al análisis de datos");
    recommendedCourses.push("📚 Curso de DAX");
  }

  return recommendedCourses;
}

function buildPersonalizedMessage(userData, courses) {
  let texto = "Has indicado que tu rol es " + (userData.Q1 || '').toLowerCase() + ". ";
  texto += "Tienes " + (userData.Q_AñosExp || '').toLowerCase() + " de experiencia, ";
  texto += "y tu nivel de competencia es " + (userData.Q_NivelCompetencia || '').toLowerCase() + ". ";

  texto += "Tu objetivo en los próximos meses es " + (userData.Q_Obj6Meses || '').toLowerCase() + ". ";
  texto += "Además, has indicado que eres " + (userData.Q_FormacionPrevia || '').toLowerCase() + " y que tu estudio es " + (userData.Q_EstudioItinerante || '').toLowerCase() + ". ";

  texto += "Esperas " + (userData.Q_Expectativas || '').toLowerCase() + " y tu compromiso es " + (userData.Q_Compromiso || '').toLowerCase() + ". ";

  texto += "Dado el tiempo que puedes dedicar (" + (userData.Q_Tiempo || 'no especificado') + ") y tu objetivo final (" + (userData.Q_ObjetivoFinal || '').toLowerCase() + "), creemos que estas recomendaciones te serán útiles.";

  return texto;
}
