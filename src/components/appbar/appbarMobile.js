import { Menu, Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { UiContext } from '../../context/ui'
import { AppBarContainer, AppBarHeader } from '../../styles/appbar'
import Actions from './actions'

const AppbarMobile = ({ matches }) => {

  const { setDrawerOpen, setShowSearchBox } = useContext(UiContext)

  return (
    <AppBarContainer>
        <IconButton onClick={() => { setDrawerOpen(true) }}><Menu></Menu></IconButton>
        <AppBarHeader textAlign={'center'} variant='h4'>Mjini</AppBarHeader>
        <IconButton onClick={() => { setShowSearchBox(true) }}><Search></Search></IconButton>
        <Actions matches={matches}></Actions>
    </AppBarContainer>
  )
}

export default AppbarMobile