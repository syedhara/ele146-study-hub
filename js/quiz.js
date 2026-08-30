// ELE 146 Study Hub — Quiz data & interactivity
// Add more weeks by adding new keys to `quizData` below.

const quizData = {
  week1: {
    label: "Week 1 — Foundations of Motor Control",
    mc: [
      {
        q: "What does the power circuit of a motor-control system carry?",
        options: [
          "Low-voltage signals that decide when the motor runs",
          "The electrical energy that operates the motor",
          "Only the equipment-grounding path",
          "Communication data between sensors"
        ],
        correct: 1,
        explanation: "The power circuit carries the energy (commonly 3-phase AC) that drives the motor; the control circuit decides when."
      },
      {
        q: "What are the two required steps before touching trainer wiring?",
        options: [
          "Put on gloves and shout 'clear'",
          "Turn off power, then verify the circuit state with a meter",
          "Verify with a meter, then turn off power",
          "Ask the instructor and take a photo"
        ],
        correct: 1,
        explanation: "De-energize first, then confirm with a properly set meter before touching any conductors."
      },
      {
        q: "Why should each trainer panel have its own dedicated ground-bus connection instead of daisy-chaining?",
        options: [
          "Daisy-chaining looks messy",
          "One loose connection could disconnect the grounding path for multiple components",
          "It saves wire",
          "Grounding is optional for trainers"
        ],
        correct: 1,
        explanation: "A dedicated connection keeps one bad connection from removing the fault-current path for several devices at once."
      },
      {
        q: "In a 208/120 V wye system, what is the expected line-to-neutral voltage?",
        options: ["208 V", "120 V", "277 V", "480 V"],
        correct: 1,
        explanation: "Line-to-neutral ≈ 120 V; line-to-line ≈ 208 V (120 × √3 ≈ 208)."
      },
      {
        q: "A 48 Ω coil has 24 V across it. What current does it draw?",
        options: ["2.0 A", "0.50 A", "1.15 A", "48 A"],
        correct: 1,
        explanation: "I = V ÷ R = 24 ÷ 48 = 0.50 A."
      },
      {
        q: "If current through a fixed resistance doubles, how does resistive heating (power) change?",
        options: ["Doubles", "Stays the same", "Triples", "Quadruples (4×)"],
        correct: 3,
        explanation: "P = I²R, so doubling current quadruples the power dissipated as heat."
      },
      {
        q: "Why is a neutral conductor not required for a balanced three-phase load?",
        options: [
          "Three-phase loads never carry current",
          "The three phase currents sum to zero at the common point",
          "Neutral is only used for grounding",
          "Balanced loads use DC instead of AC"
        ],
        correct: 1,
        explanation: "In a balanced three-phase system, the instantaneous sum of the three phase currents is zero, so no neutral current path is needed."
      },
      {
        q: "What is the key functional difference between an overload relay and a circuit breaker/fuse?",
        options: [
          "There is no difference",
          "Overload relays protect against sustained overcurrent/overheating; breakers/fuses protect against short circuits and ground faults",
          "Circuit breakers only work on DC",
          "Overload relays only work in the control circuit"
        ],
        correct: 1,
        explanation: "These are related but distinct protective functions — sustained overload vs. short-circuit/ground-fault protection."
      },
      {
        q: "What household device is the closest real-world example of a float switch controlling a motor?",
        options: ["Garage door opener", "Sump pump", "Phone charger", "Ceiling fan"],
        correct: 1,
        explanation: "A sump pump's float switch is a classic control-circuit sensor that starts/stops the pump motor."
      },
      {
        q: "What household device commonly uses limit switches to stop a motor at travel endpoints?",
        options: ["Refrigerator compressor", "Garage door opener", "Water well pump", "Washing machine"],
        correct: 1,
        explanation: "Limit switches stop the garage door motor at the fully open/closed positions."
      },
      {
        q: "Why are neutral and equipment ground not interchangeable?",
        options: [
          "Neutral carries normal load current; ground is a safety path that should not carry normal current",
          "They are actually the same wire",
          "Ground is only used on DC circuits",
          "Neutral is only used in single-phase systems"
        ],
        correct: 0,
        explanation: "Neutral is a current-carrying grounded conductor; equipment ground is a fault-clearing safety path, not meant for normal current."
      },
      {
        q: "What keeps the M coil energized in a 3-wire starter after the START button is released?",
        options: [
          "The overload relay",
          "A seal-in (holding) auxiliary contact wired in parallel with START",
          "The control transformer",
          "Nothing — you must hold START continuously"
        ],
        correct: 1,
        explanation: "An M auxiliary contact in parallel with START keeps the coil circuit closed after START is released."
      }
    ],
    flashcards: [
      { front: "Power circuit — what does it do?", back: "Carries the electrical energy that operates the motor (commonly 3-phase AC)." },
      { front: "Control circuit — what does it do?", back: "Decides when/how the motor starts, stops, or changes state; often lower voltage than the power circuit." },
      { front: "Safety workflow before touching wiring", back: "1) Turn power off. 2) Verify circuit state with a properly set meter." },
      { front: "Overload relay vs. fuse/breaker", back: "Overload relay = sustained overcurrent/overheating protection. Fuse/breaker = short-circuit & ground-fault protection." },
      { front: "Ohm's law", back: "V = I × R  →  I = V ÷ R,  R = V ÷ I" },
      { front: "Power (resistive load)", back: "P = V × I = I²R = V²/R" },
      { front: "208/120 V wye system", back: "Line-to-line ≈ 208 V, line-to-neutral ≈ 120 V (120 × √3 ≈ 208)." },
      { front: "Why 3-phase power for motors?", back: "Three currents 120° apart create a rotating magnetic field → smoother torque, nearly constant instantaneous power." },
      { front: "Ground vs. neutral", back: "Neutral carries normal load current. Ground is a safety fault-current path and should not carry normal current." },
      { front: "Seal-in / holding contact", back: "An M auxiliary contact wired in parallel with START, keeping the coil energized after START is released." },
      { front: "Sump pump control sensor", back: "Float switch — starts/stops the pump motor based on water level." },
      { front: "Garage door opener control feature", back: "Limit switches stop the motor at the fully open/closed travel positions." },
      { front: "AC vs DC", back: "AC periodically reverses polarity (60 Hz in North America). DC maintains one polarity/direction." },
      { front: "Peak vs RMS (120 V circuit)", back: "120 V is the RMS value; the peak is about 120 × √2 ≈ 170 V." },
      { front: "Basic control path", back: "L1 → STOP (N.C.) → START (N.O.) → M coil → N" }
    ]
  }
};

