import { useState } from "react";
import "./App.css";

function Counter2() {
    const [count, setCount] = useState(1000)
    const [str, setStr] = useState("Нажимайте минус или плюс, чтобы уменишить или увеличить счётчик соответственно.")
    
    if (count <= 0) {
        setStr("Я просто гуль, прости")
        setCount(1000)
    }
    return (
        <div className="App">
        <header className="App-header">
            <div className="round no-select">
                <h1>{count}</h1>
            </div>
            <div className="button-wrapper no-select">
                <button className="btn1" onClick={() => setCount(count - 7)}>-</button>
                <button className="btn2">X</button>
            </div>
            
            <p>{str}</p>
        </header>
        </div>
    );
}

export default Counter2;
