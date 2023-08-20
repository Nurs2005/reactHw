import '../App.css'
import Input from './Input';
import { useState } from 'react';
export default function Form({ setTasks, tasks }) {
  const [inputValue, setInputValue] = useState('')
  const addNewTask = () => {
    const insertAt = 1
    setTasks([
      ...tasks.slice(0, insertAt),
      { id: new Date().getTime(), value: inputValue },
      ...tasks.slice(insertAt)
    ])
  }
  return (
    <div>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <button className="btn" onClick={addNewTask}>Add Task</button>
    </div>
  )
}