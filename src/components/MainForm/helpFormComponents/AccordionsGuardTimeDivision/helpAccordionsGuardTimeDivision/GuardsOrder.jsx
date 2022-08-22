import React from 'react'

import moment from 'moment';

import Button from '@mui/material/Button';

import { guardsGeneratorResult } from '../../../../../algo/generatorGuards'
import { MINUTE_TIME_UNITE, HOUR_TIME_UNITE } from '../../../../../algo/const'

import { useSelector, useDispatch } from 'react-redux'
import { setIsRandomPalces, setIsEvenTime } from '../../../../../redux/slices/GuardsOrder'
import { setTimeUnit, setShiftTime } from '../../../../../redux/slices/ShiftTimeSlice'

// import { setGuards } from '../../../../../redux/slices/GuardsResultSlice'

export const GuardsOrder = (props) => {
    const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
    const startTime = useSelector((state) => state.timeFrame.startTime);
    const endTime = useSelector((state) => state.timeFrame.endTime);
    const shiftTimeSelector = useSelector((state) => state.shiftTime.shiftTime);
    const timeUnitSelector = useSelector((state) => state.shiftTime.timeUnit);

    const dispatch = useDispatch()

    const dispatchGuards = (isRandom) => {
        dispatch(setIsRandomPalces(isRandom))
        dispatch(setIsEvenTime(props.isEvenTime))

        let timeUnit = '';
        let shiftTime = '';
        if (props.isEvenTime) {
            const sumTime = moment(endTime).diff(moment(startTime), MINUTE_TIME_UNITE);
            const guardCount = guardsNames.length;
            shiftTime = sumTime / guardCount;
            timeUnit = MINUTE_TIME_UNITE;
        }
        else {
            timeUnit = timeUnitSelector;
            if (timeUnit === HOUR_TIME_UNITE) {
                shiftTime = shiftTimeSelector * 60
            }
            else {
                shiftTime = shiftTimeSelector
            }
        }
        shiftTime = Math.ceil(shiftTime)
        dispatch(setShiftTime(shiftTime))
        dispatch(setTimeUnit(MINUTE_TIME_UNITE))

        const guardResult = guardsGeneratorResult(guardsNames, startTime, endTime, shiftTime, isRandom, props.isEvenTime)
        if (guardResult.length > 0) {
            props.setGuards(guardResult)
            // dispatch(setGuards(guardResult))
        }
    }

    return (
        <div className="CalculateButton">
            <Button className='byOrderButton' variant="contained" size="small" onClick={(e) => dispatchGuards(true)} >
                סדר רנדומלי
            </Button>
            <Button className='byOrderButton' variant="contained" size="small" onClick={(e) => dispatchGuards(false)} >
                סדר לפי הכנסה
            </Button>
        </div>
    )
}
