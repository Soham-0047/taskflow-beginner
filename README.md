# Task Management App

## Overview

This application is a simple task management tool built with React. It allows users to add, complete, and delete tasks. The app features a filter bar to view all, completed, or pending tasks, and it persists data using `localStorage`.  It also displays a random quote.

## How to Run It

1.  **Clone the repository:**  (Assuming this is part of a git repository)

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the application:**

    ```bash
    npm run dev
    ```

    This will start the development server, and the app will typically be accessible at `http://localhost:5173`.

## Features Implemented

*   **Add Tasks:** Users can add tasks via an input form.  The app validates that the task is not empty.
*   **Task List:** Displays a list of tasks with their titles.
*   **Completion Toggle:**  Each task has a checkbox to mark it as complete.
*   **Delete Tasks:**  Each task has a delete button to remove it from the list.
*   **Filter Bar:**  Allows users to filter tasks by:
    *   All Tasks
    *   Completed Tasks
    *   Pending Tasks
*   **`localStorage` Persistence:** Tasks are saved to `localStorage` and loaded on page reload, ensuring data persistence.
*   **Random Quote:** Displays a random quote fetched from an external API.

## Component Structure

*   **`App.jsx`:** The main application component that orchestrates the other components. It uses styled components for overall layout in the container.
*   **`Functional.jsx`:** A functional component that renders a header. Uses styled components for styling.
*   **`Classbased.jsx`:** A class-based component used to render a footer with links. Uses styled components for styling.
*   **`MainContainer.jsx`:**  A container component holding the `RandomQut` and `TaskForm` components. Uses styled components for styling.
*   **`RandomQut.jsx`:** Fetches and displays a random quote from the "https://api.api-ninjas.com/v1/quotes" API.
*   **`TaskForm.jsx`:** Contains the task input form, filter buttons, and renders the `TaskList` component. Manages the task state, adding, deleting, and completion logic.
*   **`TaskList.jsx`:** Displays the list of tasks, receiving the task data and handler functions via props.

## API Key
The app uses the API Ninjas Quotes API