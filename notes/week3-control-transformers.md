# Week 3 — Control Transformers

**Source:** Class 3 PRE-slides (`Class03_Control_Transformers_PRE.pptx`), Amatrol Module 3 control-transformer lab.

**Lab target:** wire the trainer control transformer and measure about 120 VAC across secondary terminals 2 and 5.

## Vocabulary

- **Alternating current (AC):** current that reverses direction periodically.
- **Volts alternating current (VAC):** an AC voltage reading, e.g. 120 VAC.
- **Volt-amperes (VA):** apparent power. VA = V × I.
- **National Electrical Code (NEC):** U.S. electrical safety code used by industry.
- **Primary winding:** transformer coil connected to the source.
- **Secondary winding:** transformer coil that supplies the load.
- **Turns ratio (TR):** primary coil turns ÷ secondary coil turns.

## Why this topic matters

Most motor-control panels have a high-energy power circuit and a lower-energy control circuit. The transformer lets pushbuttons, selector switches, pilot lights, relays, and contactor coils use a standard control voltage. When a control circuit does nothing, the first question is usually: **do we actually have control voltage?** A control transformer is a troubleshooting landmark — prove control power exists before blaming switches, coils, or lamps.

## Power circuit vs. control circuit

- **Power circuit:** feeds the motor; carries the current that produces mechanical motion.
- **Control circuit:** decides when the motor should start, stop, reverse, or signal status. It does not usually carry motor current — it controls the devices that switch motor current.
- Lab example: the selector switch controls a yellow lamp using transformer secondary voltage.

## What a control transformer does

Uses magnetic coupling to transfer energy from a primary winding to a secondary winding. Three jobs:
1. Step voltage to a useful control level.
2. Provide isolation between source and control circuit.
3. Create a predictable measurement point for troubleshooting.

Lab example: the Amatrol trainer steps 208 VAC line voltage down to about 120 VAC control voltage.

## Magnetic coupling, not a direct wire

- **Primary winding** — connected to the supply side.
- **Iron core** — carries changing magnetic flux.
- **Secondary winding** — supplies the control circuit.
- Primary and secondary are magnetically coupled, **not** one continuous conductor. That separation (isolation) is a key reason control transformers are useful in control panels.

## Step-down and step-up

- **Step-down:** secondary voltage lower than primary (e.g. 208 VAC → 120 VAC).
- **Step-up:** secondary voltage higher than primary (e.g. 24 VAC → 96 VAC).
- Sanity check: fewer secondary turns → lower secondary voltage; more secondary turns → higher secondary voltage.

## Rating language: volts, amperes, volt-amperes

- **Voltage rating:** the voltage the winding is designed to use.
- **Current rating:** how much current the winding can safely carry.
- **VA (volt-amperes):** apparent power capacity, VA = V × I.
- If a transformer is too small, control voltage can sag, contactors may chatter, and components can overheat.

## Why not put every control device on line voltage?

Line voltage may exceed the voltage rating of pushbuttons, pilot lights, relays, or other control devices. A standard control voltage makes wiring/troubleshooting consistent across machines. Lower control voltage can reduce risk but is **not harmless** — treat every powered control circuit as hazardous until proven otherwise.

## Turns ratio

$$TR = \dfrac{\text{primary turns}}{\text{secondary turns}}$$

Example: primary = 100 turns, secondary = 50 turns → TR = 100 ÷ 50 = **2, written 2:1**. A 2:1 ratio means the primary has twice as many turns as the secondary; in an ideal transformer the secondary voltage is half of the primary voltage.

## Secondary voltage formula

$$V_{secondary} = \dfrac{V_{primary}}{TR}$$

Example: primary voltage = 120 VAC, TR = 2 → secondary voltage = 120 ÷ 2 = **60 VAC**. Check: TR > 1 means step-down, so a lower secondary voltage makes sense. The voltmeter is on the secondary, so this is the voltage across the secondary terminals.

### Worked Example 1 — Step-down
- Given: primary turns = 180, secondary turns = 45, primary voltage = 240 VAC.
- TR = 180 ÷ 45 = **4:1**
- Secondary voltage = 240 ÷ 4 = **60 VAC**
- **Step-down**

### Worked Example 2 — Step-up
- Given: primary turns = 50, secondary turns = 200, primary voltage = 24 VAC.
- TR = 50 ÷ 200 = **0.25**
- Secondary voltage = 24 ÷ 0.25 = **96 VAC**
- **Step-up** (TR < 1 → secondary has more turns than primary → higher secondary voltage)

## Trainer transformer wiring

