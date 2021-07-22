import React from 'react';
import {Button, Grid} from "@material-ui/core";

export type ButtonsSettingsPropsType = {
    setSettingsCounter: () => void
    resetSettingsCounter: () => void

}

export function ButtonsSettings(props: ButtonsSettingsPropsType) {


    return (
        <Grid container justify={"space-between"} style={{padding:"20px"}}>
            <Grid item >
                <Button onClick={()=> props.setSettingsCounter()}
                        variant={"contained"}
                        color={"secondary"}
                >Set</Button>
            </Grid>
            <Grid item >
                <Button onClick={() => props.resetSettingsCounter()}
                        variant={"contained"}
                        color={"primary"}
                >Reset</Button>
            </Grid>
        </Grid>

    );
}