import "./App.css";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import ListTask from "./components/tasks/ListTask";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-dark mt-5 p-3 shadow">
          <h1
            className="text-center mb-3"
            style={{ color: "brown", fontWeight: "bold" }}
          >
            TODO LIST
          </h1>
          <AddTask />
          <ListTask />
          <EditTask />
        </div>
      </div>
    </div>
  );
}

export default App;
