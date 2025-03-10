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
            <TodoForm onAddItem={handleAddItem} items={items} />
            <TodoList items={items} onDeletItem={handleDeleteItem} />
        </div>
    );
}

function TodoForm({ onAddItem, items }) {
    const [description, setDescription] = useState("");
    const [searching, setSearching] = useState("");

    const filterItems = items.filter((item) =>
        item.description.toLowerCase().includes(searching.toLowerCase())
    );

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            description,
            id: Date.now()
        };

        onAddItem(newItem);
        setDescription("");
    }

    function handleSearching(e) {
        setSearching(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={description}
                    placeholder="What is in your mind"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button>Add Todo</button>
            </form>

            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={searching}
                    onChange={handleSearching}
                />
            </div>
            <ul>
                {filterItems.map((item) => (
                    <li>{item.description}</li>
                ))}
            </ul>
        </>
    );
}

function TodoList({ items, onDeletItem }) {
    return (
        <ul>
            {items.map((item) => (
                <Item onDeletItem={onDeletItem} item={item} key={item.id} />
            ))}
        </ul>
    );
}

function Item({ onDeletItem, item }) {
    return (
        <li>
            <span> {item.description}</span>
            <input type="checkbox" />
            <button onClick={() => onDeletItem(item.id)}>&times;</button>
        </li>
    );
}

export default App;
