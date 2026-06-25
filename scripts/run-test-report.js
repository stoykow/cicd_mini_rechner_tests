import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

mkdirSync('reports', { recursive: true });

const result = spawnSync(
  process.execPath,
  [
    '--test',
    '--test-reporter=tap',
    '--test-reporter-destination=reports/test-output.tap',
    'tests/**/*.test.js'
  ],
  { stdio: 'inherit' }
);

process.exit(result.status ?? 1);
