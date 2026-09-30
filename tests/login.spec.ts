import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { validUser, invalidUser } from '../test-data/users';

test.describe('Food Delivery Login Tests', () => {

  test('Login with valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).not.toHaveURL(
      'https://omnipizza-frontend.onrender.com/'
    );
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      invalidUser.username,
      invalidUser.password
    );

    await expect(
      page.getByText(/invalid|incorrect|failed/i)
    ).toBeVisible();
  });

});