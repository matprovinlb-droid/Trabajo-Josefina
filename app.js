// ===== Preguntas (las mismas 70 que cargaste en Python) =====
const QUESTIONS = {
  1: { stem: "En una fiesta:", A: "Se relaciona con muchos, incluso extraños.", B: "Se relaciona con pocos, conocidos." },
  2: { stem: "Usted es más:", A: "Realista", B: "Fantasioso" },
  3: { stem: "Lo peor es:", A: "Estar en la luna", B: "Ser esquemático" },
  4: { stem: "Se guía por:", A: "Principios", B: "Sentimientos" },
  5: { stem: "Trata de:", A: "Convencer", B: "Conmover" },
  6: { stem: "Prefiere trabajar:", A: "Con plazos", B: "Para cuando esté" },
  7: { stem: "Tiende a elegir:", A: "Cuidadosamente", B: "Impulsivamente" },
  8: { stem: "En fiestas:", A: "Se queda hasta tarde", B: "Se va temprano" },
  9: { stem: "Le atrae más:", A: "Gente práctica", B: "Gente imaginativa" },
  10:{ stem: "Le interesa más:", A: "Lo real", B: "Lo posible" },
  11:{ stem: "Juzga por:", A: "Principios", B: "Circunstancias" },
  12:{ stem: "Al conocer gente:", A: "Frío", B: "Cálido" },
  13:{ stem: "Es:", A: "Puntual", B: "Impuntual" },
  14:{ stem: "Le molesta tener cosas:", A: "Por hacer", B: "Terminadas" },
  15:{ stem: "En grupos:", A: "No inmiscuirse", B: "Estar al tanto" },
  16:{ stem: "Prefiere:", A: "Pasos claros", B: "A su manera" },
  17:{ stem: "Escritores:", A: "Decir tal cual", B: "Poético" },
  18:{ stem: "Prefiere:", A: "Pensamientos", B: "Relaciones" },
  19:{ stem: "Trabaja con:", A: "Juicios lógicos", B: "Juicios de valor" },
  20:{ stem: "Le atrae:", A: "Claro", B: "Ambiguo" },
  21:{ stem: "Es:", A: "Serio", B: "Desenfadado" },
  22:{ stem: "Teléfono:", A: "Habla sin pensar", B: "Piensa antes" },
  23:{ stem: "Hechos:", A: "Hablan solos", B: "Ejemplifican principios" },
  24:{ stem: "Gente fantasiosa:", A: "Incomoda", B: "Atrae" },
  25:{ stem: "Es:", A: "Flemático", B: "Expansivo" },
  26:{ stem: "Peor:", A: "Injusto", B: "Implacable" },
  27:{ stem: "Vida:", A: "Planificada", B: "Vivida" },
  28:{ stem: "Se siente mejor:", A: "Después de comprar", B: "Antes de comprar" },
  29:{ stem: "Con gente:", A: "Inicia charla", B: "Espera" },
  30:{ stem: "Sentido común:", A: "Rara vez falla", B: "Frecuente error" },
  31:{ stem: "Chicos:", A: "Poco prácticos", B: "Fantasiosos" },
  32:{ stem: "Decide con:", A: "Principios", B: "Sentimientos" },
  33:{ stem: "Es:", A: "Firme", B: "Amable" },
  34:{ stem: "Más admirable:", A: "Organización", B: "Adaptación" },
  35:{ stem: "Más valioso:", A: "Concluido", B: "Abierto" },
  36:{ stem: "Relaciones raras:", A: "Entusiasman", B: "Desgastan" },
  37:{ stem: "Es:", A: "Práctico", B: "Fantasioso" },
  38:{ stem: "Percibe:", A: "Utilidad", B: "Sentimientos" },
  39:{ stem: "Gratificante:", A: "Discutir", B: "Acordar" },
  40:{ stem: "Guía:", A: "Cabeza", B: "Corazón" },
  41:{ stem: "Trabaja mejor:", A: "Convenido", B: "Ocurrente" },
  42:{ stem: "Reuniones:", A: "Orden", B: "Lo que surja" },
  43:{ stem: "Prefiere:", A: "Muchos amigos", B: "Pocos cercanos" },
  44:{ stem: "Se guía por:", A: "Hechos", B: "Principios" },
  45:{ stem: "Empresa:", A: "Producción", B: "Diseño" },
  46:{ stem: "Mejor elogio:", A: "Lógico", B: "Afectivo" },
  47:{ stem: "Cualidad:", A: "Principios", B: "Lealtad" },
  48:{ stem: "Prefiere:", A: "Cerrado", B: "Tentativo" },
  49:{ stem: "Se siente mejor:", A: "Después decidir", B: "Antes decidir" },
  50:{ stem: "Con extraños:", A: "Locuaz", B: "Reservado" },
  51:{ stem: "Confía en:", A: "Experiencia", B: "Intuición" },
  52:{ stem: "Es:", A: "Práctico", B: "Imaginativo" },
  53:{ stem: "Admirable:", A: "Razón", B: "Pasión" },
  54:{ stem: "Se inclina a:", A: "Imparcialidad", B: "Compasión" },
  55:{ stem: "Mejor:", A: "Prever", B: "Improvisar" },
  56:{ stem: "Relaciones:", A: "Programables", B: "Azarosas" },
  57:{ stem: "Teléfono:", A: "Atiende", B: "Espera" },
  58:{ stem: "Valora:", A: "Realidad", B: "Imaginación" },
  59:{ stem: "Discute:", A: "Principios", B: "Alusiones" },
  60:{ stem: "Peor error:", A: "Apasionado", B: "Objetivo" },
  61:{ stem: "Es:", A: "Cabezadura", B: "Corazón blando" },
  62:{ stem: "Cómodo:", A: "Estructurado", B: "Imprevisto" },
  63:{ stem: "Es:", A: "Rutinario", B: "Extravagante" },
  64:{ stem: "Se define:", A: "Confianzudo", B: "Reservado" },
  65:{ stem: "Escribe:", A: "Preciso", B: "Figurativo" },
  66:{ stem: "Cuesta más:", A: "Empatizar", B: "Ver utilidad" },
  67:{ stem: "Prefiere:", A: "Claridad", B: "Lealtad" },
  68:{ stem: "Peor defecto:", A: "Sin criterio", B: "Crítico" },
  69:{ stem: "Prefiere:", A: "Planeado", B: "No planeado" },
  70:{ stem: "Es:", A: "Deliberativo", B: "Espontáneo" },
};

