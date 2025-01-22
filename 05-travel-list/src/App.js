import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packeg";
import Stats from "./Stats";

export default function App() {
    const [items, setItems] = useState([]);

    function handledAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handledDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handledAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handledDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}
