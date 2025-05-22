# SDP-UI-Automate

This project contains automated end-to-end tests for the SDP UI application, built using Cypress.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd sdp-ui-automate
    ```

2.  **Install Dependencies:**
    You can install the necessary dependencies using the provided script:
    ```bash
    ./install_dependencies.sh
    ```
    Alternatively, you can run npm directly:
    ```bash
    npm install
    ```

## Running Tests

This project uses Cypress for automated testing.

-   **To open the Cypress Test Runner (interactive mode):**
    ```bash
    npm test
    ```
    This will allow you to see the tests run in a browser and interact with them.

-   **To run all tests in headless mode (e.g., for CI environments):**
    ```bash
    npm run test:headless
    ```

## Project Structure

-   `cypress/`: Contains all Cypress-related files.
    -   `e2e/`: End-to-end test files (specs). This is where the actual test scripts like `login.cy.ts`, `ai-knowledge.cy.ts` are located.
    -   `fixtures/`: Test data files (e.g., JSON, CSV, images) that can be used by tests.
    -   `support/`: Reusable custom commands (`commands.ts`) and other support files that tests can leverage.
    -   `downloads/`: When tests download files, they will appear here. (Note: Typically gitignored)
    -   `screenshots/`: Cypress automatically saves screenshots here on test failure when running headless. (Note: Typically gitignored)
    -   `videos/`: Cypress records videos of test runs here when running headless. (Note: Typically gitignored)
-   `node_modules/`: Directory where npm installs project dependencies. (Note: Typically gitignored)
-   `package.json`: Defines project metadata, dependencies, and scripts.
-   `package-lock.json`: Records the exact versions of dependencies.
-   `cypress.config.ts`: Configuration file for Cypress.
-   `install_dependencies.sh`: A helper script to install project dependencies.
-   `tsconfig.json`: Configuration file for TypeScript.

## Test Configuration

-   **Base URL:** The application under test is expected to be running at `http://192.168.10.95` (as configured in `cypress.config.ts`).
