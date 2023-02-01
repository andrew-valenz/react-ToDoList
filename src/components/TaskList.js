import React, { useContext } from 'react';
import { TasksContext } from './context/TaskContext.js';

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>
      <h2>Tasks List</h2>
      <>
        {tasks.map((task) => (
          <ul key={task.id}>
            <li>{task.description}</li>
          </ul>
        ))}
      </>
    </div>
  );
}
