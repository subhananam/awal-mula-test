import React from 'react'
import { Container, Grid } from '@mui/material'
import { Switch, Route } from 'react-router-dom'
import Home from 'src/Pages/Home'
import ProductsByCategory from 'src/Pages/Products/ProductsByCategory'

const ContentWrapper = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <Grid container spacing={2} style={{marginTop: 30}}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/category/:categoryId/products">
              <ProductsByCategory />
            </Route>
          </Switch>
      </Grid>
    </Container>
  )
}

export default ContentWrapper
