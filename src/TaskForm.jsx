import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  // Store in localstorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { id: uuidv4(), title: task, completed: false }]);
      setTask('');
      setError('');
    } else {
      setError('Task cannot be empty!');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'pending':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };
  console.log(tasks)
  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      {/* Diff Compn. */}
      <TaskList
        tasks={filteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskForm;