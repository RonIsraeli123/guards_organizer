import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setShiftTime, setType } from '../../../../../redux/slices/ShiftTimeSlice'

import TextField from '@mui/material/TextField';

import Selector from 'react-select';


export const ShiftTime = () => {
  const shiftTime = useSelector((state) => state.shiftTime.shiftTime)
  const timeUnit = useSelector((state) => state.shiftTime.type)

  const dispatch = useDispatch()

  const [options] = useState([
    { value: 'hour', label: 'שעות' },
    { value: 'minute', label: 'דקות' },
  ]);

  return (
    <div>
      <TextField id="input-with-icon-grid" type="number" label="זמן שמירה" value={shiftTime} onChange={(e) => dispatch(setShiftTime(e.target.value))} />
      <Selector
        className="select"
        placeholder={timeUnit === "hour" ? 'שעות' : 'דקות'}
        value={timeUnit}
        onChange={(e) => dispatch(setType(e.value))}
        options={options}
        defaultValue={options[1]}
      />
    </div>
  )
}
