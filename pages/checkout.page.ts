import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  readonly checkoutButton: Locator;

  readonly address: Locator;
  readonly zipCode: Locator;
  readonly fullName: Locator;
  readonly phone: Locator;

  readonly cardPayment: Locator;
  readonly cashPayment: Locator;
  readonly paypalPayment: Locator;

  readonly placeOrderButton: Locator;
  readonly orderTotal: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.getByRole('button', {
      name: 'Checkout Now →'
    });

    this.address = page.getByTestId('address-responsive');
    this.zipCode = page.getByTestId('zip-code');
    this.fullName = page.getByTestId('full-name-responsive');
    this.phone = page.getByTestId('phone-responsive');

    this.cardPayment = page.getByTestId('payment-method-card');
    this.cashPayment = page.getByTestId('payment-method-cash');
    this.paypalPayment = page.getByTestId('payment-method-paypal');

    this.placeOrderButton = page.getByRole('button', {
      name: 'Place Order'
    });

    this.orderTotal = page.getByTestId('order-total');
  }

  async openCheckout() {
    await this.checkoutButton.click();
  }

  async fillDeliveryDetails() {
    await this.address.fill('123 Test Street');
    await this.zipCode.fill('12345');
    await this.fullName.fill('Test User');
    await this.phone.fill('1234567890');
  }

  async selectPaymentMethod(method: string) {
    if (method === 'card') {
      await this.cardPayment.click();
    } else if (method === 'cash') {
      await this.cashPayment.click();
    } else if (method === 'paypal') {
      await this.paypalPayment.click();
    }
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}