import React from 'react'
import { Headers, Inputs, AccordionsGuardTimeDivision, DivisionDescripsion } from './helpFormComponents/index'

export const MainForm = (props) => {
    return (
        <div className='mainForm'>
            <div style={{ maxWidth: "500px", padding: "3%", backgroundColor: "#fdfcedf0", margin: "3%", borderRadius: "5px", boxShadow: "black 1px 1px 20px 1px" }}>
                <Headers />
                <Inputs />
                <DivisionDescripsion />
                <AccordionsGuardTimeDivision setGuards={props.setGuards} />
            </div>
        </div>
    )
}
