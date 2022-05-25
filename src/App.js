import React, { useState } from "react";
import ReactSlider from 'react-slider'
require("react/package.json");





export default function App() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [okeisus, setOkeisus] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);

        if (bmi<18.5) {
            setOkeisus("Ära häbene, söö sõõrik.")
        } else if (bmi<25) {
            setOkeisus("Normaalne")
        } else if (bmi<30) {
            setOkeisus("Ehk teed natsa trenni?")
        } else {
            setOkeisus("SA OLED PAKS")
        }

    }
    const testfunction = (value) => {

        setHeight(value);
        //setBmi(event.target.value)
    };

    const testfunction2 = (value) => {

        setMass(value);
        //setBmi(event.target.value)
    };

        return (
            <div className="App">
                <form onSubmit={calculate}>
                    <div>
                        <label>height in meters</label>
                        <input value={height} onChange={(e) => setHeight(e.target.value)} />
                        <div>
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                value={height}
                                min={95}
                                max={220}
                                onChange={testfunction}
                            />
                        </div>
                    </div>
                    <h1></h1>
                    <div>
                        <label>mass in kg</label>
                        <input value={mass} onChange={(e) => setMass(e.target.value)} />
                    </div>
                    <div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            value={mass}
                            min={10}
                            max={300}
                            onChange={testfunction2}
                        />
                    </div>
                    <h1></h1>
                    <button type="submit">calculate</button>
                </form>
                <p>bmi: {bmi}</p>
                <p>Soovitus: {okeisus}</p>

                <h1></h1>
            </div>
        );

};