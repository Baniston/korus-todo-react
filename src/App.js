import React from "react";
import ToDoList from "./Components/ToDoList";
import AddItem from "./Components/AddItem";

function App() {
  const [tasks, setTasks] = React.useState([]);

  function toggleToDo(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addItem(text) {
    setTasks(
      tasks.concat([
        {
          id: Date.now(),
          completed: false,
          text,
        },
      ])
    );
  }

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <AddItem create={addItem} />
      {tasks.length ? (
        <ToDoList tasks={tasks} toggle={toggleToDo} delete={deleteTask} />
      ) : (
        <p>List is empty</p>
      )}
    </div>
  );
}

export default App;
