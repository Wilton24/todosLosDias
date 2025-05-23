import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../components/Button";

// let modalClass = "w-fit mx-auto border text-white cursor-pointer bg-stone-600 border-black px-4 py-2 rounded-md hover:bg-stone-400";

function Modal({children}, ref){
  const dialogRef = useRef();

  useImperativeHandle(ref, ()=>({
  openModal(){
    dialogRef.current.showModal();
  }
}));


  return createPortal(
      <dialog 
        ref={dialogRef}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="text-center">
          <Button>Close</Button>
        </form>
      </dialog>, document.getElementById('modal-root')
  )
}


export default forwardRef(Modal);