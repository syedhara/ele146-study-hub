# Week 8 — Reversing Motor Control

**Source:** Class 8 slides (`Class08_Reversing_Motor_Control_POST.pptx`), Class 8 homework + answer key, Lab 8 (Amatrol Module 8, Skill 4 — reversing motor circuit with interlocks).

**Teaching focus:** reversing a three-phase motor by swapping phase sequence, the reversing magnetic starter (Forward/Reverse contactors), seal-in vs. interlock auxiliary contacts, and electrical + mechanical interlocking.

## What you must be able to do

- Explain what electrically changes (and what does not change) to reverse a three-phase motor.
- Explain why a reversing magnetic starter is generally preferred over a drum switch for industrial control.
- Trace the Skill 4 Forward and Reverse control rungs and state which contact does which job.
- Distinguish a seal-in (holding) contact from an interlock (blocking) contact — same device type, opposite jobs.
- Explain electrical interlocking and mechanical interlocking, and why the circuit uses both.
- Predict the expected result of every step in the Skill 4 powered functional test, including both "no change" interlock-block steps.
- Apply the Class 7 troubleshooting methods (symptom-and-cause, output-back, half-split) to a reversing-starter fault.

## 1. Why reversing control matters

A reversing motor-control circuit is needed whenever a machine must move in two directions under control — not just "make the motor spin backward," but **controlled direction change with stopping, protection, and safe switching.**

| Example | Why reverse is needed |
|---|---|
| Conveyor backs product out of a jam | Reverse removes the jam without disassembling the machine; the motor must stop, then run opposite under control. |
| Hoist raises and lowers a load | One motor does both jobs, but the direction command must change safely — this is why Forward and Reverse are both part of the starter logic. |
| Gate operator opens and closes | "Forward" and "Reverse" are just labels — what matters electrically is which phase sequence is sent to the motor. |

On the trainer, Forward produces counterclockwise rotation and Reverse produces clockwise rotation once the motor leads are switched.

## 2. Core theory: reversing a three-phase motor

**The single most important idea:** reverse the phase sequence, and the motor reverses.

- The motor does **not** reverse because voltage becomes higher or lower.
- It reverses because the phase sequence changes — **swapping any two incoming line leads** reverses the rotating magnetic field, and the shaft follows the new field direction.
- Supply frequency and nominal line voltage do not need to change.
- **Common misconception to correct immediately:** "lower the voltage to reverse the motor" is wrong. The clean statement is: *swap any two line leads to reverse the motor.*

<figure class="diagram">

```
Forward: L1-T1, L2-T2, L3-T3   (normal phase order)
Reverse: L1-T3, L2-T2, L3-T1   (T1 and T3 swapped — phase sequence reverses)
```

</figure>

## 3. What changes in the power circuit

Forward and Reverse use the same supply and the same motor — only the phase sequence changes.

- **Forward contactor F energized:** L1→T1, L2→T2, L3→T3 (normal order).
- **Reverse contactor R energized:** L1→T3, L2→T2, L3→T1 (two lines crossed).
- **Critical rule: F and R must never be closed at the same time.** Closing both together connects two phases directly to each other through both contactors — a line-to-line fault.

## 4. Two ways this module reverses a motor

| Method | How it works | Limitation / role |
|---|---|---|
| Drum switch | Physically changes which line leads connect to the motor. | Excellent for teaching the basic reversing idea, but does **not** provide overload protection by itself. |
| Reversing magnetic motor starter | Forward and Reverse contactors route three-phase power in opposite phase sequences. | The reversing contactor station + the overload relay station together form the full reversing magnetic motor starter — closer to real industrial control because it adds protection and controlled coil operation. |

**Why a reversing starter over a drum switch (homework Q2):** a reversing magnetic starter uses contactor coils and a low-current control circuit, so it supports remote START/STOP pushbuttons, auxiliary contacts, interlocking, and overload protection — the complete protected magnetic-control solution industrial applications need.

## 5. Safety and protection are part of the theory

The power path is not the only thing that matters:

- Use the course power-off / de-energization procedure before wiring or changing the circuit; do not change leads while energized.
- Verify the circuit is safe before energizing; treat every energization as a possible unexpected-start condition.
- Connect every station panel and the motor base to dedicated ground-bus terminals — never daisy-chain equipment grounds.
- Connect control-transformer secondary terminal 5 to the grounded control return as shown in the Amatrol circuit.
- A drum switch alone does not provide overload protection — use overload protection whenever controlling a motor.

## 6. Skill 4: reversing motor circuit with interlocking

This is the key skill for seeing how Reverse works **safely** in a real control circuit.

