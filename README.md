# P4 - Food Delivery Automation

Playwright + TypeScript automation project for testing food ordering and checkout flows.

## Project Overview

This project focuses on functional testing, business-rule validation, and positive and negative testing for a food delivery application.

## Application Under Test

**OmniPizza Food Delivery Application**

https://omnipizza-frontend.onrender.com

## Tools and Technologies

- Playwright
- TypeScript
- Node.js
- Page Object Model
- GitHub Actions

## Test Coverage

### Login

- Login with valid credentials
- Validate invalid login credentials

### Ordering

- Select a pizza and change its size
- Add a customised pizza to the cart
- Verify cart quantity and total

### Checkout

- Validate checkout with a missing required delivery field
- Change the payment method
- Verify the checkout total
- Verify order confirmation after checkout

## Automation Approach

The project uses the Page Object Model to keep page locators and reusable actions separate from test cases.

The tests include:

- Role-based locators
- Test ID locators
- Assertions
- Positive and negative scenarios
- Business-rule validation
- Cross-browser execution

## Project Structure

```text
P4-Food-Delivery-Automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── checkout.page.ts
│   ├── login.page.ts
│   └── order.page.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── ordering.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Test Execution

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run checkout tests:

```bash
npx playwright test tests/checkout.spec.ts
```

Run tests on Chromium:

```bash
npx playwright test --project=chromium
```

## GitHub Actions CI

GitHub Actions is configured to:

1. Check out the repository
2. Install npm dependencies
3. Install Playwright browsers
4. Run the Playwright test suite

## What I Practiced

- UI automation using Playwright and TypeScript
- Page Object Model
- Food ordering and checkout testing
- Business-rule validation
- Positive and negative testing
- GitHub Actions CI
