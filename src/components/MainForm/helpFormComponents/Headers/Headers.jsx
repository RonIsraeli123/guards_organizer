import React from 'react'

import { MAIN_HEADER, SUB_HEADER } from '../../../../config/headers'

import Typography from '@mui/material/Typography';

export const Headers = () => {
    return (
        <div>
            <div className="row">
                <Typography style={{
                    margin: '0 auto'
                }} variant='h4' >{MAIN_HEADER}
                </Typography>
            </div>
            <div className="row">
                <Typography style={{
                    margin: '0 auto'
                }} variant='h7' >{SUB_HEADER}
                </Typography>
            </div>
        </div>)
}
