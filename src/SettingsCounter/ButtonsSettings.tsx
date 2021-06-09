import React from 'react';

export type ButtonsSettingsPropsType = {
    setSettingsCounter: () => void
    resetSettingsCounter: () => void
}

export function ButtonsSettings(props: ButtonsSettingsPropsType) {


    return (
        <div>
            <button onClick={props.setSettingsCounter}>Set</button>
            <button onClick={props.resetSettingsCounter}>Reset</button>
        </div>

    );
}