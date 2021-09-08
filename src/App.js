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

  // utility methods START
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

  const updateTask = task => {
    const newTasks = [...tasks].map(t => t.id === task.id ? task : t);
    setTasks(newTasks);
  }

  const deleteTask = task => {
    const newTasks = [...tasks].filter(t => t.id !== task.id);
    setTasks(newTasks);
  }
  // utility methods END

  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} 
        toggleCheckedCallback={toggleCheckedCallback}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <Footer addTask={addTask} />
    </div>
  );
}

export default App;
