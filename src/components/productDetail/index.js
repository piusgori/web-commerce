import { Close, Facebook, Favorite, Instagram, Twitter } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from '@mui/material'
import React from 'react';
import { Colors } from '../../styles/theme';
import { styled, useTheme} from '@mui/material/styles'
import { Product, ProductImage } from '../../styles/products';
import IncDec from '../ui/incdec';

const Slidetransition = (props) => {
    return <Slide direction='donw' {...props}></Slide>
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));

const ProductDetail = ({ open, onClose, product }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog TransitionComponent={Slidetransition} fullScreen variant='permanent' open={open}>
        <DialogTitle sx={{ background: Colors.secondary }}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                Product Title
                <IconButton onClick={onClose}><Close></Close></IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <ProductDetailWrapper display='flex' flexDirection={matches ? 'column' : 'row'}>
                <Product sx={{ mr: 4 }}><ProductImage src={product.image}></ProductImage></Product>
                <ProductDetailInfoWrapper>
                    <Typography variant='subtitle1'> SKU: 123</Typography>
                    <Typography variant='subtitle1'> Availability: 5 in stock</Typography>
                    <Typography sx={{ lineHeight: 2 }} variant="h4">{product.name}</Typography>
                    <Typography variant="body1">{product.description}</Typography>
                    <Box sx={{ mt: 4 }} display='flex' alignItems='center' justifyContent='space-between'>
                        <IncDec></IncDec>
                        <Button variant='contained'>Add to Cart</Button>
                    </Box>
                    <Box display='flex' alignItems='center' sx={{ mt: 4, color: Colors.light }}>
                        <Favorite sx={{ mr: 1 }}></Favorite>
                        Add to wishlist
                    </Box>
                    <Box sx={{ mt: 4, color: Colors.dove_gray }}>
                        <Facebook></Facebook>
                        <Twitter sx={{ pl: 2 }}></Twitter>
                        <Instagram sx={{ pl: 2 }}></Instagram>
                    </Box>
                </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
        </DialogContent>
    </Dialog>
  )
}

export default ProductDetail