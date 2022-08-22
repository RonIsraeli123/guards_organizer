import React from 'react'

import { GuardsInput } from './GuardsInput'
import { TimeFrameInputs } from './TimeFrameInputs'

export const Inputs = () => {
    return (
        <div className='column'>
            <TimeFrameInputs />
            <GuardsInput />
        </div>
    )
}
