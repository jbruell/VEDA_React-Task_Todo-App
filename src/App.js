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
    const newTasks = [...tasks];
    newTasks.filter(t => t.id === task.id).map(item => {
      item.checked = !item.checked;
      return item;
    });
    setTasks(newTasks);
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
