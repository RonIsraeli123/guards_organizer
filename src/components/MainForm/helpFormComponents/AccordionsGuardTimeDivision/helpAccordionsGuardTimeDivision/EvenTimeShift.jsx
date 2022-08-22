import React from 'react'

import moment from 'moment'

import { useSelector } from 'react-redux'
import { MINUTE_TIME_UNITE } from '../../../../../algo/const'

export const EvenTimeShift = () => {
    const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
    const startTime = useSelector((state) => state.timeFrame.startTime);
    const endTime = useSelector((state) => state.timeFrame.endTime);

    const sumTime = moment(endTime).diff(moment(startTime), MINUTE_TIME_UNITE);
    const guardCount = guardsNames.length;

    return (
        <div className='evenTime'>
            {Math.ceil(sumTime / guardCount) / 60} שעות
        </div>
    )
}
