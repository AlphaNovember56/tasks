import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "red" }}>This is a header</h1>
            <img
                src="https://media.forgecdn.net/attachments/649/789/minceraft.png"
                alt="really cool image of minecraft"
                width={600}
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p> Anthony Nittoly list of tasty foods</p>
            <ul>
                <li>Pizza</li>
                <li>pasta</li>
                <li>ice cream</li>
                <li>chocolate</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p> Hello World</p>
        </div>
    );
}

export default App;
