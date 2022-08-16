import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import { DivisionDescripsion } from './helpAccordionsGuardTimeDivision/DivisionDescripsion'
import { ShiftTime } from './helpAccordionsGuardTimeDivision/ShiftTime'
import { GuardsOrder } from './helpAccordionsGuardTimeDivision/GuardsOrder'

export const AccordionsGuardTimeDivision = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <DivisionDescripsion />

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >חלוקה זמן שווה </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GuardsOrder setGuards={props.setGuards} isEvenTime={true} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography >הגדרת זמן שמירה</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ShiftTime />
                    <GuardsOrder setGuards={props.setGuards} isEvenTime={false} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
