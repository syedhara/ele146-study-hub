# Week 5 — Control Relays and Motor Starters

**Source:** Class 5 slides (`Class05_Control_Relays_and_Motor_Starters_POST.pptx`), Class 5 homework + answer key, Lab 5 (Amatrol Figure 5-2, three-wire motor starter).

**Teaching focus:** contactor action, overload protection, two-wire control, three-wire control, and seal-in operation.

## What you must be able to do

- Explain the difference between the power circuit and the control circuit in a motor starter.
- Distinguish a control relay (logic device) from a contactor (motor-duty power-switching device).
- Read Normally Open (NO) and Normally Closed (NC) contacts from their normal, unactuated state.
- Explain two-wire (maintained) control vs. three-wire (momentary START/STOP + seal-in) control.
- Trace the full seal-in sequence: START pressed → coil energizes → auxiliary contact seals in → START released → STOP pressed → coil drops out.
- Explain why three-wire control does not automatically restart the motor after a power loss.
- Distinguish overload elements (power side, sense current) from the overload control contact (control side, opens the coil circuit on trip).

## 1. Motor starter: two circuits working together

- **Power circuit:** carries the three-phase current from the line, through the F main contacts and the overload elements, to the motor (T1, T2, T3).
- **Control circuit:** lower-current logic path — STOP, START, coil, auxiliary contact, and the overload control contact — that decides whether the power circuit should be closed.
- **Teaching point:** the control circuit gives permission; the power circuit carries the energy.

## 2. Contactors and control relays: same idea, different duty

- A **control relay** is a logic device — it switches low-current control signals.
- A **contactor** is a motor-duty power-switching device — built to make and break the higher current the motor draws.
- **Key distinction:** relay = logic device; contactor = motor-duty power-switching device. A motor starter is a contactor (plus overload protection).

## 3. Normally Open and Normally Closed contacts (recap)

- **Normally Open (NO):** open in the normal, unactuated state.
- **Normally Closed (NC):** closed in the normal, unactuated state.
- The symbol shows the *normal* state — the actual state depends on whether the device is actuated.
- **Example:** a Normally Closed STOP pushbutton is drawn closed. When the operator presses STOP, the physical contact opens and breaks the control path.

## 4. What the coil does

- **Coil de-energized:** the F main contacts (power circuit) are open, and any F auxiliary contacts are in their normal state.
- **Coil energized:** the F main contacts close (motor power is applied), and the F auxiliary contact(s) switch to their actuated state.
- **Why it matters:** every contact labeled "F" — main or auxiliary — moves together whenever the F coil changes state. Tracing a circuit means tracking the coil first, then every contact that shares its name.

## 5. Two-wire control: maintained command

- Two-wire control uses a **maintained** command — for example, a selector switch or float switch that stays in its actuated position.
- As long as the maintained input is closed, the coil stays energized; no seal-in path is needed.
- **Classroom warning:** two-wire control will restart the motor automatically as soon as the maintained input recloses — including after a power interruption. This is a real safety consideration for unattended equipment.

## 6. Three-wire control: momentary START and STOP

Three-wire control uses **momentary** pushbuttons (they spring back when released) plus a seal-in auxiliary contact for memory:

- **STOP path:** a Normally Closed pushbutton, wired first in the series path from L1.
- **START path:** a Normally Open pushbutton, wired after STOP, in parallel with the seal-in path.
- **Seal-in path:** the F auxiliary Normally Open contact, wired in parallel with START.

Two-wire control uses a maintained command. Three-wire control uses momentary START/STOP plus seal-in memory.

## 7. Seal-in sequence: what you must be able to explain, step by step

1. **START is pressed.** The START contact closes and energizes the F coil.
2. **F coil energizes.** The F main contacts close and motor power is applied.
3. **F auxiliary closes.** The auxiliary contact creates a parallel holding path around START.
4. **START is released.** The motor keeps running because current flows through the F auxiliary contact instead of through START.
5. **STOP is pressed.** The STOP contact opens; the F coil drops out and all F contacts (main and auxiliary) return to normal.

**Reasoning pattern for any seal-in question:** identify the relevant device, determine whether it opens or closes, then trace whether the coil can remain energized.

## 8. Stop dominance and the overload contact

- **Stop dominance:** STOP is wired ahead of the START/seal-in parallel pair, in series with the entire rung. Pressing STOP always breaks the path to the coil, even if START is also being held — STOP dominates.
- **Overload control contact:** also wired in series with the coil (alongside STOP), so an overload trip has the same fail-safe effect as pressing STOP — it removes power from the coil.

## 9. Power-loss behavior: why three-wire control is common

- **During power loss:** the F coil de-energizes and the F auxiliary seal-in contact opens (returns to normal/open).
- **When power returns:** START is no longer being pressed, and the auxiliary contact is open, so there is no complete path to the coil. The operator must press START again.
- This is the main safety advantage of three-wire control over two-wire (maintained) control: no automatic, unattended restart.

## 10. Overload protection: power side and control side

- **O.L.** means overload element.
- The **overload elements** are in the motor power path (one per phase) and sense motor current.
- The overload relay also has a **Normally Closed control contact**, wired in the control circuit in series with the coil.
- When the overload trips (sustained overcurrent), that control contact opens and de-energizes the coil.
- The contactor opens (F main contacts open) and the motor stops.
- **Overload elements vs. overload control contact:** the elements are power-side current sensors; the control contact is the control-side switch that actually breaks the coil circuit when a trip is detected.

