import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarDesktop from './appbarDesktop';
import AppbarMobile from './appbarMobile';

const AppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
        {matches ? <AppbarMobile matches={matches}></AppbarMobile> : <AppbarDesktop matches={matches}></AppbarDesktop>}
    </>
  )

}

export default AppBar