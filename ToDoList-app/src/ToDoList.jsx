import { useState } from "react";

function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: 1, text: "Jogging", completed: false },
    { id: 2, text: "Medidate", completed: false },
    { id: 3, text: "Go to work", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);
  const [listFilter, setListFilter] = useState("all");

  function addTaks() {
    setToDoList((prev) => [
      ...prev,
      { id: Date.now(), text: newTodo, completed: false },
    ]);

    setNewTodo("");
  }

  function removeTask(id) {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function startEdit(task) {
    setEditId(task.id);
    setEditText(task.text);
  }

  function saveChange(id) {
    setToDoList((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: editText } : task))
    );

    setEditId(null);
    setEditText("");
  }

  let filteredList = toDoList.filter((todo) => {
    if (listFilter === "completed") return todo.completed;
    if (listFilter === "active") return !todo.completed;
    return true;
  });

  let taskAmmount = toDoList.filter((task) => task.completed === false).length;

  let taskLabel = taskAmmount === 1 ? "task" : "tasks";

  let verb = taskAmmount === 1 ? "is" : "are";

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
          <p className="task-ammount-label">
            There {verb} {taskAmmount} {taskLabel} remaining
          </p>
        </div>
        <ul className="to-do-list">
          {filteredList.map((task) => (
            <li
              key={task.id}
              className="to-do-list-item"
              style={{
                backgroundColor: !task.completed
                  ? "hsl(0, 0%, 85%)"
                  : "hsl(120, 47%, 54%)",
              }}
            >
              {editId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    className="save-btn"
                    onClick={() => saveChange(task.id)}
                  >
                    Save Change
                  </button>
                </>
              ) : (
                <>
                  <span className="text">{task.text}</span>
                  <button
                    className="edit-task-btn"
                    onClick={() => startEdit(task)}
                  >
                    Edit Task
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeTask(task.id)}
                  >
                    Remove
                  </button>

                  <button
                    className="toggle-complete-btn"
                    onClick={() => toggleComplete(task.id)}
                  >
                    Toggle Complete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="display-buttons">
        <button
          className="btn-display-all btn-display"
          onClick={() => setListFilter("all")}
        >
          Display All
        </button>
        <button
          className="btn-display-completed btn-display"
          onClick={() => setListFilter("completed")}
        >
          Display Completed
        </button>
        <button
          className="btn-display-active btn-display"
          onClick={() => setListFilter("active")}
        >
          Display Active
        </button>
      </div>
    </>
  );
}

export default ToDoList;

/*
   <button className="move-btn" onClick={() => moveUp(task.id)}>
                    ☝️
                  </button>
                  <button
                    className="move-btn"
                    onClick={() => moveDown(task.id)}
                  >
                    👇
                  </button>

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
*/
