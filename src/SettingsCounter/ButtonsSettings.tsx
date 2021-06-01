import React from 'react';
import style from '../App.module.css'

export type ButtonsSettingsPropsType = {
    setSettingsCounter:()=>void
    resetSettingsCounter:()=>void
}
export function ButtonsSettings(props:ButtonsSettingsPropsType) {


    return (
        <div className={style.counterButtons}>
            <button onClick={props.setSettingsCounter}>Set</button>
            <button onClick={props.resetSettingsCounter}>Reset</button>
        </div>

    );
}