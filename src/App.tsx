import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter/Counter";
import style from "./App.module.css" ;
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {Grid, Paper} from "@material-ui/core";


function App() {
    let [counter, setCounter] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    useEffect(() => getLocalStorage(), [])
    useEffect(() => setLocalStorage(), [minValue, maxValue])
    const getLocalStorage = () => {

        setMaxValue(Number(localStorage.getItem("maxValue")))
        setMinValue(Number(localStorage.getItem("minValue")))
    }
    const setLocalStorage = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }

    function changeMinValue(minValue: number) {
        setMinValue(minValue);
    }

    function changeMaxValue(maxValue: number) {
        setMaxValue(maxValue);
    }

    const setSettingsCounter = () => {
        setCounter(minValue);
        setLocalStorage();

    }
    const resetSettingsCounter = () => {
        setMaxValue(5)
        setMinValue(0)

    }


    let maxCount = counter === maxValue ? style.counterAlert : style.counter


    function incrCounterCallback() {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    function resetCounterCallback() {
        setCounter(0)
    }


    return (

            <Grid container  justify={"space-around"} alignItems={"center"} style={{height:"768px"}} >
                <Grid item >
                    <Paper>
                        <Counter counter={counter}
                                 incrCounter={incrCounterCallback}
                                 resetCounter={resetCounterCallback}
                                 maxCount={maxCount}
                        />
                    </Paper>
                </ Grid>
                <Grid  item >
                    <Paper>
                        <SettingsCounter changeMaxValue={changeMaxValue}
                                         changeMinValue={changeMinValue}
                                         minValue={minValue} maxValue={maxValue}
                                         setSettingsCounter={setSettingsCounter}
                                         resetSettingsCounter={resetSettingsCounter}
                        />
                    </Paper>
                </Grid>
            </Grid>

    );
}

export default App;
