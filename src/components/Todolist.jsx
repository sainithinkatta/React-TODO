import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './Todolist.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isEditIndex, setEditIndex] = useState(null);
    const [editInputValue, setEditInputValue] = useState('');

    const handleAddTodo = (todo) => {
        if (isEditIndex === null) {
            setTodos((prevTodos) => [...prevTodos, todo]);
        } else {
            const updatedTodos = todos.map((t, index) => 
                index === isEditIndex ? todo : t
            );
            setTodos(updatedTodos);
            setEditIndex(null);
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
            const updatedTodos = todos.map((todo, index) => 
                index === isEditIndex ? editInputValue : todo
            );
            setTodos(updatedTodos);
            setEditInputValue('');
            setEditIndex(null);
        }
    };

    const handleEditInputChange = (event) => {
        setEditInputValue(event.target.value);
    };

    const isEditing = isEditIndex !== null;

    return (
        <div className="todo-list-container">
            <h1>TODO&rsquo;s</h1>

            <TodoInput addTodo={handleAddTodo} isEditingTodo={isEditing} />

            <div>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        isEditTodo={isEditIndex === index}
                        editInputValue={editInputValue}
                        onEditTodo={() => handleEditTodo(index)}
                        onDeleteTodo={() => handleDeleteTodo(index)}
                        onSaveTodo={handleSaveTodo}
                        onEditTodoInputChange={handleEditInputChange}
                    />
                ))}
            </div>
        </div>
    );
}