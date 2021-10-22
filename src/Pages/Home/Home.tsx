import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import ProductCard from 'src/Components/Product/ProductCard'
import dummyProducts from 'src/Dummy/dummyProducts'
import { observer } from 'mobx-react-lite'
import { AppStoreClassContext } from 'src/Store/AppStore'

const Home = observer(() => {
  const store = useContext(AppStoreClassContext)
  return (
    <Grid container spacing={2}>
      {dummyProducts.map((item, index) => {
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
      })}
    </Grid>
  )
})

export default Home
