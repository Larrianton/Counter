import React from 'react';
import {Grid, Paper} from "@material-ui/core";

export type displayPropsType = {
    counter: number
    disabled: boolean
}

export const Display = (props: displayPropsType) => {

    const DisplayCounterStyle = {
        fontSize: "35px",
        marginBottom: "20px",
        color: props.disabled ? "red" : "" ,

    }
    return (

        <Grid item style={DisplayCounterStyle} justify={"center"}>

          {props.counter}

        </Grid>
    )
}