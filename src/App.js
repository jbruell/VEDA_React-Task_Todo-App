import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasks = localStorage.getItem("tasks") ?? "[]";
    return JSON.parse(tasks);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const addTask = input => {
    setTasks([...tasks, {
      id: new Date().getTime(),
      text: input,
      checked: false,
      marked: false
    }]);
  }

  const toggleCheckedCallback = task => {
    const persistedTask = tasks.filter(t => t.id === task.id);

  }

  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} toggleCheckedCallback={toggleCheckedCallback} />
      <Footer addTask={addTask} />
    </div>
  );
}

export default App;
