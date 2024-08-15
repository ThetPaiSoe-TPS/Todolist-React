import './App.css';
import Form from './component/Form';
import List from './component/List';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { api } from './api/api';

function App() {
  const [tasks, setTasks]= useState([]);
  const [loading, setLoading]= useState(false);

  const fetchapi= async ()=> {
    setLoading(true);
    const res= await api.get("http://localhost:3500/todolist");
    setTasks(res.data);    
    setLoading(false);
  }
  useEffect(()=>{
    fetchapi();
  }, []);
  const addNewTask= async (task)=>{
    const newTask={
      id: uuid(),
      task: task,
      complete: false
    }
    const res= await api.post("http://localhost:3500/todolist", newTask);    
    setTasks([...tasks, res.data]);
  }
  //delete form api
  const deleteTask= async (Taskid)=>{
    await api.delete(`http://localhost:3500/todolist/${Taskid}`);
    setTasks(tasks.filter((task)=> task.id !== Taskid));
  }
  //update ui
  const updateTask= async (cardId)=> {
    const res= await api.patch(`http://localhost:3500/todolist/${cardId}`)
    console.log(res.data);
    setTasks(tasks.map(task=> {
      if(task.id=== cardId){
        return{
          id: task.id,
          task: task.task,
          complete: !task.complete
        }
      }
      return task;
    }))
  }
  return (
    <div className='w-full h-screen bg-zinc-800 flex flex-col gap-y-12 justify-center items-center'>
      <h1 className='text-4xl text-center text-gray-300'>To Do List</h1>
      <Form addNewTask={addNewTask} />
     {
      loading? <h1 className='text-2xl text-center my-4 text-gray-300'>is Loading...</h1>:<List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
     }
    </div> 
  );
}

export default App;
