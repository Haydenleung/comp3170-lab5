import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/TodoContext";

export default function TodoForm() {
  const {
    tasks,
    addTask,
    removeTask,
    updateTask,
    setEditing,
    editing
  } = useContext(TodoContext);

  let initialData = {
    title: ""
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    //add somg to playlist
    e.preventDefault();
    // const newTask = {
    //   title: title,
    //   clicked: false,
    //   id: nanoid()
    // };
    // addTask(newTask);
    // setTitle("");

    if (editing === "new") {
      addTask({ ...task, id: nanoid() });
    } else {
      updateTask(task);
    }
  }

  // function handleTitleChange(e) {
  //   setTitle(e.target.value);
  //   console.log(title);
  // }
  function handleTitleChange(e, field) {
    setTask({ ...task, [field]: e.target.value });
    console.log(task);
  }

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={(e) => handleTitleChange(e, "title")}
            value={task.title}
            placeholder="New Task Title"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
