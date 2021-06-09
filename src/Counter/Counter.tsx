import React from 'react';
import style from "../App.module.css" ;
import {Display} from "./Display";
import {ButtonsCounter} from "./ButtonsCounter";



export type counterType = {
    counter: number
    maxCount:string
    incrCounter: () => void
    resetCounter:() => void
}

export function Counter(props: counterType) {


    return (

            <div>
               <Display counter={props.counter} maxCount={props.maxCount}/>
              <ButtonsCounter incrCounter={props.incrCounter} resetCounter={props.resetCounter} />

            </div>

    );
}