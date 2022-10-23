import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner';

const Banner = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
        <BannerImage src='https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg'></BannerImage>
        <BannerContent>
            <Typography variant='h6'>Huge Collection</Typography>
            <BannerTitle variant='h2'>New items</BannerTitle>
            <BannerDescription variant='subtitle1'>I will add the description for the stuff when you are contented with this design</BannerDescription>
            <BannerShopButton color='primary'>Shop now</BannerShopButton>
        </BannerContent>
    </BannerContainer>
  )
}

export default Banner