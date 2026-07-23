import { test } from '@playwright/test';

test('move to element', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/');
    //await page.locator("//a[text()='Laptops & Notebooks']").hover();
    await page.locator("//a[text()='Laptops & Notebooks']").hover();
    //await page.waitForTimeout(5000);
    await page.locator("//a[contains(text(),'Windows')]").click();
    await page.waitForTimeout(5000);

});
