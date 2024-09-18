import { useState } from 'react';
import './Todolist.css';

export default function TodoList() {
    const [inputValue, setInputValue] = useState(''); // For adding new todos.
    const [editInputValue, setEditInputValue] = useState(''); // For editing todos.
    const [todos, setTodos] = useState([]);
    const [isEditIndex, setEditIndex] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() && isEditIndex === null) {
            setTodos((prevTodos) => [...prevTodos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditInputValue(todos[index]);
    };

    const handleSaveTodo = () => {
        if (editInputValue.trim()) {
            setTodos((prevTodos) =>
                prevTodos.map((todo, index) => (index === isEditIndex ? editInputValue : todo))
            );
            setEditInputValue('');
            setEditIndex(null); // Reset editing state.
        }
    };

    const handleEditInputChange = (event) => {
        setEditInputValue(event.target.value); // Update editInputValue based on user input.
    };

    const isEditing = isEditIndex !== null;

    return (
        <div className="todo-list-container">
            <h1>TODO&rsquo;s</h1>

            <div className="input-todo-list-container">
                <input
                    type="text"
                    placeholder="Enter your todo here..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    type="button"
                    onClick={handleAddTodo}
                    disabled={isEditing} // Disable when editing.
                >
                    Add
                </button>
            </div>

            <div>
                {
                    todos.map((todo, index) => (
                        <div key={index} className="todo-item">
                            <div className="input-todo-list-container">
                                {
                                    isEditIndex === index ? (
                                        <input
                                            type="text"
                                            value={editInputValue} // Use editInputValue for editing.
                                            onChange={handleEditInputChange} // Update edit input value on change.
                                        />
                                    ) : (
                                        <span>{todo}</span>
                                    )
                                }

                                {isEditIndex === index ? (
                                    <button
                                        className="save-todo"
                                        type="button"
                                        onClick={handleSaveTodo}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className="edit"
                                        type="button"
                                        onClick={() => handleEditTodo(index)}
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    className="delete"
                                    type="button"
                                    onClick={() => handleDeleteTodo(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}