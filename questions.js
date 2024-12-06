const cuestionario = {
  "Q1": {
    "texto": "¿Cuál describe mejor tu rol profesional principal?",
    "opciones": [
      { "texto": "Analista técnico", "valor": "Analista técnico", "next": "Q_AñosExp", "progreso": 20, "notas": "Perfil técnico" },
      { "texto": "Consultor/Freelance", "valor": "Consultor/Freelance", "next": "Q_AñosExp", "progreso": 20, "notas": "Perfil técnico/consultor" },
      { "texto": "Responsable de negocio", "valor": "Responsable de negocio", "next": "Q_AñosExp", "progreso": 20, "notas": "Perfil negocio" },
      { "texto": "Marketing/Ventas", "valor": "Marketing/Ventas", "next": "Q_AñosExp", "progreso": 20, "notas": "Perfil negocio" },
      { "texto": "Otro ámbito", "valor": "Otro ámbito", "next": "Q_AñosExp", "progreso": 20, "notas": "Perfil general" }
    ]
  },
  "Q_AñosExp": {
    "texto": "¿Cuántos años de experiencia tienes en análisis de datos?",
    "opciones": [
      { "texto": "Menos de 1 año", "valor": "Menos de 1 año", "next": "Q_NivelCompetencia", "progreso": 25, "notas": "Principiante" },
      { "texto": "1-3 años", "valor": "1-3 años", "next": "Q_NivelCompetencia", "progreso": 25, "notas": "Intermedio" },
      { "texto": "Más de 3 años", "valor": "Más de 3 años", "next": "Q_NivelCompetencia", "progreso": 25, "notas": "Avanzado" }
    ]
  },
  "Q_NivelCompetencia": {
    "texto": "¿Cómo valoras tu nivel de competencia con las tecnologías enseñadas en NamasData?",
    "opciones": [
      { "texto": "Básico", "valor": "Básico", "next": "Q_Obj6Meses", "progreso": 30, "notas": "Conocimientos iniciales" },
      { "texto": "Intermedio", "valor": "Intermedio", "next": "Q_Obj6Meses", "progreso": 30, "notas": "Dominio moderado" },
      { "texto": "Avanzado", "valor": "Avanzado", "next": "Q_Obj6Meses", "progreso": 30, "notas": "Dominio experto" }
    ]
  },
  "Q_Obj6Meses": {
    "texto": "¿Cuál es tu principal objetivo para los próximos 6 meses?",
    "opciones": [
      { "texto": "Obtener una certificación", "valor": "Obtener una certificación", "next": "Q_FormacionPrevia", "progreso": 35, "notas": "Enfoque en credenciales" },
      { "texto": "Mejorar habilidades en análisis avanzado", "valor": "Mejorar habilidades en análisis avanzado", "next": "Q_FormacionPrevia", "progreso": 35, "notas": "Enfoque en profundidad técnica" },
      { "texto": "Desarrollar dashboards más eficientes", "valor": "Desarrollar dashboards más eficientes", "next": "Q_FormacionPrevia", "progreso": 35, "notas": "Enfoque en visualización" },
      { "texto": "Aumentar la eficiencia en proyectos actuales", "valor": "Aumentar la eficiencia en proyectos actuales", "next": "Q_FormacionPrevia", "progreso": 35, "notas": "Enfoque en productividad" }
    ]
  },
  "Q_FormacionPrevia": {
    "texto": "¿Has recibido formación previa o eres autodidacta?",
    "opciones": [
      { "texto": "Autodidacta", "valor": "Autodidacta", "next": "Q_EstudioItinerante", "progreso": 40, "notas": "Aprendizaje independiente" },
      { "texto": "Formación previa", "valor": "Formación previa", "next": "Q_EstudioItinerante", "progreso": 40, "notas": "Experiencia formativa previa" }
    ]
  },
  "Q_EstudioItinerante": {
    "texto": "¿En qué formato estudias con más frecuencia?",
    "opciones": [
      { "texto": "Principalmente en ordenador (más del 80%)", "valor": "Principalmente en ordenador (más del 80%)", "next": "Q_Expectativas", "progreso": 45, "notas": "Sesiones concentradas en escritorio" },
      { "texto": "Mitad en ordenador, mitad itinerante (aprox. 50%)", "valor": "Mitad en ordenador, mitad itinerante (aprox. 50%)", "next": "Q_Expectativas", "progreso": 45, "notas": "Aprendizaje mixto" },
      { "texto": "Principalmente en movilidad (más del 80%)", "valor": "Principalmente en movilidad (más del 80%)", "next": "Q_Expectativas", "progreso": 45, "notas": "Aprendizaje flexible en movimiento" }
    ]
  },
  "Q_Expectativas": {
    "texto": "¿Qué esperas lograr con este proceso de aprendizaje?",
    "opciones": [
      { "texto": "Dominar conceptos clave rápidamente", "valor": "Dominar conceptos clave rápidamente", "next": "Q_EstiloAprendizaje", "progreso": 50, "notas": "Rendimiento en corto plazo" },
      { "texto": "Profundizar en áreas técnicas específicas", "valor": "Profundizar en áreas técnicas específicas", "next": "Q_EstiloAprendizaje", "progreso": 50, "notas": "Enfoque especializado" },
      { "texto": "Sentirme seguro/a en la toma de decisiones con datos", "valor": "Sentirme seguro/a en la toma de decisiones con datos", "next": "Q_EstiloAprendizaje", "progreso": 50, "notas": "Confianza en el análisis" },
      { "texto": "Mejorar la calidad de mis entregables", "valor": "Mejorar la calidad de mis entregables", "next": "Q_EstiloAprendizaje", "progreso": 50, "notas": "Enfoque en calidad y presentación" }
    ]
  },
  "Q_EstiloAprendizaje": {
    "texto": "¿Cuál describe mejor tu estilo de aprendizaje?",
    "opciones": [
      { "texto": "Prefiero contenidos audiovisuales", "valor": "Prefiero contenidos audiovisuales", "next": "Q_RecursosPreferidos", "progreso": 55, "notas": "Visual y auditivo" },
      { "texto": "Prefiero lecturas y documentación técnica", "valor": "Prefiero lecturas y documentación técnica", "next": "Q_RecursosPreferidos", "progreso": 55, "notas": "Teórico y analítico" },
      { "texto": "Prefiero práctica directa y proyectos", "valor": "Prefiero práctica directa y proyectos", "next": "Q_RecursosPreferidos", "progreso": 55, "notas": "Orientado a la acción" }
    ]
  },
  "Q_RecursosPreferidos": {
    "texto": "¿Qué tipo de recursos formativos valoras más?",
    "opciones": [
      { "texto": "Clases en directo con instructores", "valor": "Clases en directo con instructores", "next": "Q_TipoProyectos", "progreso": 60, "notas": "Interacción guiada" },
      { "texto": "Vídeos pregrabados y casos prácticos", "valor": "Vídeos pregrabados y casos prácticos", "next": "Q_TipoProyectos", "progreso": 60, "notas": "Flexibilidad y autoestudio" },
      { "texto": "Comunidad de aprendizaje y foros", "valor": "Comunidad de aprendizaje y foros", "next": "Q_TipoProyectos", "progreso": 60, "notas": "Colaboración y networking" },
      { "texto": "Documentación y manuales detallados", "valor": "Documentación y manuales detallados", "next": "Q_TipoProyectos", "progreso": 60, "notas": "Referencia exhaustiva" }
    ]
  },
  "Q_TipoProyectos": {
    "texto": "¿En qué tipo de proyectos sueles aplicar el análisis de datos?",
    "opciones": [
      { "texto": "Proyectos internos de empresa", "valor": "Proyectos internos de empresa", "next": "Q_Compromiso", "progreso": 65, "notas": "Contexto corporativo" },
      { "texto": "Proyectos para clientes externos", "valor": "Proyectos para clientes externos", "next": "Q_Compromiso", "progreso": 65, "notas": "Consultoría/freelance" },
      { "texto": "Proyectos personales o estudios", "valor": "Proyectos personales o estudios", "next": "Q_Compromiso", "progreso": 65, "notas": "Entorno individual" },
      { "texto": "Mezcla de proyectos de diversa índole", "valor": "Mezcla de proyectos de diversa índole", "next": "Q_Compromiso", "progreso": 65, "notas": "Versatilidad" }
    ]
  },
  "Q_Compromiso": {
    "texto": "¿Cuál es tu nivel de compromiso con este aprendizaje?",
    "opciones": [
      { "texto": "Alto: dedicaré el tiempo necesario", "valor": "Alto: dedicaré el tiempo necesario", "next": "[IR SEGÚN ROL]", "progreso": 70, "notas": "Alta dedicación" },
      { "texto": "Medio: lo combinaré con otras actividades", "valor": "Medio: lo combinaré con otras actividades", "next": "[IR SEGÚN ROL]", "progreso": 70, "notas": "Equilibrio con otras tareas" },
      { "texto": "Bajo: avanzaré sin presiones", "valor": "Bajo: avanzaré sin presiones", "next": "[IR SEGÚN ROL]", "progreso": 70, "notas": "Progreso pausado" }
    ]
  },

  // Rama técnica
  "Q_TechLevel": {
    "texto": "¿Con qué herramienta te sientes más cómodo trabajando datos?",
    "opciones": [
      { "texto": "Power BI", "valor": "Power BI", "next": "Q_TechPowerBI", "progreso": 75, "notas": "Foco en Power BI" },
      { "texto": "SQL", "valor": "SQL", "next": "Q_TechSQL", "progreso": 75, "notas": "Foco en SQL" },
      { "texto": "Python", "valor": "Python", "next": "Q_TechPython", "progreso": 75, "notas": "Foco en Python" },
      { "texto": "Excel/Spreadsheets", "valor": "Excel/Spreadsheets", "next": "Q_TechExcel", "progreso": 75, "notas": "Foco en Excel" }
    ]
  },
  "Q_TechPowerBI": {
    "texto": "¿Cuál es tu mayor reto con Power BI?",
    "opciones": [
      { "texto": "DAX", "valor": "DAX", "next": "Q_Tiempo", "progreso": 80, "notas": "Dominio de lenguaje DAX" },
      { "texto": "Modelado de datos", "valor": "Modelado de datos", "next": "Q_Tiempo", "progreso": 80, "notas": "Creación de modelos robustos" },
      { "texto": "Visualizaciones", "valor": "Visualizaciones", "next": "Q_Tiempo", "progreso": 80, "notas": "Diseño de informes atractivos" },
      { "texto": "Optimización rendimiento", "valor": "Optimización rendimiento", "next": "Q_Tiempo", "progreso": 80, "notas": "Mejora del rendimiento" }
    ]
  },
  "Q_TechSQL": {
    "texto": "¿Qué nivel de consultas SQL necesitas dominar?",
    "opciones": [
      { "texto": "Básico/Intermedio", "valor": "Básico/Intermedio", "next": "Q_Tiempo", "progreso": 80, "notas": "Sentencias fundamentales" },
      { "texto": "Avanzado", "valor": "Avanzado", "next": "Q_Tiempo", "progreso": 80, "notas": "Consultas complejas" }
    ]
  },
  "Q_TechPython": {
    "texto": "¿Qué tipo de análisis con Python te interesa más?",
    "opciones": [
      { "texto": "Estadística básica", "valor": "Estadística básica", "next": "Q_Tiempo", "progreso": 80, "notas": "Fundamentos estadísticos" },
      { "texto": "Librerías análisis (pandas, matplotlib)", "valor": "Librerías análisis (pandas, matplotlib)", "next": "Q_Tiempo", "progreso": 80, "notas": "Manipulación y visualización de datos" },
      { "texto": "Integración con Power BI", "valor": "Integración con Power BI", "next": "Q_Tiempo", "progreso": 80, "notas": "Ecosistema integrado" }
    ]
  },
  "Q_TechExcel": {
    "texto": "¿Qué buscas lograr con Excel u hojas de cálculo?",
    "opciones": [
      { "texto": "Análisis clásico (funciones, tablas dinámicas)", "valor": "Análisis clásico (funciones, tablas dinámicas)", "next": "Q_Tiempo", "progreso": 80, "notas": "Enfoque en fundamentos de análisis" },
      { "texto": "Automatización y preparación de datos", "valor": "Automatización y preparación de datos", "next": "Q_Tiempo", "progreso": 80, "notas": "Enfoque en eficiencia" }
    ]
  },

  // Rama negocio
  "Q_BusinessFocus": {
    "texto": "¿Qué tipo de indicadores te resultan más valiosos?",
    "opciones": [
      { "texto": "Financieros (Balance, P&G)", "valor": "Financieros (Balance, P&G)", "next": "Q_BusinessImprove", "progreso": 75, "notas": "Indicadores financieros" },
      { "texto": "Ventas y KPI comerciales", "valor": "Ventas y KPI comerciales", "next": "Q_BusinessImprove", "progreso": 75, "notas": "Indicadores comerciales" },
      { "texto": "Métricas de marketing (ROI, CTR)", "valor": "Métricas de marketing (ROI, CTR)", "next": "Q_BusinessImprove", "progreso": 75, "notas": "Indicadores de marketing" }
    ]
  },
  "Q_BusinessImprove": {
    "texto": "¿Qué aspecto te gustaría mejorar en el análisis de estos indicadores?",
    "opciones": [
      { "texto": "Presentar datos (Storytelling)", "valor": "Presentar datos (Storytelling)", "next": "Q_Tiempo", "progreso": 80, "notas": "Enfoque en narrativa" },
      { "texto": "Cálculos avanzados (DAX)", "valor": "Cálculos avanzados (DAX)", "next": "Q_Tiempo", "progreso": 80, "notas": "Profundidad técnica" },
      { "texto": "Modelos de datos robustos", "valor": "Modelos de datos robustos", "next": "Q_Tiempo", "progreso": 80, "notas": "Arquitectura sólida" }
    ]
  },

  // Rama general
  "Q_GeneralNeed": {
    "texto": "¿Cuál es tu principal objetivo al introducirte en análisis de datos?",
    "opciones": [
      { "texto": "Aprender desde cero", "valor": "Aprender desde cero", "next": "Q_Tiempo", "progreso": 80, "notas": "Base sólida desde el inicio" },
      { "texto": "Aplicar análisis a proyectos personales", "valor": "Aplicar análisis a proyectos personales", "next": "Q_Tiempo", "progreso": 80, "notas": "Casos prácticos propios" },
      { "texto": "Mejorar perfil profesional", "valor": "Mejorar perfil profesional", "next": "Q_Tiempo", "progreso": 80, "notas": "Impulso laboral" }
    ]
  },

  // Tiempo y objetivo final
  "Q_Tiempo": {
    "texto": "¿Cuánto tiempo a la semana puedes dedicar a formarte?",
    "opciones": [
      { "texto": "Menos de 2 horas", "valor": "Menos de 2 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": "Poco tiempo disponible" },
      { "texto": "2-5 horas", "valor": "2-5 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": "Dedicación moderada" },
      { "texto": "Más de 5 horas", "valor": "Más de 5 horas", "next": "Q_ObjetivoFinal", "progreso": 90, "notas": "Dedicación amplia" }
    ]
  },
  "Q_ObjetivoFinal": {
    "texto": "¿Cuál es tu objetivo final con esta formación?",
    "opciones": [
      { "texto": "Certificación PL-300", "valor": "Certificación PL-300", "next": "showFinalRec", "progreso": 100, "notas": "Preparación certificación oficial" },
      { "texto": "Crear informes útiles y atractivos", "valor": "Crear informes útiles y atractivos", "next": "showFinalRec", "progreso": 100, "notas": "Mejora en storytelling visual" },
      { "texto": "Profundizar en técnicas avanzadas", "valor": "Profundizar en técnicas avanzadas", "next": "showFinalRec", "progreso": 100, "notas": "Dominio experto" },
      { "texto": "Optimizar mis procesos de análisis", "valor": "Optimizar mis procesos de análisis", "next": "showFinalRec", "progreso": 100, "notas": "Eficiencia operativa" }
    ]
  }
};