// ---- Rendering logic ----
const state = { week: "week1", answered: {}, correctCount: 0 };

function renderWeekOptions() {
  const select = document.getElementById("week-select");
  select.innerHTML = "";
  Object.entries(quizData).forEach(([key, data]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = data.label;
    select.appendChild(opt);
  });
  select.value = state.week;
}

function renderMC() {
  const container = document.getElementById("mc-container");
  container.innerHTML = "";
  state.answered = {};
  state.correctCount = 0;
  updateScoreBar();

  const questions = quizData[state.week].mc;
  questions.forEach((item, qIndex) => {
    const card = document.createElement("div");
    card.className = "quiz-question";

    const title = document.createElement("h3");
    title.textContent = `${qIndex + 1}. ${item.q}`;
    card.appendChild(title);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "options";

    item.options.forEach((optionText, optIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = optionText;
      btn.addEventListener("click", () => handleAnswer(qIndex, optIndex, item, card));
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);

    const explanation = document.createElement("p");
    explanation.className = "explanation";
    explanation.style.display = "none";
    explanation.style.color = "var(--muted)";
    explanation.style.marginTop = "0.6rem";
    explanation.textContent = item.explanation;
    card.appendChild(explanation);

    container.appendChild(card);
  });
}

function handleAnswer(qIndex, optIndex, item, card) {
  if (state.answered[qIndex] !== undefined) return;
  state.answered[qIndex] = optIndex;

  const buttons = card.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.correct) btn.classList.add("correct");
    else if (i === optIndex) btn.classList.add("incorrect");
  });

  if (optIndex === item.correct) state.correctCount++;
  card.querySelector(".explanation").style.display = "block";
  updateScoreBar();
}

function updateScoreBar() {
  const total = quizData[state.week].mc.length;
  const answeredCount = Object.keys(state.answered).length;
  document.getElementById("score-text").textContent =
    `Score: ${state.correctCount} / ${answeredCount} answered (${total} total)`;
}

function renderFlashcards() {
  const container = document.getElementById("flashcard-container");
  container.innerHTML = "";
  quizData[state.week].flashcards.forEach((cardData) => {
    const card = document.createElement("div");
    card.className = "flashcard";
    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-face front">${cardData.front}</div>
        <div class="flashcard-face back">${cardData.back}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    container.appendChild(card);
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderWeekOptions();
  renderMC();
  renderFlashcards();
  setupTabs();

  document.getElementById("week-select").addEventListener("change", (e) => {
    state.week = e.target.value;
    renderMC();
    renderFlashcards();
  });

  document.getElementById("retry-btn").addEventListener("click", renderMC);
});
