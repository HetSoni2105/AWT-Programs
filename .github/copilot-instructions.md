# Copilot Instructions for Event Tracker Project

## Overview
This project is an Event Tracker application built using Node.js and Express. It allows users to log in, log out, make purchases, and update their profiles. The application tracks user events and displays a summary of these events.

## Architecture
- **Main Components**: The application consists of a main server file (`practical1.js`) that handles HTTP requests and manages user events through an `EventEmitter` instance.
- **Data Flow**: User actions trigger events that are counted and displayed on the main page. The server listens on port 3000 and serves HTML content dynamically based on user interactions.
- **Service Boundaries**: The application is structured around user events, with clear boundaries for login, logout, purchase, and profile update functionalities.

## Developer Workflows
- **Starting the Server**: Run `node practical1.js` to start the server. The server will be accessible at `http://localhost:3000`.
- **Testing**: Use the forms on the main page to simulate user actions. Check the console for event logs and the summary section for event counts.
- **Debugging**: Use `console.log` statements within event listeners to trace event handling and user interactions.

## Project Conventions
- **Event Naming**: Events are named using a `user-<action>` format (e.g., `user-login`, `user-logout`). This convention helps in identifying and tracking user actions easily.
- **HTML Structure**: The main page is structured with forms for user actions and a summary section for displaying event counts. Ensure that any new features follow this structure for consistency.

## Integration Points
- **External Dependencies**: The project uses the `express` package for handling HTTP requests. Ensure that it is installed via `npm install`.
- **Cross-Component Communication**: The application uses Node.js's built-in `EventEmitter` for handling events. This allows different parts of the application to communicate without direct dependencies.

## Key Files
- **`practical1.js`**: Main server file that handles requests and events.
- **`index.html`**: Frontend file that provides the user interface for the application.
- **`package.json`**: Contains project dependencies and scripts.

## Examples
- To log in a user, fill in the username in the login form and submit. The console will log the event, and the summary will update accordingly.
- For purchases, enter the username and item in the purchase form. The event will be logged, and the purchase count will increment in the summary.

---

These instructions are designed to help AI agents understand the structure and functionality of the Event Tracker project quickly. Please provide feedback on any unclear or incomplete sections to iterate further.