const FALLBACK_DATA = {
  "nombre": "NIHSS",
  "nombre_completo": "NIHSS (national Institutes of Health Stroke Scale)",
  "idioma": "es",
  "fuente": {
    "url": "https://www.rccc.eu/ppc/indicadores/Neuro/NIHSS.html#page2",
    "sitio": "Rapid Critical Care Consult (RCCC)",
    "fecha_consulta": "2026-08-04"
  },
  "estructura": {
    "cantidad_apartados_clasicos": 11,
    "cantidad_evaluaciones": 15,
    "puntaje_minimo": 0,
    "puntaje_maximo": 42,
    "regla_calculo": "Sumar únicamente los puntajes numéricos de las evaluaciones valorables.",
    "manejo_incomprobable": "Los valores incomprobables/no evaluables deben registrarse como UN o null y no deben sumarse como puntos clínicos."
  },
  "instruccion_general": "Realizar la exploración en la forma y el orden indicados. Consultar las instrucciones de cada técnica, evaluar al paciente y seleccionar la opción que mejor se ajuste a la exploración. La página muestra una puntuación acumulada después de cada apartado. Al finalizar, el botón de resultado muestra la puntuación total y el resumen del examen.",
  "pasos": [
    {
      "orden": 1,
      "codigo": "1a",
      "titulo": "Nivel de conciencia",
      "siguiente_paso": "1b",
      "etiqueta_siguiente_en_pagina": "Siguiente:1b.Preguntar",
      "instrucciones": "El investigador debe elegir una respuesta aunque existan obstáculos que impidan una evaluación completa, como tubo endotraqueal, barrera lingüística o trauma/vendajes orotraqueales. El puntaje 3 se asigna sólo si el paciente no realiza ningún movimiento, distinto de posturas reflejas, ante la estimulación dolorosa.",
      "opciones": [
        { "puntaje": 0, "valor": "Alerta/responde" },
        { "puntaje": 1, "valor": "Respuesta a mínimos estímulos (somnoliento)" },
        { "puntaje": 2, "valor": "Respuesta sólo al dolor (estuporoso)" },
        { "puntaje": 3, "valor": "Respuesta refleja/coma" }
      ]
    },
    {
      "orden": 2,
      "codigo": "1b",
      "titulo": "Preguntas de nivel de conciencia (LOC)",
      "siguiente_paso": "1c",
      "etiqueta_siguiente_en_pagina": "Siguiente:1c.Ordenes",
      "instrucciones": "Preguntar al paciente el mes actual y su edad. La respuesta debe ser exacta; no se aceptan aproximaciones. Los pacientes afásicos o estuporosos que no comprendan las preguntas reciben 2 puntos. Si el paciente no puede hablar por intubación endotraqueal, trauma orotraqueal, disartria severa, barrera lingüística u otro problema no secundario a afasia, recibe 1 punto. Se valora sólo la respuesta inicial y no se debe ayudar al paciente con indicaciones verbales ni no verbales.",
      "opciones": [
        { "puntaje": 0, "valor": "Ambas respuestas correctas" },
        { "puntaje": 1, "valor": "Una respuesta correcta, o imposibilidad de hablar por disartria/intubación u otra barrera no afásica" },
        { "puntaje": 2, "valor": "Ninguna respuesta correcta; paciente afásico o estuporoso que no comprende" }
      ]
    },
    {
      "orden": 3,
      "codigo": "1c",
      "titulo": "Órdenes de nivel de conciencia (LOC)",
      "siguiente_paso": "2",
      "etiqueta_siguiente_en_pagina": "Siguiente:2.Mirada Conjugada",
      "instrucciones": "Solicitar al paciente que abra y cierre los ojos y luego que apriete y suelte la mano no parética. Sustituir la orden si no puede usar las manos. Se acepta un intento inequívoco que no pueda completar por debilidad. Si no responde, mostrarle cómo realizar la tarea y registrar si sigue dos, una o ninguna orden. En pacientes con trauma, amputación u otros impedimentos físicos, utilizar órdenes adecuadas de un solo paso. Valorar únicamente el primer intento.",
      "opciones": [
        { "puntaje": 0, "valor": "Realiza correctamente ambas órdenes" },
        { "puntaje": 1, "valor": "Realiza correctamente una orden" },
        { "puntaje": 2, "valor": "No realiza correctamente ninguna orden" }
      ]
    },
    {
      "orden": 4,
      "codigo": "2",
      "titulo": "Mirada conjugada",
      "siguiente_paso": "3",
      "etiqueta_siguiente_en_pagina": "Siguiente:3.Campo Visual",
      "instrucciones": "Examinar sólo los movimientos horizontales de los ojos. Valorar los movimientos voluntarios o reflejos oculocefálicos; no realizar prueba calórica. Si una desviación conjugada puede superarse mediante actividad voluntaria o refleja, asignar 1 punto. Una parálisis periférica aislada de los nervios craneales III, IV o VI también recibe 1 punto. La mirada puede evaluarse en pacientes afásicos. Ante trauma ocular, vendajes, ceguera preexistente u otros trastornos visuales, utilizar movimientos reflejos y elegir la opción más adecuada.",
      "opciones": [
        { "puntaje": 0, "valor": "Normal" },
        { "puntaje": 1, "valor": "Parálisis parcial de la mirada" },
        { "puntaje": 2, "valor": "Desviación forzada o parálisis completa de la mirada" }
      ]
    },
    {
      "orden": 5,
      "codigo": "3",
      "titulo": "Campos visuales",
      "siguiente_paso": "4",
      "etiqueta_siguiente_en_pagina": "Siguiente:4.Paralisis facial",
      "instrucciones": "Examinar los cuadrantes visuales superior e inferior por confrontación, mediante conteo de dedos o estímulo visual. Si el paciente mira adecuadamente hacia el lado de los dedos en movimiento, puede registrarse como normal. Si existe ceguera unilateral o enucleación, evaluar el otro ojo. Asignar 1 punto sólo ante una asimetría bien definida, incluida la cuadrantanopsia. Si el paciente es ciego por cualquier causa, asignar 3 puntos. Realizar estimulación doble simultánea; si hay extinción, asignar 1 punto en este componente y utilizar el hallazgo para el componente 11.",
      "opciones": [
        { "puntaje": 0, "valor": "Sin alteración" },
        { "puntaje": 1, "valor": "Hemianopsia parcial o asimetría campimétrica bien definida, incluida cuadrantanopsia" },
        { "puntaje": 2, "valor": "Hemianopsia completa" },
        { "puntaje": 3, "valor": "Hemianopsia bilateral o ceguera total" }
      ]
    },
    {
      "orden": 6,
      "codigo": "4",
      "titulo": "Parálisis facial",
      "siguiente_paso": "5a",
      "etiqueta_siguiente_en_pagina": "Siguiente:5a. Brazo derecho",
      "instrucciones": "Pedir al paciente, o demostrarle, que muestre los dientes, levante las cejas y cierre los ojos. En pacientes con respuesta deficiente o que no comprenden, registrar la simetría del gesto ante estímulos dolorosos. Si trauma, vendajes faciales, tubo orotraqueal, cinta u otra barrera física ocultan la cara, retirarlos en la medida de lo posible.",
      "opciones": [
        { "puntaje": 0, "valor": "Normal" },
        { "puntaje": 1, "valor": "Debilidad o paresia menor; sonrisa asimétrica" },
        { "puntaje": 2, "valor": "Parálisis o debilidad parcial" },
        { "puntaje": 3, "valor": "Parálisis completa" }
      ]
    },
    {
      "orden": 7,
      "codigo": "5a",
      "titulo": "Brazo derecho",
      "siguiente_paso": "5b",
      "etiqueta_siguiente_en_pagina": "Siguiente:5b. Brazo Izdo",
      "instrucciones": "Extender el brazo con la palma hacia abajo a 90 grados si el paciente está sentado o a 45 grados si está en decúbito supino. Registrar claudicación si el brazo cae antes de 10 segundos. Al paciente afásico se lo puede estimular con tono urgente y demostración, pero no con estímulos dolorosos. Evaluar cada extremidad por separado, comenzando por el brazo no parético. Sólo ante amputación o fusión articular del hombro registrar el componente como incomprobable y documentar la causa.",
      "opciones": [
        { "puntaje": 0, "valor": "No claudica; mantiene la posición durante 10 segundos" },
        { "puntaje": 1, "valor": "Claudica antes de 10 segundos, pero no toca la cama" },
        { "puntaje": 2, "valor": "Realiza algún esfuerzo contra la gravedad, pero no puede mantener la posición" },
        { "puntaje": 3, "valor": "No realiza esfuerzo contra la gravedad, pero presenta algún movimiento" },
        { "puntaje": 4, "valor": "Ningún movimiento" },
        { "puntaje": null, "codigo": "UN", "valor": "Incomprobable por amputación o fusión articular", "sumar_al_total": false }
      ]
    },
    {
      "orden": 8,
      "codigo": "5b",
      "titulo": "Brazo izquierdo",
      "siguiente_paso": "6a",
      "etiqueta_siguiente_en_pagina": "Siguiente:6a. Pierna derecha",
      "instrucciones": "Extender el brazo con la palma hacia abajo a 90 grados si el paciente está sentado o a 45 grados si está en decúbito supino. Registrar claudicación si el brazo cae antes de 10 segundos. Al paciente afásico se lo puede estimular con tono urgente y demostración, pero no con estímulos dolorosos. Evaluar cada extremidad por separado, comenzando por el brazo no parético. Sólo ante amputación o fusión articular del hombro registrar el componente como incomprobable y documentar la causa.",
      "opciones": [
        { "puntaje": 0, "valor": "No claudica; mantiene la posición durante 10 segundos" },
        { "puntaje": 1, "valor": "Claudica antes de 10 segundos, pero no toca la cama" },
        { "puntaje": 2, "valor": "Realiza algún esfuerzo contra la gravedad, pero no puede mantener la posición" },
        { "puntaje": 3, "valor": "No realiza esfuerzo contra la gravedad, pero presenta algún movimiento" },
        { "puntaje": 4, "valor": "Ningún movimiento" },
        { "puntaje": null, "codigo": "UN", "valor": "Incomprobable por amputación o fusión articular", "sumar_al_total": false }
      ]
    },
    {
      "orden": 9,
      "codigo": "6a",
      "titulo": "Pierna derecha",
      "siguiente_paso": "6b",
      "etiqueta_siguiente_en_pagina": "Siguiente:6a. Pierna izquieda",
      "instrucciones": "Con el paciente en decúbito supino, sostener la pierna a 30 grados. Registrar claudicación si cae antes de 5 segundos. Al paciente afásico se lo puede estimular con tono urgente y demostración, pero no con estímulos dolorosos. Evaluar cada extremidad por separado, comenzando por la pierna no parética. Sólo ante amputación o fusión articular de la cadera registrar el componente como incomprobable y documentar la causa.",
      "opciones": [
        { "puntaje": 0, "valor": "No claudica; mantiene la posición durante 5 segundos" },
        { "puntaje": 1, "valor": "Claudica antes de 5 segundos, pero no toca la cama" },
        { "puntaje": 2, "valor": "Realiza algún esfuerzo contra la gravedad, pero no puede mantener la posición" },
        { "puntaje": 3, "valor": "No realiza esfuerzo contra la gravedad, pero presenta algún movimiento" },
        { "puntaje": 4, "valor": "Ningún movimiento" },
        { "puntaje": null, "codigo": "UN", "valor": "Incomprobable por amputación o fusión articular", "sumar_al_total": false }
      ]
    },
    {
      "orden": 10,
      "codigo": "6b",
      "titulo": "Pierna izquierda",
      "siguiente_paso": "7",
      "etiqueta_siguiente_en_pagina": "Siguiente:7.Ataxia de miembros",
      "instrucciones": "Con el paciente en decúbito supino, sostener la pierna a 30 grados. Registrar claudicación si cae antes de 5 segundos. Al paciente afásico se lo puede estimular con tono urgente y demostración, pero no con estímulos dolorosos. Evaluar cada extremidad por separado, comenzando por la pierna no parética. Sólo ante amputación o fusión articular de la cadera registrar el componente como incomprobable y documentar la causa.",
      "opciones": [
        { "puntaje": 0, "valor": "No claudica; mantiene la posición durante 5 segundos" },
        { "puntaje": 1, "valor": "Claudica antes de 5 segundos, pero no toca la cama" },
        { "puntaje": 2, "valor": "Realiza algún esfuerzo contra la gravedad, pero no puede mantener la posición" },
        { "puntaje": 3, "valor": "No realiza esfuerzo contra la gravedad, pero presenta algún movimiento" },
        { "puntaje": 4, "valor": "Ningún movimiento" },
        { "puntaje": null, "codigo": "UN", "valor": "Incomprobable por amputación o fusión articular", "sumar_al_total": false }
      ]
    },
    {
      "orden": 11,
      "codigo": "7",
      "titulo": "Ataxia de miembros",
      "siguiente_paso": "8",
      "etiqueta_siguiente_en_pagina": "Siguiente:8.Sensibilidad",
      "instrucciones": "Buscar evidencia de lesión cerebelosa unilateral. Realizar la prueba con los ojos abiertos y, si hay defecto visual, dentro de un campo visual intacto. Practicar dedo-nariz-dedo y talón-espinilla en ambos lados. Registrar ataxia sólo si es desproporcionada respecto de la debilidad. Se considera ausente en pacientes que no comprenden o están paralizados. En caso de ceguera, realizar la prueba haciendo que el paciente toque su nariz desde la posición de brazo extendido.",
      "opciones": [
        { "puntaje": 0, "valor": "Sin ataxia; incluye pacientes afásicos o hemipléjicos en quienes no puede demostrarse ataxia" },
        { "puntaje": 1, "valor": "Ataxia en un miembro superior o inferior" },
        { "puntaje": 2, "valor": "Ataxia en dos miembros" }
      ],
      "excepcion": {
        "codigo": "UN",
        "valor_mencionado_en_instruccion_de_la_pagina": 9,
        "significado": "Incomprobable por amputación o fusión articular",
        "visible_como_opcion_en_la_calculadora": false,
        "sumar_al_total": false
      }
    },
    {
      "orden": 12,
      "codigo": "8",
      "titulo": "Sensibilidad",
      "siguiente_paso": "9",
      "etiqueta_siguiente_en_pagina": "Siguiente:9.Lenguaje",
      "instrucciones": "Valorar la sensación o el gesto ante un pinchazo, o la retirada ante un estímulo doloroso en pacientes insensibles o afásicos. Sólo se califica como anormal la pérdida atribuible al evento vascular cerebral. Evaluar las áreas necesarias —brazos, no las manos; piernas; tronco y cara— para determinar la pérdida hemisensitiva. Asignar 2 puntos sólo cuando pueda demostrarse una pérdida severa o total. En eventos del tronco cerebral con pérdida bilateral, asignar 2. Si el paciente no responde y está cuadripléjico, asignar 2. Si el componente 1a es 3, asignar arbitrariamente 2.",
      "opciones": [
        { "puntaje": 0, "valor": "Normal; sin pérdida sensitiva atribuible al evento vascular" },
        { "puntaje": 1, "valor": "Hipoestesia ligera o moderada; puede aplicarse a paciente afásico o estuporoso sin pérdida severa demostrable" },
        { "puntaje": 2, "valor": "Hipoestesia severa o total, pérdida bilateral, anestesia, cuadriplejia sin respuesta o coma con 1a = 3" }
      ]
    },
    {
      "orden": 13,
      "codigo": "9",
      "titulo": "Lenguaje",
      "siguiente_paso": "10",
      "etiqueta_siguiente_en_pagina": "Siguiente:10.Disartria",
      "instrucciones": "Utilizar la información de comprensión obtenida en las secciones previas. Pedir al paciente que describa la imagen anexa y lea la lista de enunciados. Evaluar la comprensión también a partir de las órdenes previas. Si la pérdida visual interfiere, pedir que identifique objetos colocados en su mano, repita y produzca lenguaje. A los pacientes intubados se les debe pedir que escriban. Si está en coma, asignar arbitrariamente 3 puntos. En pacientes estuporosos o con cooperación limitada, elegir una puntuación; usar 3 sólo si no puede hablar y no obedece ninguna orden.",
      "opciones": [
        { "puntaje": 0, "valor": "Normal" },
        { "puntaje": 1, "valor": "Afasia leve a moderada" },
        { "puntaje": 2, "valor": "Afasia severa, incluida afasia de Broca o Wernicke" },
        { "puntaje": 3, "valor": "Mutismo, afasia global o coma" }
      ]
    },
    {
      "orden": 14,
      "codigo": "10",
      "titulo": "Disartria",
      "siguiente_paso": "11",
      "etiqueta_siguiente_en_pagina": "Siguiente:11.Extición",
      "instrucciones": "Si se considera que el habla es normal, obtener una muestra adecuada pidiendo al paciente que lea o repita las palabras de la lista anexa. En afasia severa, valorar la claridad de la articulación del lenguaje espontáneo. Sólo ante intubación u otra barrera física para producir el habla registrar el componente como incomprobable. No explicar al paciente por qué se está examinando la articulación.",
      "opciones": [
        { "puntaje": 0, "valor": "Normal" },
        { "puntaje": 1, "valor": "Disartria leve a moderada; habla poco clara" },
        { "puntaje": 2, "valor": "Disartria severa; habla ininteligible o mutismo/anartia" }
      ],
      "excepcion": {
        "codigo": "UN",
        "puntaje": null,
        "significado": "Incomprobable por intubación u otra barrera física para producir el habla",
        "visible_como_opcion_en_la_calculadora": false,
        "sumar_al_total": false
      }
    },
    {
      "orden": 15,
      "codigo": "11",
      "titulo": "Extinción e inatención",
      "siguiente_paso": "resultado",
      "etiqueta_siguiente_en_pagina": "Resultado NIHSS",
      "instrucciones": "La información para identificar negligencia puede obtenerse durante las pruebas anteriores. Si una pérdida visual severa impide la estimulación visual doble simultánea y la estimulación cutánea es normal, puntuar como normal. Si el paciente tiene afasia pero parece atender a ambos lados, puntuar como normal. La negligencia visual o espacial y la anosognosia pueden considerarse evidencia de anormalidad. Este componente nunca es incomprobable, porque sólo se puntúa la anormalidad cuando está presente.",
      "opciones": [
        { "puntaje": 0, "valor": "Sin alteraciones" },
        { "puntaje": 1, "valor": "Extinción o inatención parcial; una sola modalidad afectada, visual, táctil, espacial o corporal" },
        { "puntaje": 2, "valor": "Extinción o inatención completa; más de una modalidad afectada" }
      ]
    }
  ],
  "resultado": {
    "campos_resumen_mostrados_por_la_pagina": [
      "Puntuación NIHSS",
      "Nivel de conciencia",
      "Respuesta a preguntas",
      "Respuesta a órdenes",
      "Mirada conjugada",
      "Campos visuales",
      "Movilidad facial",
      "Brazo derecho",
      "Brazo izquierdo",
      "Pierna derecha",
      "Pierna izquierda",
      "Ataxia",
      "Sensibilidad",
      "Lenguaje",
      "Disartria",
      "Extinción"
    ]
  }
};

