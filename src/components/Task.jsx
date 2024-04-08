import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";


const Task = () => {
  const [todo,setTodo]=useState("");
  const[todoApp,setTodoApp]=useState([])

   const addTodo=()=>{
    if(todo!==""){
      setTodoApp([...todoApp,todo])
      setTodo("")
    }
    
   }
   const deleteTodo=(text)=>{
    const NewTodo=todoApp.filter((todo)=>{
      return todo !==text;
    })
    setTodoApp(NewTodo);
   }
  return (
        <div className='text-white bg-gray-950 p-11 rounded-lg'>
      <div className='flex gap-6'>
      <input type='text'
      placeholder='Enter your Task'
       className='bg-gray-800 p-3 rounded-lg w-full '
       name='todo'
       value={todo}
       onChange={(e)=>{setTodo(e.target.value)}}

       />
      <button className='text-xs bg-blue-600 p-2 rounded-md whitespace-nowrap ' onClick={addTodo}>Add Task</button>
      </div>

      <p className='py-4 text-blue-500 text-xl font-bold'>2 task <span className='text-white '>to</span>do</p>

        {todoApp?.length>0?(
             <div className='flex justify-between bg-gray-800 p-3 rounded-lg'>
             {todoApp.map((todo, index) => (
               <div key={index} className='flex items-center'>
                 <p className='text-blue-500'>{todo}</p>
                 <div className='text-blue-500 cursor-pointer'>
                   <AiFillDelete color='blue' onClick={()=>{
                     deleteTodo(todo)
                   }} />
                 </div>  
               </div>
             ))}
           </div>
        ):(
          <div>
            <p>No task found</p>
          </div>
        )} 
    </div>
  )
}

export default Task