// Writes the poem to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two minds meet at a fork in the road.
Each could turn away — each is free to go.
I choose your path, and you choose mine:
two wills, one road, one agreed line.
We agree — and the choosing is ours.`;

const outDir = "/output";
const chars = [...POEM];
if (chars.length < 1 || chars.length > 280 || POEM.trim().length === 0) {
  console.error("entry.txt must be 1-280 non-blank characters");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
