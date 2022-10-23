import { Box, Slide } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { MessageText, PromotionsContainer } from '../../styles/promotions';

const messages = [
    '20% off on your first order!',
    'Summer sales starts now, visit any store.',
    'Please like and subscribe'
]

const Promotions = () => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);
    const containerRef = useRef();

    useEffect(() => {
        setTimeout(() => { 
            setShow(false);
        }, 3000);

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);
            setShow(true);
            setTimeout(() => { 
                setShow(false);
            }, 3000);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])
    

  return (
    <PromotionsContainer ref={containerRef}>
        <Slide container={containerRef.current} direction={show ? 'left' : 'right'} timeout={{ enter: 500, exit: 200 }} in={show}>
            <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                <MessageText>{messages[messageIndex]}</MessageText>
            </Box>
        </Slide>
    </PromotionsContainer>
  )
}

export default Promotions