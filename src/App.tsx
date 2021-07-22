import React, {useReducer} from 'react';
import './App.module.css';
import {Counter} from "./Counter/Counter";
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {Container, Grid, Paper} from "@material-ui/core";
import {counterReducer} from "./counter-reducer";
import {incrCounter, resetCounter, resetSettings, setMaxValue, setMinValue, setSettings} from "./actions";


function App() {
    // let [counter, setCounter] = useState<number>(0)
    // let [minValue, setMinValue] = useState<number>(0)
    // let [maxValue, setMaxValue] = useState<number>(5)
    // let [disabled, setDisabled] = useState<boolean>(false)
    // useEffect(() => getLocalStorage(), [])
    // useEffect(() => setLocalStorage(), [minValue, maxValue])
    // const getLocalStorage = () => {
    //
    //     setMaxValue(Number(localStorage.getItem("maxValue")))
    //     setMinValue(Number(localStorage.getItem("minValue")))
    // }
    // const setLocalStorage = () => {
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    //     localStorage.setItem("minValue", JSON.stringify(minValue))
    // }
    let [state, dispatch] = useReducer(counterReducer, {
        counter: 0,
        minValue: 0,
        maxValue: 0,
        disabled: false,
    })

    function changeMinValue(minValue: number) {
        dispatch(setMinValue(minValue));
    }

    function changeMaxValue(maxValue: number) {
        dispatch(setMaxValue(maxValue));
    }

    const setSettingsCounter = () => {
        dispatch(resetCounter());
        dispatch(setSettings(state.minValue));

    }


    const resetSettingsCounter = () => {
        dispatch(resetSettings())

    }


    function incrCounterCallback() {
        dispatch(incrCounter())
    }

    function resetCounterCallback() {
        dispatch(resetCounter())
    }


    return (
        <Container>
            <Grid container justify={"space-around"} alignItems={"center"} style={{height: "100vh"}}>
                <Grid item>
                    <Paper>
                        <Counter counter={state.counter}
                                 incrCounter={incrCounterCallback}
                                 resetCounter={resetCounterCallback}
                                 disabled={state.disabled}
                        />
                    </Paper>
                </ Grid>
                <Grid item>
                    <Paper>
                        <SettingsCounter changeMaxValue={changeMaxValue}
                                         changeMinValue={changeMinValue}
                                         minValue={state.minValue} maxValue={state.maxValue}
                                         setSettingsCounter={setSettingsCounter}
                                         resetSettingsCounter={resetSettingsCounter}

                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
