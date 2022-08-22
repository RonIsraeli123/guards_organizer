import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addGuardName, deleteGuardName } from '../../../../redux/slices/GuardsNamesSlice'

import { PLACEHOLDER_ADD_GUARD, TOOLTIP_TEXT, INVALID_GUARD_NAME_ALERT, EXIST_GUARD_ALERT } from '../../../../config/inputs/GuardsInput'

import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const GuardsInput = () => {

    const guardsNames = useSelector((state) => state.guardsNames.guardsNames)

    const dispatch = useDispatch()

    const [guardName, setGuardName] = useState('')


    const addToGuards = () => {
        if (!guardName || !guardName.trimStart().trimEnd()) {
            return alert(INVALID_GUARD_NAME_ALERT);
        }
        if (guardsNames.includes(guardName)) {
            return alert(EXIST_GUARD_ALERT);
        }
        dispatch(addGuardName(guardName))
        setGuardName('');
        return;
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
            addToGuards();
        }
    }

    return (
        <div>
            <div className="column">
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }} className="inputs" id="outlined-basic" label={PLACEHOLDER_ADD_GUARD} value={guardName} onChange={(e) => setGuardName(e.target.value)} onKeyDown={handleKeyDown} />
                <Tooltip title={TOOLTIP_TEXT}>
                    <AddCircleIcon style={{ fontSize: "2rem" }} onClick={(e) => { addToGuards(e) }} ></AddCircleIcon>
                </Tooltip>
            </div >
            <div className="row">
                {guardsNames.length > 0 &&
                    <div className="row" style={{ marginTop: "15px" }}>
                        {guardsNames.map((name, index) => (
                            <div key={index}>
                                <Chip
                                    size="small"
                                    label={`(${index + 1}) ${name}`}
                                    onDelete={() => dispatch(deleteGuardName(guardName))}
                                    color="default"
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
