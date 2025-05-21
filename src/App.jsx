import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddStartProject(){
    setProjectsState(prevState =>{
      return {
        selectedProjectId: null,
        ...prevState,        
      }
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddStartProject}/>
      <NoProjectSelected onStartAddProject={handleAddStartProject} />
      
    </main>
  );
}

export default App;
