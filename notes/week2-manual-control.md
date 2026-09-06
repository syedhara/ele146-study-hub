# ELE 146 — Week 2: Motors, Manual Control & Overload Protection

**Topic:** Motors, manual motor control, and overload protection
**Sources:** Class slides (`Class02_Motor_Manual_Control_NOTES.pptx`), Lab 2 (`Class02L_Student.docx` — Amatrol 85-MT5SL manual motor starter), at-home examples

**Rule for today:** do not say "protection" without saying what is being protected and from what fault.

## Key takeaways

1. The motor power path carries the energy that makes the shaft turn.
2. Manual control means the operator directly opens and closes that path locally.
3. A manual **starter** is more than a switch because it includes overload protection; a plain **controller** may not.
4. Short-circuit protection and overload protection solve different problems (fast fault current vs. sustained heating).
5. Overload settings are not guesses — they come from the motor's full-load current (FLA) rating.

## 1. What a motor does

A motor converts electrical energy into mechanical rotation. The motor current produces magnetic fields inside the motor; those fields create torque on the rotor. The shaft turns the load: fan, pump, conveyor, or compressor.

**The control circuit does not create the rotation — it decides when the power circuit is allowed to feed the motor.**

## 2. AC motors vs. DC motors

| | AC (alternating current) motors | DC (direct current) motors |
|---|---|---|
| Supply | Alternating current supply | Direct current supply |
| Common use | Industrial/commercial equipment; three-phase AC motors are common because they run smoothly and efficiently | Useful when direct speed control or battery power is important |
| Course focus | **Main focus of this course** | Appear in industry, but not the main lab focus here |

## 3. Three-phase motor basics

- The three supply lines are **L1, L2, and L3**.
- Each phase reaches its peak at a different time; the shifting magnetic field helps produce smooth rotation.
- If one phase is missing, the motor may **hum, overheat, or fail to start** — the rotating magnetic field is incomplete.

**Functional power path (manual motor starter):**

```
L1 → OL → ┐
L2 → OL → ├─ M (3-phase motor)
L3 → OL → ┘
```
(Manual contacts feed through overload elements to the 3-phase motor.)

## 4. Motor nameplate & full-load current (FLA)

- Read only the values the nameplate actually provides — do not assume missing information.
- Voltage tells you which supply and motor connection are allowed.
- **Full-load current (FLA)** is the expected current at rated load; overload protection uses it as the baseline for motor heating protection.
- For a dual-voltage motor, use the current rating that matches the actual voltage connection used.

**Sample nameplate:** HP 1/2 · Phase 3 · Volts 230/460 · FLA 1.8/0.9 A · Hz 60 · RPM 1725

**Full-load current is *not* the same as:**
- Starting current
- Short-circuit current

Overloads protect against sustained heating over time, based on FLA — not against instantaneous fault current.

## 5. Manual control vs. magnetic control

### Manual motor control
- A person directly operates the device that opens or closes the motor power path.
- The manual starter switch stays ON until moved OFF or tripped.
- Simple and practical for local control of smaller equipment.
- Does **not** provide remote control, interlocks, sensors, or timers.

### Magnetic motor control
- A control circuit energizes a coil.
- The energized coil closes the contactor's power contacts.
- The operator handles a control signal, not the full motor current.
- Supports remote stations, seal-in logic, interlocks, sensors, timers, and troubleshooting logic.

## 6. Controller vs. starter

| Motor controller | Motor starter |
|---|---|
| Starts and stops the motor | Starts and stops the motor |
| May be manual or magnetic | Includes overload protection for the motor |
| By itself, may not provide motor overload protection | The safer, more complete device for motor branch control |

## 7. Short-circuit protection vs. overload protection

### Short-circuit protection
- A short circuit is an unintended low-resistance path.
- Current rises extremely fast and can create fire or arc energy.
- **Fuses and circuit breakers** interrupt high fault current quickly.
- Mainly about protecting conductors, equipment, and fault energy.

### Overload protection
- An overload is **sustained current above what the motor should carry**.
- The danger is heat building in the motor windings over time.
- An overload relay responds **more slowly** than a fuse or breaker (thermal response, not instantaneous).
- The overload relay opens the motor circuit/control path before the motor overheats.

