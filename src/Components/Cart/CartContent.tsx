import React, { useContext } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { observer } from 'mobx-react-lite'
import { AppStoreClassContext } from 'src/Store/AppStore'
import dummyProducts from 'src/Dummy/dummyProducts'
import { priceHelper } from 'src/Helper/Currency'
import { Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const CartContent = observer(() => {
  const store = useContext(AppStoreClassContext)
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
        <Typography variant="h6" style={{ marginLeft: 20 }}>
          Keranjang
        </Typography>
        <IconButton edge="end" aria-label="comments" style={{ marginRight: 5 }} onClick={() => store.setCartShow(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {store.getCartItems.map((cart, index) => {
          const labelId = `checkbox-list-secondary-label-${cart}`
          const product = dummyProducts.find(
            (item) => item.id === cart.productId,
          )
          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => store.removeFromCart(cart.productId)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt={product?.title} src={product?.image} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={product?.title} />
                <ListItemText id={labelId} primary={`${cart.amount}x`} />
                <ListItemText
                  id={labelId}
                  primary={`Rp. ${priceHelper(
                    (product?.price ? product?.price : 0) * cart.amount,
                  )}`}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )
})

export default CartContent
