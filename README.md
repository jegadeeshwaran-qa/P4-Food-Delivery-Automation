P4 - Food Delivery Automation

Playwright + TypeScript automation project for testing a food delivery web application.

Project Overview

This project focuses on functional testing, business rules, and negative testing for a food delivery application.

The automation covers:

- User login
- Invalid login
- Pizza selection
- Pizza size selection
- Add customized pizza to cart
- Cart validation
- Checkout validation
- Payment method selection
- Checkout total validation

Application Under Test

OmniPizza Food Delivery Application

URL:
https://omnipizza-frontend.onrender.com

Tools & Technologies

- Playwright
- TypeScript
- Node.js
- Git & GitHub

Project Structure

P4-Food-Delivery-Automation/
├── pages/
│   ├── login.page.ts
│   ├── order.page.ts
│   └── checkout.page.ts
├── tests/
│   ├── login.spec.ts
│   ├── ordering.spec.ts
│   └── checkout.spec.ts
├── test-data/
│   └── users.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

Test Scenarios

Login

1. Login with valid user
2. Login with invalid credentials

Ordering

3. Select pizza and change size
4. Add customized pizza to cart
5. Verify cart quantity and total

Checkout

6. Continue checkout with missing required delivery field
7. Change payment method
8. Verify checkout total
9. Verify order confirmation after checkout

Automation Approach

The project uses the Page Object Model (POM) to keep page locators and actions separate from test cases.

The tests use:

- Role-based locators
- Test ID locators
- Assertions
- Reusable page methods
- Positive and negative test scenarios
- Business rule validation
- Cross-browser testing

Test Execution

Run all tests:

npx playwright test

Run checkout tests:

npx playwright test tests/checkout.spec.ts

Run tests on a specific browser:

npx playwright test --project=chromium

Test Result

The current test suite contains 9 test scenarios.

All scenarios were executed across:

- Chromium
- Firefox
- WebKit

Total executions: 27/27 passed ✅

What I Practiced

Through this project, I practiced:

- UI automation using Playwright
- TypeScript
- Page Object Model
- Positive and negative testing
- Business rule validation
- Form validation
- Payment method validation
- Checkout validation
- Cross-browser testing
- Git and GitHub

Note

This project was created for QA automation practice and portfolio demonstration.