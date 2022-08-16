import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const TableResult = (props) => {
    const useStyles = makeStyles({
        table: {
            maxWidth: 650,
            backgroundColor: 'white',
            margin: '0 auto',
            marginBottom: '1em'
        },
    });

    const classes = useStyles();

    const { guards } = props;


    return (
        <div className={classes.table}>
            <h2>חישוב השמירות</h2>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell>שם שומר</TableCell>
                        <TableCell>זמן התחלה</TableCell>
                        <TableCell>זמן סיום</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {guards.map((guard, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {guard.name}
                            </TableCell>
                            <TableCell>{guard.startTime.format('H:mm - MM/DD')}</TableCell>
                            <TableCell>{guard.endTime.format('H:mm - MM/DD')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
