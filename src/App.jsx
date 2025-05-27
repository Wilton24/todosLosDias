import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
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
      const id = Math.random();
      const newProject = {
        ...projectData,
        id
      };

      return {
        ...prevState,
        selectedProjectId: id,
        projects: [...prevState.projects, newProject]
        }
    })    
    console.log(projectsState);
    
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

      console.log(`Project id: ${id}`);
      console.log(projectsState);
      
      
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  };

  function handleDeleteProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      }
    })        
  };

  function onAddTask(text, selectedProjectId){
    setProjectsState(prevState =>{
      const taskId = Math.random();
      const newTask = {
        text,
        projectId: [prevState.selectedProjectId],
        id: taskId
      };
      return {
        ...prevState,
        selectedProjectId,
        tasks: [...prevState.tasks, newTask]
        }
    })        
  }

  function handleDeleteTask(id){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  };


  console.log(projectsState.selectedProjectId);
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  let content = <SelectedProject
                  selectedProject={selectedProject} 
                  handleDeleteProject={handleDeleteProject}
                  onAddTask={onAddTask}
                  onDeleteTask={handleDeleteTask} 
                  tasks={projectsState.tasks}/> 

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
        handleSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}/>
      {content}            
    </main>
  );
}

export default App;
