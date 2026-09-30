import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { OrderPage } from '../pages/order.page';
import { validUser } from '../test-data/users';

test.describe('Food Ordering Tests', () => {

  test('Select pizza and change size', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const orderPage = new OrderPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(orderPage.catalog).toBeVisible();

    await orderPage.selectPizza();

    await expect(orderPage.mediumSize).toBeVisible();

    await orderPage.selectSize('medium');

    await expect(orderPage.mediumSize)
      .toHaveAttribute('aria-pressed', 'true');
  });

  test('Add customized pizza to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const orderPage = new OrderPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(orderPage.catalog).toBeVisible();

    await orderPage.selectPizza();

    await expect(orderPage.largeSize).toBeVisible();

    await orderPage.selectSize('large');

    await orderPage.addToCart();
  });

});