## 8. Manual starter power path & contact states

```
L1 → OL → ┐
L2 → OL → ├─ M (3-phase motor)      T1, T2, T3 = load-side terminals
L3 → OL → ┘                          L1, L2, L3 = line-side terminals
```

| Position | Contact state | Continuity test (L to T) |
|---|---|---|
| **OFF** | Contacts open | Should show open circuit |
| **ON** | Contacts closed, motor fed | Should show near-zero resistance / tone |

If the overload trips, the motor power path opens even though the manual starter itself is still in the ON position.

## 9. Low-voltage protection & automatic restart

- **Low-voltage protection** prevents automatic restart after power is lost and then restored.
- A **basic manual starter may restart automatically** if it was left ON before power was removed — this is exactly what Lab 2, Part 4 demonstrates.
- That restart behavior matters because equipment can move unexpectedly when power returns — a real safety hazard around real machinery.
- Magnetic starters can be designed so the coil drops out and must be intentionally restarted (low-voltage/loss-of-voltage protection).

## 10. Setting an overload from the nameplate

1. Start with the motor's full-load current (from the nameplate or trainer data).
2. Set the overload to the required trip level for that motor/application.
3. A setting **too low** can nuisance-trip (opens the circuit even during normal operation).
4. A setting **too high** may fail to protect the motor from overheating.

**Lab 2 example (85-MT5SL trainer motor, low-voltage connection):** rated FLA = 1.4 A, service factor = 1.35. Because the service factor is 1.15 or greater, the trip current is set equal to the rated FLA: **1.4 A**.

## 11. Lab 2 — what it proved (Amatrol 85-MT5SL)

**Part 1 — Prove the starter contacts:** with power OFF, continuity test across L1–T1, L2–T2, L3–T3. OFF = open circuit on all three poles; ON = continuity (near-zero resistance) on all three poles.

**Part 2 — Wire the motor through the starter:** follow the Amatrol pictorial/schematic exactly — never reconstruct a power circuit from memory. L1/L2/L3 = line side, T1/T2/T3 = load side, "O.L." = overload element inside the starter.

