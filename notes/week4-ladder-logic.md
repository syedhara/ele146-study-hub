# Week 4 — Control Ladder Logic

**Source:** Class 4 slides (`Class04_Control_Ladder_Logic_POST.pptx`), Class 4 homework + answer key, Lab 4 (Amatrol Module 4, Skills 1, 2, 5).

**Teaching focus:** use diagrams to predict circuit behavior before wiring. Explain every contact state and every output.

## What you must be able to do

- Identify the power rails, rungs, input contacts, and output devices.
- Interpret Normally Open (NO) and Normally Closed (NC) contacts from their normal state.
- Predict output states for series (AND), parallel (OR), and stop (NOT) logic.
- Convert a ladder rung into point-to-point wiring without changing the logic.
- Use voltage measurements to locate the first open point in a failed rung.

A ladder diagram is both a design document and a troubleshooting map. If you can trace the rung, you can predict what the machine should do.

## Ladder anatomy: conditions first, output last

- The left and right vertical lines are the **control-power rails** (commonly labeled L1 and neutral/L2).
- Each horizontal path is a **rung**.
- Input contacts are placed before the output they control.
- A complete electrical path across a rung energizes the output.
- **One output per rung:** if two independent outputs need separate logic, give them separate rungs — keeps logic readable and testable.

## Contact symbols: "normal" means not actuated

- **Normally Open (NO):** the path is open when the device is not actuated. Pressing/actuating it **closes** the path.
- **Normally Closed (NC):** the path is closed when the device is not actuated. Pressing/actuating it **opens** the path.
- The symbol describes the contact's **normal state** — not whether the machine is currently running.

**Student check:** before tracing any rung, state each contact as open or closed for the condition you're analyzing. "Normally Open" describes the contact's normal, unactuated design state; "currently open" describes its actual state at the moment being analyzed.

## Series contacts implement AND logic

| PB1 | PB2 | Yellow lamp |
|---|---|---|
| Released | Released | OFF |
| Pressed | Released | OFF |
| Released | Pressed | OFF |
| Pressed | Pressed | ON |

Every series contact must provide continuity — one open contact anywhere in the series path breaks the rung.

## Parallel contacts implement OR logic

| PB1 | PB2 | Yellow lamp |
|---|---|---|
| Released | Released | OFF |
| Pressed | Released | ON |
| Released | Pressed | ON |
| Pressed | Pressed | ON |

Only one parallel branch must be complete to provide a path to the output.

## Normally Closed contact as stop / NOT logic

- With PB3 released, its NC contact completes the path and the lamp can be energized.
- Press PB3 and the contact opens, so the output loses power.
- This is why stop devices commonly use NC contacts: an open circuit removes the run command.
- **Fail-safe idea:** a broken conductor in a series stop path also opens the circuit rather than creating a false run command.

## State tracing worked example (Amatrol Skill 5, two-rung circuit)

Shared upstream NC contact **PB3** (stop) feeds two parallel branches: Branch A = NO contact **PB1** → yellow lamp (Y); Branch B = NC contact **PB2** → green lamp (G).

| Condition | PB3 | PB1 | PB2 | Y | G |
|---|---|---|---|---|---|
| No buttons pressed | closed | open | closed | OFF | ON |
| PB1 pressed only | closed | closed | closed | ON | ON |
| PB2 pressed only | closed | open | open | OFF | OFF |
| PB3 held + PB1 pressed | open | closed | closed | OFF | OFF |
| PB3 held + PB2 pressed | open | open | open | OFF | OFF |

- With all released: PB3 closed, PB1 open, PB2 closed → **Y is OFF** because PB1 breaks its branch; **G is ON** because PB3 and PB2 both provide continuity.
- PB1 pressed only: PB3 closed, PB1 now closed → **Y is ON**; **G remains ON** (PB2 unaffected).
- PB3 held (actuated → NC opens) + PB1 pressed: pressing PB3 opens the **common upstream path** before the branch splits, so **neither rung has a complete path** — both Y and G go OFF, regardless of PB1/PB2.

**Why this matters:** a shared upstream contact affects every rung that depends on it — trace the full path, not just the branch closest to the output.

## From ladder to point-to-point wiring

