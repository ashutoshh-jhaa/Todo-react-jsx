import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null)
  const initialTask = JSON.parse(localStorage.getItem("task")) || [];
  const [tasks, setTasks] = useState(initialTask);
  const [task, setTask] = useState("");

  //function to add new tasks
  function addTask() {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, { text: task, completed: false }];
      setTasks(updatedTasks);
      localStorage.setItem("task", JSON.stringify(updatedTasks));
      setTask("");
      inputRef.current.focus();
    }
  }

  //function to delete tasks
  function deleteTask(idx) {
    const updatedTasks = tasks.filter((_, i) => i !== idx);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  }

  //function to complete tasks
  function completeTask(idx) {
    const updatedTasks = tasks.map((t, i) =>
      i === idx ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">To-do List</h2>
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control bg-dark-subtle"
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((t, idx) => (
          <li
            key={idx}
            className={`list-group-item d-flex justify-content-between align-items-center ${t.completed ? "text-decoration-line-through" : ""
              }`}
          >
            {t.text}
            <div>
              <button className="btn btn-success btn-sm me-2" onClick={() => completeTask(idx)}>
                ✓
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(idx)}>
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;