**Part 3 — Start/stop manually:** with the safety switch ON but the manual starter OFF, the motor stays stopped (starter contacts open — the safety switch alone doesn't feed the motor). Moving the starter to ON closes all three poles and feeds the motor; moving it OFF lets the motor coast to a stop.

**Part 4 — Restart behavior after a power loss:** with the starter left ON, removing and restoring supply power caused the motor to **restart automatically** — proving this manual starter has **no low-voltage protection**. This is why automatic restart is a real hazard on actual machinery.

**Part 5 — Set overload from the nameplate:** located FLA (1.4 A) and service factor (1.35) on the nameplate, then applied the ≥1.15-service-factor rule to set the trip current to 1.4 A.

**Safety rules used throughout:** power OFF before connecting/moving/removing leads; dedicated ground-bus connection for every equipment ground (no daisy-chaining); circuit must be de-energized for continuity/resistance tests; compare every connection against the pictorial/schematic before energizing.

## 12. Real-world / at-home examples

| Home / everyday example | Week 2 concept it demonstrates |
|---|---|
| Basic wall light switch | Pure **manual control** — a person directly opens/closes the circuit, no overload protection built in |
| Shop vacuum / air compressor with a thermal-overload reset button | A **starter**-like device: manual ON/OFF *plus* built-in overload (thermal) protection that trips and must be reset |
| Home breaker panel (thermal-magnetic breakers) | One device doing **two jobs**: the magnetic trip = fast short-circuit protection, the thermal trip = slower overload protection — the same two concepts from this lesson combined into one breaker |
| Space heater or hair dryer thermal cutoff | Overload-style thermal protection — trips on sustained overheating, not on a short-circuit-level fault |
| Garage door opener / old washing machine that restarts after a power blink | Demonstrates **lack of low-voltage protection** — just like the manual starter in Lab 2 Part 4, it resumes running when power returns if left "ON" |
| Modern elevator or dishwasher control system | Uses something closer to **magnetic control** — a control signal (button, sensor, timer) energizes a relay/contactor instead of a person switching the full load directly |
| Refrigerator/AC compressor nameplate | Real nameplate with voltage, FLA, and phase info — same fields used in Lab 2 to size the overload setting |

**Why this matters:** almost every powered home device is either a simple manual controller (light switch — no overload logic) or a more complete starter-like device (thermal-protected power tool, breaker panel) — the same controller-vs-starter and short-circuit-vs-overload distinctions taught this week.

## Retrieval practice

Try answering without looking, then check the interactive Quiz page.

1. Why should the safety switch be OFF before connecting or moving leads?
2. Why is one-hand meter practice recommended when measuring live voltage?
3. What does a three-phase motor convert electrical energy into?
4. Name the three power lines used for a three-phase motor.
5. What may happen if a three-phase motor loses one phase?
6. Define manual motor control in one sentence.
7. Define magnetic motor control in one sentence.
8. What is the difference between a controller and a starter?
9. In the manual starter OFF position, should L1 to T1 show continuity?
10. In the manual starter ON position, should L1 to T1 show continuity?
11. What is a short circuit?
12. Name two devices used for short-circuit protection.
13. What is an overload?
14. What does overload protection mainly protect?
15. Why does an overload relay usually trip slower than a fuse?
16. A motor has FLA of 1.4 A. If the overload is set to 100% of FLA, what is the setting?
17. A motor has FLA of 1.4 A. If the overload is set to 115% of FLA, what is the setting?
18. A motor draws 2.0 A against a 1.4 A FLA. Is this below or above full-load current?
19. If current doubles through the same resistance, what happens to resistive heating?
20. A control device draws 0.25 A at 120 V. How much power does it use?
21. What is low-voltage protection?
22. If a manual starter is left ON and power returns after an outage, what may happen?
23. Why is automatic restart a safety concern?
24. Why must overload setting be tied to the motor full-load current?
25. What is the most important lab habit before using the meter?

### Answers

1. To prevent contact with an energized conductor while connecting/moving leads — same de-energize-first safety workflow as always.
2. It may reduce the chance of current crossing the chest, though de-energizing/verifying remains the primary protection.
3. Mechanical rotation (torque on the shaft).
4. L1, L2, and L3.
5. It may hum, overheat, or fail to start because the rotating magnetic field is incomplete.
6. A person directly operates the device that opens or closes the motor power path.
7. A control circuit energizes a coil that closes the contactor's power contacts based on a control signal.
8. A starter is a controller that also includes overload protection for the motor; a controller alone may not.
9. No — contacts are open, so it should show an open circuit.
10. Yes — contacts are closed, so it should show near-zero resistance/continuity.
11. An unintended low-resistance path where current rises extremely fast, risking fire or arc energy.
12. Fuses and circuit breakers.
13. Sustained current above what the motor should carry, which builds heat over time.
14. The motor (its windings) from heat damage due to sustained excess current.
15. Because it responds to sustained thermal heating over time rather than reacting instantly like a fuse does to fault current.
16. 1.4 A.
17. 1.4 × 1.15 = 1.61 A.
18. Above full-load current (2.0 A vs. a 1.4 A FLA).
19. It becomes four times as great (P = I²R).
20. P = V × I = 120 × 0.25 = 30 W.
21. A feature that prevents a motor from automatically restarting after power is lost and then restored.
22. The motor may restart automatically and unexpectedly, since a basic manual starter has no low-voltage protection.
23. Equipment can move unexpectedly when power returns, which is hazardous to anyone near it.
24. So the setting is neither too low (nuisance tripping during normal operation) nor too high (failing to protect the motor from overheating).
25. Verify the circuit is de-energized and set the meter correctly before touching any leads.

## Before the next class

- Be able to explain the difference between a controller and a starter without hesitating.
- Practice the FLA × (percentage) overload-setting calculation both ways (find the setting, and check whether a reading is above/below FLA).
- Be ready to explain, in your own words, why the Lab 2 motor restarted automatically and why that matters on real equipment.
- Review the short-circuit-protection vs. overload-protection distinction — a common exam trap is treating them as the same thing.
