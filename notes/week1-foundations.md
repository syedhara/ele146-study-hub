# ELE 146 — Week 1: Foundations of Electric Motor Control

**Class date:** August 27, 2026
**Topic:** Foundations of electric motor control
**Sources:** Class slides (`Class01_Foundations_POST.pptx`), personal class notes, and at-home real-world examples

## Key takeaways

1. A motor-control system has two related circuits: the **power circuit** and the **control circuit**.
2. Before touching trainer wiring: **turn power off, then verify the circuit state with a meter**.
3. Every trainer panel and motor base needs its own dedicated connection to the ground bus; do not daisy-chain these equipment-grounding connections.
4. In a 208/120 V three-phase wye system, expect about **208 V line-to-line** and **120 V line-to-neutral**.
5. Most troubleshooting begins in the control circuit because that is where the operating logic is implemented.

## 1. Power circuit vs. control circuit

### Power circuit

Carries the electrical energy that operates the motor. Commonly three-phase AC. Major components:

- L1, L2, and L3 supply conductors
- Contactor power contacts
- Overload protection
- Motor conductors and the motor

When the contactor coil is energized, its magnetic field closes the main contacts, connecting the three-phase supply to the motor.

**Protection distinction:** an overload relay protects the motor against sustained overcurrent/overheating. Fuses/breakers provide short-circuit and ground-fault protection — related but different jobs.

### Control circuit

Decides *when* the motor should start, stop, or change state. Can include:

- Stop / start pushbuttons
- Relay and contactor coils
- Auxiliary contacts
- Selector switches and sensors
- Timers, limit switches, float switches, pressure switches

Often operates at a lower voltage than the motor power circuit, supplied by a control transformer.

### Basic control path

```
L1 → STOP (normally closed) → START (normally open) → M coil → N
```

The coil energizes only with a continuous path from L1 through every required device, through the M coil, back to the supply. In a real three-wire starter, an **M auxiliary "seal-in" contact** is wired in parallel with START so the coil stays energized after START is released.

## 2. Safety workflow

Before connecting, moving, or removing leads:

1. Turn the trainer power off.
2. Set the meter correctly and verify the circuit state before touching conductors.
3. Confirm every required equipment-grounding connection is installed.
4. Check the circuit against the diagram before energizing.

When an authorized measurement must be made on an energized circuit:

- Use the correct meter function/range for the expected voltage.
- Use one hand when practical.
- Make slow, deliberate movements.
- Keep the area dry and free of distractions.
- Turn power off immediately if anything looks or behaves unexpectedly.

De-energizing and verifying circuit state remain the primary protections — the "one-hand" technique alone does not make energized work safe.

## 3. Grounding

- The equipment-grounding conductor is a low-impedance safety path for fault current back to the source.
- Ground is **not** meant to carry normal operating current.
- **Ground and neutral are not interchangeable.** Neutral is a grounded circuit conductor that carries normal load current; equipment ground bonds exposed metal parts to the fault-current return path.
- Current divides among all available paths — it does not travel only through the path of least resistance.
- The earth itself is not the effective fault-current return path; the metallic equipment-grounding path back to the source clears the fault.

## 4. Voltage, current, resistance, power

| Quantity | Symbol | Unit |
|---|---|---|
| Voltage | V | volts |
| Current | I | amperes |
| Resistance | R | ohms |
| Power | P | watts |

**Ohm's law:** `V = I × R`  → `I = V ÷ R`, `R = V ÷ I`

**Example:** 48 Ω coil, 24 V across it → `I = 24 ÷ 48 = 0.50 A`

**Power:** `P = V × I`. For resistive loads: `P = I²R = V²/R`.

Doubling current at fixed resistance → **4×** the heating (current is squared).

## 5. AC, DC, and meter setup

- **DC** — one polarity, one direction. Batteries, many electronic controls. Set meter to DC volts.
- **AC** — periodically reverses. North America: 60 Hz. UK: 50 Hz. Motors & control transformers use AC. Set meter to AC volts.
- Always check the diagram/label for AC vs. DC before setting the meter.

## 6. Why three-phase power for motors

Three-phase = three AC voltages, same frequency/magnitude, 120° apart. In a motor, the phase currents create a **rotating magnetic field** → smoother torque, efficient operation. In a balanced system, total instantaneous power is nearly constant — that's the real reason for smooth torque (not just "three waves adding up").

Visualize: a point rotating uniformly around a circle — its vertical projection traces a sine wave. Three-phase = three such points, 120° apart.

## 7. L1, L2, L3, neutral, and 208/120 V

**Three-wire system:** L1, L2, L3 only — line-to-line measurements. A balanced three-phase load doesn't need a neutral (currents sum to zero).

