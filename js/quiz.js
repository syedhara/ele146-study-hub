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
  },
  week2: {
    label: "Week 2 — Motors, Manual Control & Overload Protection",
    mc: [
      {
        q: "What does a three-phase motor convert electrical energy into?",
        options: ["Heat only", "Mechanical rotation", "Static magnetic field only", "Radio-frequency energy"],
        correct: 1,
        explanation: "Motor current creates magnetic fields that produce torque on the rotor, turning the shaft."
      },
      {
        q: "What happens if a three-phase motor loses one phase while running?",
        options: [
          "Nothing changes",
          "It runs faster",
          "It may hum, overheat, or fail to start — the rotating field is incomplete",
          "It automatically switches to DC"
        ],
        correct: 2,
        explanation: "All three phases are needed to produce a complete rotating magnetic field."
      },
      {
        q: "What is full-load current (FLA) on a motor nameplate?",
        options: [
          "The current when starting the motor",
          "The short-circuit current rating",
          "The expected current at rated load, used as the baseline for overload protection",
          "The voltage rating of the motor"
        ],
        correct: 2,
        explanation: "FLA is the expected current at rated load — overload protection is set from this value, not starting or short-circuit current."
      },
      {
        q: "What is the key difference between a motor controller and a motor starter?",
        options: [
          "There is no difference",
          "A starter includes overload protection for the motor; a controller alone may not",
          "A controller is always magnetic, a starter is always manual",
          "A starter cannot be manually operated"
        ],
        correct: 1,
        explanation: "Both start/stop the motor, but a starter adds overload protection — making it the safer, more complete device."
      },
      {
        q: "In manual motor control, who/what directly opens and closes the motor power path?",
        options: [
          "A control relay coil",
          "A person, operating the device directly",
          "A timer",
          "A pressure switch"
        ],
        correct: 1,
        explanation: "Manual control means a person directly operates the switching device — no coil or control circuit in between."
      },
      {
        q: "In magnetic motor control, what does the operator actually handle?",
        options: [
          "The full motor current",
          "A control signal that energizes a coil, which closes the contactor's power contacts",
          "Only the overload dial",
          "Nothing — magnetic control is fully automatic"
        ],
        correct: 1,
        explanation: "The operator handles a low-power control signal; the coil/contactor handles the actual motor current."
      },
      {
        q: "What is a short circuit?",
        options: [
          "Sustained current above the motor's rating",
          "An unintended low-resistance path causing extremely fast current rise",
          "A motor running below full-load current",
          "A normal overload relay trip"
        ],
        correct: 1,
        explanation: "Short circuits create very fast current rise and possible fire/arc energy — fuses/breakers clear this quickly."
      },
      {
        q: "Why does an overload relay usually trip slower than a fuse or breaker?",
        options: [
          "It's a design flaw",
          "It responds to sustained thermal heating over time, not an instantaneous fault",
          "Overload relays are always faster than fuses",
          "It only works on DC circuits"
        ],
        correct: 1,
        explanation: "Overload protection is thermal-based and reacts to sustained heating; short-circuit protection reacts almost instantly."
      },
      {
        q: "A motor has FLA of 1.4 A. If the overload is set to 115% of FLA, what is the setting?",
        options: ["1.4 A", "1.61 A", "1.15 A", "2.0 A"],
        correct: 1,
        explanation: "1.4 × 1.15 = 1.61 A."
      },
      {
        q: "A motor draws 2.0 A against a 1.4 A FLA. What does this indicate?",
        options: [
          "The motor is below full-load current",
          "The motor is above full-load current (overloaded)",
          "The motor has a short circuit",
          "The reading is meaningless without voltage"
        ],
        correct: 1,
        explanation: "2.0 A is greater than the 1.4 A FLA rating — the motor is drawing more than its rated full-load current."
      },
      {
        q: "In the manual starter OFF position, what should a continuity test from L1 to T1 show?",
        options: ["Near-zero resistance", "Open circuit", "Exactly 120 V", "It depends on the overload setting"],
        correct: 1,
        explanation: "OFF means the contacts are open, so there should be no continuity between line and load terminals."
      },
      {
        q: "What does low-voltage protection prevent?",
        options: [
          "Short circuits",
          "Automatic restart of a motor after power is lost and then restored",
          "Overheating during normal operation",
          "Voltage drop across long conductors"
        ],
        correct: 1,
        explanation: "Low-voltage protection requires an intentional restart instead of letting the motor resume automatically when power returns."
      },
      {
        q: "In Lab 2, what did leaving the manual starter ON through a power interruption prove?",
        options: [
          "The starter has low-voltage protection",
          "The motor will never restart",
          "The motor restarted automatically, proving the manual starter has no low-voltage protection",
          "The overload relay had failed"
        ],
        correct: 2,
        explanation: "Lab 2 Part 4 demonstrated that this manual starter lacks low-voltage protection — it restarted automatically when power returned."
      }
    ],
    flashcards: [
      { front: "What a motor does", back: "Converts electrical energy into mechanical rotation via magnetic fields acting on the rotor." },
      { front: "Manual motor control", back: "A person directly operates the device that opens/closes the motor power path. No remote control, interlocks, sensors, or timers." },
      { front: "Magnetic motor control", back: "A control circuit energizes a coil that closes the contactor's power contacts; the operator only handles a control signal." },
      { front: "Controller vs. starter", back: "Both start/stop the motor, but a starter also includes overload protection — the safer, more complete device." },
      { front: "Full-load current (FLA)", back: "The expected current at rated load — the baseline for setting overload protection. Not starting or short-circuit current." },
      { front: "Short-circuit protection", back: "Fuses/breakers clear an unintended low-resistance fault path with extremely fast-rising current." },
      { front: "Overload protection", back: "Protects against sustained current above rating that builds heat over time; trips slower than a fuse (thermal response)." },
      { front: "Overload setting rule (SF ≥ 1.15)", back: "Set trip current equal to the motor's rated full-load current (FLA)." },
      { front: "Manual starter OFF/ON continuity", back: "OFF → open circuit L to T. ON → near-zero resistance / continuity L to T." },
      { front: "Low-voltage protection", back: "Prevents a motor from automatically restarting after power is lost and restored — must be manually restarted." },
      { front: "Lab 2, Part 4 finding", back: "Leaving the manual starter ON through a power loss caused the motor to restart automatically — proving no low-voltage protection." },
      { front: "Missing phase on a 3-phase motor", back: "May hum, overheat, or fail to start — the rotating magnetic field is incomplete." },
      { front: "Home example: light switch", back: "Pure manual control — no overload protection built in." },
      { front: "Home example: thermal-magnetic breaker panel", back: "One device, two jobs: magnetic trip = short-circuit protection, thermal trip = overload protection." }
    ]
  },
  week3: {
    label: "Week 3 — Control Transformers",
    mc: [
      {
        q: "What are the three jobs of a control transformer?",
        options: [
          "Filter noise, store energy, and boost frequency",
          "Step voltage to a useful level, isolate source and control circuit, and create a predictable troubleshooting measurement point",
          "Rectify AC to DC, filter ripple, and regulate current",
          "Convert single-phase to three-phase power"
        ],
        correct: 1,
        explanation: "A control transformer steps voltage, provides isolation via magnetic coupling, and gives a known point to measure control voltage."
      },
      {
        q: "Primary turns = 100, secondary turns = 50. What is the turns ratio?",
        options: ["0.5:1", "2:1", "1:1", "5:1"],
        correct: 1,
        explanation: "TR = primary turns ÷ secondary turns = 100 ÷ 50 = 2, written 2:1."
      },
      {
        q: "Primary voltage = 120 VAC, turns ratio = 2. What is the secondary voltage?",
        options: ["240 VAC", "60 VAC", "120 VAC", "20 VAC"],
        correct: 1,
        explanation: "Secondary voltage = primary voltage ÷ turns ratio = 120 ÷ 2 = 60 VAC."
      },
      {
        q: "Primary turns = 180, secondary turns = 45, primary voltage = 240 VAC. What is the secondary voltage, and is it step-up or step-down?",
        options: [
          "60 VAC, step-down",
          "960 VAC, step-up",
          "45 VAC, step-down",
          "180 VAC, step-up"
        ],
        correct: 0,
        explanation: "TR = 180 ÷ 45 = 4:1; secondary voltage = 240 ÷ 4 = 60 VAC. TR > 1 means step-down."
      },
      {
        q: "Primary turns = 50, secondary turns = 200, primary voltage = 24 VAC. What is the secondary voltage, and is it step-up or step-down?",
        options: [
          "6 VAC, step-down",
          "96 VAC, step-up",
          "24 VAC, neither",
          "12 VAC, step-down"
        ],
        correct: 1,
        explanation: "TR = 50 ÷ 200 = 0.25; secondary voltage = 24 ÷ 0.25 = 96 VAC. TR < 1 means step-up."
      },
      {
        q: "On the trainer, which primary terminals are used for a 208 VAC supply?",
        options: ["2 and 3", "2 and 4", "2 and 6", "3 and 4"],
        correct: 0,
        explanation: "208 VAC → terminals 2 and 3. (277 VAC → 2 and 4; 380 VAC → 2 and 6.)"
      },
      {
        q: "Which secondary link pattern gives 120 VAC across terminals 2 and 5?",
        options: [
          "Link terminal 3 to terminal 4 (series)",
          "Link terminal 2 to 3, and terminal 4 to 5 (parallel)",
          "Link terminal 2 directly to terminal 5",
          "No links are required"
        ],
        correct: 1,
        explanation: "Parallel secondary connection (2-3 linked, 4-5 linked) gives 120 VAC; series (3-4 linked) gives 240 VAC."
      },
      {
        q: "Why is terminal 5 on the secondary connected to earth ground in this lab?",
        options: [
          "To increase the secondary voltage",
          "To give the control circuit a stable reference to ground and help fault current clear protection",
          "It is required only for step-up transformers",
          "To reduce the transformer's VA rating"
        ],
        correct: 1,
        explanation: "Grounding one side of the secondary gives a stable reference; a fault to ground becomes a high-current path that can trip protection."
      },
      {
        q: "What should you expect when measuring from terminal 5 to ground?",
        options: ["About 120 VAC", "About 0 VAC", "About 60 VAC", "About 240 VAC"],
        correct: 1,
        explanation: "Terminal 5 is the grounded secondary terminal, so it should read about 0 VAC to ground."
      },
      {
        q: "If the reading across secondary terminals 2 and 5 is not near 120 VAC, what should you do first?",
        options: [
          "Assume the transformer is bad and replace it",
          "Check the primary tap, secondary links, fuse path, and meter setting",
          "Increase the supply voltage",
          "Skip the measurement and check the lamp instead"
        ],
        correct: 1,
        explanation: "A wrong reading is usually a wiring, tap, fuse, or meter-setting issue — not necessarily a bad transformer."
      },
      {
        q: "What are the three steps of Live-Dead-Live?",
        options: [
          "Dead, Live, Dead",
          "Prove the meter live, measure the circuit (expect dead), re-prove the meter live",
          "Live, measure, done",
          "Turn off power, wire the circuit, turn on power"
        ],
        correct: 1,
        explanation: "1) Prove meter on a known live source. 2) Measure the target circuit, expecting zero volts. 3) Re-prove the meter live to confirm it didn't fail during testing."
      },
      {
        q: "Why is VA (volt-amperes) used to rate a control transformer instead of just voltage?",
        options: [
          "VA only matters for DC transformers",
          "VA = V × I represents the apparent power capacity, so an undersized transformer can sag or overheat under load",
          "VA measures frequency, not power",
          "VA is only relevant to primary-side protection"
        ],
        correct: 1,
        explanation: "VA is apparent power capacity (V × I). Undersizing it can cause control voltage sag, contactor chatter, or overheating."
      }
    ],
    flashcards: [
      { front: "Three jobs of a control transformer", back: "Step voltage to a useful level, isolate source from control circuit, create a predictable troubleshooting measurement point." },
      { front: "Turns ratio (TR) formula", back: "TR = primary turns ÷ secondary turns." },
      { front: "Secondary voltage formula", back: "Secondary voltage = primary voltage ÷ turns ratio." },
      { front: "TR greater than 1", back: "Step-down transformer — secondary voltage is lower than primary voltage." },
      { front: "TR less than 1", back: "Step-up transformer — secondary has more turns than primary, so secondary voltage is higher." },
      { front: "Primary tap for 208 VAC supply", back: "Terminals 2 and 3." },
      { front: "Primary tap for 277 VAC supply", back: "Terminals 2 and 4." },
      { front: "Primary tap for 380 VAC supply", back: "Terminals 2 and 6." },
      { front: "Secondary series connection", back: "Link terminal 3 to 4 → 240 VAC output across 2–5." },
      { front: "Secondary parallel connection", back: "Link 2 to 3, and 4 to 5 → 120 VAC output across 2–5 (used in this lab)." },
      { front: "Why ground terminal 5?", back: "Gives the control circuit a stable ground reference; a fault to ground becomes a high-current path that trips protection." },
      { front: "Expected reading: 2 to 5", back: "About 120 VAC." },
      { front: "Expected reading: 5 to ground", back: "About 0 VAC (terminal 5 is grounded)." },
      { front: "Expected reading: 2 to ground", back: "About 120 VAC (terminal 2 is ungrounded)." },
      { front: "Live-Dead-Live", back: "1) Prove meter live. 2) Measure target circuit — expect dead (zero volts). 3) Re-prove meter live." },
      { front: "Why the final 'Live' check matters", back: "A meter lead or connection can fail during testing — re-checking proves the zero-volt reading was real." },
      { front: "VA (volt-amperes)", back: "Apparent power capacity: VA = V × I. Undersizing causes voltage sag, contactor chatter, or overheating." },
      { front: "Why not run all control devices on line voltage?", back: "Line voltage may exceed device ratings; a standard control voltage keeps wiring/troubleshooting consistent — but is not automatically 'safe.'" },
      { front: "Primary-side vs. secondary-side protection", back: "Primary-side protects the transformer's primary winding and upstream wiring; secondary-side protects the lower-voltage control conductors/devices." },
      { front: "If lamp works but voltage reading is wrong", back: "Don't skip the measurement — the lamp only proves circuit action, not correct transformer output." }
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
