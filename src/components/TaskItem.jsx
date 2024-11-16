/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { FiTrash2, FiCheck } from 'react-icons/fi';

const TaskItem = ({ task, deleteTask, toggleComplete, updatePriority }) => {
  return (
    <motion.div
      onClick={() => toggleComplete(task.id)}
      className={`task-item ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='allTasksNames btn'>
        <FiCheck className={task.completed ? 'completed-icon' : ''} />
        <span>{task.title}</span>
      </div>
      <div className='updatingContainer'>
        <select
          value={task.priority}
          onChange={(e) => updatePriority(task.id, Number(e.target.value))}
        >
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <FiTrash2 className='btn deleteBtn' onClick={() => deleteTask(task.id)} />
      </div>
    </motion.div>
  );
};

export default TaskItem;
