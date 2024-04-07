import Filter from "../components/Filter";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen px-28 py-28">
      <h1 className="text-white text-2xl font-bold">
        to<span className="text-blue-600">do.</span>
      </h1>

      <div>
        <div className=" py-5 w-2/5 ">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
