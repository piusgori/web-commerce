import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import { Colors } from '../../styles/theme'

const Actions = ( { matches }) => {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
  return (
    <Component>
        <MyList type='row'>
            <ListItemButton sx={{ justifyContent: 'center' }}><ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}><ShoppingCart></ShoppingCart></ListItemIcon></ListItemButton>
            <Divider orientation='vertical' flexItem></Divider>
            <ListItemButton sx={{ justifyContent: 'center' }}><ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}><Person></Person></ListItemIcon></ListItemButton>
            <Divider orientation='vertical' flexItem></Divider>
            <ListItemButton sx={{ justifyContent: 'center' }}><ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}><Favorite></Favorite></ListItemIcon></ListItemButton>
            <Divider orientation='vertical' flexItem></Divider>
        </MyList>
    </Component>
  )
}

export default Actions