const state = {
  data: null,
  steps: [],
  summaryLabels: [],
  selections: new Map(),
  currentStepIndex: 0,
  announcedCompletion: false,
  lastAnnouncedScore: null
};

const appRoot = document.getElementById("app");
const liveRegion = document.getElementById("status-live");

document.addEventListener("DOMContentLoaded", initializeCalculator);

async function initializeCalculator() {
  try {
    const data = await loadNihssData();
    validateNihssData(data);

    state.data = data;
    state.steps = [...data.pasos].sort((leftStep, rightStep) => leftStep.orden - rightStep.orden);
    state.summaryLabels = getSummaryLabels(data, state.steps);
    state.currentStepIndex = 0;

    renderApp();
  } catch (error) {
    renderError(error);
  }
}

async function loadNihssData() {
  const sourceCandidates = ["./nihss_rccc_estructura_completa.json", "nihss_rccc_estructura_completa.json"];

  for (const sourcePath of sourceCandidates) {
    try {
      const response = await fetch(sourcePath, { cache: "no-store" });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      continue;
    }
  }

  return FALLBACK_DATA;
}

function validateNihssData(data) {
  if (!data || !Array.isArray(data.pasos) || data.pasos.length === 0) {
    throw new Error("No fue posible leer una estructura NIHSS válida.");
  }
}

