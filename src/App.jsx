import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import "./scss/style.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log("Saved tasks to localStorage:", tasks);
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() }; // Ensure each task has a unique ID
    setTasks([...tasks, newTask]);
    console.log("Added new task:", newTask);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log("Deleted task:", taskId);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    console.log("Toggled completion for task:", taskId);
  };

  const updatePriority = (taskId, priority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
    console.log("Updated priority for task:", taskId, "New priority:", priority);
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.priority - a.priority); // Sort by priority as an example

    console.log(tasks);

  return (
    <div className="container">
      <h1 className="heading">Task Manager</h1>
      <div className="contents">
      <div className="input-search-contain-container">
        <TaskInput addTask={addTask} />
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        updatePriority={updatePriority}
      />
      </div>
    </div>
  );
};

export default App;
