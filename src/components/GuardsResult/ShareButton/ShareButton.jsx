import React from 'react'

import { shareTextToWhatsApp } from 'share-text-to-whatsapp';

import Button from '@mui/material/Button';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ShareButton = (props) => {

    const generateToText = () => {
        let message = `*רשימת שמירות:*\n`;
        props.guards.forEach(guard => {
            message += `${guard.startTime.format('HH:mm')} - ${guard.endTime.format('HH:mm')}  *${guard.name.trim()}* \n`;
        });
        shareTextToWhatsApp(message);
    }


    return (
        <div>
            <Button className='byOrderButton' color="success" variant="contained" onClick={generateToText} endIcon={<WhatsAppIcon style={{ marginRight: "5px" }}></WhatsAppIcon>}>
                שתף בווצאפ
            </Button>
        </div >
    )
}