## 11. Amatrol Figure 5-2: wiring authority for the lab

Use this figure as the authoritative circuit reference for Lab 5:

- **Top section:** three-phase motor power path (F main contacts, overload elements, T1–T3).
- **Middle:** control transformer and fuse path (steps line voltage down to control voltage).
- **Bottom:** three-wire START/STOP control circuit (STOP, START, F auxiliary seal-in, overload control contact, coil).
- **Panel grounds are required even when not shown in the ladder diagram** — always verify grounding on the physical trainer, not just on paper.

Class 5 retains the Class 2 power-side wiring on the 85-MT5SL trainer. The control circuit is changed to three-wire operation by adding STOP PB3 in series ahead of START PB1 and wiring the Forward (F) auxiliary Normally Open contact in parallel with START.

**Platform point-to-point endpoints (Figure 5-2):**

| Step | Connect | Purpose |
|---|---|---|
| 1 | Control transformer supply → STOP PB3 (NC) | STOP is in the common series path. |
| 2 | STOP output → START PB1 input AND F auxiliary terminal 13 | Branch point before START. |
| 3 | START PB1 output AND F auxiliary terminal 14 → F coil A1 | START and F auxiliary are parallel. |
| 4 | F coil A2 → overload contact 95-96 | Overload trip opens the control circuit. |
| 5 | Remaining overload terminal → transformer return | Completes the 120 VAC control circuit. |

## 12. Lab strategy: do not just copy wires

- **Before wiring:** identify F main contacts and O.L. elements in the power circuit; identify START PB1, STOP PB3, the F auxiliary seal-in contact, and the overload control contact in the control circuit.
- **While wiring:** use Amatrol Figure 5-2 as the authoritative reference, not just the simplified teaching diagram.
- **After wiring:** predict the expected behavior (below) before energizing, then verify.

**Operating checks:**

| Step | Action | Expected result |
|---|---|---|
| 1 | Turn control power on, with START released. | Motor should be off. |
| 2 | Press and release START. | Motor should start and continue running. |
| 3 | Press and release STOP. | Motor should stop. |
| 4 | Simulate or discuss loss of control power. | F coil drops out; restart requires START again. |
| 5 | Discuss overload trip behavior. | Overload control contact opens and drops out the coil. |

## 13. Common mistakes — and what makes them wrong

- **Confusing the overload element with the overload control contact.** The element senses current on the power side; the contact (NC, control side) is what actually opens the coil circuit.
- **Forgetting stop dominance.** STOP must be in series with the entire START/seal-in branch, not just in series with START alone — otherwise the seal-in path could bypass STOP.
- **Assuming two-wire and three-wire control behave the same after a power loss.** Two-wire (maintained) control restarts automatically; three-wire control requires START to be pressed again.
- **Skipping the panel ground check** because it is not drawn on the simplified ladder — Amatrol Figure 5-2 and real panels still require it.

## 14. Apply it: predict before you energize

1. With START released and STOP released, should the F coil be energized? → **No.** There is no path holding the coil in: START is open and, until START has been pressed at least once, the F auxiliary contact has never closed.
2. When START is pressed, what path energizes the F coil? → Control transformer → STOP (NC, closed) → START (NO, now closed) → F coil → overload contact (NC, closed) → transformer return.
3. After START is released, what keeps the F coil energized? → The F auxiliary contact, now closed (sealed in) in parallel with START, keeps the current path complete.
4. What opens when STOP is pressed? → The STOP contact (NC) opens, breaking the series path to the coil regardless of the state of START or the F auxiliary contact.

## 15. Exit-ticket reasoning questions

1. Why does the motor stay on after the START pushbutton is released?
2. What opens when STOP is pressed, and what happens to the coil?
3. Why does three-wire control avoid automatic restart after a power loss?
4. What is the difference between the overload elements and the overload control contact?
5. If the contactor pulls in but the motor does not run, would you first suspect the control circuit or the power circuit? Explain.

Students should answer by tracing the circuit path, not by guessing component names.

## What's next: Class 6

Class 6 builds on the three-wire starter with additional control functions (for example, jogging, multiple START/STOP stations, or interlocking) layered on top of the seal-in circuit covered this week.

## Real-world / at-home examples

| Home / everyday example | Week 5 concept it demonstrates |
|---|---|
| Garage door opener wall button (momentary) vs. the door staying "running" until it hits a limit | Momentary START command plus a holding/seal-in-style path that keeps the motor running after the button is released |
| A latching relay used for a whole-house fan or sprinkler valve | Control relay logic (low-current switching) vs. a contactor's motor-duty power switching |
| Refrigerator or AC compressor with thermal/current overload protection that trips and needs a manual or automatic reset | Overload element sensing current + a control contact that removes power on a sustained overcurrent condition |
| A doorbell or elevator call button (momentary, does not need to be held) | Momentary input that only needs a brief press because a holding circuit (or equivalent logic) remembers the command |
| Portable generator or UPS: equipment does not silently restart on its own after a power blip | Same safety idea as three-wire control — no unattended automatic restart after a power interruption |
| Household GFCI/AFCI breaker tripping and needing to be manually reset | Similar concept to the overload control contact — a fault condition opens a control path rather than letting current keep flowing |

**Why this matters:** the same power-vs-control separation, momentary-vs-maintained distinction, and fail-safe "stop always wins" logic from the trainer shows up in everyday momentary-button devices and protective equipment.
