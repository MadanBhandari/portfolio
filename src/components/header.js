import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position : relative;
  background-color: #fff;
  margin-bottom : 1.45rem;
`
const HeaderContent = styled.div`
  max-width : 960px;
  margin : 0 auto;
  padding : 1.4rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LeftNav = styled.div`
  position : relative;
  .logo{
    color: #444452;
    font-weight : 600;
    text-decoration : none;
  }

`
const RightNav = styled.div`
  position : relative;
  a {
    padding-left: 1.75em;
    color: #444452;
    text-decoration : none;
  }
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <LeftNav>
        <Link className='logo' to="/">
          MB
        </Link>
      </LeftNav>
      <RightNav>
        <Link to="/home">
          Home
        </Link>
        <Link to="/blog">
          Blogs
        </Link>
      </RightNav>
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
