import React, {ChangeEvent} from 'react';

export type DisplaySettingsPropsType = {
    minValue: number
    maxValue: number
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (minValue: number) => void
}

export const DisplaySettings = (props: DisplaySettingsPropsType) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeMaxValue(Number(e.currentTarget.value))
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeMinValue(+e.currentTarget.value)
    return (
        <div>
            <div> max.value <input type="number" value={props.maxValue}
                                   onChange={maxValueHandler}/></div>
            <div> min.value <input type="number" value={props.minValue}
                                   onChange={minValueHandler}/></div>

        </div>
    )
}