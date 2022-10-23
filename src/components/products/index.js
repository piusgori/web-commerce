import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { products } from '../../data';
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';

const Products = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map((prod) => (
        <Grid xs={2} sm={4} md={4} key={prod.id} item display={'flex'} flexDirection={'column'} alignItems={'center'}>
          {matches ? <SingleProduct matches={matches} product={prod}></SingleProduct> : <SingleProductDesktop product={prod} matches={matches}></SingleProductDesktop>}
        </Grid>
    ))

  return (
    <Container>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ margin: '20px 4px 10px 4px' }}>
            {renderProducts}
        </Grid>
    </Container>
  )
}

export default Products;