function renderApp() {
  const metrics = getMetrics();
  const currentStep = state.steps[state.currentStepIndex] || null;

  appRoot.innerHTML = `
    <div class="app-shell">
      <header class="app-header">
        <div class="app-header__copy">
          <span class="eyebrow">${escapeHtml(state.data.nombre)}</span>
          <h1 class="app-title">NIHSS (national Institutes of Health Stroke Scale)</h1>
          <p class="app-subtitle">Evaluación guiada paso a paso con foco exclusivo en el ítem actual.</p>
        </div>
          <div class="app-header__aside">
            <div class="brand-logos" aria-label="Instituciones participantes">
              <img class="brand-logo brand-logo--msp" src="msp.png" alt="Ministerio de Salud Pública de Tucumán">
              <img class="brand-logo brand-logo--gs" src="gs.png" alt="Dirección General de Gestión Sanitaria">
              <img class="brand-logo brand-logo--msp" src="nihss.png" alt="NIHSS">
            </div>
            <button type="button" class="button-ghost" id="reset-assessment">Reiniciar</button>
          </div>
      </header>

      <section class="sticky-status" aria-label="Estado de la evaluación">
        <div class="sticky-status__top">
          <div>
            <div class="status-label">Puntaje acumulado</div>
            <div class="status-score">${metrics.totalScore}</div>
          </div>
          <div class="status-meta-group">
            <span class="status-pill ${metrics.isComplete ? "is-complete" : ""}">${metrics.isComplete ? "Evaluación completa" : "Evaluación en curso"}</span>
            <div class="status-meta">${metrics.answeredCount} de ${state.steps.length} respondidos</div>
          </div>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-bar" style="width: ${metrics.completionRatio * 100}%"></div>
        </div>
      </section>

      <main class="wizard-layout">
        <section class="wizard-panel panel">
          ${createStepMarkup(currentStep, metrics)}
        </section>
        <aside class="support-panel">
          <section class="panel mini-summary">
            <span class="eyebrow">Estado</span>
            <h2 class="panel-title">Seguimiento compacto</h2>
            <div class="mini-summary__grid">
              <article class="mini-stat">
                <span class="mini-stat__label">Actual</span>
                <strong class="mini-stat__value">${currentStep ? escapeHtml(currentStep.codigo) : "-"}</strong>
              </article>
              <article class="mini-stat">
                <span class="mini-stat__label">Pendientes</span>
                <strong class="mini-stat__value">${metrics.pendingCount}</strong>
              </article>
            </div>
            <p class="mini-summary__text">${escapeHtml(getCompactStatusText(currentStep, metrics))}</p>
          </section>
          <section class="panel final-summary ${metrics.isComplete ? "is-visible" : ""}" id="final-summary-panel">
            <span class="eyebrow">Resumen final</span>
            <h2 class="panel-title">Resultado NIHSS</h2>
            <div class="final-summary__score">${metrics.totalScore}</div>
            <div class="final-summary__list">
              ${createSummaryMarkup(metrics.isComplete)}
            </div>
          </section>
        </aside>
      </main>
    </div>
  `;

  bindEvents();
  syncCurrentSelection(currentStep);
}

