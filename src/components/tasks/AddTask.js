import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTasks } from "../../actions/taskActions";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      description: text,
      isDone: false,
    };
    dispatch(addTask(newTask));
    setText("");
  };

  const handleFilter = (e) => {
    dispatch(filterTasks(e.target.id));
  };

  return (
    <div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <input
            type="radio"
            name="task"
            value="all"
            id="all"
            onClick={handleFilter}
          />
          <label
            className="form-label"
            htmlFor="all"
            style={{ color: "brown", fontWeight: "bold" }}
          >
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="completed"
            id="completed"
            onClick={handleFilter}
          />
          <label
            className="form-label"
            htmlFor="completed"
            style={{ color: "brown", fontWeight: "bold" }}
          >
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
            onClick={handleFilter}
          />
          <label
            className="form-label"
            htmlFor="uncompleted"
            style={{ color: "brown", fontWeight: "bold" }}
          >
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
