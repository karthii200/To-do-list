function TodoItem({ task, toggleComplete, deleteTask, editTask }) {
    return (
      <div className="todo-item">
        <span
          className={`task-text ${task.completed ? 'completed' : ''}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.text}
        </span>
        <button onClick={() => editTask(task.id)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;
  