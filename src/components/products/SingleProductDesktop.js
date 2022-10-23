import { Favorite, FitScreen, Share } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import useDialogModal from '../../hooks/useDialolModal'
import ProductDetail from '../productDetail'

const SingleProductDesktop = ({ product, matches }) => {

  const [showOptions, setShowOptions] = useState(false);
  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

  const handleMouseEnter = () => { setShowOptions(true); };
  const handleMouseLeave = () => { setShowOptions(false); };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProductImage src={product.image}></ProductImage>
          <ProductFavButton isfav={0}><Favorite></Favorite></ProductFavButton>
          {showOptions && <ProductAddToCart show={showOptions} variant='contained'>Add To Cart</ProductAddToCart>}
          <ProductActionsWrapper show={showOptions}>
            <Stack direction='column'>
              <ProductActionButton><Share color='primary'></Share></ProductActionButton>
              <ProductActionButton onClick={() => showProductDetailDialog()}><FitScreen color='primary'></FitScreen></ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches}></ProductMeta>
      <ProductDetailDialog product={product}></ProductDetailDialog>
    </>
  )
}

export default SingleProductDesktop