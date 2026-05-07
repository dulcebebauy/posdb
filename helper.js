/* ========== CATEGORY EMOJI ========== */
const CATEGORY_EMOJI = {
  bebidas_calientes: "☕",
  bebidas_frias:     "🍹",
  dulces:            "🍰",
  postres:           "🍮",
  salados:           "🥪",
  tortas:            "🎂",
  meriendas:         "🥐"
};

function getCategoryEmoji(categoria) {
  return CATEGORY_EMOJI[categoria] || "";
}

/* ========== UTILS ========== */
function fmt(n) {
  return "$" + Math.round(n).toLocaleString("es-UY");
}

function showToast(msg, type = "success") {
  const wrap = document.getElementById("toastWrap");
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
/* ========== HELPER ========== */
function toDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function parseFecha(val) {
  if (!val) return null;
  if (val instanceof Date) return val;
  const s = String(val);
  const d = new Date(s);
  if (!isNaN(d)) return d;
  const parts = s.split(/[\/\-\.]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) return new Date(parts[0], parts[1] - 1, parts[2]);
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  return null;
}
function normalizarTexto(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function capitalizarTexto(str) {
  return str
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function recargarProductos(force = false) {
  const stateEl = document.getElementById("stateCenter");
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  stateEl.style.display = "flex";
  stateEl.innerHTML = '<div class="spinner"></div>';
  cargarProductos(true);
}
function vibrar() {
  if ("vibrate" in navigator) {
    navigator.vibrate([300, 100, 300]);
  } else {
    alert("El dispositivo no soporta vibración");
  }
}
function playSuccessSound() {
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  const audio = document.getElementById("successSound");
  if (!audio) return;

  audio.currentTime = 0; // reinicia por si ya sonó antes
  audio.play().catch(() => {});
  //vibrar();
}