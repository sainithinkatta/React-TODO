import { useState } from 'react';
import './TodoList.css';

export default function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) { // Avoid adding empty todos.
            setTodos((prevTodos) => [...prevTodos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((item, i) => i !== index));
    };

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
                <button type="button" onClick={handleAddTodo}>Add</button>
            </div>

            <div>
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <span>{todo}</span>
                        <button className="delete" type="button" onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
