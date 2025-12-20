import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Take shower", "Read book", "Excercise"]);
  const [newTask, setNewTask] = useState("");

  function addTaks(e) {
    let newTask = e.target.value;

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function moveUp(index) {}

  function moveDown(index) {}

  return (
    <>
      <div className="todolist-container">
        <h1>ToDoList app</h1>

        <input type="text" className="taskInput" value={newTask} />
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
