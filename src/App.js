import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles"
import React from 'react';
import './App.css';
import AppBar from './components/appbar';
import Banner from './components/banner';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import Products from './components/products';
import Promotions from './components/promotions';
import SearchBox from './components/search';
import UiContextProvider from './context/ui';
import theme from './styles/theme';

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: '#fff' }}>
        <UiContextProvider>
          <AppBar></AppBar>
          <Banner></Banner>
          <Promotions></Promotions>
          <Box display='flex' justifyContent={'center'} sx={{ p: 4 }}><Typography variant='h4'>Our Producst</Typography></Box>
          <Products></Products>
          <Footer></Footer>
          <AppDrawer></AppDrawer>
          <SearchBox></SearchBox>
        </UiContextProvider>
      </Container>
    </ThemeProvider>
  )
}