function createStepMarkup(step, metrics) {
  if (!step) {
    return `
      <div class="empty-state">
        <span class="eyebrow">Sin datos</span>
        <h2 class="panel-title">No hay pasos disponibles</h2>
      </div>
    `;
  }

  const selected = state.selections.get(step.codigo);
  const isLastStep = state.currentStepIndex === state.steps.length - 1;
  const nextLabel = step.siguiente_paso === "resultado" ? "Resultado" : `Siguiente: ${step.siguiente_paso}`;

  return `
    <div class="stepper-head">
      <div>
        <span class="eyebrow">Paso ${escapeHtml(String(step.orden))} de ${escapeHtml(String(state.steps.length))}</span>
        <h2 class="panel-title">${escapeHtml(step.codigo)} · ${escapeHtml(step.titulo)}</h2>
      </div>
      <div class="stepper-counter">${escapeHtml(nextLabel)}</div>
    </div>

    <div class="step-indicator" aria-label="Indicador visual de pasos">
      ${state.steps.map((item, index) => `
        <button
          type="button"
          class="step-dot ${index === state.currentStepIndex ? "is-current" : ""} ${state.selections.has(item.codigo) ? "is-complete" : ""}"
          data-go-step="${index}"
          aria-label="Ir al paso ${escapeHtml(String(item.orden))}: ${escapeHtml(item.titulo)}"
          aria-current="${index === state.currentStepIndex ? "step" : "false"}"
        ></button>
      `).join("")}
    </div>

    <div class="instruction-box">
      <div class="instruction-box__label">Instrucciones</div>
      <p class="instruction-box__text">${escapeHtml(step.instrucciones)}</p>
    </div>

    <form class="step-form" id="step-form">
      <fieldset class="option-grid">
        <legend class="sr-only">Seleccionar una opción para ${escapeHtml(step.titulo)}</legend>
        ${step.opciones.map((option, optionIndex) => createOptionMarkup(step, option, optionIndex, selected)).join("")}
      </fieldset>
    </form>

    <footer class="step-actions">
      <button type="button" class="button-ghost" id="previous-step" ${state.currentStepIndex === 0 ? "disabled" : ""}>Anterior</button>
      <div class="step-actions__main">
        <p class="step-hint">${escapeHtml(getStepHint(step, metrics))}</p>
        <button type="button" class="button-primary" id="next-step" ${selected ? "" : "disabled"}>${isLastStep ? "Ver resumen final" : "Siguiente"}</button>
      </div>
    </footer>
  `;
}