// ===== Scoring por columnas (igual que tu hoja) =====
const BLOCKS = {
  EI:   [1,8,15,22,29,36,43,50,57,64],
  "1_2":[2,9,16,23,30,37,44,51,58,65],
  "3_4":[3,10,17,24,31,38,45,52,59,66],
  "5_6":[4,11,18,25,32,39,46,53,60,67],
  "7_8":[5,12,19,26,33,40,47,54,61,68],
  "9_10":[6,13,20,27,34,41,48,55,62,69],
  "11_12":[7,14,21,28,35,42,49,56,63,70],
};

function computeScores(answers) {
  // Conteo A/B por bloque
  const blockTotals = {};
  for (const [name, qs] of Object.entries(BLOCKS)) {
    let a = 0, b = 0;
    for (const q of qs) {
      if (answers[q] === "A") a++;
      else if (answers[q] === "B") b++;
    }
    blockTotals[name] = [a, b];
  }

  // EI directo (A->E, B->I)
  const [E, I] = blockTotals["EI"];

  // Columnas 1..12: en cada bloque A->impar, B->par
  const col = {};
  [col[1], col[2]] = blockTotals["1_2"];
  [col[3], col[4]] = blockTotals["3_4"];
  [col[5], col[6]] = blockTotals["5_6"];
  [col[7], col[8]] = blockTotals["7_8"];
  [col[9], col[10]] = blockTotals["9_10"];
  [col[11], col[12]] = blockTotals["11_12"];

  const S = col[1] + col[3];
  const N = col[2] + col[4];
  const T = col[5] + col[7];
  const F = col[6] + col[8];
  const J = col[9] + col[11];
  const P = col[10] + col[12];

  const letters = { E, I, S, N, T, F, J, P };

  const pick = (a, b) => (letters[a] >= letters[b] ? a : b); // empate -> primero
  const type = pick("E","I") + pick("S","N") + pick("T","F") + pick("J","P");

  return { blockTotals, letters, type };
}