**What students build:**
- A reversing motor control circuit for a three-phase motor.
- PB1 commands Forward, PB2 commands Reverse, PB3 stops the motor.
- Both auxiliary-contact (electrical) interlocking and mechanical interlocking are used.
- Purpose: prevent the Forward and Reverse coils from ever being energized at the same time.

**What to point out on the diagram:** power path at the top, control path at the bottom, Forward coil F and Reverse coil R, normally closed interlock contacts, and the overload contact in the control circuit.

## 7. How the Skill 4 control circuit works

| Step | Event | Detail |
|---|---|---|
| 1 | STOP PB3 and OL 95–96 must be closed | They form the common control path used by both directions. |
| 2 | Press PB1 → Forward coil F energizes | F closes its main contacts and applies the Forward phase sequence to the motor. |
| 3 | F auxiliary 13–14 closes in parallel with PB1 | When PB1 is released, this seal-in path keeps F energized. |
| 4 | F auxiliary 21–22 opens in the Reverse rung | Blocks R from energizing while Forward is active. Reverse works the same way in the opposite direction. |
| 5 | The mechanical interlock adds a physical block | Even if the control logic failed, both contactors cannot close together. |

**Summary:** Forward and Reverse are mirror-image branches. Each direction has its own START button, its own N.O. 13–14 seal-in contact, the opposite N.C. 21–22 interlock contact, and its own contactor coil. Both share STOP PB3 and OL 95–96.

## 8. Seal-in contact vs. interlock contact

They are both auxiliary contacts on the same contactor, but they perform **completely different jobs**.

| | Seal-in contact | Interlock contact |
|---|---|---|
| Terminals | 13–14 | 21–22 |
| Normal state | Normally open (N.O.) | Normally closed (N.C.) |
| Job | "Keep **my** coil on." | "Block the **other** coil." |

Forward uses F seal-in + R interlock. Reverse uses R seal-in + F interlock.

**Common exam trap (homework Q9):** a student might say "F 13–14 and F 21–22 basically do the same thing because both belong to the Forward contactor." This is **incorrect** — they have opposite normal states and opposite jobs. F 13–14 is N.O. and closes to keep the Forward coil energized after PB1 is released. F 21–22 is N.C. and opens when F energizes to block the Reverse coil. One is a holding contact; the other is an interlock.

## 9. Trace the Forward and Reverse commands

- **Forward path:** STOP closed → PB1 closes → R interlock (21–22) is closed → F coil energizes → F AUX 13–14 seals around PB1.
- **Reverse path:** STOP closed → PB2 closes → F interlock (21–22) is closed → R coil energizes → R AUX 13–14 seals around PB2.

The Reverse rung mirrors Forward exactly, but uses the opposite contactor's interlock contact.

## 10. Interlocking: the key safety idea

**Auxiliary contact (electrical) interlocking:**
- The normally closed Reverse interlock contact is wired in the Forward rung.
- The normally closed Forward interlock contact is wired in the Reverse rung.
- When one coil energizes, the opposite control path opens — this prevents the other coil from being energized electrically.
- **Why it matters:** if both Forward and Reverse power paths closed together, the result can be a damaging line-to-line fault.

**Mechanical interlock between the two contactors:**
- When one contactor is physically closed, the other is physically blocked from closing.
- Tested by pressing one manual override, then attempting to press the other — the second override cannot close.
- This test is performed with **power OFF**.

**Why both layers (homework Q7):** electrical interlocking stops the opposite coil electrically through NC auxiliary contacts; mechanical interlocking blocks the opposite contactor physically. Using both protects the starter and motor from an unsafe simultaneous Forward-and-Reverse command — one layer in the control logic, one in the starter mechanism.

## 11. Skill 4 operating sequence and expected results

| Student action | Expected result | What it proves |
|---|---|---|
| Press PB1 | Motor runs Forward. | Forward coil and forward power contacts work. |
| Press PB2 while Forward is running | No change in motor operation. | Electrical interlocking blocks the Reverse coil. |
| Press PB3 | Motor stops. | The stop circuit opens the common control path. |
| Press PB2 | Motor runs in Reverse. | Reverse coil and reverse power contacts work. |
| Press PB1 while Reverse is running | No change in motor operation. | Electrical interlocking blocks the Forward coil. |
| Power off; hold one manual override and try the other | The second override cannot close. | Mechanical interlock prevents both contactors from closing together. |

## 12. Lab 8: wire, prove, and interlock

**Lab goal:** build and prove a safe reversing magnetic motor-control circuit, then explain how the seal-in and interlocking functions prevent an unsafe simultaneous Forward/Reverse command.

