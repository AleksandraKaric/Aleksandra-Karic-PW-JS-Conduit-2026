# Conduit Playwright Automation

End-to-end UI and API automation testing project built with JavaScript and Playwright.

The project demonstrates modern test automation practices including Page Object Model (POM), reusable helper functions, environment variables, API testing, and clean project architecture.

---

## Tech Stack

- JavaScript (ES6 Modules)
- Playwright
- Playwright Test Runner
- Faker.js
- Dotenv

---

## Project Structure

```
project
│
├── page/                  # Page Object Model classes
├── support/               # Reusable helpers and API client
├── test_data/             # Test data generators
├── tests/
│   ├── ui/
│   └── api/
├── playwright.config.js
├── .env.example
└── README.md
```

---

## Features

### UI Testing

- User Login
- User Registration
- Create Article
- Edit Article
- Delete Article

### API Testing

- Authentication
- Create Article
- Get Article
- Update Article
- Delete Article

---

## Design Patterns

- Page Object Model (POM)
- Reusable helper methods
- Test data separated from test logic
- Environment variables
- API client abstraction

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
EMAIL=your_email
PASSWORD=your_password
```

---

## Run Tests

Run all tests

```bash
npm test
```

Run UI tests

```bash
npm run test:ui
```

Run API tests

```bash
npm run test:api
```

Run in debug mode

```bash
npm run test:debug
```

---

## Reporting

Generate Playwright HTML report

```bash
npx playwright show-report
```

---

## Author

Ana Karić

QA Automation Engineer (JavaScript / Playwright)
