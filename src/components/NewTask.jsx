import { useRef, useState } from "react"

export default function NewTask({onAddTask}){
  const [enteredTask, setEnteredTask] = useState('');

  function handleTask(){
    onAddTask(enteredTask);    
    // setEnteredTask('');
  };

  function onInputTask(e){
    setEnteredTask(e.target.value);    
  };

  return (
    <div className="flex items-center gap-4">
      <input 
        onChange={(e)=> onInputTask(e)}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask} />
      <button 
        onClick={()=> handleTask()}
        className="text-stone-700 px-2 py-1 rounded-md hover:bg-stone-400 hover:text-stone-950">Add Task</button>
    </div>
  )
}