import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    return (
        <div>
            <h1>To Do List</h1>
            <TodoForm onAddItams={handleAddItems} />
            <PackingList items={items} />
        </div>
    );
}

function TodoForm({ onAddItams }) {
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = { description };
        console.log(newItem);
        onAddItams(newItem);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="add-to-do-list"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // key={description}
            />
            <button>Add</button>
        </form>
    );
}

// function PackingList({ items }) {
//     return <li>{items}</li>;
// }

function PackingList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.description}</li>
            ))}
        </ul>
    );
}
