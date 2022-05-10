import React from "react";

export default function ToDoItem({ task, index, checkBox, deleteTask }) {
  const classes = [];
  if (task.completed) {
    classes.push("completed");
  }
  return (
    <li>
      <div className={classes.join(" ")}>
        <input
          type="checkbox"
          class="check-box"
          checked={task.completed}
          onChange={() => checkBox(task.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {task.text}
      </div>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        &times;
      </button>
    </li>
  );
}
