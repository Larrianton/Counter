import style from "../App.module.css" ;
import React from "react";

export type ButtonsCounterType = {
    incrCounter: () => void
    resetCounter:() => void
}

export const ButtonsCounter = (props:ButtonsCounterType) => {
    return (
        <div>
            <div className={style.counterButtons}>
                <button onClick={props.incrCounter}>Incr</button>
                <button onClick={props.resetCounter}>Reset</button>
            </div>
        </div>
    )

}