import React, { useState } from 'react'

import { EQUAL_DIVISION, UNEQUAL_DIVISION } from '../../../../config/AccordionsGuardTimeDivision/accordion'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ShiftTime } from './helpAccordionsGuardTimeDivision/ShiftTime'
import { EvenTimeShift } from './helpAccordionsGuardTimeDivision/EvenTimeShift'
import { GuardsOrder } from './helpAccordionsGuardTimeDivision/GuardsOrder'

export const AccordionsGuardTimeDivision = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >{EQUAL_DIVISION}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <EvenTimeShift />
                    <GuardsOrder setGuards={props.setGuards} isEvenTime={true} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography >{UNEQUAL_DIVISION}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ShiftTime />
                    <GuardsOrder setGuards={props.setGuards} isEvenTime={false} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
