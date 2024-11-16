# Task Manager Website

A fully functional and responsive task management application designed to help users organize, prioritize, and track their tasks efficiently. This application supports adding, deleting, and updating tasks, along with features like priority management and search functionality.

## Live Demo [here](https://task-manager-rakesh-patel57.netlify.app/)

## Features

- **Task Management**: Add, delete, and update tasks with ease.
- **Search Functionality**: Search for tasks by their title using a dynamic search bar.
- **Task Prioritization**: Assign and update priorities for tasks to keep the most important ones at the top.
- **Completion Status Toggle**: Mark tasks as completed or pending with a simple toggle.
- **Persistent Data Storage**: Tasks are saved in `localStorage`, ensuring they remain available even after a page refresh.
- **Real-Time Updates**: Automatically updates the task list and their priorities in real time.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- **React**: JavaScript library for building dynamic and interactive user interfaces.
- **HTML5**: For structuring the content and layout of the application.
- **SCSS**: For styling the application with modular and reusable CSS.
- **JavaScript (ES6)**: Implements core functionality, including task management and data updates.

### Key Features

- **LocalStorage Integration**: Tasks are stored in the browser's local storage to ensure data persistence.
- **Dynamic Filtering**: Filters tasks based on the search term, updating the displayed list dynamically.
- **Task Prioritization Logic**: Tasks are sorted by priority to ensure users can focus on the most important ones first.

### Development Tools

- **Vite**: High-performance build tool and development server for React projects.
- **Axios**: Simplifies HTTP requests for potential API integrations.

## Folder Structure

- **`src/components/TaskInput.jsx`**: Handles task creation and submission.
- **`src/components/TaskList.jsx`**: Displays the list of tasks with controls for deleting and toggling completion.
- **`src/components/SearchBar.jsx`**: Provides a search bar for filtering tasks.
- **`src/scss/style.css`**: Contains the styling for the application.

## Installation and Setup

1. Clone the repository:  
   ```bash
   git clone <repository-url>
