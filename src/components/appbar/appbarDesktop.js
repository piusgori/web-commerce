import { Search } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { UiContext } from '../../context/ui'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appbar'
import Actions from './actions'

const AppbarDesktop = ({ matches }) => {

  const { setShowSearchBox } = useContext(UiContext);

  return (
    <AppBarContainer>
        <AppBarHeader>Mjini</AppBarHeader>
        <MyList type='row'>
            <ListItemText primary='Home'></ListItemText>
            <ListItemText primary='Categories'></ListItemText>
            <ListItemText primary='Products'></ListItemText>
            <ListItemText primary='Contact us'></ListItemText>
            <ListItemButton onClick={() => { setShowSearchBox(true); }}><ListItemIcon><Search></Search></ListItemIcon></ListItemButton>
        </MyList>
        <Actions matches={matches}></Actions>
    </AppBarContainer>
  )
}

export default AppbarDesktop;