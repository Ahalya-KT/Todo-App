import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const API_BASE = "http://https://todo-backend-n34f.onrender.com/todo";

// to post an  task
const Task = ({ items, GetTodos,setItems }) => {
  const addItem = async () => {
    const data = await fetch(API_BASE + "/new", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: input,
      }),
    }).then((res) => res.json());
    await GetTodos();
    setInput("");
  };
  
  // to delete a task
  const deleteTodo = async(id) => {
    try{
        const response = await fetch(API_BASE + "/delete/" + id, {
            method: "DELETE",
          });
        if(!response.ok){
            throw new Error("Failed to delete a task")
        } 
        const data = await response.json()
        setItems(items=> items.filter(item=> item._id !== data._id))
    }catch (error) {
        console.error("Error updating task status:", error);
      }
  }


  // Add input state,we will store the users input in this state
  const [input, setInput] = useState("");
  // store the targets value into the input state
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input, "input");
  console.log(items, "error");

  return (
    <div className="text-white bg-gray-950 p-11 rounded-lg">
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="Enter your Task"
          className="bg-gray-800 p-3 rounded-lg w-full"
          name="todo"
          value={input}
          // onChange={(e) => {
          //   setTodo(e.target.value);
          // }}
          onChange={handleChange}
        />
        <button
          className="text-xs bg-blue-600 p-2 rounded-md whitespace-nowrap"
          // onClick={addTodo}
          onClick={() => addItem()}
        >
          Add Task
        </button>
      </div>

      <p className="py-4 text-blue-500 text-xl font-bold">
        2 task <span className="text-white ">to</span>do
      </p>
      {items?.length > 0 ? (
        <div className="">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex mb-3 justify-between p-3 items-center bg-gray-800 rounded-md"
            >
              <p className="text-blue-500">{item.name}</p>
              <div className="text-blue-500 cursor-pointer">
                <AiFillDelete
                  color="blue"
                  onClick={() => {
                    deleteTodo(item._id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}
    </div>
  );
};

export default Task;
