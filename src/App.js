import { useState } from "react";
import Header from './Components/Header';
import Tasks from './Components/Tasks';



function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Vet appointment",
        day: "Feb 7th at 12pm",
        reminder: true,
    }, 
    {
        id: 2,
        text: "Hair appointment",
        day: "Feb 5th at 5pm",
        reminder: false,
    }, 
    {
        id: 3,
        text: "Drug appointment",
        day: "Feb 6th at 10am",
        reminder: true,
    }, 
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    
    <div className="container">
      <Header  />
      
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />) : (
        'No Tasks To Show'
      )}
      
    </div>
    
  );
}


export default App;