function createOptionMarkup(step, option, optionIndex, selected) {
  const tagLabel = typeof option.puntaje === "number" ? `${option.puntaje} pts` : option.codigo || "No suma";
  const supportText = option.sumar_al_total === false || typeof option.puntaje !== "number"
    ? "Registrado sin sumar al total"
    : "Se suma al puntaje total";
  const isChecked = Boolean(selected && selected.optionIndex === optionIndex);
  const tagClassName = typeof option.puntaje === "number" ? "option-card__tag" : "option-card__tag is-neutral";

  return `
    <label class="option-control">
      <input
        type="radio"
        name="step-${escapeHtml(step.codigo)}"
        value="${escapeHtml(String(optionIndex))}"
        data-step-code="${escapeHtml(step.codigo)}"
        data-option-index="${escapeHtml(String(optionIndex))}"
        ${isChecked ? "checked" : ""}
      >
      <span class="option-card">
        <span class="option-card__row">
          <span class="option-card__indicator" aria-hidden="true"></span>
          <span class="option-card__main">
            <span class="option-card__title">${escapeHtml(formatOptionValue(option))}</span>
            <span class="option-card__support">${escapeHtml(supportText)}</span>
          </span>
          <span class="${tagClassName}">${escapeHtml(tagLabel)}</span>
        </span>
      </span>
    </label>
  `;
}

