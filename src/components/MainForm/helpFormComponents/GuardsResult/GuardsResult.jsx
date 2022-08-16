import React from 'react'

// import { TableResult } from './TableResult'
// import { ShareButton } from '../../../ShareButton/ShareButton'
import { useSelector } from 'react-redux'
// import { setGuards } from '../../../../redux/slices/GuardsResultSlice'


import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExposureIcon from '@mui/icons-material/Exposure';

import { guardsGeneratorResult } from '../../../../algo/generatorGuards'


export const GuardsResult = (props) => {
    const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
    const startTime = useSelector((state) => state.timeFrame.startTime);
    const endTime = useSelector((state) => state.timeFrame.endTime);
    const shiftTime = useSelector((state) => state.shiftTime.shiftTime);
    const timeUnit = useSelector((state) => state.shiftTime.type);
    const isRandomOrder = useSelector((state) => state.guardsOrder.isRandomOrder);
    const isEvenTime = useSelector((state) => state.guardsOrder.isEvenTime);


    // const guardsResult = useSelector((state) => state.guardsResult.guards)

    // const dispatch = useDispatch()

    const generateAgain = () => {
        const guardResult = guardsGeneratorResult(guardsNames, startTime, endTime, shiftTime, timeUnit, isRandomOrder, isEvenTime)
        props.setGuards(guardResult)
        console.log(props.guards)
        // dispatch(setGuards(guardResult))
    }

    return (
        <div>
            {props.guards.length &&
                <div>
                    <hr />
                    <div>
                        <div className="row">
                            < Button variant="contained" onClick={() => generateAgain()} endIcon={<ExposureIcon style={{ marginRight: "5px" }}></ExposureIcon>} >
                                הגרל שוב
                            </Button>
                            <Button
                                endIcon={<RefreshIcon style={{ marginRight: "5px" }}></RefreshIcon>}
                                style={{ margin: "5px" }}
                                onClick={() => window.location.reload(false)}
                                color="#e0e0e0"
                                variant="contained"
                            >
                                הכל מהתחלה
                            </Button>
                            {/* <ShareButton guardsView={guardsResult}></ShareButton> */}
                        </div>
                        {/* <TableResult guards={guardsResult} /> */}
                        <div><h1>blaaaaa</h1></div>
                    </div>
                </div>

            }
        </div>
    )
}
