import React from 'react';

export type displayPropsType = {
    counter: number
    maxCount: string
}

export const Display = (props: displayPropsType) => {

    return (
        <div className={`${props.maxCount}`}>{props.counter}</div>
    )
}