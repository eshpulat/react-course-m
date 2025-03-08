import { useState } from "react";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onAddItem={handleAddItem} />
            <TodoList items={items} onDeletItem={handleDeleteItem} />
        </div>
    );
}

function TodoForm({ onAddItem }) {
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            description,
            id: Date.now()
        };

        onAddItem(newItem);
        setDescription("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                placeholder="What is in your mind"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    );
}

function TodoList({ items, onDeletItem }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <span> {item.description}</span>
                    <input type="checkbox" />
                    <button onClick={() => onDeletItem(item.id)}>
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default App;
