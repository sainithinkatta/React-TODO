export default function TodoItem({ 
    todo,
    index,
    isEditTodo,
    editInputValue,
    onEditTodo,
    onDeleteTodo,
    onSaveTodo,
    onEditTodoInputChange
}) {
    return (
        <div className="todo-item">
            <div className="input-todo-list-container">
                {
                    isEditTodo ? (
                        <input
                            type="text"
                            value={editInputValue}
                            onChange={onEditTodoInputChange}
                        />
                    ) : (
                        <span>{todo}</span>
                    )
                }

                {
                    isEditTodo ? (
                        <button
                            className="save-todo"
                            type="button"
                            onClick={onSaveTodo}
                        >
                            Save
                        </button>
                    ) : (
                        <button 
                            className="edit"
                            type="button"
                            onClick={onEditTodo}
                        >
                            Edit
                        </button>
                    )
                }

                <button 
                    className="delete" 
                    type="button" 
                    onClick={onDeleteTodo}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}