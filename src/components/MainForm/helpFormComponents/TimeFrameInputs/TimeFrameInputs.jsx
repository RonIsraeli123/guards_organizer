import React from 'react'

import TextField from '@mui/material/TextField';

import { useSelector, useDispatch } from 'react-redux'
import { setStartTimes, setEndTimes } from '../../../../redux/slices/TimeFrameSlice'

import { placeHolderStartTime, placeHolderEndTime } from '../../../../config/time/timeSetting'

export const TimeFrameInputs = () => {
    const startTime = useSelector((state) => state.timeFrame.startTime)
    const endTime = useSelector((state) => state.timeFrame.endTime)

    const dispatch = useDispatch()

    const onChangeStartTime = (e) => {
        dispatch(setStartTimes(e.target.value))
    }

    const onChangeEndTime = (e) => {
        dispatch(setEndTimes(e.target.value))
    }

    return (
        <div className="row">
            <form noValidate>
                <TextField
                    className='element'
                    id="datetime-local"
                    label={`${placeHolderStartTime}`}
                    type="datetime-local"
                    onChange={(e) => onChangeStartTime(e)}
                    value={startTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className='element'
                    id="datetime-local"
                    label={`${placeHolderEndTime}`}
                    type="datetime-local"
                    onChange={(e) => onChangeEndTime(e)}
                    value={endTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </form>
        </div>
    )
}
