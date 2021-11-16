import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, i) => (
        <Task todo={todo} key={i} />
      ))}
    </ul>
  );
};

export default ListTask;
