# Mini-Rechner - Testprojekt für Tag 4

Dieses Projekt zeigt automatisierte Tests ohne externe Abhängigkeiten.

Es nutzt den eingebauten Node.js Test Runner `node:test`.

## Voraussetzungen

- Node.js 20 oder neuer
- npm

Prüfen:

```bash
node --version
npm --version
```

## Tests ausführen

Alle Tests:

```bash
npm test
```

Nur Unit-Tests:

```bash
npm run test:unit
```

Nur Integrationstests:

```bash
npm run test:integration
```

Nur E2E-Smoke-Test:

```bash
npm run test:e2e
```

## Testabdeckung

```bash
npm run test:coverage
```

Die Abdeckung zeigt, welche Codebereiche durch Tests ausgeführt wurden.
Sie beweist nicht automatisch, dass fachlich alles sinnvoll getestet wurde.

## Testbericht

```bash
npm run test:report
```

Danach liegt ein TAP-Bericht hier:

```text
reports/test-output.tap
```

Wenn der Befehl im Terminal kaum Ausgabe zeigt, ist das normal. Entscheidend ist die erzeugte Datei.

## Testarten im Projekt

| Ordner | Testart | Zweck |
|---|---|---|
| `tests/unit` | Unit-Test | einzelne Rechenfunktionen prüfen |
| `tests/integration` | Integrationstest | Rechenfunktionen und Berichtserstellung zusammen prüfen |
| `tests/e2e` | E2E-Smoke-Test | kleine Website über einen lokalen Server abrufen |

## CI/CD-Bezug

In einer Pipeline würden diese Tests typischerweise nach Checks und Linting laufen:

```text
check -> lint -> test -> report -> build -> deploy
```

Beispieldateien:

- `.github/workflows/tests.yml`
- `.gitlab-ci.yml`
