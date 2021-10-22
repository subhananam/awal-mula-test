import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import ProductCard from 'src/Components/Product/ProductCard'
import dummyProducts from 'src/Dummy/dummyProducts'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { AppStoreClassContext } from 'src/Store/AppStore'

const ProductsByCategory = observer(() => {
  let { categoryId } = useParams<{ categoryId: string }>()
  const filteredProduct = dummyProducts.filter(
    (item) => item.categoryId.toString() === categoryId,
  )
  const store = useContext(AppStoreClassContext)
  return (
    <Grid container spacing={2}>
      {filteredProduct.length > 0 ? (
        filteredProduct.map((item, index) => {
          const productOnCart = store.getCartItems.find(
            (cart) => cart.productId === item.id,
          )
          const isExist = productOnCart !== undefined
          const totalOnCart = productOnCart ? productOnCart.amount : 0
          return (
            <ProductCard
              key={index}
              {...item}
              isExistOnCart={isExist}
              totalOnCart={totalOnCart}
            />
          )
        })
      ) : (
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>There is no Product yet</div>
        </div>
      )}
    </Grid>
  )
})

export default ProductsByCategory
