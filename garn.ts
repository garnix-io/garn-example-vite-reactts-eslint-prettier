import * as garn from 'https://garn.io/ts/v0.0.16/mod.ts';

export const webApp = garn.javascript
  .mkNpmProject({
    description: 'my web app',
    src: '.',
    nodeVersion: '18',
  })
  .addCheck('type-check', 'npm run type-check')
  .addCheck('format-check', 'npm run format-check')
  .addCheck('lint-check', 'npm run lint-check')
  .add(garn.javascript.vite)
  .add(garn.deployToGhPages((self) => self.build));
