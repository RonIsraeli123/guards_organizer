import React from 'react'

import TextField from '@mui/material/TextField';

export const TimeFrameInputs = (props) => {
    const useStylesDateInput = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));

    const classesDateInput = useStylesDateInput();

    return (
        <div className="row">
            <form className={classesDateInput.container} noValidate>
                <TextField
                    className={`element ${classesDateInput.textField}`}
                    id="datetime-local"
                    label="תחילת זמן "
                    type="datetime-local"
                    onChange={(e) => props.onChangeStartTime(e)}
                    value={props.firstValue}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={`element ${classesDateInput.textField}`}
                    id="datetime-local"
                    label="סיום זמן"
                    type="datetime-local"
                    onChange={(e) => props.onChangeEndTime(e)}
                    value={props.secondValue}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    )
}