- **Primary taps:** 208, 277, or 380 VAC.
- **Secondary windings:** series → 240 VAC; parallel → 120 VAC.
- H = high-side primary reference; X = low-side secondary reference.

### Primary tap selection

| Supply voltage | Connect primary to terminals |
|---|---|
| 208 VAC | 2 and 3 |
| 277 VAC | 2 and 4 |
| 380 VAC | 2 and 6 |

The primary tap **must match the supply voltage** — the wrong tap can produce the wrong secondary voltage and can overheat/damage the transformer. **Class 3 lab uses the 208 VAC primary tap.**

### Secondary connections: series vs. parallel

| Connection | Links | Output across 2–5 |
|---|---|---|
| Series | Link terminal 3 to terminal 4 | 240 VAC |
| Parallel | Link terminal 2 to 3, and terminal 4 to 5 | 120 VAC |

Lab needs about 120 VAC control power → secondary windings connected **in parallel**. Always confirm link placement against the diagram before energizing — never wire from memory.

## Primary and secondary protection

- **Primary-side protection:** protects the transformer primary winding and upstream wiring from fault current.
- **Secondary-side protection:** protects lower-voltage control conductors and devices from fault current.
- A fuse/breaker does not make a circuit work normally — it opens when current becomes unsafe. The Amatrol schematic shows primary fuses feeding the control transformer; overcurrent protection is tied to NEC requirements.

## Grounding one side of the secondary

- In this lab, **terminal 5** on the secondary is connected to earth ground — giving the control circuit a stable reference to ground.
- A fault from the ungrounded side to grounded metal becomes a high-current fault path, so protection can open.
- A floating secondary can create confusing voltage-to-ground readings.

## Expected meter readings

| Measurement | Expected reading | Why |
|---|---|---|
| Terminals 2 to 5 | ~120 VAC | Full secondary output |
| Terminal 5 to ground | ~0 VAC | Terminal 5 is grounded |
| Terminal 2 to ground | ~120 VAC | Terminal 2 is the ungrounded side |

If 2-to-5 is not near 120 VAC, don't assume the transformer is bad — first check the primary tap, secondary links, fuse path, and meter setting.

## Measuring control voltage

- Use the digital multimeter on **AC voltage**.
- Black lead → COM (common); red lead → volts/ohms.
- Measure across secondary terminals 2 and 5.
- Use one hand where practical and keep your body out of the current path (reduces the chance a shock path crosses the chest from hand to hand).

## Proving de-energized: Live-Dead-Live

1. **Live** — prove the meter works on a known live source.
2. **Dead** — measure the circuit you intend to touch; expect zero volts.
3. **Live** — re-prove the meter on the known live source.

Re-checking proves the meter didn't fail mid-test and that the zero-volt reading was real. Do not trust a zero-volt reading until the meter has been proven both before and after.

## Lab preview: what you will wire

1. Connect the primary for the 208 VAC tap.
2. Configure the secondary for 120 VAC (parallel).
3. Connect terminal 5 to earth ground.
4. Use the selector switch (SS1) to turn the yellow lamp on and off.
5. Measure the secondary output across terminals 2 and 5.

The lab schematic shows L1/L2 feeding fuses, the transformer primary, the secondary links, the grounded secondary terminal, selector switch 1 (SS1), and the yellow lamp.

## Team self-check before energizing

- Every required green ground lead is connected to a dedicated ground bus point.
- The primary tap matches the actual supply voltage.
- The secondary links match the 120 VAC (parallel) configuration.
- Terminal 5 on the secondary is connected to earth ground.
- The selector switch is in the center/off position before power is applied.

## What correct operation looks like

| Switch position | Lamp | Notes |
|---|---|---|
| Center/off | Off | Circuit path open |
| Left | On | Selector switch contact closes |
| Back to center/off | Off | — |

Measuring 2 to 5 should read about 120 VAC. **If the lamp works but the voltage is wrong, don't skip the measurement** — the lamp proves circuit action, the meter proves transformer output.

## Class check — three questions (answer orally, explain reasoning)

1. Why use a control transformer instead of feeding all control devices directly from line voltage?
   → Provides standard control voltage, isolation, and a predictable troubleshooting point.
2. Primary = 240 VAC, turns ratio = 4:1 — secondary voltage?
   → 240 ÷ 4 = **60 VAC**.
3. Why is terminal 5 connected to earth ground?
   → Gives the control circuit a stable reference and helps fault current clear protection.

## What's next: ladder logic

Next class converts control-circuit ideas into ladder diagrams: rails, rungs, normally open/closed contacts, coils, and device tags. Today's transformer becomes the power source for the control rungs you'll build next. **A control circuit can only be troubleshot logically after you prove the control transformer is supplying the expected voltage.**
