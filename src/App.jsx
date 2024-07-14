import React, { useState } from "react";
import "./index.css"; // Import your CSS here

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter Your task"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>
      <ul id="lists">
        {tasks.map((task, index) => (
          <li key={index} className="tasks">
            <span className="task-text">{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
