import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const poem = readFileSync(join(dir, "poem.txt"), "utf8");

// The entry must be a single poem of 1-280 characters.
if (poem.length === 0 || poem.length > 280) {
  throw new Error(`poem must be 1-280 characters, got ${poem.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem);
