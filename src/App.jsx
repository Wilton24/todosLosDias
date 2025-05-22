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
        ...prevState,        
        selectedProjectId: null
      }
    })    
  };

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject />;
  } else if(projectsState.selectedProjectId == undefined){
    content = <NoProjectSelected onStartAddProject={handleAddStartProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddStartProject}/>
      {content}            
    </main>
  );
}

export default App;
