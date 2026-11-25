import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fixed: human sleep no longer crashes at 3 a.m.; users now wake up rested and deeply suspicious of the patch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
