import React, {useState} from 'react';
import './App.css';
import {Table} from "./components/Table";
import {Button} from "./components/Button";

function App() {
    const maxValue = 5
    const minValue = 0
    const counterStep = 1

    let [value, setValue] = useState(minValue)

    const incrementValue = () => {

        if (value < maxValue) {
            setValue(value + counterStep)
        }

    }
    const resetValue = () => {
        value = minValue
        setValue(value)
    }

    return (
        <div className="App">
            <div className="wrapper">
                <Table value={value} maxValue={maxValue}/>
                <div className="flex">
                    <Button title="Increment" changeValue={incrementValue} isDisabled={value === maxValue}/>
                    <Button title="Reset" changeValue={resetValue} isDisabled={value === minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
