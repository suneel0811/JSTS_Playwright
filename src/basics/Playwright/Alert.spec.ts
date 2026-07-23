import { test } from '@playwright/test';

test('Popup Alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // JS Alert
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.locator("//button[text()='Click for JS Alert']").click();

    let result = await page.locator('#result').textContent();
    console.log(result);

    // JS Confirm
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.locator("//button[text()='Click for JS Confirm']").click();

    result = await page.locator('#result').textContent();
    console.log(result);

    // JS Prompt
    page.once('dialog', async dialog => {
        await dialog.accept('Suneel');
    });

    await page.locator("//button[text()='Click for JS Prompt']").click();

    result = await page.locator('#result').textContent();
    console.log(result);

    await page.waitForTimeout(5000);
});