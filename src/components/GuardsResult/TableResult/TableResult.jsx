import * as React from 'react';

import { RESULT_TITLE, GUARD_NAME_COLUNM_TITLE, START_SHIFT_COLUNM_TITLE, END_SHIFT_COLUNM_TITLE } from '../../../config/table'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableResult = (props) => {
    return (
        <div className='row result'>
            <h2>{RESULT_TITLE}</h2>
            <hr />
            <TableContainer className='table' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{GUARD_NAME_COLUNM_TITLE}</TableCell>
                            <TableCell>{START_SHIFT_COLUNM_TITLE}</TableCell>
                            <TableCell>{END_SHIFT_COLUNM_TITLE}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.guards.map((guard, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {guard.name}
                                    </TableCell>
                                    <TableCell align="right">{guard.startTime.format('H:mm (MM/DD)')}</TableCell>
                                    <TableCell align="right">{guard.endTime.format('H:mm (MM/DD)')}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}