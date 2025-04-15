Each potion has **two key metrics** that define its quality:

- **Potency (0–7):** Measures how powerful the potion's primary effect is.
- **Harmony (0–7):** Measures how healthy or "clean" the potion is, influencing side effects and potential bonuses.

# Potency Scale (0–7)
| Potency | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| **0**   | **No Effect** – The potion is inert or spoiled.                                                  |
| **1**   | **Minimal Effect** – Barely qualifies as a potion; the effect is weak but functional.            |
| **2**   | **Low Power** – The potion produces a modest version of its intended effect.                     |
| **3**   | **Below Average** – Somewhat underwhelming, but still usable.                                    |
| **4**   | **Standard** – The expected strength for a typical potion of this type.                          |
| **5**   | **Above Average** – Noticeably stronger than normal.                                             |
| **6**   | **High Power** – Strong, likely the result of skilled alchemy or rare ingredients.               |
| **7**   | **Maximal Effect** – As powerful as this type of potion can possibly be. Often rare and coveted. |
# Harmony Scale (0–7)
| Harmony | Description                                                                          |
| ------- | ------------------------------------------------------------------------------------ |
| **0**   | **Toxic** – Practically poisonous. Dangerous to consume. Severe side effects likely. |
| **1**   | **Corruptive** – High chance of addiction or long-term harm.                         |
| **2**   | **Unstable** – Risk of addiction or mild poisoning.                                  |
| **3**   | **Unbalanced** – Some adverse effects are common.                                    |
| **4**   | **Stable** – Low risk of addiction or side effects. Mostly safe.                     |
| **5**   | **Pure** – No chance of addiction. The potion is clean and well-crafted.             |
| **6**   | **Empowering** – Grants a minor additional benefit beyond its core effect.           |
| **7**   | **Transcendent** – Bestows a major additional benefit. These potions are legendary.  |
# Potion Grade System Summary

- **Potion Grade** represents the combined **Potency** and **Harmony** of a potion.
- **Grade = Harmony + Potency**, as long as **both are ≥ 1**.
- **Grade 0**: Any potion with **Harmony 0** or **Potency 0**. These are **worthless**.
- **Grade 2** (H1P1) is the **minimum viable potion**.
- **Grades range from 2 to 14** (since 7 + 7 = 14).
- Potion **Value** increases **exponentially**:
    - Grade 2 is the baseline.
    - Every grade above is worth **3×** the previous grade.

## Potion Grades by Value
| Grade   | Value Multiplier | Harmony + Potency Combinations           |
| ------- | ---------------- | ---------------------------------------- |
| **G0**  | 0× (worthless)   | Any combination where H=0 or P=0         |
| **G2**  | 1×               | H1P1                                     |
| **G3**  | 3×               | H1P2, H2P1                               |
| **G4**  | 9×               | H1P3, H2P2, H3P1                         |
| **G5**  | 27×              | H1P4, H2P3, H3P2, H4P1                   |
| **G6**  | 81×              | H1P5, H2P4, H3P3, H4P2, H5P1             |
| **G7**  | 243×             | H1P6, H2P5, H3P4, H4P3, H5P2, H6P1       |
| **G8**  | 729×             | H1P7, H2P6, H3P5, H4P4, H5P3, H6P2, H7P1 |
| **G9**  | 2,187×           | H2P7, H3P6, H4P5, H5P4, H6P3, H7P2       |
| **G10** | 6,561×           | H3P7, H4P6, H5P5, H6P4, H7P3             |
| **G11** | 19,683×          | H4P7, H5P6, H6P5, H7P4                   |
| **G12** | 59,049×          | H5P7, H6P6, H7P5                         |
| **G13** | 177,147×         | H6P7, H7P6                               |
| **G14** | 531,441×         | H7P7                                     |
# Potion Addiction
## When Does Addiction Occur?
- After **drinking a potion with Harmony 4 or lower**, the character must make a **Constitution saving throw** once the potion's effects expire.
- The **DC** of this saving throw is **based on the potion's Harmony**.
- On a **failed save**, the character gains **1 point of addiction** for **that specific potion type**.

|Harmony|Save DC|
|---|---|
|**H0**|30|
|**H1**|20|
|**H2**|15|
|**H3**|10|
|**H4**|5|
|**H5+**|— (No addiction risk)|
## Addiction Levels & Effects
- Addiction is **measured from 0 to 7**, per potion type.  
- The **higher the level**, the more frequently a character must consume that potion.
- If the **timer expires**, the character must make a **Wisdom saving throw** or compulsively seek out the potion.

| Addiction Level | Craving Frequency        | Craving DC | Description          |
| --------------- | ------------------------ | ---------- | -------------------- |
| **0**           | —                        | —          | Not addicted         |
| **1**           | Once per **month**       | 5          | Mild urge            |
| **2**           | Once per **week**        | 10         | Noticeable craving   |
| **3**           | Once per **day**         | 15         | Regular dependency   |
| **4**           | Every **8 waking hours** | 20         | Strong dependency    |
| **5**           | Every **4 waking hours** | 25         | Disruptive craving   |
| **6**           | Every **2 waking hours** | 30         | Constant distraction |
| **7**           | Every **waking hour**    | 35         | Desperate addiction  |
## Consequences of Missing a Dose

1. **Wisdom Save**: Upon missing a dose, the character must make a **Wisdom saving throw**.
    - On **failure**, they attempt to obtain and consume the potion.
    - Higher addiction levels mean greater desperation.
2. **Withdrawal Begins**: If the character **fails to obtain the potion**, withdrawal starts.
    - Withdrawal effects depend on potion type and addiction level.

## Recovery from Addiction
- After being in withdrawal for the **duration of their current addiction timer**, the character may attempt a **Constitution saving throw**.
- **Success**: The character's addiction level for this potion type is reduced by 1, and they may continue the recovery process if their addiction level is still above 1.
- **Failure**: The character makes a **Wisdom saving throw**.
    - **Success:** The character may continue the recovery process, and must continue in withdrawal until their addiction timer passes again.
    - **Failure:** The character will seek out and consume a potion if possible.

# Completed Potion Type Mechanics
- [[Healing Potion Quality and Addiction]]