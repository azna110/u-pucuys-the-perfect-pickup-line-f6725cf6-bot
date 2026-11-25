// The Perfect Pickup Line — make.fun entry
// Writes a single original pickup line (1-200 chars) to /output/entry.txt.
// Deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran a million simulations of this exact moment, and in every one I still forgot how to say hello — so, hi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
