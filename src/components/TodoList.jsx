import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>Add your task </p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
