import React from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONTACT_DETAILS } from '../../config/constactDetails'
export const ContactDetails = () => {
    return (
        <div className='contactDetails'>
            <Container maxWidth='sm'>
                <Typography variant='body1' style={{ borderRadius: '2px', fontSize: '0.9rem', backgroundColor: 'lightgray' }}>
                    {CONTACT_DETAILS}
                </Typography>
            </Container>
        </div>
    )
}
