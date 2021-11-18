import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const [taskList, setTaskList] = useState([]);
  const todos = useSelector((state) => state.todos);
  const filteredTodos = useSelector((state) => state.filteredTodos);

  useEffect(() => {
    setTaskList(todos);
  }, [todos]);

  useEffect(() => {
    setTaskList(filteredTodos);
  }, [filteredTodos]);

  //console.log(todos);
  return (
    <ul className="list-group mt-3">
      {taskList.length > 0 &&
        taskList.map((todo, i) => <Task todo={todo} key={i} />)}
    </ul>
  );
};

export default ListTask;
