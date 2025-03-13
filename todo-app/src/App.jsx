import { useState } from "react";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [description, setDescription] = useState("");
    const [searching, setSearching] = useState("");

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    const filterItems = items.filter((item) =>
        item.description.toLowerCase().includes(searching.toLowerCase())
    );

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            description,
            id: Date.now()
        };

        handleAddItem(newItem);
        setDescription("");
    }

    function handleSearching(e) {
        setSearching(e.target.value);
    }

    return (
        <div>
            <h1>Todo App</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={description}
                    placeholder="What is in your mind"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button>Add Todo</button>
                <hr></hr>
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
                    <li>
                        <span> {item.description}</span>
                        <input type="checkbox" />
                        <button onClick={() => handleDeleteItem(item.id)}>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
