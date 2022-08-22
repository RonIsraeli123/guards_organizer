import React, { useState } from 'react'

import Selector from 'react-select';

import { useSelector, useDispatch } from 'react-redux'
import { setShiftTime, setTimeUnit } from '../../../../../redux/slices/ShiftTimeSlice'

import { GUARD_TIME } from '../../../../../config/AccordionsGuardTimeDivision/shiftTime'

import TextField from '@mui/material/TextField';

export const ShiftTime = () => {
  const shiftTime = useSelector((state) => state.shiftTime.shiftTime)
  const timeUnit = useSelector((state) => state.shiftTime.timeUnit)

  const dispatch = useDispatch()

  const [options] = useState([
    { value: 'hour', label: 'שעות' },
    { value: 'minute', label: 'דקות' },
  ]);

  return (
    <div className='shiftTime'>
      <TextField id="input-with-icon-grid" type="number" label={GUARD_TIME} value={shiftTime} onChange={(e) => dispatch(setShiftTime(e.target.value))} />
      <Selector
        placeholder={timeUnit === "hour" ? 'שעות' : 'דקות'}
        value={timeUnit}
        onChange={(e) => dispatch(setTimeUnit(e.value))}
        options={options}
        defaultValue={options[1]}
      />
    </div>
  )
}
