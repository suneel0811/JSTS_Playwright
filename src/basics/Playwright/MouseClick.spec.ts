import { test } from '@playwright/test';

test('move to element', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/mouse-event/',
        {waitUntil: 'commit'});
await page.waitForTimeout(5000);
    await page.locator("//button[text()='Double Click Me']").dblclick();

    await page.waitForTimeout(5000);

     await page.locator("//button[text()='Right Click Me']").click({button:'right'});
         await page.waitForTimeout(5000);
});
