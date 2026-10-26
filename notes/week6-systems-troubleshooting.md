# Week 6 — Systems Troubleshooting

**Source:** Class 7 slides (`Class07_Systems_Troubleshooting_POST.pptx`), Class 7 homework + answer key, Lab 7 (Amatrol Module 7, Skill 11, Figure 11-1 — three-wire 1CR/F fault-plug system), Instructor Motor Control Wiring Reference.

**Teaching focus:** moving from component testing to systematic control-circuit and power-circuit troubleshooting — meter choice, fault signatures, and four troubleshooting methods.

## What you must be able to do

- Separate a motor-control circuit into the control side and the power side, and explain what question each side answers.
- Choose the correct meter mode (AC voltage vs. continuity vs. resistance) for a given troubleshooting question, and explain why live-circuit and de-energized checks must not be mixed.
- Read a labeled signal-testing diagram and state what a given point *should* read if the circuit is healthy.
- Recognize common fault signatures (open coil, open STOP contact, failed seal-in, open overload contact, lost power leg, open fuse) from symptom + measurement patterns.
- Apply symptom-and-cause, output-back, and half-split troubleshooting, and explain when shotgun troubleshooting is an acceptable fallback (and when it isn't).
- Use Amatrol's three-wire 1CR/F wiring reference (Figure 11-1) as the authority for predicting correct readings.
- Follow the lab's fault-insertion and safety rules, including blind-fault rotation and the unexpected-start assumption for approved SHORT faults.

## 1. Where Class 7 fits in the course

- Class 6 proved individual **components** with resistance and continuity tests (de-energized).
- Class 7 uses circuit **symptoms**, voltage checks, and structured methods to isolate **system** faults.
- This is the bridge from building circuits (Classes 4–5) to diagnosing why a built circuit fails.
- **On track:** after Class 7, the same circuits from Classes 4 and 5 become troubleshooting systems, not just wiring exercises.

## 2. Separate the control side from the power side

- **Control side** (STOP, START, coil, auxiliary/seal-in contact, overload control contact): answers *"should the coil energize?"*
- **Power side** (L1/L2/L3 → F main contacts → overload elements → T1/T2/T3 → motor): answers *"is motor power reaching the load?"*
- **The coil is the handoff** between the two domains:
  - Wrong coil state (should be on but isn't, or vice versa) usually points to the **control side**.
  - Correct coil state but wrong motor behavior points to the **power side**.

## 3. Meter choice: voltage vs. continuity vs. resistance

| Question | Preferred test | Power state | What the result proves |
|---|---|---|---|
| Is control voltage present here? | AC voltage | Energized (after safe setup) | Whether source voltage reaches a point |
| Can this contact make a path? | Continuity or resistance | Power removed | Whether a contact or fuse is open/closed |
| Is this coil winding open? | Resistance | Power removed | Whether a winding path exists |
| Is motor power reaching the load? | Line-to-line AC voltage | Energized (after safe setup) | Whether the power path is complete |

**Rule:** voltage checks are live-circuit questions. Continuity and resistance checks are de-energized questions. Do not mix them.

## 4. Signal testing: label the path before measuring

- Label every test point on the ladder (e.g., A, B, C, D, E, F) before picking up the meter.
- Good troubleshooting compares **expected** voltage to **actual** voltage at each labeled point.
- A reading is only useful when you know which device is upstream and which is downstream of that point.
- Example path: control hot → STOP (NC) → START (NO) / seal-in (parallel) → coil → overload contact (NC) → control return.

## 5. Common fault signatures

| Fault family | Evidence pattern |
|---|---|
| Open coil | Control voltage reaches coil terminals, but the device does not pull in. |
| Open STOP contact | Voltage is present before STOP, missing after STOP. |
| Failed seal-in path | Motor runs only while START is held. |
| Open overload contact | Power path may be healthy, but the coil path is interrupted at the overload contact. |
| Lost power leg | Motor hums or will not run correctly; one phase path is missing. |
| Open fuse | No voltage downstream of the fuse; a continuity test (power removed) confirms the open fuse. |

## 6. Four troubleshooting methods

1. **Symptom-and-cause** — best when the symptom is distinctive.
   - Start with a precise symptom, not a replacement part.
   - Ask what faults could logically create that symptom; list likely causes before measuring.
   - Use one measurement to eliminate several causes at once.
   - *Example:* motor runs only while START is held → the coil and motor power path must work (because the motor runs) → suspect the holding path: auxiliary contact, branch wiring, or the connection from the branch back to the rung.
2. **Output-back** — best when an output that should be ON is OFF.
   - Start at the failed output (e.g., coil) and test the point feeding it; keep moving upstream until "good" becomes "bad."
   - Every step must be tied to the circuit path, not random probing.
3. **Half-split** — best for a long series path.
   - Establish a known-good endpoint and a known-bad endpoint.
   - Test near the midpoint. If the midpoint is good, the fault is downstream; if bad, the fault is upstream.
   - Keep the half that contains the fault and repeat until one device remains.
4. **Shotgun (fallback only)** — testing/replacing likely parts in a mostly random order.
   - Can work when only a few simple candidates remain.
   - Usually inefficient in ladder logic because it ignores the circuit path.
   - Use only after structured methods have reduced the problem to a short list — never as the default when a clear path and test points exist.
   - Final proof still requires a measurement or functional retest.

## 7. Choosing the method from the symptom

| Method | Best when | First move | Watch-out |
|---|---|---|---|
| Symptom-and-cause | Symptom is distinctive | List likely causes | Needs a good mental model |
| Output-back | Output should be on but is off | Probe the failed output first | Do not ignore obvious symptom clues |
| Half-split | Long series path | Probe the midpoint | Needs known-good and known-bad regions |
| Shotgun | Very few suspects remain | Test a quick likely point | Often wastes tests |

**Practical rule:** start structured. Use shotgun only as a controlled cleanup tactic, not as the default method.

## 8. Worked examples

- **Coil should be on, but it is off:** use output-back — test coil M, then the overload contact, holding branch, START contact, STOP contact, and control power in that order. The first point where expected voltage disappears identifies the fault region.
- **Motor stops when START is released:** symptom is "motor runs only while START is held." Reasoning: the coil and main contacts can operate (the motor starts), so suspect the seal-in branch, the auxiliary contact, or branch wiring. Best method: symptom-and-cause, then confirm with continuity or voltage checks.
- **Class check:** a long series control path has the coil off, but control voltage is confirmed present near the left rail. Most efficient method: **half-split** — you already have a known-good region (left rail) and a known-bad region (coil); test near the midpoint and keep repeating on the bad half.

## 9. Amatrol wiring reference (Figure 11-1 authority)

Three-wire 1CR/F circuit used for Lab 7:

- **Holding circuit:** PB3 (STOP) is normally closed; PB1 (START) is normally open. The 1CR auxiliary contact at 13–14 is wired in parallel with PB1 and holds 1CR energized after START is released.
- **Contactor circuit:** a separate 1CR contact at 43–44 supplies the F contactor coil. The normally closed overload control contact is in series with F. Pressing STOP releases 1CR and F; an overload trip opens the F coil path.
- **Motor power:** trace all three phases — L1/L2/L3 through the F main contacts, then the overload elements, to T1/T2/T3 and the motor.

**Control-side point-to-point:**

| Step | Connect | Purpose |
|---|---|---|
| 1 | Control transformer secondary hot (terminal 2) → STOP PB3 (NC) input | Supplies the common series control path. |
| 2 | STOP PB3 output → START PB1 input AND 1CR auxiliary terminal 13 | Creates the branch point before START/seal-in. |
| 3 | START PB1 output AND 1CR auxiliary terminal 14 → 1CR coil A1 | PB1 and 1CR aux are parallel paths. |
| 4 | 1CR coil A2 → grounded control return (terminal 5) | Completes the 1CR rung. |
| 5 | Control hot → 1CR N.O. terminal 43; terminal 44 → F coil A1 | 1CR 43–44 enables the contactor coil after 1CR energizes. |
| 6 | F coil A2 → overload N.C. control contact 95–96 → control return | An overload trip opens the F coil path. |

**Power-side point-to-point:** three-phase safety-switch L1/L2/L3 → F line terminals L1/L2/L3 → F load terminals T1/T2/T3 → overload relay line terminals L1/L2/L3 → overload relay load terminals T1/T2/T3 → motor connection station/motor. Grounding (motor base and all station grounds) must remain connected — never daisy-chained or removed.

**Seal-in check:** 1CR auxiliary contact 13–14 must be wired in parallel with START PB1. If the motor runs only while START is held, check this branch first.

**Overload check:** terminals 95–96 are the NC overload control contact. A trip opens this path and drops out the F coil.

## 10. Lab 7: wire, fault, diagnose, restore

- **Goal:** wire and prove a working three-wire motor-control circuit (1CR holding relay + F contactor), then practice structured troubleshooting on one hidden manual fault at a time.
- **Safety boundaries:**
  - Use the course power-off/de-energization process before moving any wire or changing a fault plug (no lockout/tagout procedure is used in this lab).
  - Resistance/continuity checks only with power OFF; AC voltage checks only after the circuit is safe to energize.
  - Never remove or alter equipment grounding; terminal 5 (control-transformer secondary) stays grounded.
  - Only ONE fault may be inserted at a time, using only the approved fault terminals below.
  - Approved SHORT faults (6 and 31) can bypass normal START/holding logic and cause an immediate, unexpected motor start — treat every re-energization after a SHORT fault as an unexpected-start condition.
  - Before power is applied, everyone must be clear of the motor shaft, couplings, and panel wiring; one designated operator controls the safety switch/pushbuttons.
- **Baseline check (must pass before inserting any fault):** power ON with START not pressed → motor OFF. Press START → 1CR energizes, seals in, F energizes, motor starts. Release START → motor keeps running (holding path). Press STOP → 1CR and F drop out, motor stops. Repeat once with the same result.

**Approved fault-plug locations:**

| Back of station | Fault terminal | Component fault | Plug | Student use |
|---|---|---|---|---|
| Control Transformer Station | 3 | Fuse | OPEN (1 dot) | Approved |
| Operator Station | 6 | PB1 N.O. contacts | SHORT (2 dots) | Approved — unexpected start possible |
| Operator Station | 7 | PB1 N.O. contacts | OPEN (1 dot) | Approved |
| Operator Station | 9 | PB3 N.C. contacts | OPEN (1 dot) | Approved |
| Reversing Contactor Station | 11 | Forward F coil | OPEN (1 dot) | Approved |
| Overload Relay Station | 15 | N.C. control contact | OPEN (1 dot) | Approved |
| Control Relay Station | 19 | 1CR coil | OPEN (1 dot) | Approved |
| Reversing Contactor Station | 27 | Forward L1 main contact | OPEN (1 dot) | Approved |
| Overload Relay Station | 28 | L1 overload element | OPEN (1 dot) | Approved |
| Overload Relay Station | 29 | L2 overload element | OPEN (1 dot) | Approved |
| Control Relay Station | 31 | 1CR N.O. contact 13–14 | SHORT (2 dots) | Approved — unexpected start possible |
| Motor Connection Station | 34 | Winding T3–T6 | OPEN (1 dot) | Approved |
| Motor Connection Station | 35 | Winding T1–T4 | OPEN (1 dot) | Approved |

- **Blind-fault rotation:** one Fault Setter per round secretly inserts one approved fault while all Troubleshooters face away; only the Fault Setter may see the rear fault box until the team announces its diagnosis. After diagnosis, power OFF, reveal, verify, restore the standard jumper, and re-run the baseline check before the next round. Rotate the Fault Setter every round.
- **Wrap-up questions worth reviewing:** which method saved the most measurements and why; an example where coil state decided control-side vs. power-side; why the standard jumper/baseline retest is required after every round; what to assume before re-energizing after an approved SHORT fault.

## 11. Homework diagnostic reasoning (10 scenarios)

Practice pattern for every scenario: **state the fault domain (control / power / load-motor / control-power source), then cite the one measurement that proves it.**

| # | Symptom | Most likely fault | Domain | Key proof |
|---|---|---|---|---|
| 1 | START pressed, nothing happens | START PB1 N.O. contact open | Control | Voltage present up to PB1, disappears across PB1 even while pressed |
| 2 | Motor starts as soon as control power is applied | START PB1 N.O. contact shorted/stuck closed | Control | PB1 reads closed in both positions |
| 3 | Motor runs only while START is held | 1CR seal-in contact 13–14 not closing | Control | Works through START, but the parallel holding contact stays open |
| 4 | 1CR latches, F never pulls in | Forward F coil open | Control | Rated voltage reaches F coil, but coil resistance is infinite |
| 5 | 1CR latches, contactor does not energize | Overload N.C. control contact open/tripped | Control | 120 V across a contact that should read ~0 V when closed |
| 6 | Contactor pulls in, motor doesn't start normally | Forward L1 main power contact open | Power | Coil energized, but ~line voltage appears across one main contact instead of ~0 V |
| 7 | Main contactor good, one phase lost after it | L1 overload power element open | Power | Main contacts conducting, but full voltage drops across one overload element |
| 8 | No control voltage anywhere | Control-transformer fuse open | Control-power source | Energized primary + intact windings, but fuse open and no secondary voltage |
| 9 | Full motor voltage present, motor still won't run | Motor winding T1–T4 open | Load/motor | Proper voltage delivered, but one winding reads infinite resistance |
| 10 | Control voltage reaches STOP, goes no farther | STOP PB3 N.C. contact open | Control | Voltage disappears and continuity is open at PB3 |

**Grading/reasoning emphasis:** a correct diagnosis is consistent with the measurements and identifies the first point where the expected electrical state is lost.

## 12. Common mistakes — and what makes them wrong

- **Mixing live and de-energized checks.** Voltage checks require the circuit to be safely energized; continuity/resistance checks require power OFF. Mixing them produces meaningless (or unsafe) readings.
- **Probing without labeling the path first.** A voltage reading only means something if you know what should be upstream and downstream of that point.
- **Defaulting to shotgun troubleshooting** when the circuit has a clear path, known test points, and an output symptom — this wastes measurements instead of using circuit logic.
- **Ignoring the coil as the domain handoff.** Wrong coil state → control side; correct coil state but wrong motor behavior → power side. Skipping this check wastes time testing the wrong domain.
- **Inserting more than one fault at a time**, or using a SHORT plug anywhere other than the two approved terminals (6 and 31) — this breaks the lab's safety assumptions.

## 13. Exit-ticket reasoning questions

1. What question does the control side answer, and what question does the power side answer?
2. Why must voltage checks and continuity/resistance checks never be mixed?
3. A coil should be on but is off — which method starts at the output and moves upstream, and why is it efficient here?
4. When is half-split the most efficient method, and what two reference points does it require?
5. When (if ever) is shotgun troubleshooting acceptable, and why is it not a good default?
6. The motor runs only while START is held — what is the most likely fault, and why does this symptom rule out the F coil and main contacts?
7. What must the team assume before re-energizing after an approved SHORT fault, and what keeps everyone safe?

Students should answer by tracing the circuit path and naming the proving measurement, not by guessing component names.

## What's next: Class 8

Class 8 continues building on structured troubleshooting and the Amatrol three-wire 1CR/F system, extending diagnostic skill from a single hidden fault toward more complex or multi-step control circuits.

## Real-world / at-home examples

| Home / everyday example | Week 6 concept it demonstrates |
|---|---|
| "Is it plugged in? Is the outlet on?" before assuming an appliance is broken | Meter-choice discipline: check for voltage present (control side) before assuming a component (load) is bad |
| Checking if a lamp works in a different outlet to isolate a bad outlet vs. a bad lamp | Output-back / half-split logic: move the known-good load to test an unknown point, narrowing the fault region |
| A car that cranks but won't start vs. a car that won't crank at all | Separating "control side" (ignition/starter signal) symptoms from "power side" (fuel/spark delivery) symptoms |
| A string of holiday lights where half the string is dark | Half-split troubleshooting: test the middle of the string to decide which half contains the open fault |
| A tripped circuit breaker that resets but trips again under load | Fault signature pattern: distinguishing a true overload/short from a one-time nuisance trip, similar to reading an overload trip signature |
| Swapping a known-good remote-control battery into a non-working remote to test it | Known-good/known-bad comparison, the same reasoning half-split troubleshooting relies on |

**Why this matters:** the same control-vs-power separation, "test with the right tool for the question," and structured narrowing (half-split, output-back) show up anytime you diagnose why something electrical stopped working at home.

## Appendix: actual panel wiring reference — START/STOP with Forward auxiliary seal-in

Instructor-amended reference supplied for Class 7 (`ELE146_Motor_Control_Wiring_Reference.docx`), showing a simpler seal-in variant on the real Amatrol panel: the Forward contactor's own auxiliary N.O. contact (F AUX) serves as the seal-in device directly, instead of the Control Relay Station. All four pushbuttons on the operator station are retained. See the reference image at `study/img/week6/amatrol-start-stop-f-aux-seal-in.jpg`.

| Action | Connection |
|---|---|
| Add (blue) | START N.O. left → F AUX N.O. top |
| Add (blue) | START N.O. right → F AUX N.O. bottom |
| Move (purple) | Existing START-left lead → STOP N.C. right socket |
| Add jumper (purple) | STOP N.C. left → START N.O. left |

**Control function (ladder):** control supply → START N.O. (with F AUX N.O. sealed in parallel) → STOP N.C. → F coil → OL N.C. → control return.

**Review note from the supplied reference:** verify terminal identities and ratings before energizing — existing power wiring and grounding are not certified by this amendment.

