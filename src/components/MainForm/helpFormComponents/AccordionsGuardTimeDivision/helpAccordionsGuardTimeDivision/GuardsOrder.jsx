import React from 'react'

import Button from '@mui/material/Button';

import { guardsGeneratorResult } from '../../../../../algo/generatorGuards'

import { useSelector, useDispatch } from 'react-redux'
import { setIsRandomPalces, setIsEvenTime } from '../../../../../redux/slices/GuardsOrder'
// import { setGuards } from '../../../../../redux/slices/GuardsResultSlice'

export const GuardsOrder = (props) => {

    const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
    const startTime = useSelector((state) => state.timeFrame.startTime);
    const endTime = useSelector((state) => state.timeFrame.endTime);
    const shiftTime = useSelector((state) => state.shiftTime.shiftTime);
    const timeUnit = useSelector((state) => state.shiftTime.type);
    const isRandomOrder = useSelector((state) => state.guardsOrder.isRandomOrder);

    const dispatch = useDispatch()

    const dispatchGuardsRandom = (isRandom) => {
        dispatch(setIsRandomPalces(isRandom))
        dispatch(setIsEvenTime(props.isEvenTime))
        const guardResult = guardsGeneratorResult(guardsNames, startTime, endTime, shiftTime, timeUnit, isRandomOrder, props.isEvenTime)
        if (guardResult.length > 0) {
            props.setGuards(guardResult)
            // dispatch(setGuards(guardResult))
        }
    }

    return (
        <div className="CalculateButton">
            <Button variant="contained" size="small" onClick={(e) => dispatchGuardsRandom(false)} >
                סדר רנדומלי
            </Button>
            <Button variant="contained" size="small" onClick={(e) => dispatchGuardsRandom(true)} >
                סדר לפי הכנסה
            </Button>
        </div>
    )
}
