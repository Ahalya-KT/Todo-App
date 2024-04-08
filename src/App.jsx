import Filter from "./components/Filter";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-800 h-screen px-28 py-28">
      <h1 className="text-white text-2xl font-bold">
        to<span className="text-blue-600">do.</span>
      </h1>

      <div className="flex gap-7">
        <div className=" py-5 w-1/4 ">
          <Filter />
        </div>
        <div className="w-3/4 py-5">
          <Task/>
        </div>
      </div>
    </div>
  );
}

export default App;
