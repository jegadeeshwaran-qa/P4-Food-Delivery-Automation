import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { OrderPage } from '../pages/order.page';
import { CheckoutPage } from '../pages/checkout.page';
import { validUser } from '../test-data/users';

test.describe('Food Delivery Checkout Tests', () => {

  test('Continue checkout with missing required delivery field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const orderPage = new OrderPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await orderPage.selectPizza();
    await orderPage.selectSize('medium');
    await orderPage.addToCart();

    await checkoutPage.openCheckout();

    await checkoutPage.placeOrder();

    const confirmationDialog = page.getByRole('dialog', {
      name: 'Confirm your order'
    });

    await expect(confirmationDialog).toBeVisible();
    await expect(confirmationDialog).toContainText('Total to pay:');
  });

  test('Change payment method', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const orderPage = new OrderPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await orderPage.selectPizza();
    await orderPage.addToCart();

    await checkoutPage.openCheckout();

    await checkoutPage.selectPaymentMethod('cash');

    await expect(checkoutPage.cashPayment)
      .toHaveAttribute('aria-checked', 'true');

    await expect(checkoutPage.cardPayment)
      .toHaveAttribute('aria-checked', 'false');
  });

  test('Verify checkout total', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const orderPage = new OrderPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await orderPage.selectPizza();
    await orderPage.addToCart();

    await checkoutPage.openCheckout();

    await expect(checkoutPage.orderTotal).toBeVisible();
    await expect(checkoutPage.orderTotal).toContainText('$');
  });

});