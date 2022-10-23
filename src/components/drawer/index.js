import { Close } from '@mui/icons-material';
import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { lighten } from 'polished';
import React, { useContext } from 'react';
import { UiContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;

const AppDrawer = () => {

    const { drawerOpen, setDrawerOpen } = useContext(UiContext);

  return (
    <>
        {drawerOpen && <DrawerCloseButton onClick={() => { setDrawerOpen(false);}} ><Close sx={{ fontSize: '2.5rem', color: lighten(0.09, Colors.secondary) }}></Close></DrawerCloseButton>}
        <Drawer open={drawerOpen}>
            <List>
                <ListItemButton><ListItemText>Home</ListItemText></ListItemButton>
                <MiddleDivider></MiddleDivider>
                <ListItemButton><ListItemText>Categories</ListItemText></ListItemButton>
                <MiddleDivider></MiddleDivider>
                <ListItemButton><ListItemText>Products</ListItemText></ListItemButton>
                <MiddleDivider></MiddleDivider>
                <ListItemButton><ListItemText>About Us</ListItemText></ListItemButton>
                <MiddleDivider></MiddleDivider>
                <ListItemButton><ListItemText>Contact us</ListItemText></ListItemButton>
                <MiddleDivider></MiddleDivider>
            </List>
        </Drawer>
    </>
  )
}

export default AppDrawer