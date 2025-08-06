const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Login with valid credentials', async ({ page }) => {
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');

  await expect(page.locator('#welcome')).toHaveText('Welcome testuser');
});

test('Login with empty fields shows error', async ({ page }) => {
  await page.click('#loginBtn');

  await expect(page.locator('#error')).toHaveText('Please enter username and password');
});
