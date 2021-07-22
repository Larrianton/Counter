import style from "../App.module.css" ;
import React from "react";
import {Button, Grid} from "@material-ui/core";

export type ButtonsCounterType = {
    incrCounter: () => void
    resetCounter: () => void
    disabled: boolean
}

export const ButtonsCounter = (props: ButtonsCounterType) => {
    return (
        <Grid container justify={"space-between"}>
            <Grid item>
                <Button onClick={props.incrCounter}
                        disabled={props.disabled}
                        variant={"contained"}
                        color={"secondary"}
                >Incr</Button>
            </Grid>
            <Grid item>
                <Button
                    onClick={props.resetCounter}
                    variant={"contained"}
                    color={"primary"}
                >Reset</Button>
            </Grid>
        </Grid>
    )
};