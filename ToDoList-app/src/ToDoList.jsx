import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Take shower", "Read book", "Excercise"]);
  const [newTask, setNewTask] = useState("");

  function addTaks() {
    if (newTask.trim().length !== 0) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function moveUp(index) {
    const updatedTask = [...tasks];

    if (index > 0) {
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveDown(index) {
    const updatedTask = [...tasks];

    if (index < tasks.length - 1) {
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <>
      <div className="todolist-container">
        <h1>ToDoList app</h1>

        <input
          type="text"
          className="taskInput"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTaks}>Add task</button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="remove-btn" onClick={() => removeTask(index)}>
                Remove
              </button>
              <button className="move-btn" onClick={() => moveUp(index)}>
                ☝️
              </button>
              <button className="move-btn" onClick={() => moveDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
