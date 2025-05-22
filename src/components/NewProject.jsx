import { useRef } from "react";
import Input from "./Input";

export default function NewProject({handleAddProject}){

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave(){
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value
    };        
    handleAddProject(newProject);        
  };



  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button 
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-700">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title"/>
        <Input ref={descriptionRef} label="Description" textarea/>
        <Input ref={dueDateRef} label="Due Date" type="date"/>
      </div>
    </div>
  )
}