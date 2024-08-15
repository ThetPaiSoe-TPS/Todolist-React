import React from 'react'
import { BiXCircle } from 'react-icons/bi'

const Card = ({tasks, deleteTask, updateTask}) => {
  return (
    <div>
      {
        tasks.map((task, index)=> (
            <li onDoubleClick={()=> updateTask(task.id)} key={index} className= {task.complete? 'bg-green-600 text-gray-200 py-4 px-3 rounded-lg transition duration-200 hover:bg-green-700 flex justify-between items-center': 'bg-gray-600 text-gray-200 py-4 px-3 rounded-lg transition duration-200 hover:bg-gray-700 flex justify-between items-center'}>
                <p className={task.complete? 'line-through': ''}>{task.task}</p>
                <BiXCircle onClick={()=> deleteTask(task.id)} className='text-2xl'/>
            </li>
        ))
      }
    </div>
  )
}

export default Card
