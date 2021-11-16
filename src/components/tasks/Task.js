import { useDispatch } from "react-redux";
import {
  toggleCompleteTask,
  deleteTask,
  setCurrentTask,
} from "../../actions/taskActions";

const Task = ({ todo: { id, description, isDone } }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.id === "completed") {
      //console.log(e.target.id);
      dispatch(toggleCompleteTask(id));
    }

    if (e.target.id === "edit") {
      //console.log(e.target.id);
      dispatch(setCurrentTask({ id, description }));
    }

    if (e.target.id === "delete") {
      //console.log(e.target.id);
      dispatch(deleteTask(id));
    }
  };
  return (
    <li
      className={`list-group-item ${
        isDone && "list-group-item-success"
      } d-flex align-items-center justify-content-between`}
    >
      <div className={`${isDone && "completed"}`}>{description}</div>
      <div className="btn-group" role="group">
        <i className="fa fa-check" id="completed" onClick={handleClick}></i>
        <i
          id="edit"
          className="fas fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={handleClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={handleClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;
