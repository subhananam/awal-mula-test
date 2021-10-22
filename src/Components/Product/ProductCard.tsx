import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Alert, Grid, IconButton, Snackbar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { priceHelper } from 'src/Helper/Currency'
import { AppStoreClassContext } from 'src/Store/AppStore'
import { observer } from 'mobx-react-lite'

export interface IProduct {
  id: number
  categoryId: number
  image: string
  title: string
  price: number
  brand: string
  isExistOnCart?: boolean
  totalOnCart?: number
}

const ProductCard = observer((props: IProduct) => {
  const store = useContext(AppStoreClassContext)
  const [notif, setNotif] = useState(false)
  return (
    <Grid item md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={props.title}
          height="300"
          image={props.image}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight="600"
          >
            {props.brand}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="600"
            color="#607463"
          >
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight="600"
          >
            Rp. {priceHelper(props.price)}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {props.isExistOnCart ? (
            <>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => {
                  store.removeFromCart(props.id)
                  setNotif(true)
                }}
                color="warning"
              >
                <RemoveIcon />
              </IconButton>
              {props.totalOnCart ? props.totalOnCart : 0}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => {
                  store.addToCart(props.id)
                  setNotif(true)
                }}
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </>
          ) : (
            <Button
              size="medium"
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              onClick={() => {
                store.addToCart(props.id)
                setNotif(true)
              }}
            >
              Keranjang
            </Button>
          )}

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
        open={notif}
        autoHideDuration={3000}
        onClose={() => setNotif(false)}
      >
        <Alert
          onClose={() => setNotif(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Produk berhasil ditambahkan ke Keranjang
        </Alert>
      </Snackbar>
    </Grid>
  )
})
export default ProductCard