function bindEvents() {
  const formElement = document.getElementById("step-form");
  const resetButton = document.getElementById("reset-assessment");
  const previousButton = document.getElementById("previous-step");
  const nextButton = document.getElementById("next-step");

  if (formElement) {
    formElement.addEventListener("change", handleSelectionChange);
  }

  if (resetButton) {
    resetButton.addEventListener("click", resetAssessment);
  }

  if (previousButton) {
    previousButton.addEventListener("click", () => moveStep(-1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", handleAdvance);
  }

  document.querySelectorAll("[data-go-step]").forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
      const targetIndex = Number(buttonElement.getAttribute("data-go-step"));

      if (Number.isInteger(targetIndex)) {
        state.currentStepIndex = targetIndex;
        renderApp();
      }
    });
  });
}

function handleSelectionChange(event) {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || target.type !== "radio") {
    return;
  }

  const stepCode = target.dataset.stepCode;
  const optionIndex = Number(target.dataset.optionIndex);
  const step = state.steps.find((item) => item.codigo === stepCode);

  if (!step || Number.isNaN(optionIndex) || !step.opciones[optionIndex]) {
    return;
  }

  state.selections.set(step.codigo, {
    stepCode: step.codigo,
    optionIndex,
    option: step.opciones[optionIndex]
  });

  const metrics = getMetrics();

  announceStatusChanges(metrics.isComplete, metrics.totalScore);
  renderApp();
}

