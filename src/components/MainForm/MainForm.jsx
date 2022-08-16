import React, { useState } from 'react'
import { Headers, TimeFrameInputs, GuardsInput, AccordionsGuardTimeDivision, GuardsResult } from './helpFormComponents/index'

export const MainForm = () => {
    const [guards, setGuards] = useState([])
    return (
        <div>
            <div>
                <Headers />
                <TimeFrameInputs />
                <GuardsInput />
                {/* TODO: change it to redux way */}
                <AccordionsGuardTimeDivision setGuards={setGuards} />
            </div>
            <div>
                {guards.length > 0 && <GuardsResult guards={guards} setGuards={setGuards} />}

            </div>
        </div>
    )
}
