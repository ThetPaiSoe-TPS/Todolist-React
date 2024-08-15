import React from 'react'
import Card from './Card'

const List = ({tasks, deleteTask, updateTask}) => {
  return (
    <div className='list-none w-full md:w-1/3 flex flex-col gap-y-4'>
      <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  )
}

export default List
