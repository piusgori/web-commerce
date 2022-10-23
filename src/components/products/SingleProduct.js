import { Favorite, FitScreen, Share } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'
import useDialogModal from '../../hooks/useDialolModal'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductDetail from '../productDetail'
import ProductMeta from './ProductMeta'

const SingleProduct = ({ product, matches }) => {

  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

  return (
    <>
      <Product>
          <ProductImage src={product.image}></ProductImage>
          <ProductMeta product={product} matches={matches}></ProductMeta>
          <ProductActionsWrapper>
            <Stack direction='row'>
              <ProductFavButton isfav={1}><Favorite></Favorite></ProductFavButton>
              <ProductActionButton><Share color='primary'></Share></ProductActionButton>
              <ProductActionButton onClick={() => showProductDetailDialog()}><FitScreen color='primary'></FitScreen></ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant='contained'>Add to Cart</ProductAddToCart>
      <ProductDetailDialog product={product}></ProductDetailDialog>
    </>
  )
}

export default SingleProduct