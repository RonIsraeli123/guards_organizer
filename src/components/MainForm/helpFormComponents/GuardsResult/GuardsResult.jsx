import React from 'react'

import { TableResult } from './TableResult'
import { ShareButton } from '../../../ShareButton/ShareButton'
import { useSelector } from 'react-redux'

import { dispatchGuards } from '../../../../algo/dispatchGuards'


export const GuardsResult = () => {
    const guardsResult = useSelector((state) => state.guardsResult.guards)

    return (
        <div>{
            guardsResult.length > 0 ?
                <div>
                    <hr />
                    <div>
                        <div className="row">
                            < Button variant="contained" className={classesButton.margin} onClick={() => dispatchGuards()} endIcon={<ExposureIcon style={{ marginRight: "5px" }}></ExposureIcon>} >
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
                            <ShareButton guardsView={guardsResult}></ShareButton>
                        </div>
                        <TableResult guards={guardsResult} />
                    </div>
                </div>
                : ""
        }
        </div>
    )
}
