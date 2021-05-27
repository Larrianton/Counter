import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import style from "./Counter/Counter.module.css"

function App() {
    let [counter, setCounter] = useState<number>(0)
    let maxCount = counter === 5 ? style.counterAlert : style.counter

    function incrCounterCallback() {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    }

    function resetCounter() {
        setCounter(0)
    }




    return (
        <div className="App">
            <Counter counter={counter} incrCounter={incrCounterCallback} resetCounter={resetCounter}
                     maxCount={maxCount}
            />
        </div>
    );
}

export default App;
