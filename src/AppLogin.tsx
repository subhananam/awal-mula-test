import React, { useContext } from 'react'
import { AppStoreClassContext } from './Store/AppStore'
import { observer } from 'mobx-react-lite'
import Login from './Pages/Login/Login'
import AppRouter from './AppRouter'

const AppLogin = observer(() => {
  const store = useContext(AppStoreClassContext)
  return (
    <>
      {store.isLoggedIn ? (
        <AppRouter/>
      ) : (
        <Login />
      )}
    </>
  )
})

export default AppLogin
