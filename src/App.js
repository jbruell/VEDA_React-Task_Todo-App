import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (process.browser) {
      const tasks = localStorage.getItem("tasks") ?? "[]";
      setTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
