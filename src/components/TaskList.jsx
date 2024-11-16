/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete, updatePriority }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updatePriority={updatePriority}
        />
      ))}
    </div>
  );
};

export default TaskList;
