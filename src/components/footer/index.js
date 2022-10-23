import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material'
import { Box, Button, Grid, List, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { FooterTitle, SubscribeTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'

const Footer = () => {
  return (
    <Box sx={{ background: Colors.shaft, color: Colors.white, p: { xs: 4, md: 10 }, pt: 12, pb: 12, fontSize: { xs: '12px', md: '14px' } }}>
        <Grid container spacing={2} justifyContent='center'>
            <Grid item md={6} lg={4}>
                <FooterTitle variant='body1'>About us</FooterTitle>
                <Typography variant='caption'>Lorem ipsum dolor sit amet cons adipisicing elit sed do elusn tenqor incidunt ut labor et dolore magna aliqua. Ut </Typography>
                <Box sx={{ mt: 4, color: Colors.dove_gray }}>
                    <Facebook sx={{ mr: 1 }}></Facebook>
                    <Twitter sx={{ mr: 1 }}></Twitter>
                    <Instagram sx={{ mr: 1 }}></Instagram>
                </Box>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant='body1'>Information</FooterTitle>
                <List>
                    <ListItemText><Typography lineHeight={2} variant='caption'>About us</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>Order Tracking</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>Privacy &amp; Policy</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>Terms &amp; Conditions</Typography></ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant='body2'>My Account</FooterTitle>
                <List>
                    <ListItemText><Typography lineHeight={2} variant='caption'>Login</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>My Cart</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>My Account</Typography></ListItemText>
                    <ListItemText><Typography lineHeight={2} variant='caption'>Wishlist</Typography></ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={4}>
                <FooterTitle variant='body1'>NewsLetter</FooterTitle>
                <Stack>
                    <SubscribeTf color='primary' variant='standard' label='Email Address'></SubscribeTf>
                    <Button variant='contained' sx={{ mt: 4, mb: 4 }} startIcon={<Send sx={{ color: Colors.white }}></Send>}></Button>
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer