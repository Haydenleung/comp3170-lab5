import deleteImg from "../icons/clear.png";
import editImg from "../icons/edit.png";
import { TodoContext } from "../data/TodoContext";
import { useContext } from "react";

export default function Todo(props) {
  const { setEditing } = useContext(TodoContext);
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleEdit() {}

  function handleStatusChange() {
    props.toggleClick(task);
  }

  return (
    <div className="singleTask">
      <div className="todoDetails">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          value={task.clicked}
        />
        {/* <span className="title">{task.title}</span> */}
        <span className="title">
          {task.clicked === true ? <del>{task.title}</del> : task.title}
        </span>
      </div>
      <div className="icon">
        <div onClick={() => setEditing(task.id)} className="editDetails">
          <img className="edit" src={editImg} alt="edit" />
        </div>
        <div onClick={handleDelete} className="deleteDetails">
          <img className="delete" src={deleteImg} alt="delete" />
        </div>
      </div>
    </div>
  );
}
