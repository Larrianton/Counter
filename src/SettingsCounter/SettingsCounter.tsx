import React from 'react';
import {ButtonsSettings} from "./ButtonsSettings";
import {DisplaySettings} from "./DisplaySettings";

export type SettingsCounterPropsType = {
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (minValue: number) => void
    minValue: number
    maxValue: number
    setSettingsCounter: () => void
    resetSettingsCounter: () => void

}

export function SettingsCounter(props: SettingsCounterPropsType) {


    return (
        <div>
            <DisplaySettings
                changeMaxValue={props.changeMaxValue}
                changeMinValue={props.changeMinValue}
                minValue={props.minValue}
                maxValue={props.maxValue}/>
            <ButtonsSettings setSettingsCounter={props.setSettingsCounter}
                             resetSettingsCounter={props.resetSettingsCounter}


            />

        </div>

    );
}