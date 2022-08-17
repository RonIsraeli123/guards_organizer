import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableResult = (props) => {
    return (
        <div>
            <h2>חישוב השמירות</h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>שם שומר</TableCell>
                            <TableCell>זמן התחלה</TableCell>
                            <TableCell>זמן סיום</TableCell>
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
                                    <TableCell align="right">{guard.startTime.format('H:mm - MM/DD')}</TableCell>
                                    <TableCell align="right">{guard.endTime.format('H:mm - MM/DD')}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}