**Device roles:**

| Device / contact | Normal state | Function |
|---|---|---|
| STOP PB3 | N.C. | Common control path; pressing STOP removes both direction commands. |
| FWD PB1 | N.O. | Momentarily energizes the Forward coil F. |
| F auxiliary 13–14 | N.O. | Seal-in contact in parallel with PB1; keeps F energized after PB1 is released. |
| R auxiliary 21–22 | N.C. | Electrical interlock in the Forward rung; opens when R energizes. |
| REV PB2 | N.O. | Momentarily energizes the Reverse coil R. |
| R auxiliary 13–14 | N.O. | Seal-in contact in parallel with PB2; keeps R energized after PB2 is released. |
| F auxiliary 21–22 | N.C. | Electrical interlock in the Reverse rung; opens when F energizes. |
| OL 95–96 | N.C. | Common overload control contact; opens the coil circuit if the overload trips. |
| Mechanical interlock | Internal | Physically prevents both contactors from closing at the same time. |

**Safety boundaries (required):**
- Use the course power-off/de-energization procedure before moving any wire; never change leads while energized.
- Verify the trainer is safe before energizing; treat every energization as a possible unexpected-start condition.
- Connect every station panel and the motor base to dedicated ground-bus terminals — never daisy-chain.
- Connect control-transformer secondary terminal 5 to the grounded control return.
- Do not energize until the instructor has checked the completed wiring — incorrect interlock wiring can damage the starter.
- The mechanical-interlock test is performed with power OFF.

**Wiring sequence (summary):**
1. Arrange panels, connect dedicated equipment grounds, configure the motor connection station.
2. Wire the control transformer and grounded control return exactly as shown (terminal 5 is the grounded return).
3. Wire STOP PB3 N.C. as the common series device ahead of the Forward and Reverse branches.
4. Build the Forward branch: PB1 N.O. in parallel with F 13–14, then R 21–22 N.C., then coil F.
5. Build the Reverse branch: PB2 N.O. in parallel with R 13–14, then F 21–22 N.C., then coil R.
6. Connect both coil return paths through the N.C. overload control contact 95–96 to the control return.
7. Wire the three-phase power path exactly as the reference diagram shows — do not improvise the phase crossover used by the Reverse contactor.
8. With power still OFF, compare every connection to the reference diagram and correct any mismatch.

**Instructor checkpoint — required before power:** grounding verified; Forward and Reverse main-power wiring verified; F/R seal-in contacts verified; F/R opposite-direction 21–22 interlocks verified; OL 95–96 common return verified; no loose or floating leads.

**Part D — mechanical interlock test (power OFF):** turn power OFF and verify the circuit is de-energized. Press and hold the Forward contactor manual override; while holding it, attempt to press the Reverse override. Repeat with Reverse held first. The second contactor should be physically blocked in either direction.

## 13. Troubleshooting a reversing starter (ties back to Class 7 methods)