// ===== UI =====
const qnums = Array.from({length:70}, (_,i)=>i+1);
let idx = 0;
let answers = loadState() ?? Object.fromEntries(qnums.map(q => [q, null]));

const el = (id) => document.getElementById(id);

function render() {
  const q = qnums[idx];
  const data = QUESTIONS[q];

  el("qnum").textContent = `Pregunta ${q} / 70`;
  el("qstem").textContent = data.stem;
  el("aText").textContent = data.A;
  el("bText").textContent = data.B;

  const answered = qnums.filter(n => answers[n] === "A" || answers[n] === "B").length;
  el("status").textContent = `Respondidas: ${answered}/70`;
  el("barFill").style.width = `${Math.round((answered/70)*100)}%`;

  // set radio
  const radios = document.querySelectorAll('input[name="ans"]');
  radios.forEach(r => { r.checked = (r.value === answers[q]); });

  el("prevBtn").disabled = idx === 0;
  el("nextBtn").disabled = idx === qnums.length - 1;
}

function saveCurrent() {
  const q = qnums[idx];
  const checked = document.querySelector('input[name="ans"]:checked');
  if (!checked) return false;
  answers[q] = checked.value;
  saveState();
  return true;
}

function finish() {
  // guardar última si está marcada
  const checked = document.querySelector('input[name="ans"]:checked');
  if (checked) answers[qnums[idx]] = checked.value;
  saveState();

  const missing = qnums.filter(n => answers[n] !== "A" && answers[n] !== "B");
  if (missing.length) {
    alert(`Te faltan ${missing.length} preguntas. Ej: ${missing.slice(0,10).join(", ")}…`);
    return;
  }

  const { letters, type } = computeScores(answers);

  el("resultCard").style.display = "block";
  el("resultType").textContent = `Resultado: ${type}`;
  el("resultDetail").textContent =
    `E=${letters.E} vs I=${letters.I} | S=${letters.S} vs N=${letters.N} | T=${letters.T} vs F=${letters.F} | J=${letters.J} vs P=${letters.P}`;

  const share =
`Resultado test tipo MBTI (scoring por columnas)
Tipo: ${type}

E=${letters.E} vs I=${letters.I}
S=${letters.S} vs N=${letters.N}
T=${letters.T} vs F=${letters.F}
J=${letters.J} vs P=${letters.P}`;

  el("shareText").value = share;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function saveState() {
  localStorage.setItem("mbti_answers_v1", JSON.stringify({ idx, answers }));
}
function loadState() {
  try {
    const raw = localStorage.getItem("mbti_answers_v1");
    if (!raw) return null;
    const obj = JSON.parse(raw);
    idx = obj.idx ?? 0;
    return obj.answers ?? null;
  } catch { return null; }
}
function resetAll() {
  if (!confirm("¿Seguro que querés reiniciar el test?")) return;
  localStorage.removeItem("mbti_answers_v1");
  idx = 0;
  answers = Object.fromEntries(qnums.map(q => [q, null]));
  el("resultCard").style.display = "none";
  render();
}

// eventos
el("prevBtn").addEventListener("click", () => { saveCurrent(); idx--; render(); });
el("nextBtn").addEventListener("click", () => {
  if (!saveCurrent()) { alert("Elegí A o B antes de seguir."); return; }
  idx++; render();
});
el("finishBtn").addEventListener("click", finish);
el("resetBtn").addEventListener("click", resetAll);
el("copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(el("shareText").value);
    alert("Copiado. Ya lo podés pegar en WhatsApp.");
  } catch {
    el("shareText").focus();
    el("shareText").select();
    alert("No pude copiar automático. Seleccioné el texto: mantené presionado y copiá.");
  }
});

render();
