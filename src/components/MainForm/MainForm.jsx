import React, { useState } from 'react'
import { Headers, TimeFrameInputs, GuardsInput, AccordionsGuardTimeDivision, GuardsResult } from './helpFormComponents/index'

export const MainForm = () => {
    {/* TODO: change it to redux way */ }
    const [guards, setGuards] = useState([])
    return (
        <div className='mainForm'>
            <div style={{ maxWidth: "500px", padding: "3%", backgroundColor: "#fdfcedf0", margin: "3%", borderRadius: "5px", boxShadow: "black 1px 1px 20px 1px" }}>
                <Headers />
                <TimeFrameInputs />
                <GuardsInput />
                <AccordionsGuardTimeDivision setGuards={setGuards} />
            </div>
            <div>
                <GuardsResult guards={guards} setGuards={setGuards} />
            </div>
        </div>
    )
}
