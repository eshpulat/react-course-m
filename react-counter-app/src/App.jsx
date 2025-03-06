import { useState } from "react";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Counter</h1>
            <Counter />
        </div>
    );
}

export default App;

function Counter() {
    const [num, setNum] = useState(0);

    const handleOnInc = () => {
        setNum((prevState) => prevState + 1);
    };

    const handleOnDec = () => {
        setNum((prevState) => prevState - 1);
    };
    return (
        <div>
            <h2>{num}</h2>

            <button onClick={handleOnInc}>+</button>
            <button onClick={handleOnDec}>-</button>
        </div>
    );
}
