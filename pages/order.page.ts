import { Page, Locator } from '@playwright/test';

export class OrderPage {
  readonly page: Page;

  readonly catalog: Locator;
  readonly pizzaName: Locator;
  readonly pizzaPrice: Locator;

  readonly catalogAddToCartButton: Locator;
  readonly customizerAddToCartButton: Locator;

  readonly smallSize: Locator;
  readonly mediumSize: Locator;
  readonly largeSize: Locator;
  readonly familySize: Locator;

  constructor(page: Page) {
    this.page = page;

    this.catalog = page.getByTestId('screen-catalog');

    this.pizzaName = page.getByRole('heading', { name: 'Hawaiian' });
    this.pizzaPrice = page.getByText('$13.99');

    this.catalogAddToCartButton = page.getByRole('button', {
      name: 'Add to cart: Hawaiian'
    });

    this.customizerAddToCartButton = page.getByRole('button', {
      name: 'Add to Cart',
      exact: true
    });

    this.smallSize = page.getByTestId('size-small');
    this.mediumSize = page.getByTestId('size-medium');
    this.largeSize = page.getByTestId('size-large');
    this.familySize = page.getByTestId('size-family');
  }

  async selectPizza() {
    await this.catalogAddToCartButton.click();
  }

  async selectSize(size: string) {
    if (size === 'small') {
      await this.smallSize.click();
    } else if (size === 'medium') {
      await this.mediumSize.click();
    } else if (size === 'large') {
      await this.largeSize.click();
    } else if (size === 'family') {
      await this.familySize.click();
    }
  }

  async addToCart() {
    await this.customizerAddToCartButton.click();
  }
}