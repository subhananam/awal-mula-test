import React from 'react'
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material'
import { AppStoreClass, AppStoreClassContext } from './Store/AppStore'
import AppLogin from './AppLogin'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1A4723',
      },
    },
  })
  return (
    <AppStoreClassContext.Provider value={AppStoreClass}>
      <ThemeProvider theme={theme}>
        <AppLogin/>
      </ThemeProvider>
    </AppStoreClassContext.Provider>
  )
}

export default App
