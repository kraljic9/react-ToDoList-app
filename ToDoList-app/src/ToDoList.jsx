/* 
Add todos 
Toggle complete 
Delete todo 
Edit todo Filter: All / Completed / Active 
Show count of remaining todos 
*/

import { useState } from "react";

function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: 1, text: "Jogging", completed: false },
    { id: 2, text: "Medidate", completed: false },
    { id: 3, text: "Go to work", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function addTaks() {
    if (newTask.trim().length !== 0) {
      setToDoList((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    setToDoList(toDoList.filter((task, i) => i !== index));
  }

  function moveUp(index) {
    const updatedTask = [...toDoList];

    if (index > 0) {
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setToDoList(updatedTask);
    }
  }

  function moveDown(index) {
    const updatedTask = [...toDoList];

    if (index < toDoList.length - 1) {
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setToDoList(updatedTask);
    }
  }

  return (
    <>
      <div className="todolist-container">
        <h1>ToDoList app</h1>

        <div className="add-task-container">
          <input
            type="text"
            className="taskInput"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTaks}>
            Add task
          </button>
        </div>
        <ul className="to-do-list">
          {toDoList.map((task, index) => (
            <li key={index} className="to-do-list-item">
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
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
