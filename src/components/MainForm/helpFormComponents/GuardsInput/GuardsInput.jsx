import React from 'react'

import TextField from '@mui/material/TextField';
import Grid from '@mui/core/Grid';
import Tooltip from '@mui/core/Tooltip';

import AddCircleIcon from '@mui/icons/AddCircle';
import AccountCircle from '@mui/icons/AccountCircle';

export const GuardsInput = () => {
    return (
        <div className="row">
            <Grid className="row" container spacing={1} alignItems="flex-end" >
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField className="element" id="input-with-icon-grid" label="שם שומר" inputRef={ref} value={props.value} onChange={(e) => props.onChange(e)} onKeyDown={props.onKeyDown} />
                </Grid>
            </Grid>
            <Tooltip title="הוספת שומר">
                <AddCircleIcon style={{ fontSize: "2rem" }} onClick={(e) => { props.onClick(e); ref.current.focus(); }} ></AddCircleIcon>
            </Tooltip>
        </div >
    )
}
