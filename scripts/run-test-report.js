import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

mkdirSync('reports', { recursive: true });

const result = spawnSync(
  process.execPath,
  [
    '--test',
    '--test-reporter=tap',
    '--test-reporter-destination=reports/test-output.tap',
    'tests/unit/rechner.test.js',
    'tests/integration/report.test.js',
    'tests/e2e/index-smoke.test.js'
  ],
  { stdio: 'inherit' }
);

process.exit(result.status ?? 1);
