import React from 'react'

import Button from '@mui/core/Button';
import { dispatchGuards } from '../../../../../algo/dispatchGuards'

export const GuardsOrder = (props) => {

    return (
        <div className="CalculateButton">
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => dispatchGuards(true, props.isEvenTime)} >
                סדר רנדומלי
            </Button>
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => dispatchGuards(false, props.isEvenTime)} >
                סדר לפי הכנסה
            </Button>
        </div>
    )
}