Read the rung from left to right:
1. Wire 1: L1 to STOP input.
2. Wire 2: STOP output to START input.
3. Wire 3: START output to coil M.
4. Wire 4: coil M return to neutral.

Parallel branches create additional wires between the same two nodes. **Team check:** point to every conductor on the ladder and identify its physical start and end terminals before energizing.

## Voltage tracing: the first open point stops the rung

With START released, voltage is present up to the open START contact but not beyond it. When START closes, the node after START rises to about 120 VAC and the output sees full control voltage.

**Troubleshooting rule:** measure from left to right. The first point where the expected voltage disappears identifies the open contact, broken conductor, or failed connection blocking the rung.

## Common ladder mistakes — and what makes them wrong

- **Correct:** two input contacts in series, then one output — both conditions must be true (AND).
- **Correct:** parallel branches rejoin before the output — either branch can complete the path (OR).
- **Do not confuse the symbol with the contact's present operating state.** The symbol shows the contact's *normal* state — with a pushbutton released, a limit switch unactuated, or a relay/contactor coil de-energized. During operation, determine the contact's actual state from what is happening to its associated device.
- **Drawing standard:** every conductor must visibly terminate on the intended electrical symbol. An NO contact must show a clear gap; an NC contact must use the proper diagonal contact mark.

## Lab 4 preview: ladder logic on the trainer

- **Part A:** guided wiring — pushbutton PB1 controls a yellow lamp through its NO contact and a green lamp through its NC contact (Amatrol Module 4, Skill 1).
- **Part B:** guided wiring — three-position selector switch (SS1) feeds yellow/green lamps depending on position (Amatrol Module 4, Skill 2). SS1 is maintained (stays in the selected position), unlike a pushbutton which springs back.
- **Part C:** read a ladder diagram **without wiring it** (Amatrol Module 4, Skill 5) — analyze on paper only, to test reading skill after the guided wiring exercises.
- **Part D:** voltage tracing on the Part A pushbutton circuit — measure control source voltage, lamp-input voltage, and voltage across the PB1 NO contact, both released and pressed.

**Before energizing:** team members compare the physical wiring to the printed ladder, verify grounds, and explain the expected output state before power is applied.

## Apply it: predict before you measure

1. PB1 pressed, PB2 released (AND circuit). Is Y on or off? → **Y is OFF** — AND logic requires both PB1 and PB2 pressed; PB2 is still open.
2. PB1 released, PB2 pressed (OR circuit). Is Y on or off? → **Y is ON** — OR logic needs only one closed branch; PB2 provides that path.
3. START is open. Where should the first transition from 120 V to 0 V appear? → Across the open START contact. The node before START stays at ~120 VAC (fed through the closed STOP contact); the node after START is near neutral potential until START closes.

## Ready for the lab?

You're ready if you can take an unfamiliar rung and, without guessing:
1. Mark every contact open or closed for the stated condition.
2. Trace whether a complete path exists from L1 to neutral.
3. Predict the voltage at each node and the state of the output.

## What's next: Class 5

Class 5 adds control relays, contactors, overload protection, and the **seal-in circuit** that lets a momentary START command keep a motor starter energized.

## Real-world / at-home examples

| Home / everyday example | Week 4 concept it demonstrates |
|---|---|
| Two light switches wired to the same fixture (3-way switch) | Parallel-style OR logic — either switch can complete the path to turn the light on |
| String of old-style series holiday lights (one bulb burnout kills the string) | Series/AND-style failure mode — every contact/element in the path must be intact |
| Garage door safety photo-eye sensors | Wired as a normally-closed series "stop" chain — a broken beam (or broken wire) opens the circuit and stops the door, a fail-safe design |
| Fire alarm pull stations / smoke detectors on a supervised loop | NC-style series stop logic — an open/broken conductor is treated as an alarm/fault condition rather than silently failing |
| Thermostat calling for heat/cooling | A single input contact (thermostat) energizing an output (furnace relay/coil) — same basic rung structure as a pushbutton energizing a lamp |
| Multi-position rotary fan switch (off/low/med/high) | Behaves like the maintained selector switch (SS1) — stays in the selected position, unlike a momentary pushbutton |

**Why this matters:** the same series=AND, parallel=OR, NC=fail-safe-stop logic used on the trainer shows up throughout everyday wiring — recognizing the pattern makes both troubleshooting and ladder logic much less abstract.
