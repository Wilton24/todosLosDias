import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


function Modal({children}, ref){
  const dialogRef = useRef();

  useImperativeHandle(ref, ()=>({
  openModal(){
    dialogRef.current.showModal();
  }
}))

  return (
    createPortal(
      <dialog ref={dialogRef}>
        {children}
        <form method="dialog">
          X
        </form>
      </dialog>
    ),
    document.getElementById('modal-root')
  )
}


export default forwardRef(Modal);