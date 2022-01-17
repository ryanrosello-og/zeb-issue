import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    video: 'on',
  },
  reporter: [
    [
      './node_modules/zebrunner-playwright-agent/src/build/src/lib/zebReporter.js',
      {
        reporterBaseUrl: 'https://ap.zebrunner.com',
        projectKey: 'DEF',
        enabled: true,
        concurrentTasks: 10,
      },
    ],
  ],
};
export default config;