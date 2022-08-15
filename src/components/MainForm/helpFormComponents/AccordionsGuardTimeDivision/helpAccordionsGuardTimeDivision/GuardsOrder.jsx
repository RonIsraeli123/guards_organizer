import React from 'react'

import Button from '@mui/core/Button';

export const GuardsOrder = () => {
    return (
        <div className="CalculateButton">
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => calculatePersons(true)} >
                סדר רנדומלי
            </Button>
            <Button variant="contained" className={classesButton.margin} size="small" onClick={(e) => calculatePersons(false)} >
                סדר לפי הכנסה
            </Button>
        </div>
    )
}
