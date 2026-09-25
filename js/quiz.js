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
        explanation: "A control transformer steps voltage, provides isolation via magnetic coupling, and gives a known point to measure control voltage.",
        diagram: "transformerCoupling"
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
        explanation: "208 VAC → terminals 2 and 3. (277 VAC → 2 and 4; 380 VAC → 2 and 6.)",
        diagram: "primaryTap"
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
        explanation: "Parallel secondary connection (2-3 linked, 4-5 linked) gives 120 VAC; series (3-4 linked) gives 240 VAC.",
        diagram: "secondaryLinks"
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
        explanation: "Grounding one side of the secondary gives a stable reference; a fault to ground becomes a high-current path that can trip protection.",
        diagram: "grounding"
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
      },
      {
        q: "A transformer has one primary (300 turns, 120 VAC) and a secondary with 100 turns. What is that secondary's voltage?",
        options: ["360 VAC", "40 VAC", "12 VAC", "300 VAC"],
        correct: 1,
        explanation: "TR = 300 ÷ 100 = 3; secondary voltage = 120 ÷ 3 = 40 VAC."
      },
      {
        q: "You need 100 VAC from a 150-turn secondary, and the primary has 900 turns. What primary voltage is required?",
        options: ["600 VAC", "16.7 VAC", "100 VAC", "150 VAC"],
        correct: 0,
        explanation: "TR = 900 ÷ 150 = 6; primary voltage = secondary voltage × TR = 100 × 6 = 600 VAC."
      },
      {
        q: "Two identical 60 VAC, 2 A secondary windings are connected series aiding. What is the output voltage and current capacity?",
        options: [
          "60 VAC, 4 A",
          "120 VAC, 2 A",
          "120 VAC, 4 A",
          "60 VAC, 2 A"
        ],
        correct: 1,
        explanation: "Series aiding adds the voltages (60 + 60 = 120 VAC); current capacity stays 2 A since the same current flows through both windings in series."
      },
      {
        q: "Two identical 60 VAC, 2 A secondary windings are connected in parallel with matching polarity. What is the output voltage and current capacity?",
        options: [
          "120 VAC, 2 A",
          "60 VAC, 4 A",
          "60 VAC, 2 A",
          "120 VAC, 4 A"
        ],
        correct: 1,
        explanation: "Parallel windings keep the same voltage (60 VAC) while their current capacities add (2 + 2 = 4 A)."
      },
      {
        q: "Why is matching polarity essential when paralleling two transformer secondary windings?",
        options: [
          "It isn't essential, polarity doesn't matter in AC circuits",
          "Mismatched polarity can drive a large circulating current between the windings, effectively a short circuit",
          "It only affects the current rating, never the voltage",
          "Matching polarity increases the output voltage"
        ],
        correct: 1,
        explanation: "Reversed polarity puts the windings out of phase; they oppose each other and can drive a very large circulating current between them."
      },
      {
        q: "A resistance test across a primary winding reads infinite instead of a finite value. What does this indicate?",
        options: [
          "The transformer is working normally",
          "An open winding or open connection",
          "A short circuit between primary and secondary",
          "The transformer is oversized"
        ],
        correct: 1,
        explanation: "A good winding shows finite resistance; infinite resistance means the winding or its connection is open."
      },
      {
        q: "A resistance test between the primary and secondary windings reads low instead of near-infinite. What does this indicate?",
        options: [
          "Normal operation — primary and secondary are supposed to be connected",
          "Insulation failure or an internal short between windings — do not use the transformer",
          "The transformer is a step-up type",
          "The secondary is properly grounded"
        ],
        correct: 1,
        explanation: "Primary and secondary should be electrically isolated. Low resistance between them indicates a winding-to-winding short/insulation failure."
      },
      {
        q: "A 120 VAC control load draws 4 A during inrush (coil pickup). What inrush VA must the transformer be able to supply?",
        options: ["30 VA", "480 VA", "4 VA", "124 VA"],
        correct: 1,
        explanation: "Inrush VA = V × I = 120 × 4 = 480 VA. Undersizing for inrush can cause voltage sag and contactor chatter."
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
      { front: "If lamp works but voltage reading is wrong", back: "Don't skip the measurement — the lamp only proves circuit action, not correct transformer output." },
      { front: "Multiple secondaries — same formula", back: "Each secondary uses its own turns ratio against the same primary: V = primary voltage ÷ (primary turns ÷ that secondary's turns)." },
      { front: "Solving for primary voltage", back: "Primary voltage = secondary voltage × turns ratio (rearranged formula, used when the secondary side is known)." },
      { front: "Series aiding secondaries", back: "Voltages add (e.g., 60 + 60 = 120 VAC); current capacity stays the same (same current flows through both windings)." },
      { front: "Parallel secondaries, matching polarity", back: "Voltage stays the same (e.g., 60 VAC); current capacities add (e.g., 2 + 2 = 4 A)." },
      { front: "Mismatched polarity when paralleling secondaries", back: "Windings oppose each other and can drive a large circulating current — effectively a short circuit." },
      { front: "Infinite resistance across a winding", back: "Indicates an open winding or open connection." },
      { front: "Low resistance between primary and secondary", back: "Indicates insulation failure / internal short — do not use the transformer." },
      { front: "Inrush VA", back: "VA = V × I using the brief inrush current (e.g., contactor coil pickup), not just steady-state current — transformer must be sized for it." }
    ]
  },
  week4: {
    label: "Week 4 — Control Ladder Logic",
    mc: [
      {
        q: "What is a 'rung' in a ladder diagram?",
        options: [
          "One of the two vertical power rails",
          "A horizontal path between the rails that, when complete, energizes an output",
          "A synonym for a Normally Closed contact",
          "The device tag printed next to a coil"
        ],
        correct: 1,
        explanation: "Each horizontal path between the rails is a rung; a complete electrical path across it energizes the rung's output.",
        diagram: "ladderAnatomy"
      },
      {
        q: "Why should each independent output be placed on its own rung?",
        options: [
          "It is required by the rails",
          "It keeps the logic readable and testable instead of mixing two outputs' logic on one rung",
          "It reduces the number of rails needed",
          "It has no real benefit, it's just convention"
        ],
        correct: 1,
        explanation: "One output per rung keeps each rung's logic simple to trace and test independently."
      },
      {
        q: "What is the normal (unactuated) state of a Normally Open (NO) contact?",
        options: ["Closed", "Open", "It depends on the device", "Always energized"],
        correct: 1,
        explanation: "NO contacts are open at rest; actuating the device closes the path.",
        diagram: "contactSymbols"
      },
      {
        q: "What is the normal (unactuated) state of a Normally Closed (NC) contact?",
        options: ["Open", "Closed", "It depends on the device", "Always de-energized"],
        correct: 1,
        explanation: "NC contacts are closed at rest; actuating the device opens the path."
      },
      {
        q: "Two NO pushbuttons are wired in series to a lamp. What logic function does this implement?",
        options: ["OR", "AND", "NOT", "NOR"],
        correct: 1,
        explanation: "Series contacts implement AND logic — every contact in the path must provide continuity for the lamp to energize.",
        diagram: "seriesAnd"
      },
      {
        q: "Two NO pushbuttons are wired in parallel to a lamp. What logic function does this implement?",
        options: ["AND", "OR", "NOT", "NAND"],
        correct: 1,
        explanation: "Parallel contacts implement OR logic — only one branch needs to be complete to energize the lamp.",
        diagram: "parallelOr"
      },
      {
        q: "Why do stop devices commonly use Normally Closed contacts instead of Normally Open?",
        options: [
          "NC contacts are cheaper",
          "An open circuit (pressed stop or broken wire) removes the run command — a fail-safe design",
          "NC contacts carry more current",
          "NO contacts cannot be used in series"
        ],
        correct: 1,
        explanation: "With an NC stop contact, both pressing STOP and a broken conductor open the circuit, removing the run command rather than creating a false run signal.",
        diagram: "ncStop"
      },
      {
        q: "In the Skill 5 two-rung circuit, PB3 (NC, shared/upstream) feeds branch A (PB1, NO → Y) and branch B (PB2, NC → G). With all buttons released, what are Y and G?",
        options: [
          "Y ON, G OFF",
          "Y OFF, G ON",
          "Y ON, G ON",
          "Y OFF, G OFF"
        ],
        correct: 1,
        explanation: "PB1 (NO) is open at rest, breaking Y's branch — Y is OFF. PB3 and PB2 (both NC) are closed at rest, so G is ON.",
        diagram: "skill5"
      },
      {
        q: "In that same Skill 5 circuit, why does holding PB3 turn OFF both Y and G, even if PB1 is pressed?",
        options: [
          "PB3 has no effect on either rung",
          "PB3 is the shared upstream contact; opening it removes the common path before the branch split, so neither rung can be complete",
          "Pressing PB3 always short-circuits the transformer",
          "PB1 overrides PB3 when both are actuated"
        ],
        correct: 1,
        explanation: "PB3 sits upstream of both branches. Opening it (by actuating the NC contact) removes the shared path feeding both Y and G."
      },
      {
        q: "When converting a STOP → START → coil M rung into point-to-point wiring, what is the correct first wire?",
        options: [
          "Coil M return to neutral",
          "L1 to the STOP input",
          "START output to coil M",
          "STOP output to START input"
        ],
        correct: 1,
        explanation: "Reading the rung left to right, the first wire runs from L1 to the STOP contact's input.",
        diagram: "wiring"
      },
      {
        q: "In voltage tracing, what does it mean if voltage is present before a contact but missing after it?",
        options: [
          "The transformer has failed",
          "That contact (or its wiring/connection) is the first open point blocking the rung",
          "The rung has too many outputs",
          "The meter is set to the wrong function"
        ],
        correct: 1,
        explanation: "Troubleshooting rule: measure left to right; the first point where expected voltage disappears identifies the open contact or connection."
      },
      {
        q: "With START released (open) in a STOP-START-coil M rung, what is the approximate voltage at the node right after START (toward the coil)?",
        options: ["About 120 VAC", "Near 0 V", "Exactly half of 120 VAC", "It cannot be determined"],
        correct: 1,
        explanation: "The node after the open START contact is near neutral potential until START closes and completes the path.",
        diagram: "voltageTrace"
      },
      {
        q: "What is the difference between 'the symbol is Normally Open' and 'the contact is currently open'?",
        options: [
          "There is no difference, they mean the same thing",
          "Normally Open describes the contact's normal, unactuated design state; currently open describes its actual state at the moment being analyzed",
          "Normally Open only applies to relays, not pushbuttons",
          "Currently open means the contact is broken"
        ],
        correct: 1,
        explanation: "The NO/NC symbol shows the contact's normal (unactuated) state. Its actual state at any moment depends on whether its associated device is actuated."
      },
      {
        q: "PB1 pressed, PB2 released in a series (AND) lamp circuit. Is the lamp on or off?",
        options: ["On", "Off", "Flickering", "Cannot be determined"],
        correct: 1,
        explanation: "AND logic requires both contacts closed; PB2 is still open, so the lamp is off."
      },
      {
        q: "PB1 released, PB2 pressed in a parallel (OR) lamp circuit. Is the lamp on or off?",
        options: ["On", "Off", "Flickering", "Cannot be determined"],
        correct: 0,
        explanation: "OR logic only needs one closed branch; PB2 being pressed provides a complete path."
      },
      {
        q: "What must every conductor do on a correctly drawn ladder diagram, per the drawing standard discussed in class?",
        options: [
          "Cross over other conductors without a junction dot",
          "Visibly terminate on the intended electrical symbol (clear gap for NO, proper diagonal mark for NC)",
          "Always run parallel to the rails",
          "Be labeled with a resistance value"
        ],
        correct: 1,
        explanation: "Every conductor must clearly terminate on its intended symbol, with NO showing a clear gap and NC showing the proper diagonal contact mark."
      },
      {
        q: "Why is the selector switch (SS1) in Lab 4 Part B different from the pushbuttons used in Part A?",
        options: [
          "SS1 is Normally Closed only",
          "SS1 is maintained — it stays in the selected position instead of springing back like a pushbutton",
          "SS1 cannot control a lamp",
          "SS1 requires a separate transformer"
        ],
        correct: 1,
        explanation: "A selector switch is a maintained device; it holds its position until manually moved again, unlike a momentary pushbutton."
      },
      {
        q: "In Lab 4 Part C, why is the ladder analyzed on paper instead of being wired?",
        options: [
          "The trainer does not support that circuit",
          "To test whether you can read ladder logic and predict output states without the pictorial as a crutch",
          "It is too dangerous to wire",
          "It requires a different trainer module entirely"
        ],
        correct: 1,
        explanation: "Removing the pictorial and requiring paper analysis tests whether the reading/prediction skill has actually been learned."
      },
      {
        q: "A rung should energize its output. You measure 120 V at L1, 120 V after the first contact, and 0 V after the second contact. What should you inspect first?",
        options: [
          "The output device only",
          "The second contact or its associated wiring",
          "The L1 power rail",
          "The first contact"
        ],
        correct: 1,
        explanation: "Voltage is present before the second contact but missing after it — that's the first point where the expected voltage disappears."
      },
      {
        q: "What does Class 5 add on top of this week's ladder logic concepts?",
        options: [
          "Transformer turns-ratio calculations",
          "Control relays, contactors, overload protection, and the seal-in circuit",
          "AC vs. DC motor theory",
          "NEC grounding requirements"
        ],
        correct: 1,
        explanation: "Class 5 introduces control relays, contactors, overload protection, and the seal-in circuit that keeps a motor starter energized after a momentary START."
      }
    ],
    flashcards: [
      { front: "Rail vs. rung", back: "Rails are the two vertical power lines; a rung is a horizontal path between them that energizes an output when complete." },
      { front: "One output per rung", back: "Keeps logic readable/testable — separate independent outputs onto separate rungs." },
      { front: "Normally Open (NO) contact", back: "Open at rest; closes when actuated." },
      { front: "Normally Closed (NC) contact", back: "Closed at rest; opens when actuated." },
      { front: "Series contacts = ?", back: "AND logic — every contact must provide continuity." },
      { front: "Parallel contacts = ?", back: "OR logic — only one branch needs to be complete." },
      { front: "NC stop contact = ?", back: "NOT/fail-safe logic — an open circuit (pressed stop or broken wire) removes the run command." },
      { front: "Skill 5: all buttons released", back: "Y (via NO PB1) is OFF; G (via NC PB3+PB2) is ON." },
      { front: "Skill 5: PB3 held (shared upstream NC)", back: "Both Y and G go OFF — PB3 removes the common path feeding both branches." },
      { front: "Ladder → point-to-point wiring order", back: "Read left to right: L1 → STOP input, STOP output → START input, START output → coil M, coil M return → neutral." },
      { front: "Voltage-tracing troubleshooting rule", back: "Measure left to right; the first point where expected voltage disappears is the open contact/connection." },
      { front: "'Normally Open' vs. 'currently open'", back: "Normally Open = the symbol's unactuated design state. Currently open = the contact's actual state right now." },
      { front: "Ladder drawing standard", back: "Every conductor must visibly terminate on its symbol — clear gap for NO, proper diagonal mark for NC." },
      { front: "Maintained vs. momentary device", back: "A selector switch (maintained) stays in its selected position; a pushbutton (momentary) springs back when released." },
      { front: "Why analyze Lab 4 Part C on paper only", back: "Tests whether you can read ladder logic and predict outputs without the pictorial as a crutch." },
      { front: "What Class 5 adds", back: "Control relays, contactors, overload protection, and the seal-in circuit for motor starters." }
    ]
  },
  week5: {
    label: "Week 5 — Control Relays and Motor Starters",
    mc: [
      {
        q: "What is the key distinction between the power circuit and the control circuit in a motor starter?",
        options: [
          "There is no difference, they are the same wiring",
          "The control circuit gives permission (decides whether to run); the power circuit carries the energy to the motor",
          "The power circuit only exists in three-wire control",
          "The control circuit always carries higher current"
        ],
        correct: 1,
        explanation: "The control circuit (STOP, START, coil, seal-in, overload contact) decides whether the contactor should close; the power circuit actually supplies the motor.",
        diagram: "twoCircuits"
      },
      {
        q: "What is the key distinction between a control relay and a contactor?",
        options: [
          "A control relay is a logic device; a contactor is a motor-duty power-switching device",
          "They are interchangeable terms for the same device",
          "A contactor only works on DC circuits",
          "A control relay always has more poles than a contactor"
        ],
        correct: 0,
        explanation: "A control relay switches low-current control/logic signals; a contactor is built to make and break the higher current a motor draws."
      },
      {
        q: "A Normally Closed STOP pushbutton is drawn closed on the diagram. What happens when the operator presses STOP?",
        options: [
          "Nothing changes",
          "The physical contact opens and breaks the control path",
          "The contact closes further",
          "It only affects the power circuit"
        ],
        correct: 1,
        explanation: "The symbol shows the normal (unactuated) state. Pressing a Normally Closed STOP pushbutton opens the physical contact, breaking the control path."
      },
      {
        q: "When the F coil energizes, what happens to the F main contacts and the F auxiliary contact together?",
        options: [
          "Only the main contacts move; auxiliary contacts are unaffected",
          "They all move together — F main contacts close (motor power applied) and F auxiliary switches to its actuated state",
          "The auxiliary contact moves opposite to the main contacts on a delay",
          "Nothing moves until the overload trips"
        ],
        correct: 1,
        explanation: "Every contact labeled 'F' — main or auxiliary — moves together whenever the F coil changes state."
      },
      {
        q: "What kind of command does two-wire control use?",
        options: [
          "A momentary pushbutton with seal-in memory",
          "A maintained command, such as a selector or float switch that stays in its actuated position",
          "Two separate momentary pushbuttons wired in series",
          "A control relay with no coil"
        ],
        correct: 1,
        explanation: "Two-wire control uses a maintained input; as long as it stays closed, the coil stays energized — no seal-in path is needed."
      },
      {
        q: "What is the main safety drawback of two-wire (maintained) control compared to three-wire control?",
        options: [
          "It cannot control a motor at all",
          "It restarts the motor automatically as soon as the maintained input recloses, including after a power interruption",
          "It requires two separate overload relays",
          "It uses higher control voltage"
        ],
        correct: 1,
        explanation: "Because the input is maintained, the motor can restart unattended as soon as power and the maintained signal are both present again."
      },
      {
        q: "In three-wire control, where is the STOP contact wired relative to START and the seal-in (F auxiliary) contact?",
        options: [
          "In parallel with START only",
          "In series with the entire START/seal-in parallel pair",
          "After the coil, in series with the overload contact only",
          "It is not part of the control circuit"
        ],
        correct: 1,
        explanation: "STOP (NC) is wired first, in series with the entire rung, so it always dominates over START and the seal-in path — 'stop dominance.'",
        diagram: "threeWireSealIn"
      },
      {
        q: "In three-wire control, what is wired in parallel with the START pushbutton?",
        options: [
          "The overload control contact",
          "The F auxiliary Normally Open contact (the seal-in path)",
          "A second STOP pushbutton",
          "The control transformer"
        ],
        correct: 1,
        explanation: "The F auxiliary NO contact in parallel with START is the seal-in (holding) path that keeps the coil energized after START is released."
      },
      {
        q: "What is the first step in the seal-in sequence?",
        options: [
          "The overload contact opens",
          "START is pressed, closing the START contact and energizing the F coil",
          "The F auxiliary contact closes on its own",
          "STOP is pressed"
        ],
        correct: 1,
        explanation: "Pressing START closes the START contact, which is the first step that energizes the F coil."
      },
      {
        q: "Why does the motor keep running after the START pushbutton is released?",
        options: [
          "The overload contact holds the circuit closed",
          "Current flows through the now-closed F auxiliary (seal-in) contact instead of through START",
          "The STOP contact re-closes automatically",
          "Momentary pushbuttons stay closed after being pressed"
        ],
        correct: 1,
        explanation: "Once the F coil energizes, the F auxiliary contact closes and provides a parallel holding path around START."
      },
      {
        q: "What happens when STOP is pressed during normal three-wire operation?",
        options: [
          "Only the F auxiliary contact opens; the coil stays energized",
          "The STOP contact opens, the F coil drops out, and all F contacts (main and auxiliary) return to normal",
          "The overload elements reset",
          "The motor speeds up briefly before stopping"
        ],
        correct: 1,
        explanation: "Pressing the Normally Closed STOP contact opens it, de-energizing the F coil and returning every F contact to its normal state."
      },
      {
        q: "What does 'stop dominance' mean in a three-wire starter circuit?",
        options: [
          "STOP always overrides START — pressing STOP breaks the path to the coil even if START is being held at the same time",
          "STOP can only be used once per shift",
          "START dominates STOP in the wiring",
          "It refers to the overload elements only"
        ],
        correct: 0,
        explanation: "Because STOP is in series with the entire START/seal-in branch, it always removes power from the coil regardless of START's state."
      },
      {
        q: "Where is the overload control contact wired, and what type of contact is it?",
        options: [
          "In the power circuit, in series with the motor, and it is Normally Open",
          "In the control circuit, in series with the coil (alongside STOP), and it is Normally Closed",
          "In parallel with START, and it is Normally Open",
          "It is not part of the control circuit"
        ],
        correct: 1,
        explanation: "The overload control contact is NC and wired in series with the coil, so a trip has the same fail-safe effect as pressing STOP.",
        diagram: "overloadProtection"
      },
      {
        q: "What is the difference between the overload elements and the overload control contact?",
        options: [
          "There is no difference, they are the same device",
          "Overload elements are power-side current sensors (one per phase); the overload control contact is the control-side NC switch that opens the coil circuit on a trip",
          "Overload elements are in the control circuit; the overload contact is in the power circuit",
          "The overload control contact senses current directly"
        ],
        correct: 1,
        explanation: "The elements sense motor current on the power side; when they detect a sustained overcurrent, the separate NC control contact opens to de-energize the coil."
      },
      {
        q: "What happens to the F auxiliary seal-in contact during a loss of control power?",
        options: [
          "It stays closed, holding the circuit in",
          "The F coil de-energizes and the F auxiliary contact opens, returning to its normal state",
          "It welds shut",
          "It has no effect on the circuit"
        ],
        correct: 1,
        explanation: "Losing power de-energizes the F coil, so the F auxiliary contact returns to its normal (open) state."
      },
      {
        q: "Why doesn't a three-wire motor starter restart automatically when power returns after a loss?",
        options: [
          "The overload relay permanently locks out the circuit",
          "START is no longer being pressed and the auxiliary contact is open, so there is no complete path to the coil — START must be pressed again",
          "The control transformer needs to be manually reset",
          "Three-wire starters cannot lose power without tripping the overload"
        ],
        correct: 1,
        explanation: "With both START (momentary, now released) and the auxiliary contact open, there is no path to re-energize the coil until START is pressed again."
      },
      {
        q: "With START and STOP both released (never pressed since power-up), should the F coil be energized?",
        options: [
          "Yes, because STOP is Normally Closed and provides a path",
          "No — START is open, and the F auxiliary seal-in contact has never closed either",
          "Yes, because the overload contact energizes the coil",
          "It depends on the control transformer tap"
        ],
        correct: 1,
        explanation: "STOP being closed alone isn't enough — both START and the F auxiliary (seal-in) contact are open until START has been pressed at least once."
      },
      {
        q: "In Amatrol Figure 5-2, what does the top section of the diagram show?",
        options: [
          "The three-wire START/STOP control circuit",
          "The three-phase motor power path: F main contacts, overload elements, and T1-T3",
          "The control transformer and fuse path only",
          "Panel grounding details"
        ],
        correct: 1,
        explanation: "Figure 5-2's top section is the power path; the middle is the control transformer/fuse path, and the bottom is the three-wire control circuit."
      },
      {
        q: "If the contactor pulls in but the motor does not run, should you first suspect the control circuit or the power circuit?",
        options: [
          "The control circuit, since the coil clearly isn't working",
          "The power circuit — the control circuit already did its job (the coil pulled in), so the fault more likely lies downstream in the power path",
          "Neither — this indicates a control transformer failure",
          "The overload control contact, since it must be shorted"
        ],
        correct: 1,
        explanation: "A pulled-in contactor shows the control circuit successfully energized the coil; a motor that still doesn't run points first toward the power circuit (main contacts, overload elements, leads, or supply phase)."
      },
      {
        q: "What does Class 6 add on top of this week's three-wire starter concepts?",
        options: [
          "Transformer turns-ratio calculations",
          "Additional control functions (e.g., jogging, multiple START/STOP stations, or interlocking) layered on the seal-in circuit",
          "AC vs. DC motor theory",
          "NEC grounding requirements"
        ],
        correct: 1,
        explanation: "Class 6 builds on this week's seal-in circuit by adding more advanced control functions on top of it."
      }
    ],
    flashcards: [
      { front: "Power circuit vs. control circuit", back: "Power circuit carries the energy to the motor; control circuit gives permission (decides whether the contactor should close)." },
      { front: "Control relay vs. contactor", back: "Control relay = logic device (low-current switching). Contactor = motor-duty power-switching device." },
      { front: "NC STOP pushbutton, normal state", back: "Closed at rest — pressing it opens the contact and breaks the control path." },
      { front: "When the F coil energizes...", back: "All F contacts move together: F main contacts close (motor power applied), F auxiliary switches to actuated state." },
      { front: "Two-wire control", back: "Uses a maintained command (e.g., selector/float switch); coil stays energized as long as the input is closed. Restarts automatically after a power blip." },
      { front: "Three-wire control", back: "Uses momentary START/STOP pushbuttons plus a seal-in (F auxiliary) contact for memory. No automatic restart after a power loss." },
      { front: "Seal-in sequence (5 steps)", back: "START pressed → F coil energizes → F auxiliary closes (seal-in) → START released, motor keeps running → STOP pressed, coil drops out." },
      { front: "Stop dominance", back: "STOP is in series with the entire START/seal-in branch — pressing STOP always removes power from the coil, even if START is held." },
      { front: "Overload elements vs. overload control contact", back: "Elements = power-side current sensors (per phase). Control contact = NC, control-side, opens the coil circuit when a trip is detected." },
      { front: "Why 3-wire control doesn't auto-restart after power loss", back: "START is momentary and no longer pressed; the F auxiliary seal-in contact is open — no path to the coil until START is pressed again." },
      { front: "Amatrol Figure 5-2 — top / middle / bottom", back: "Top: 3-phase motor power path. Middle: control transformer & fuse path. Bottom: 3-wire START/STOP control circuit." },
      { front: "Panel grounds and the simplified ladder", back: "Panel grounds are required even when not shown on the simplified ladder diagram — always verify on the real panel/trainer." },
      { front: "Contactor pulls in but motor doesn't run — suspect what first?", back: "The power circuit — the control circuit already succeeded in pulling in the coil." },
      { front: "What Class 6 adds", back: "Additional control functions (jogging, multiple START/STOP stations, interlocking) layered on the seal-in circuit." }
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

// Fisher-Yates shuffle
function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Randomizes option order per question so the correct answer's position can't be memorized
function shuffleQuestion(item) {
  const order = shuffle(item.options.map((_, i) => i));
  return {
    q: item.q,
    options: order.map((i) => item.options[i]),
    correct: order.indexOf(item.correct),
    explanation: item.explanation,
    diagram: item.diagram
  };
}

// Named SVG diagram blocks reused across quiz questions (same visual grammar as the study pages)
const diagramLibrary = {
  ladderAnatomy: `<figure class="diagram">
      <svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder anatomy diagram">
        <line x1="40" y1="20" x2="40" y2="140" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="420" y1="20" x2="420" y2="140" stroke="#e7ecf5" stroke-width="4"/>
        <text x="40" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="420" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="40" y1="80" x2="152" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="162" y1="65" x2="162" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="178" y1="65" x2="178" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="188" y1="80" x2="302" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="320" cy="80" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="320" y="85" text-anchor="middle" fill="#f6ad55" font-size="13" font-weight="700">OUT</text>
        <line x1="338" y1="80" x2="420" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <text x="170" y="50" text-anchor="middle" fill="#e7ecf5" font-size="13">Input contact</text>
        <text x="320" y="50" text-anchor="middle" fill="#e7ecf5" font-size="13">Output</text>
      </svg>
      <figcaption>Ladder anatomy: two rails joined by a rung containing an input contact and one output.</figcaption>
    </figure>`,
  contactSymbols: `<div class="diagram-row">
      <figure class="diagram">
        <svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normally open contact symbol">
          <line x1="20" y1="70" x2="112" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <line x1="122" y1="55" x2="122" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="138" y1="55" x2="138" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="148" y1="70" x2="240" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <text x="130" y="30" text-anchor="middle" fill="#e7ecf5" font-size="14" font-weight="700">Normally Open (NO)</text>
          <text x="130" y="115" text-anchor="middle" fill="#9fb0c9" font-size="12">Open at rest — closes when actuated</text>
        </svg>
        <figcaption>NO contact: a gap at rest.</figcaption>
      </figure>
      <figure class="diagram">
        <svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normally closed contact symbol">
          <line x1="20" y1="70" x2="112" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <line x1="122" y1="55" x2="122" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="138" y1="55" x2="138" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="118" y1="85" x2="142" y2="55" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="148" y1="70" x2="240" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <text x="130" y="30" text-anchor="middle" fill="#e7ecf5" font-size="14" font-weight="700">Normally Closed (NC)</text>
          <text x="130" y="115" text-anchor="middle" fill="#9fb0c9" font-size="12">Closed at rest — opens when actuated</text>
        </svg>
        <figcaption>NC contact: same symbol plus a diagonal bridge.</figcaption>
      </figure>
    </div>`,
  seriesAnd: `<figure class="diagram">
      <svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Series AND circuit diagram">
        <line x1="30" y1="20" x2="30" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="80" x2="142" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="152" y1="65" x2="152" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="168" y1="65" x2="168" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="178" y1="80" x2="252" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="262" y1="65" x2="262" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="278" y1="65" x2="278" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="288" y1="80" x2="342" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="360" cy="80" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="360" y="85" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">Y</text>
        <line x1="378" y1="80" x2="430" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <text x="160" y="45" text-anchor="middle" fill="#e7ecf5" font-size="13">PB1 (NO)</text>
        <text x="270" y="45" text-anchor="middle" fill="#e7ecf5" font-size="13">PB2 (NO)</text>
      </svg>
      <figcaption>Series = AND: both PB1 and PB2 must be pressed to light Y.</figcaption>
    </figure>`,
  parallelOr: `<figure class="diagram">
      <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel OR circuit diagram">
        <line x1="30" y1="20" x2="30" y2="180" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="180" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="60" x2="142" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="152" y1="45" x2="152" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="168" y1="45" x2="168" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="178" y1="60" x2="300" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <text x="160" y="30" text-anchor="middle" fill="#e7ecf5" font-size="13">PB1 (NO)</text>
        <line x1="30" y1="140" x2="142" y2="140" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="152" y1="125" x2="152" y2="155" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="168" y1="125" x2="168" y2="155" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="178" y1="140" x2="300" y2="140" stroke="#e7ecf5" stroke-width="3"/>
        <text x="160" y="175" text-anchor="middle" fill="#e7ecf5" font-size="13">PB2 (NO)</text>
        <line x1="300" y1="60" x2="300" y2="140" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="300" y1="100" x2="342" y2="100" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="360" cy="100" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="360" y="105" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">Y</text>
        <line x1="378" y1="100" x2="430" y2="100" stroke="#e7ecf5" stroke-width="3"/>
      </svg>
      <figcaption>Parallel = OR: either PB1 or PB2 (or both) lights Y.</figcaption>
    </figure>`,
  ncStop: `<figure class="diagram">
      <svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NC stop circuit diagram">
        <line x1="30" y1="20" x2="30" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="80" x2="192" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="202" y1="65" x2="202" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="218" y1="65" x2="218" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="198" y1="95" x2="222" y2="65" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="228" y1="80" x2="342" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="360" cy="80" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="360" y="85" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">Y</text>
        <line x1="378" y1="80" x2="430" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <text x="210" y="45" text-anchor="middle" fill="#e7ecf5" font-size="13">PB3 (NC) — stop</text>
      </svg>
      <figcaption>NC-as-stop = NOT: the rung is complete until PB3 is pressed.</figcaption>
    </figure>`,
  skill5: `<figure class="diagram">
      <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skill 5 two-rung circuit diagram">
        <line x1="30" y1="20" x2="30" y2="200" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="200" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="110" x2="122" y2="110" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="132" y1="95" x2="132" y2="125" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="148" y1="95" x2="148" y2="125" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="128" y1="125" x2="152" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="158" y1="110" x2="200" y2="110" stroke="#e7ecf5" stroke-width="3"/>
        <text x="140" y="75" text-anchor="middle" fill="#e7ecf5" font-size="12">PB3 (NC) — shared stop</text>
        <line x1="200" y1="60" x2="200" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="200" cy="110" r="3" fill="#e7ecf5"/>
        <line x1="200" y1="60" x2="252" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="262" y1="45" x2="262" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="278" y1="45" x2="278" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="288" y1="60" x2="342" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="360" cy="60" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="360" y="65" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">Y</text>
        <line x1="378" y1="60" x2="430" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <text x="270" y="35" text-anchor="middle" fill="#e7ecf5" font-size="12">PB1 (NO)</text>
        <line x1="200" y1="160" x2="252" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="262" y1="145" x2="262" y2="175" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="278" y1="145" x2="278" y2="175" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="258" y1="175" x2="282" y2="145" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="288" y1="160" x2="342" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="360" cy="160" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="360" y="165" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">G</text>
        <line x1="378" y1="160" x2="430" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <text x="270" y="200" text-anchor="middle" fill="#e7ecf5" font-size="12">PB2 (NC)</text>
      </svg>
      <figcaption>Skill 5: PB3 (NC) is shared upstream of both rungs.</figcaption>
    </figure>`,
  wiring: `<figure class="diagram">
      <svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STOP-START-coil M wiring diagram">
        <line x1="30" y1="20" x2="30" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="80" x2="122" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="132" y1="65" x2="132" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="148" y1="65" x2="148" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="128" y1="95" x2="152" y2="65" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="158" y1="80" x2="232" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="242" y1="65" x2="242" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="258" y1="65" x2="258" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="268" y1="80" x2="332" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="350" cy="80" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="350" y="85" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">M</text>
        <line x1="368" y1="80" x2="430" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <text x="140" y="45" text-anchor="middle" fill="#e7ecf5" font-size="12">STOP (NC)</text>
        <text x="250" y="45" text-anchor="middle" fill="#e7ecf5" font-size="12">START (NO)</text>
        <text x="350" y="45" text-anchor="middle" fill="#e7ecf5" font-size="12">Coil M</text>
      </svg>
      <figcaption>Rung read left to right: L1 → STOP → START → coil M → N.</figcaption>
    </figure>`,
  voltageTrace: `<figure class="diagram">
      <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voltage tracing diagram with START released">
        <line x1="30" y1="20" x2="30" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="430" y1="20" x2="430" y2="120" stroke="#e7ecf5" stroke-width="4"/>
        <text x="30" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="430" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="30" y1="80" x2="122" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="132" y1="65" x2="132" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="148" y1="65" x2="148" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="128" y1="95" x2="152" y2="65" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="158" y1="80" x2="232" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="242" y1="65" x2="242" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="258" y1="65" x2="258" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="268" y1="80" x2="332" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="350" cy="80" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="350" y="85" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">M</text>
        <line x1="368" y1="80" x2="430" y2="80" stroke="#e7ecf5" stroke-width="3"/>
        <text x="140" y="45" text-anchor="middle" fill="#e7ecf5" font-size="12">STOP (NC, closed)</text>
        <text x="250" y="45" text-anchor="middle" fill="#e7ecf5" font-size="12">START (NO, released)</text>
        <text x="76" y="112" text-anchor="middle" fill="#48bb78" font-size="12">~120V</text>
        <text x="195" y="112" text-anchor="middle" fill="#48bb78" font-size="12">~120V</text>
        <text x="300" y="112" text-anchor="middle" fill="#f56565" font-size="12">~0V</text>
        <text x="399" y="112" text-anchor="middle" fill="#f56565" font-size="12">~0V</text>
        <text x="230" y="155" text-anchor="middle" fill="#9fb0c9" font-size="12">START is open, so voltage stops right after it</text>
      </svg>
      <figcaption>With START released, voltage is present up to the open contact but disappears beyond it.</figcaption>
    </figure>`,
  transformerCoupling: `<figure class="diagram">
      <svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transformer magnetic coupling diagram">
        <rect x="80" y="55" width="50" height="110" rx="8" fill="none" stroke="#4fd1c5" stroke-width="3"/>
        <rect x="300" y="55" width="50" height="110" rx="8" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <line x1="195" y1="45" x2="195" y2="175" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="215" y1="45" x2="215" y2="175" stroke="#e7ecf5" stroke-width="4"/>
        <text x="105" y="207" text-anchor="middle" fill="#4fd1c5" font-size="13" font-weight="700">Primary</text>
        <text x="325" y="207" text-anchor="middle" fill="#f6ad55" font-size="13" font-weight="700">Secondary</text>
        <text x="205" y="38" text-anchor="middle" fill="#e7ecf5" font-size="11">Iron core</text>
        <text x="230" y="222" text-anchor="middle" fill="#9fb0c9" font-size="9">(magnetic coupling, not a direct wire)</text>
      </svg>
      <figcaption>Primary and secondary windings share no conductor — energy crosses the iron core magnetically.</figcaption>
    </figure>`,
  primaryTap: `<figure class="diagram">
      <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Primary tap selection diagram">
        <rect x="190" y="30" width="60" height="160" rx="8" fill="none" stroke="#4fd1c5" stroke-width="3"/>
        <text x="220" y="205" text-anchor="middle" fill="#4fd1c5" font-size="13" font-weight="700">Primary winding</text>
        <circle cx="190" cy="50" r="5" fill="#e7ecf5"/>
        <circle cx="190" cy="90" r="5" fill="#e7ecf5"/>
        <circle cx="190" cy="130" r="5" fill="#e7ecf5"/>
        <circle cx="190" cy="170" r="5" fill="#e7ecf5"/>
        <text x="170" y="54" text-anchor="end" fill="#e7ecf5" font-size="13">2</text>
        <text x="170" y="94" text-anchor="end" fill="#e7ecf5" font-size="13">3</text>
        <text x="170" y="134" text-anchor="end" fill="#e7ecf5" font-size="13">4</text>
        <text x="170" y="174" text-anchor="end" fill="#e7ecf5" font-size="13">6</text>
        <rect x="290" y="50" width="150" height="110" rx="6" fill="#161d2e" stroke="#2a3450" stroke-width="1.5"/>
        <text x="300" y="75" fill="#e7ecf5" font-size="12">208 VAC → terminals 2 &amp; 3</text>
        <text x="300" y="105" fill="#e7ecf5" font-size="12">277 VAC → terminals 2 &amp; 4</text>
        <text x="300" y="135" fill="#e7ecf5" font-size="12">380 VAC → terminals 2 &amp; 6</text>
      </svg>
      <figcaption>Primary tap selection: terminal 2 is common; pairing it with 3, 4, or 6 selects 208, 277, or 380 VAC.</figcaption>
    </figure>`,
  secondaryLinks: `<div class="diagram-row">
      <figure class="diagram">
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Series secondary wiring diagram, 240 VAC">
          <rect x="30" y="60" width="100" height="25" rx="4" fill="none" stroke="#4fd1c5" stroke-width="2"/>
          <rect x="170" y="60" width="100" height="25" rx="4" fill="none" stroke="#f6ad55" stroke-width="2"/>
          <circle cx="40" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="120" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="180" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="260" cy="100" r="5" fill="#e7ecf5"/>
          <line x1="40" y1="85" x2="40" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="120" y1="85" x2="120" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="180" y1="85" x2="180" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="260" y1="85" x2="260" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <text x="40" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">2</text>
          <text x="120" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">3</text>
          <text x="180" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">4</text>
          <text x="260" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">5</text>
          <line x1="120" y1="100" x2="180" y2="100" stroke="#e7ecf5" stroke-width="5"/>
          <text x="150" y="148" text-anchor="middle" fill="#e7ecf5" font-size="13" font-weight="700">240 VAC</text>
        </svg>
        <figcaption>Series: link 3 to 4, output across 2 and 5 = 240 VAC.</figcaption>
      </figure>
      <figure class="diagram">
        <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel secondary wiring diagram, 120 VAC">
          <rect x="30" y="60" width="100" height="25" rx="4" fill="none" stroke="#4fd1c5" stroke-width="2"/>
          <rect x="170" y="60" width="100" height="25" rx="4" fill="none" stroke="#f6ad55" stroke-width="2"/>
          <circle cx="40" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="120" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="180" cy="100" r="5" fill="#e7ecf5"/>
          <circle cx="260" cy="100" r="5" fill="#e7ecf5"/>
          <line x1="40" y1="85" x2="40" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="120" y1="85" x2="120" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="180" y1="85" x2="180" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <line x1="260" y1="85" x2="260" y2="100" stroke="#e7ecf5" stroke-width="2"/>
          <text x="40" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">2</text>
          <text x="120" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">3</text>
          <text x="180" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">4</text>
          <text x="260" y="120" text-anchor="middle" fill="#9fb0c9" font-size="11">5</text>
          <line x1="40" y1="100" x2="120" y2="100" stroke="#e7ecf5" stroke-width="5"/>
          <line x1="180" y1="100" x2="260" y2="100" stroke="#e7ecf5" stroke-width="5"/>
          <text x="150" y="148" text-anchor="middle" fill="#e7ecf5" font-size="13" font-weight="700">120 VAC</text>
        </svg>
        <figcaption>Parallel: link 2 to 3, and 4 to 5, output across 2 and 5 = 120 VAC.</figcaption>
      </figure>
    </div>`,
  grounding: `<figure class="diagram">
      <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grounding and meter reading diagram">
        <circle cx="80" cy="60" r="6" fill="#e7ecf5"/>
        <circle cx="280" cy="60" r="6" fill="#e7ecf5"/>
        <text x="80" y="38" text-anchor="middle" fill="#e7ecf5" font-size="13">2</text>
        <text x="280" y="38" text-anchor="middle" fill="#e7ecf5" font-size="13">5</text>
        <line x1="106" y1="60" x2="154" y2="60" stroke="#9fb0c9" stroke-width="2" stroke-dasharray="5,3"/>
        <line x1="206" y1="60" x2="254" y2="60" stroke="#9fb0c9" stroke-width="2" stroke-dasharray="5,3"/>
        <circle cx="180" cy="60" r="26" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="180" y="66" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">V~</text>
        <line x1="280" y1="66" x2="280" y2="120" stroke="#e7ecf5" stroke-width="2"/>
        <line x1="265" y1="130" x2="295" y2="130" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="270" y1="138" x2="290" y2="138" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="275" y1="146" x2="285" y2="146" stroke="#e7ecf5" stroke-width="3"/>
        <text x="280" y="165" text-anchor="middle" fill="#9fb0c9" font-size="11">Earth ground (terminal 5)</text>
        <text x="180" y="195" text-anchor="middle" fill="#9fb0c9" font-size="11">Terminal 2 to ground ≈ 120 VAC</text>
        <text x="180" y="210" text-anchor="middle" fill="#9fb0c9" font-size="11">Terminal 5 to ground ≈ 0 VAC</text>
      </svg>
      <figcaption>Terminal 5 is tied to earth ground, so only terminal 2 reads voltage-to-ground.</figcaption>
    </figure>`,
  twoCircuits: `<figure class="diagram">
      <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power circuit versus control circuit diagram">
        <rect x="20" y="20" width="200" height="130" rx="8" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="120" y="45" text-anchor="middle" fill="#f6ad55" font-size="14" font-weight="700">Power circuit</text>
        <text x="120" y="70" text-anchor="middle" fill="#e7ecf5" font-size="12">L1, L2, L3 → F main</text>
        <text x="120" y="90" text-anchor="middle" fill="#e7ecf5" font-size="12">contacts → O.L. elements</text>
        <text x="120" y="110" text-anchor="middle" fill="#e7ecf5" font-size="12">→ motor (T1, T2, T3)</text>
        <text x="120" y="135" text-anchor="middle" fill="#9fb0c9" font-size="11">Carries the energy</text>
        <rect x="240" y="20" width="200" height="130" rx="8" fill="none" stroke="#4fd1c5" stroke-width="3"/>
        <text x="340" y="45" text-anchor="middle" fill="#4fd1c5" font-size="14" font-weight="700">Control circuit</text>
        <text x="340" y="70" text-anchor="middle" fill="#e7ecf5" font-size="12">STOP → START → coil F</text>
        <text x="340" y="90" text-anchor="middle" fill="#e7ecf5" font-size="12">(F auxiliary seal-in,</text>
        <text x="340" y="110" text-anchor="middle" fill="#e7ecf5" font-size="12">overload control contact)</text>
        <text x="340" y="135" text-anchor="middle" fill="#9fb0c9" font-size="11">Gives permission</text>
      </svg>
      <figcaption>The control circuit decides whether the contactor should close; the power circuit supplies the motor.</figcaption>
    </figure>`,
  threeWireSealIn: `<figure class="diagram">
      <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-wire seal-in circuit diagram">
        <line x1="20" y1="20" x2="20" y2="200" stroke="#e7ecf5" stroke-width="4"/>
        <line x1="440" y1="20" x2="440" y2="200" stroke="#e7ecf5" stroke-width="4"/>
        <text x="20" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">L1</text>
        <text x="440" y="14" text-anchor="middle" fill="#9fb0c9" font-size="13">N</text>
        <line x1="20" y1="110" x2="112" y2="110" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="122" y1="95" x2="122" y2="125" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="138" y1="95" x2="138" y2="125" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="118" y1="125" x2="142" y2="95" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="148" y1="110" x2="190" y2="110" stroke="#e7ecf5" stroke-width="3"/>
        <text x="130" y="75" text-anchor="middle" fill="#e7ecf5" font-size="12">STOP PB3 (NC)</text>
        <line x1="190" y1="60" x2="190" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="190" y1="60" x2="242" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="252" y1="45" x2="252" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="268" y1="45" x2="268" y2="75" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="278" y1="60" x2="330" y2="60" stroke="#e7ecf5" stroke-width="3"/>
        <text x="260" y="35" text-anchor="middle" fill="#e7ecf5" font-size="12">START PB1 (NO)</text>
        <line x1="190" y1="160" x2="242" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="252" y1="145" x2="252" y2="175" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="268" y1="145" x2="268" y2="175" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="278" y1="160" x2="330" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <text x="260" y="200" text-anchor="middle" fill="#e7ecf5" font-size="12">F aux (NO) — seal-in</text>
        <line x1="330" y1="60" x2="330" y2="160" stroke="#e7ecf5" stroke-width="3"/>
        <line x1="330" y1="110" x2="372" y2="110" stroke="#e7ecf5" stroke-width="3"/>
        <circle cx="390" cy="110" r="18" fill="none" stroke="#f6ad55" stroke-width="3"/>
        <text x="390" y="115" text-anchor="middle" fill="#f6ad55" font-size="13" font-weight="700">F</text>
        <line x1="408" y1="110" x2="440" y2="110" stroke="#e7ecf5" stroke-width="3"/>
      </svg>
      <figcaption>Three-wire control: STOP (NC) in series, START (NO) parallel with F auxiliary (seal-in), feeding coil F.</figcaption>
    </figure>`,
  overloadProtection: `<div class="diagram-row">
      <figure class="diagram">
        <svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Overload element in the power circuit">
          <line x1="20" y1="70" x2="90" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <rect x="90" y="55" width="30" height="30" fill="none" stroke="#f6ad55" stroke-width="3"/>
          <line x1="120" y1="70" x2="190" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <text x="105" y="40" text-anchor="middle" fill="#e7ecf5" font-size="12">O.L. element</text>
          <text x="130" y="115" text-anchor="middle" fill="#9fb0c9" font-size="11">Senses motor current (power side)</text>
        </svg>
        <figcaption>Overload element: in the power path, senses current in each phase.</figcaption>
      </figure>
      <figure class="diagram">
        <svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Overload control contact in the control circuit">
          <line x1="20" y1="70" x2="112" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <line x1="122" y1="55" x2="122" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="138" y1="55" x2="138" y2="85" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="118" y1="85" x2="142" y2="55" stroke="#4fd1c5" stroke-width="3"/>
          <line x1="148" y1="70" x2="240" y2="70" stroke="#e7ecf5" stroke-width="3"/>
          <text x="130" y="30" text-anchor="middle" fill="#e7ecf5" font-size="13" font-weight="700">O.L. contact (NC)</text>
          <text x="130" y="115" text-anchor="middle" fill="#9fb0c9" font-size="11">Series with coil (control side)</text>
        </svg>
        <figcaption>Overload control contact: NC, in series with the coil — opens on trip.</figcaption>
      </figure>
    </div>`
};

function renderMC() {
  const container = document.getElementById("mc-container");
  container.innerHTML = "";
  state.answered = {};
  state.correctCount = 0;
  updateScoreBar();

  const questions = quizData[state.week].mc.map(shuffleQuestion);
  state.currentQuestions = questions;
  questions.forEach((item, qIndex) => {
    const card = document.createElement("div");
    card.className = "quiz-question";

    const title = document.createElement("h3");
    title.textContent = `${qIndex + 1}. ${item.q}`;
    card.appendChild(title);

    if (item.diagram && diagramLibrary[item.diagram]) {
      const diagramWrap = document.createElement("div");
      diagramWrap.innerHTML = diagramLibrary[item.diagram];
      card.appendChild(diagramWrap);
    }

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
