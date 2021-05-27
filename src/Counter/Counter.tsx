import React from 'react';
import style from '../Counter/Counter.module.css'
import {Display} from "./Display";



export type counterType = {
    counter: number
    incrCounter: () => void
    resetCounter:() => void
    maxCount:string

}

export function Counter(props: counterType) {


    return (
        <div className={style.counterWrapper}>
            <div className={style.counterItems}>
               <Display counter={props.counter} maxCount={props.maxCount}/>
                <div className={style.counterButtons}>
                    <button onClick={props.incrCounter}>Incr</button>
                    <button onClick={props.resetCounter}>Reset</button>
                </div>

            </div>
        </div>
    );
}