import NewTask from "./NewTask"

export default function Tasks(){
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Title</h2>
    <NewTask />
    <p className="text-stone-800 my-4">Add task here...</p>
    <ul>

    </ul>
    </section>
  )
}