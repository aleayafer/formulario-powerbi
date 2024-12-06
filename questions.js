const cuestionario = {
  "Q1": {
    "texto": "¿Cuál describe mejor tu rol profesional principal?",
    "opciones": [
      { "texto": "Analista técnico", "valor": "Analista técnico", "next": "Q_AñosExp", "progreso": 20, "notas": "Si es técnico → rama técnica" },
      { "texto": "Consultor/Freelance", "valor": "Consultor/Freelance", "next": "Q_AñosExp", "progreso": 20, "notas": "Similar a analista técnico" },
      { "texto": "Responsable de negocio", "valor": "Responsable de negocio", "next": "Q_AñosExp", "progreso": 20, "notas": "Rama negocio" },
      { "texto": "Marketing/Ventas", "valor": "Marketing/Ventas", "next": "Q_AñosExp", "progreso": 20, "notas": "Rama negocio" },
      { "texto": "Otro ámbito", "valor": "Otro ámbito", "next": "Q_AñosExp", "progreso": 20, "notas": "Rama general" }
    ]
  },
  "Q_AñosExp": {
    "texto": "¿Cuántos años de experiencia tienes en análisis de datos?",
    "opciones": [
      { "texto": "Menos de 1 año", "valor": "Menos de 1 año", "next": "Q_NivelCompetencia", "progreso": 25, "notas": 0 },
      { "texto": "1-3 años", "valor": "1-3 años", "next": "Q_NivelCompetencia", "progreso": 25, "notas": 0 },
      { "texto": "Más de 3 años", "valor": "Más de 3 años", "next": "Q_NivelCompetencia", "progreso": 25, "notas": 0 }
    ]
  },
  "Q_NivelCompetencia": {
    "texto": "¿Cómo valoras tu nivel de competencia con las tecnologías enseñadas en NamasData?",
    "opciones": [
      { "texto": "Básico", "valor": "Básico", "next": "Q_Obj6Meses", "progreso": 30, "notas": 0 },
      { "texto": "Intermedio", "valor": "Intermedio", "next": "Q_Obj6Meses", "progreso": 30, "notas": 0 },
      { "texto": "Avanzado", "valor": "Avanzado", "next": "Q_Obj6Meses", "progreso": 30, "notas": 0 }
    ]
  },
  "Q_Obj6Meses": {
    "texto": "¿Cuál es tu principal objetivo para los próximos 6 meses?",
    "opciones": [
      { "texto": "Obtener una certificación", "valor": "Obtener una certificación", "next": "Q_FormacionPrevia", "progreso": 35, "notas": 0 },
      { "texto": "Mejorar habilidades en análisis avanzado", "valor": "Mejorar habilidades en análisis avanzado", "next": "Q_FormacionPrevia", "progreso": 35, "notas": 0 },
      { "texto": "Desarrollar dashboards más eficientes", "valor": "Desarrollar dashboards más eficientes", "next": "Q_FormacionPrevia", "progreso": 35, "notas": 0 },
      { "texto": "Aumentar la eficiencia en proyectos actuales", "valor": "Aumentar la eficiencia en proyectos actuales", "next": "Q_FormacionPrevia", "progreso": 35, "notas": 0 }
    ]
  },
  "Q_FormacionPrevia": {
    "texto": "¿Has recibido formación previa o eres autodidacta?",
    "opciones": [
      { "texto": "Autodidacta", "valor": "Autodidacta", "next": "Q_EstudioItinerante", "progreso": 40, "notas": 0 },
      { "texto": "Formación previa", "valor": "Formación previa", "next": "Q_EstudioItinerante", "progreso": 40, "notas": 0 }
    ]
  },
  "Q_EstudioItinerante": {
    "texto": "¿Qué porcentaje aproximado de tu estudio se realiza en el ordenador frente a itinerancia?",
    "opciones": [
      { "texto": "Principalmente en ordenador (más del 80%)", "valor": "Principalmente en ordenador (más del 80%)", "next": "Q_Expectativas", "progreso": 45, "notas": 0 },
      { "texto": "Mitad en ordenador, mitad itinerante (aprox. 50%)", "valor": "Mitad en ordenador, mitad itinerante (aprox. 50%)", "next": "Q_Expectativas", "progreso": 45, "notas": 0 },
      { "texto": "Móvil", "valor": "Móvil", "next": "Q_Expectativas", "progreso": 45, "notas": 0 }
    ]
  },
  "Q_Expectativas": {
    "texto": "¿Qué esperas lograr con este proceso de aprendizaje?",
    "opciones": [
      { "texto": "Asimilar conceptos básicos rápidamente", "valor": "Asimilar conceptos básicos rápidamente", "next": "Q_Compromiso", "progreso": 50, "notas": 0 },
      { "texto": "Profundizar en técnicas específicas", "valor": "Profundizar en técnicas específicas", "next": "Q_Compromiso", "progreso": 50, "notas": 0 },
      { "texto": "Ganar confianza en la toma de decisiones con datos", "valor": "Ganar confianza en la toma de decisiones con datos", "next": "Q_Compromiso", "progreso": 50, "notas": 0 }
    ]
  },
  "Q_Compromiso": {
    "texto": "¿Cuál es tu nivel de compromiso con este aprendizaje?",
    "opciones": [
      { "texto": "Alto: dedicaré el tiempo necesario", "valor": "Alto", "next": "[IR SEGÚN ROL]", "progreso": 55, "notas": "Según rol: técnico → Q_TechLevel, negocio → Q_BusinessFocus, general → Q_GeneralNeed" },
      { "texto": "Medio: equilibraré con otras responsabilidades", "valor": "Medio", "next": "[IR SEGÚN ROL]", "progreso": 55, "notas": 0 },
      { "texto": "Bajo: lo tomaré con calma", "valor": "Bajo", "next": "[IR SEGÚN ROL]", "progreso": 55, "notas": 0 }
    ]
  },
  "Q_TechLevel": {
    "texto": "¿Con qué herramienta te sientes más cómodo trabajando datos?",
    "opciones": [
      { "texto": "Power BI", "valor": "Power BI", "next": "Q_TechPowerBI", "progreso": 60, "notas": "Rama Power BI" },
      { "texto": "SQL", "valor": "SQL", "next": "Q_TechSQL", "progreso": 60, "notas": "Rama SQL" },
      { "texto": "Python", "valor": "Python", "next": "Q_TechPython", "progreso": 60, "notas": "Rama Python" },
      { "texto": "Excel/Spreadsheets", "valor": "Excel/Spreadsheets", "next": "Q_TechExcel", "progreso": 60, "notas": "Rama Excel" }
    ]
  },
  "Q_TechPowerBI": {
    "texto": "¿Cuál es tu mayor reto con Power BI?",
    "opciones": [
      { "texto": "DAX", "valor": "DAX", "next": "Q_Tiempo", "progreso": 80, "notas": "Pasa a tiempo" },
      { "texto": "Modelado de datos", "valor": "Modelado de datos", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Visualizaciones", "valor": "Visualizaciones", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Optimización rendimiento", "valor": "Optimización rendimiento", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_TechSQL": {
    "texto": "¿Qué nivel de consultas SQL necesitas dominar?",
    "opciones": [
      { "texto": "Básico/Intermedio", "valor": "Básico/Intermedio", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Avanzado", "valor": "Avanzado", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_TechPython": {
    "texto": "¿Qué tipo de análisis con Python te interesa más?",
    "opciones": [
      { "texto": "Estadística básica", "valor": "Estadística básica", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Librerías análisis (pandas, matplotlib)", "valor": "Librerías análisis (pandas, matplotlib)", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Integración con Power BI", "valor": "Integración con Power BI", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_TechExcel": {
    "texto": "¿Qué buscas lograr con Excel u hojas de cálculo?",
    "opciones": [
      { "texto": "Análisis clásico (funciones, tablas dinámicas)", "valor": "Análisis clásico (funciones, tablas dinámicas)", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Automatización y preparación de datos", "valor": "Automatización y preparación de datos", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_BusinessFocus": {
    "texto": "¿Qué tipo de indicadores te resultan más valiosos?",
    "opciones": [
      { "texto": "Financieros (Balance, P&G)", "valor": "Financieros (Balance, P&G)", "next": "Q_BusinessImprove", "progreso": 60, "notas": 0 },
      { "texto": "Ventas y KPI comerciales", "valor": "Ventas y KPI comerciales", "next": "Q_BusinessImprove", "progreso": 60, "notas": 0 },
      { "texto": "Métricas de marketing (ROI, CTR)", "valor": "Métricas de marketing (ROI, CTR)", "next": "Q_BusinessImprove", "progreso": 60, "notas": 0 }
    ]
  },
  "Q_BusinessImprove": {
    "texto": "¿Qué aspecto te gustaría mejorar en el análisis de estos indicadores?",
    "opciones": [
      { "texto": "Presentar datos (Storytelling)", "valor": "Presentar datos (Storytelling)", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Cálculos avanzados (DAX)", "valor": "Cálculos avanzados (DAX)", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Modelos de datos robustos", "valor": "Modelos de datos robustos", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_GeneralNeed": {
    "texto": "¿Cuál es tu principal objetivo al introducirte en análisis de datos?",
    "opciones": [
      { "texto": "Aprender desde cero", "valor": "Aprender desde cero", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Aplicar análisis a proyectos personales", "valor": "Aplicar análisis a proyectos personales", "next": "Q_Tiempo", "progreso": 80, "notas": 0 },
      { "texto": "Mejorar perfil profesional", "valor": "Mejorar perfil profesional", "next": "Q_Tiempo", "progreso": 80, "notas": 0 }
    ]
  },
  "Q_Tiempo": {
    "texto": "¿Cuánto tiempo a la semana puedes dedicar a formarte?",
    "opciones": [
      { "texto": "Menos de 2 horas", "valor": "Menos de 2 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": 0 },
      { "texto": "2-5 horas", "valor": "2-5 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": 0 },
      { "texto": "Más de 5 horas", "valor": "Más de 5 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": 0 }
    ]
  },
  "Q_ObjetivoFinal": {
    "texto": "¿Cuál es tu objetivo final con esta formación?",
    "opciones": [
      { "texto": "Certificación PL-300", "valor": "Certificación PL-300", "next": "showFinalRec", "progreso": 100, "notas": 0 },
      { "texto": "Crear informes útiles y atractivos", "valor": "Crear informes útiles y atractivos", "next": "showFinalRec", "progreso": 100, "notas": 0 },
      { "texto": "Profundizar en técnicas avanzadas", "valor": "Profundizar en técnicas avanzadas", "next": "showFinalRec", "progreso": 100, "notas": 0 },
      { "texto": "Optimizar mis procesos de análisis", "valor": "Optimizar mis procesos de análisis", "next": "showFinalRec", "progreso": 100, "notas": 0 }
    ]
  }
};
