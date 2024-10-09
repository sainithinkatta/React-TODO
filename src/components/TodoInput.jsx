import { useState } from 'react';

export default function TodoInput({
    addTodo,
    isEditingTodo 
}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="input-todo-list-container">
            <input
                type="text"
                placeholder="Enter your todo here..."
                value={inputValue}
                onChange={handleInputChange}
            />

            <button
                type="button"
                disabled={isEditingTodo} // Disable when editing.
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
    );
}
