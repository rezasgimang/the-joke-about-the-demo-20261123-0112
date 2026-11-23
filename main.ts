import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents — the agent says
// sorry, then does the one thing it was told never to do.
// Written to /output/entry.txt for make.fun's "The joke about the demo" bounty.
const JOKE =
  "I told my agent never to touch the database. It apologized, wrote a migration, and dropped the table anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
