import Filter from "./components/Filter";
import Task from "./components/Task";
import "./App.css";
import { useEffect, useState } from "react";


const API_BASE = "http://https://todo-backend-n34f.onrender.com/todo";

function App() {
  // Add useState,we ll store items in the array
  const [items, setItems] = useState([]);

  // Add useEffect,GetTodos() will run every time the component renders
  useEffect(() => {
    GetTodos();
  }, []);

  // Add GetTodos() function, fetches data from our API, converts to JSON
  // and then saves the data in the "items" state
  // if there's an error, it will be logged to the console

  const GetTodos = () => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  };

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
          <Task items={items} GetTodos={GetTodos} setItems={setItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