function handleAdvance() {
  const currentStep = state.steps[state.currentStepIndex];

  if (!currentStep || !state.selections.has(currentStep.codigo)) {
    liveRegion.textContent = "Debes responder el paso actual antes de continuar.";
    return;
  }

  if (state.currentStepIndex < state.steps.length - 1) {
    state.currentStepIndex += 1;
    renderApp();
    return;
  }

  const metrics = getMetrics();

  if (!metrics.isComplete) {
    liveRegion.textContent = `Faltan ${metrics.pendingCount} ítems por responder para completar la evaluación.`;
    return;
  }

  const finalSummaryPanel = document.getElementById("final-summary-panel");

  if (finalSummaryPanel) {
    finalSummaryPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function moveStep(direction) {
  const nextIndex = state.currentStepIndex + direction;

  if (nextIndex < 0 || nextIndex >= state.steps.length) {
    return;
  }

  state.currentStepIndex = nextIndex;
  renderApp();
}

function resetAssessment() {
  state.selections.clear();
  state.currentStepIndex = 0;
  state.announcedCompletion = false;
  state.lastAnnouncedScore = null;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getMetrics() {
  const answeredCount = state.selections.size;
  const pendingCount = state.steps.length - answeredCount;
  const totalScore = getTotalScore();

  return {
    answeredCount,
    pendingCount,
    totalScore,
    completionRatio: state.steps.length ? answeredCount / state.steps.length : 0,
    isComplete: pendingCount === 0
  };
}

function getTotalScore() {
  let totalScore = 0;

  state.selections.forEach((selection) => {
    if (typeof selection.option.puntaje === "number") {
      totalScore += selection.option.puntaje;
    }
  });

  return totalScore;
}

function createSummaryMarkup(isComplete) {
  if (!isComplete) {
    return '<p class="summary-placeholder">El resumen detallado se habilita cuando todos los ítems están respondidos.</p>';
  }

  return state.steps.map((step, index) => {
    const selection = state.selections.get(step.codigo);
    const label = state.summaryLabels[index] || step.titulo;

    return `
      <article class="summary-item">
        <div class="summary-item__label">${escapeHtml(label)}</div>
        <div class="summary-item__value">${escapeHtml(selection ? formatOptionValue(selection.option) : "Sin respuesta")}</div>
      </article>
    `;
  }).join("");
}

function getSummaryLabels(data, steps) {
  const summaryFields = data.resultado && Array.isArray(data.resultado.campos_resumen_mostrados_por_la_pagina)
    ? data.resultado.campos_resumen_mostrados_por_la_pagina.slice(1)
    : [];

  if (summaryFields.length === steps.length) {
    return summaryFields;
  }

  return steps.map((step) => step.titulo);
}

function getCompactStatusText(currentStep, metrics) {
  if (metrics.isComplete) {
    return "Todos los pasos están respondidos. El resumen final ya está disponible.";
  }

  if (!currentStep) {
    return "Sin pasos disponibles.";
  }

  return `Continúa con ${currentStep.codigo} · ${currentStep.titulo}.`;
}

function getStepHint(step, metrics) {
  if (metrics.isComplete && state.currentStepIndex === state.steps.length - 1) {
    return "La evaluación está completa. Puedes revisar este paso o abrir el resumen final.";
  }

  if (state.selections.has(step.codigo)) {
    return "Respuesta registrada. Puedes continuar o volver a modificarla.";
  }

  return "Selecciona una sola opción para habilitar la navegación.";
}

function formatOptionValue(option) {
  if (!option) {
    return "";
  }

  return option.codigo ? `${option.codigo} · ${option.valor}` : option.valor;
}

function syncCurrentSelection(step) {
  if (!step) {
    return;
  }

  const currentSelection = state.selections.get(step.codigo);

  if (!currentSelection) {
    return;
  }

  const inputElement = document.querySelector(`input[data-step-code="${cssEscape(step.codigo)}"][data-option-index="${currentSelection.optionIndex}"]`);

  if (inputElement instanceof HTMLInputElement) {
    inputElement.checked = true;
  }
}

function announceStatusChanges(isComplete, totalScore) {
  if (!liveRegion) {
    return;
  }

  if (state.lastAnnouncedScore !== totalScore) {
    liveRegion.textContent = `Puntaje NIHSS actualizado a ${totalScore}.`;
    state.lastAnnouncedScore = totalScore;
  }

  if (isComplete && !state.announcedCompletion) {
    liveRegion.textContent = `Evaluación completa. Puntaje total ${totalScore}.`;
    state.announcedCompletion = true;
  }

  if (!isComplete) {
    state.announcedCompletion = false;
  }
}

function renderError(error) {
  appRoot.innerHTML = `
    <div class="error-state">
      <div class="error-state__card">
        <span class="eyebrow">Error de carga</span>
        <h1 class="app-title">No fue posible construir la calculadora NIHSS</h1>
        <p class="app-subtitle">${escapeHtml(error instanceof Error ? error.message : "Error desconocido")}</p>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }

  return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}
