import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter/Counter";
import style from "./App.module.css" ;
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";


function App() {
    let [counter, setCounter] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    function changeMinValue(minValue: number) {
        setMinValue(minValue);
    }

    function changeMaxValue(maxValue: number) {
        setMaxValue(maxValue);
    }

    const setSettingsCounter = ()  => {
        setCounter(minValue);
        console.log("set counter")
    }
    const resetSettingsCounter = () => {
        console.log("reset counter")
        setMaxValue(5)
        setMinValue(0)
    }


    let maxCount = counter === maxValue ? style.counterAlert : style.counter


    function incrCounterCallback() {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    function resetCounter() {
        setCounter(0)
    }


    return (
        <div className={style.App}>
            <Counter counter={counter}
                     incrCounter={incrCounterCallback}
                     resetCounter={resetCounter}
                     maxCount={maxCount}
            />
            <SettingsCounter changeMaxValue={changeMaxValue}
                             changeMinValue={changeMinValue}
                             minValue={minValue} maxValue={maxValue}
                             setSettingsCounter={setSettingsCounter}
                             resetSettingsCounter={resetSettingsCounter}
            />
        </div>
    );
}

export default App;
