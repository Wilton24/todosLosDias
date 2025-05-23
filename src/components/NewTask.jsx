export default function NewTask(){
  return (
    <div className="flex items-center gap-4">
      <input 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text" />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  )
}