import React from 'react';
import {Display} from "./Display";
import {ButtonsCounter} from "./ButtonsCounter";
import {Grid} from "@material-ui/core";


export type counterType = {
    counter: number
    incrCounter: () => void
    resetCounter: () => void
    disabled: boolean
}

export function Counter(props: counterType) {


    return (

        <Grid container>

            <Display counter={props.counter} disabled={props.disabled}/>


            <ButtonsCounter incrCounter={props.incrCounter} resetCounter={props.resetCounter}
                            disabled={props.disabled}/>

        </Grid>

    );
}