**Four-wire wye system:** L1, L2, L3 + neutral — both line-to-line and line-to-neutral. Supports 208 V three-phase loads and 120 V single-phase loads.

`V(line-to-line) = √3 × V(line-to-neutral)` → `120 × √3 ≈ 208 V`

Both are nominal **RMS** values (not peaks). Peak of 120 V RMS ≈ 170 V; peak of 208 V RMS ≈ 294 V.

| Measurement | Expected nominal voltage |
|---|---:|
| L1–L2 | 208 V AC |
| L1–L3 | 208 V AC |
| L2–L3 | 208 V AC |
| L1–N | 120 V AC |
| L2–N | 120 V AC |
| L3–N | 120 V AC |

Always record both reference points — a voltage number alone is incomplete.

## 8. Trainer components introduced

The 85-MT5 trainer includes: safety switch & supply terminals, ground bus, operator station & indicator lamps, control relay & control transformer, overload relay, manual starter & reversing contactor, motor connection station & motor. Later labs add timers, limit switches, float/pressure switches, and inserted faults for troubleshooting.

## 9. Real-world / at-home examples

Connecting the concepts above to devices already in a typical home:

| Home device | Motor-control concept it demonstrates |
|---|---|
| **HVAC blower / furnace fan** | Contactor + control relay switching; fan relay is a control circuit turning a power circuit on/off |
| **Central AC compressor/condenser unit** | Contactor for power circuit, overload/thermal protection, single- or three-phase power depending on system size |
| **Sump pump** | **Float switch** (mentioned in trainer list) directly controls a pump motor — classic control-circuit sensor |
| **Washing machine** | Timer and selector switch sequencing (control circuit) driving a motor (power circuit); lid switch acts like a safety interlock |
| **Garage door opener** | **Limit switches** stop the motor at open/closed travel limits; a control circuit (remote/wall button) starts a DC or AC gearmotor |
| **Refrigerator compressor** | Overload relay/thermal protection prevents motor burnout from a stalled or overheated compressor |
| **Water well pump** | Pressure switch (control circuit) starts/stops the pump motor (power circuit) based on system pressure |
| **Home electrical panel** | Practical example of L1/L2 (or L1/L2/L3), neutral, and the equipment-grounding bus; breakers = short-circuit/ground-fault protection like the fuses/breakers in the power circuit |
| **Phone/laptop chargers** | DC output after AC-to-DC conversion — a simple everyday AC vs. DC contrast |

**Why this matters:** almost every home appliance with a motor is a small-scale version of the trainer: a **power circuit** (line voltage → motor) supervised by a **control circuit** (switches/sensors/timers → relay or contactor coil), with **overload/overcurrent protection** somewhere in the power path.

## Retrieval practice

Try answering without looking back (see the Quiz page for the interactive version).

1. What is the job of the power circuit? What is the job of the control circuit?
2. What two actions must occur before touching trainer wiring?
3. Why must each trainer panel have a dedicated equipment-grounding connection?
4. Why are neutral and equipment ground not interchangeable?
5. A 24 V coil has 48 Ω resistance. What current should it draw?
6. If current through a fixed resistance doubles, how does heating change?
7. Why does a three-phase motor produce smoother torque than a single-phase motor?
8. Why is a neutral not required for a balanced three-phase load?
9. In a 208/120 V wye system, what should be measured from L1 to L2? From L1 to neutral?
10. Why must the two meter probe locations be recorded with every voltage reading?
11. Which home device uses a float switch as its control-circuit sensor?
12. Which home device uses limit switches to stop motor travel at open/closed positions?

### Answers

1. The power circuit supplies motor energy; the control circuit decides when/how the motor operates.
2. Turn power off and verify the circuit state with the correctly configured meter.
3. It gives a reliable low-impedance fault-current path so the protective device opens; daisy-chaining lets one loose connection disconnect several components.
4. Neutral carries normal load current; equipment ground is a safety path and should not carry normal operating current.
5. `I = 24/48 = 0.50 A`.
6. Four times as great (`P = I²R`).
7. Three currents 120° apart create a rotating magnetic field and nearly constant total power.
8. In a balanced load, the three phase currents sum to zero at the common point.
9. About 208 V AC line-to-line; about 120 V AC line-to-neutral.
10. Voltage is a difference between two points — the number is ambiguous without both references.
11. Sump pump.
12. Garage door opener.

## Before the next class

- Memorize the safety workflow in the correct order.
- Be able to identify whether a measurement is line-to-line or line-to-neutral.
- Practice converting among `V = IR`, `P = VI`, and `P = I²R`.
- Redraw the simplified STOP–START–M control path and explain what happens when either pushbutton is pressed.
- Learn the functional difference among a contactor, overload relay, fuse/circuit breaker, control relay, and control transformer.
