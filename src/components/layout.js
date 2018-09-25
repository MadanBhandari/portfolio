import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './layout.css'

const AppLayout = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <AppLayout>
    {/* <Header /> */}
    {children}
  </AppLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
