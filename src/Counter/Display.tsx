import React from 'react';
import style from "../App.module.css" ;
export type displayPropsType = {
    counter:number
    maxCount:string
}

export const Display = (props:displayPropsType) => {

    return (
        <div className={`${props.maxCount}`}>{props.counter}</div>
    )
}