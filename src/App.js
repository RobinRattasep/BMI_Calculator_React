import React, { useState } from "react";
require("react/package.json"); // react is a peer dependency.
var ReactSlider = require("react-slider")


export default function App() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);
    };



    return (
        <div className="App">
            <form onSubmit={calculate}>
                <div>
                    <label>height in meters</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div>
                    <label>mass in kg</label>
                    <input value={mass} onChange={(e) => setMass(e.target.value)} />
                </div>

                <button type="submit">calculate</button>
            </form>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
            <p>bmi: {bmi}</p>
        </div>
    );
}