A clean troubleshooting process: observe the symptom first (neither direction runs, only one direction runs, or the starter pulls in but the motor doesn't turn correctly) → decide control vs. power circuit → check common series devices first (safety switch, control transformer, STOP PB3, overload N.C. contact) → check the direction branch (PB1 or PB2, F or R coil, interlock contacts) → finally check power contacts, overload elements, and motor windings.

| Fault example | Evidence pattern |
|---|---|
| PB3 N.C. contact open | Neither direction starts — the common control path is open. |
| Forward coil F open | Reverse may work, but Forward will not energize. |
| R interlock contact open | Forward branch can be affected because the series interlock contact stays open. |
| Overload N.C. contact open | Both directions are blocked by the overload path. |
| Forward L1 power contact open | The starter may pick up, but the motor power path is incomplete. |
| Motor winding open | Control may look normal while motor operation is weak or missing. |

**Teaching line:** start with the common path, then branch out.

## 14. Homework reasoning (10 questions)

| # | Question topic | Key answer |
|---|---|---|
| 1 | What changes to reverse a 3-phase motor? | Swap any two phase conductors feeding the motor — reverses phase sequence and the rotating field. Frequency and nominal line voltage do not change. |
| 2 | Reversing starter vs. drum switch | A reversing magnetic starter supports remote controls, aux contacts, interlocking, and overload protection — the complete protected solution; a drum switch alone lacks this. |
| 3 | PB1 press-to-release sequence | Current flows STOP → PB1 → R interlock (NC) → F coil → OL contact; F energizes and applies Forward sequence; F 13–14 closes in parallel with PB1; releasing PB1 leaves current flowing through F 13–14, so F stays energized. |
| 4 | Which contact holds Forward energized after release? | F 13–14 — a normally open auxiliary (seal-in) contact. |
| 5 | What happens to the Reverse rung when F energizes? | F 21–22 (N.C., in the Reverse rung) opens, breaking the R coil path so R cannot energize while Forward is active. |
| 6 | Motor running Forward, operator presses Reverse | No change — F 21–22 interlock in the Reverse rung is open, so pressing PB2 cannot energize R. |
| 7 | Electrical vs. mechanical interlocking | Electrical interlocking uses N.C. aux contacts (F blocks R, R blocks F); mechanical interlocking physically blocks the two contactors from closing together. Both are used for two separate protective layers. |
| 8 | Purpose of OL 95–96 | Normally closed overload control contact completes the common coil return; a trip opens it, dropping out whichever coil is energized — neither direction can run until the overload condition is corrected. |
| 9 | "F 13–14 and F 21–22 do the same thing" — true or false? | False — opposite normal states and jobs. 13–14 (N.O.) is a holding contact; 21–22 (N.C.) is an interlock that blocks the opposite coil. |
| 10 | Logical sequence of a normal Forward start | PB1 pressed → F coil energizes → F main contacts and N.O. 13–14 close (same coil operation, no artificial timing order) → motor receives Forward sequence → PB1 released → motor keeps running because F 13–14 now provides the seal-in path, as long as STOP, R 21–22, and OL 95–96 remain closed. |

**Instructor emphasis:** never accept "reverse the polarity" as the explanation for a three-phase induction motor — the key concept is reversing phase sequence by swapping any two phases. Students should distinguish 13–14 seal-in contacts from 21–22 interlock contacts. Pressing the opposite direction button while one direction is running should not reverse immediately in the Skill 4 circuit — the opposite coil is blocked. Mechanical interlocking is tested with power OFF.

## 15. Common mistakes — and what makes them wrong

- **Saying "lower the voltage" reverses a 3-phase motor.** Wrong — reversing happens by swapping phase sequence (any two line leads), not by changing voltage.
- **Treating 13–14 and 21–22 as the same thing because they're on the same contactor.** Wrong — opposite normal states, opposite jobs (hold vs. block).
- **Expecting Reverse to engage immediately when pressed while Forward is running.** Wrong — electrical interlocking must block it; "no change" is the correct, safe result.
- **Skipping the mechanical interlock test or doing it with power ON.** The mechanical interlock test is always performed with power OFF.
- **Improvising the phase crossover wiring for the Reverse contactor.** Use the reference circuit as the wiring authority — do not improvise.
- **Energizing before the instructor checks the wiring.** Incorrect interlock wiring can damage the starter.

## 16. Key takeaways

1. Reversing a three-phase motor means changing the phase sequence — usually by swapping any two incoming line leads.
2. A drum switch teaches the reversing concept well but does not provide overload protection by itself.
3. A reversing magnetic motor starter is more practical because it combines Forward/Reverse contactors with overload protection.
4. Skill 4 is the safest teaching skill in the module because students see electrical interlocking and mechanical interlocking working together.
5. Every device has a reason: stop path, overload path, Forward and Reverse coils, seal-in contacts, and interlocks.
6. Troubleshooting is easier when students check the common control path first, then move into the Forward or Reverse branch.

**One-sentence close:** A safe reversing circuit does more than change direction — it changes direction without ever letting Forward and Reverse be commanded together.

## Real-world / at-home examples

| Home / everyday example | Week 8 concept it demonstrates |
|---|---|
| A garage door opener that only lets you go "up" after a full "down" (or vice versa), never both motors engaged at once | Electrical interlocking — the opposite direction command is blocked while one direction is active |
| A car's automatic transmission that physically won't let you shift from Drive to Reverse without passing through Park/Neutral at a stop | Mechanical interlock — a physical block preventing two conflicting states from engaging together |
| A washing machine lid switch that must be closed before the drum will spin, and stays interlocked during the cycle | Interlocking logic: one condition must be satisfied/blocked before another device can operate |
| Backing a car out of a driveway — you don't rewire the car, you just select Reverse and the same motor runs the opposite way | Reversing control: same motor, same power source, only the "phase sequence" (drive direction) changes |
| A power strip's physical lockout switch vs. just flipping a breaker | Two layers of protection (electrical + mechanical) doing the same protective job differently |

**Why this matters:** the same "block the opposite command two ways" pattern — one electrical, one physical — shows up anywhere a machine must never be allowed to do two conflicting things at once.
