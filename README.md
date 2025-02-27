# Todo App

A simple Todo App built with React that allows users to add, mark as complete, and delete tasks. The tasks persist in `localStorage`.

## Features
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Tasks persist even after page refresh
- Input field auto-focuses after adding a task

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/task-manager.git
   ```
2. Navigate to the project folder:
   ```sh
   cd task-manager
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```
3. Add tasks using the input field and manage them using the provided buttons.

## Screenshots
Add screenshots of the app below:

![image](https://github.com/user-attachments/assets/a2f86c77-374b-4100-a609-9f735b95d21d)

## Code Overview
### State Management
- `useState` is used to manage `tasks` and `task` states.
- `useRef` is used to auto-focus the input field after adding a task.

### Functions
- `addTask()`: Adds a new task to the list and updates `localStorage`.
- `deleteTask(idx)`: Removes a task from the list.
- `completeTask(idx)`: Toggles the completion status of a task.

### Local Storage
- Tasks are stored and retrieved from `localStorage` to persist data between sessions.

## Technologies Used
- React
- Bootstrap (for styling)

## License
This project is licensed under the MIT License.

## Author
Ashutosh Jha - [GitHub Profile](https://github.com/ashutoshh-jhaa)

