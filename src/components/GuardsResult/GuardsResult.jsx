import React from 'react'

import { TableResult } from './TableResult/TableResult'
import { ShareButton } from './ShareButton/ShareButton'
import { useSelector } from 'react-redux'
// import { setGuards } from '../../../../redux/slices/GuardsResultSlice'

import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExposureIcon from '@mui/icons-material/Exposure';

import { guardsGeneratorResult } from '../../algo/generatorGuards'

export const GuardsResult = (props) => {
    const guardsNames = useSelector((state) => state.guardsNames.guardsNames);
    const startTime = useSelector((state) => state.timeFrame.startTime);
    const endTime = useSelector((state) => state.timeFrame.endTime);
    const shiftTime = useSelector((state) => state.shiftTime.shiftTime);
    const isRandomOrder = useSelector((state) => state.guardsOrder.isRandomPalces);
    const isEvenTime = useSelector((state) => state.guardsOrder.isEvenTime);

    // const guards = useSelector((state) => state.guardsResult.guards)

    // const dispatch = useDispatch()

    const generateAgain = () => {
        const guardResult = guardsGeneratorResult(guardsNames, startTime, endTime, shiftTime, isRandomOrder, isEvenTime)
        props.setGuards(guardResult)
        // dispatch(setGuards(guardResult))
    }

    return (
        <div>
            {props.guards.length > 0 &&
                <div>
                    <hr />
                    <div>
                        <div className="row">
                            < Button variant="contained" color="inherit" onClick={() => generateAgain()} endIcon={<ExposureIcon style={{ marginRight: "5px" }}></ExposureIcon>} >
                                הגרל שוב
                            </Button>
                            < Button variant="contained" color="inherit" onClick={() => window.location.reload(false)} endIcon={<RefreshIcon style={{ marginRight: "5px" }}></RefreshIcon>} >
                                הכל מהתחלה
                            </Button>
                            <ShareButton guards={props.guards}></ShareButton>
                        </div>
                        <TableResult guards={props.guards} />
                    </div>
                </div>

            }
        </div>
    )
}
