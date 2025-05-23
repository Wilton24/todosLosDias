import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
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
  }

  function handleSaveTodo(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        projects: [...prevState.projects, ]
      }
    })
  };

  function handleCancel(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });    
  };

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  let content = <SelectedProject selectedProject={selectedProject} /> 

  if(projectsState.selectedProjectId === null){
    content = <NewProject handleAddProject={handleAddProject} handleCancel={handleCancel}/>;
  } else if(projectsState.selectedProjectId == undefined){
    content = <NoProjectSelected onStartAddProject={handleAddStartProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleAddStartProject}
        projects={projectsState.projects}
        handleSelectProject={handleSelectProject}/>
      {content}            
    </main>
  );
}

export default App;
