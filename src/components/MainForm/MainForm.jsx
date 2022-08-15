import React from 'react'
import { GuardsInput, Headers, TimeFrameInputs, AccordionsGuardTimeDivision, GuardsResult } from './helpFormComponents/index'
export const MainForm = () => {
    return (
        <div>
            <from>
                <Headers />
                <TimeFrameInputs />
                <GuardsInput />
                <AccordionsGuardTimeDivision />
            </from>
            <div>
                <GuardsResult />
            </div>
        </div>
    )
}
