import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "../modals/Modal";

export default function NewProject({handleAddProject, handleCancel}){
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  function handleSave(){   // Adding new todo Object in the array
// validation
  if(titleRef.current.value.trim() === "" || 
    descriptionRef.current.value.trim() === "" || 
    dueDateRef.current.value.trim() === "") { 
      console.log('Error Spack');      
      modalRef.current.openModal();
      return;
    } else{
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value
    };        
    handleAddProject(newProject);    
    }
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-600 mb-4">Modalnes okayhens in the haus</p>
        <p className="text-stone-600 mb-4">Loremus ipsumies</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button 
              onClick={handleCancel}
              className="text-stone-800 hover:text-stone-950">
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
    </>
  )
}