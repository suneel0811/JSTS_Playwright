// import { defineConfig } from '@playwright/test';
//
// export default defineConfig({
//   use: {
//     headless: false,
//   },
// });

import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    headless: false,
    channel: 'chrome'
  }
});