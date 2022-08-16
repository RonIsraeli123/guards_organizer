import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Grid from '@mui/core/Grid';
import Tooltip from '@mui/core/Tooltip';
import AddCircleIcon from '@mui/icons/AddCircle';
import AccountCircle from '@mui/icons/AccountCircle';

import { useSelector, useDispatch } from 'react-redux'
import { addGuardName } from '../../../../redux/slices/GuardsNamesSlice'

export const GuardsInput = () => {

    const guardsNames = useSelector((state) => state.GuardsNames.guardsNames)

    const dispatch = useDispatch()

    const [guardName, setGuardName] = useState('')


    const addToGuards = () => {
        if (!guardName || !guardName.trimStart().trimEnd()) {
            return alert("יש להכניס שם חוקי");
        }
        if (guardsNames.includes(guardName)) {
            return alert("שם כבר קיים!");
        }
        dispatch(addGuardName(guardName))
        setGuardName('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
            addToGuards();
        }
    }

    return (
        <div className="row">
            <Grid className="row" container spacing={1} alignItems="flex-end" >
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField className="element" id="input-with-icon-grid" label="שם שומר" value={guardName} onChange={setGuardName(e.target.value)} onKeyDown={handleKeyDown} />
                </Grid>
            </Grid>
            <Tooltip title="הוספת שומר">
                <AddCircleIcon style={{ fontSize: "2rem" }} onClick={(e) => { addToGuards(e); ref.current.focus(); }} ></AddCircleIcon>
            </Tooltip>
        </div >
    )
}
