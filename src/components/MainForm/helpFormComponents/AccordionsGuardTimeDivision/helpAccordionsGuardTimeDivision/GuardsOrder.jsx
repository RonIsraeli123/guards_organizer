import React from 'react'

import Button from '@mui/core/Button';
import { dispatchGuards } from '../../../../../algo/dispatchGuards'
import { useDispatch } from 'react-redux'
import { setIsRandomPalces } from '../../../../../redux/slices/GuardsOrder'

export const GuardsOrder = (props) => {

    const dispatch = useDispatch()


    const dispatchGuardsRandom = (isRandom) => {
        dispatch(setIsRandomPalces(isRandom))
        dispatchGuards()
    }

    return (
        <div className="CalculateButton">
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => dispatchGuardsRandom(false)} >
                סדר רנדומלי
            </Button>
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => dispatchGuardsRandom(true)} >
                סדר לפי הכנסה
            </Button>
        </div>
    )
}
