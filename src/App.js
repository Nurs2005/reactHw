import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <div className="inner">
        <h1 className="h1">Get Things Done!</h1>
        <div className="btnval">
          <Form tasks={tasks} setTasks={setTasks} />
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

