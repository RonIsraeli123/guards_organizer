import React from 'react'

import Accordion from '@mui/core/Accordion';
import AccordionDetails from '@mui/core/AccordionDetails';
import AccordionSummary from '@mui/core/AccordionSummary';
import Typography from '@mui/core/Typography';

import ExpandMoreIcon from '@mui/icons/ExpandMore';

import { DivisionDescripsion } from './helpAccordionsGuardTimeDivision/DivisionDescripsion'
import { ShiftTime } from './helpAccordionsGuardTimeDivision/ShiftTime'
import { GuardOrder } from './helpAccordionsGuardTimeDivision/GuardsOrder'

export const AccordionsGuardTimeDivision = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (isExpanded) => {
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
                    <GuardOrder evenTime={true} />
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
                    <GuardOrder evenTime={false} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
