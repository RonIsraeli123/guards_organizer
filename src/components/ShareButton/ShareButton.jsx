import React from 'react'
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import Button from '@mui/core/Button';

export const ShareButton = (props) => {
    const { guardsView } = props;
    const generateToText = () => {
        let message = `*רשימת שמות:*\n`;
        guardsView.map(x => {
            message += `${x.startTime.format('HH:mm')} - ${x.endTime.format('HH:mm')}  *${x.name.trim()}* \n`;
        });
        return message;
    }

    return (
        <div>
            <WhatsappShareButton url={generateToText()}><Button variant="contained" style={{ direction: "ltr" }} > <WhatsappIcon size={25} round={true}></WhatsappIcon>  שתף עם חבריך  </Button></WhatsappShareButton >
        </div >
    )
}
