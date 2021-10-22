import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppBarWithSearch from './Components/AppBarWithSearch'
import ContentWrapper from './Components/ContentWrapper/ContentWrapper'

const AppRouter = () => {
  return (
    <Router>
      <AppBarWithSearch />
      <ContentWrapper />
    </Router>
  )
}

export default AppRouter
