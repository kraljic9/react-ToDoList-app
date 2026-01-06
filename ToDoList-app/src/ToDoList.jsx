/* 
Add todos OK!
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

  const [newTodo, setNewTodo] = useState("");

  function addTaks() {
    setToDoList((prev) => [
      ...prev,
      { id: Date.now(), text: newTodo, completed: false },
    ]);

    setNewTodo("");
  }

  function removeTask(index) {
    setToDoList(toDoList.filter((_, i) => i !== index));
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

  function toggleComplete(id) {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  console.log(toDoList);

  return (
    <>
      <div className="todolist-container">
        <h1>ToDoList app</h1>

        <div className="add-task-container">
          <input
            type="text"
            className="taskInput"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="add-btn" onClick={addTaks}>
            Add task
          </button>
        </div>
        <ul className="to-do-list">
          {toDoList.map((task) => (
            <li
              key={task.id}
              className="to-do-list-item"
              style={{
                backgroundColor: !task.completed
                  ? "hsl(0, 0%, 85%)"
                  : "hsl(120, 47%, 54%)",
              }}
            >
              <span className="text">{task.text}</span>
              <button
                className="remove-btn"
                onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
              <button className="move-btn" onClick={() => moveUp(task.id)}>
                ☝️
              </button>
              <button className="move-btn" onClick={() => moveDown(task.id)}>
                👇
              </button>

              <button
                className="toggle-complete-btn"
                onClick={() => toggleComplete(task.id)}
              >
                Toggle Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
