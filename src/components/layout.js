import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import './layout.css'

const AppWrapper = styled.div`
  
`
const AppContent = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  padding-top: 4em;
`

const Layout = ({ children }) => (
  <AppWrapper>
    <Header />
    <AppContent>
      {children}
    </AppContent>
  </AppWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
