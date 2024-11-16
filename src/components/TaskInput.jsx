/* eslint-disable react/prop-types */
import { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ id: Date.now(), title, completed: false, priority: 1 });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formInputContainer'>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='btn' type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
