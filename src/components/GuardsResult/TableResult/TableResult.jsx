import * as React from 'react';

import { RESULT_TITLE, GUARD_NAME_COLUNM_TITLE, START_SHIFT_COLUNM_TITLE, END_SHIFT_COLUNM_TITLE } from '../../../config/table'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const TableResult = (props) => {
    return (
        <div className='row result'>
            <h2 className='resultHeader'>{RESULT_TITLE}</h2>
            <Table className='tableResult' aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">{GUARD_NAME_COLUNM_TITLE}</TableCell>
                        <TableCell align="left">{START_SHIFT_COLUNM_TITLE}</TableCell>
                        <TableCell align="left">{END_SHIFT_COLUNM_TITLE}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.guards.map((guard, index) => (<TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="left" scope="row">
                            {guard.name}
                        </TableCell>
                        <TableCell align="left">{guard.startTime.format('H:mm (MM/DD)')}</TableCell>
                        <TableCell align="left">{guard.endTime.format('H:mm (MM/DD)')}</TableCell>

                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    );
}