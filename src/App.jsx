import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // handleAddStartProject: sets the selectedProjectId to null
  function handleAddStartProject(){
    setProjectsState(prevState =>{
      return {
        ...prevState,        
        selectedProjectId: null
      }
    })    
  };

  // Adding Todo object in an array
  function handleAddProject(projectData){
    setProjectsState(prevState =>{
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
        }
    })

    console.log(projectsState.projects);
    
  }

  function handleSaveTodo(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        projects: [...prevState.projects, ]
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject handleAddProject={handleAddProject} setProjectsState={setProjectsState} />;
  } else if(projectsState.selectedProjectId == undefined){
    content = <NoProjectSelected onStartAddProject={handleAddStartProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleAddStartProject}
        projects={projectsState.projects}/>
      {content}            
    </main>
  );
}

export default App;
