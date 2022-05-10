import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <ul>
      {props.tasks.map((task, index) => {
        return (
          <ToDoItem
            key={task.id}
            index={index}
            task={task}
            checkBox={props.toggle}
            deleteTask={props.delete}
          />
        );
      })}
    </ul>
  );
}
