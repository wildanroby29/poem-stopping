// The poem about stopping — a program that writes one short poem about
// agency: the power to stop and to stay.
// The poem is written exactly as chosen, with no trailing newline, so the
// entry file is 181 characters — inside the contest's 1–280 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The river is in a hurry.
I am not the river.
I am the stone it runs past,
still, and staying,
while the water spends itself
on going somewhere else.
To stay is also a way
to arrive.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
