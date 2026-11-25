// Hands in the front page: copies entry.png beside this file to /output/entry.png.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output (makefun.mjs check does this).
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
