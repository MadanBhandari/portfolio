import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const HomeMain = styled.div`
  position: relative;
  padding: 1em;
  h3{
    font-size: 2em;
  }
`
const IntroContent = styled.div`
  position: relative;
  font-size: 1.5em;
  max-width: 600px;
  line-height: 1.5em;
  font-weight: 300;
  span{
    font-weight: 600;
  }
`

const HomePage = () => (
  <Layout>
    <Helmet
      title='Madan Bhandari - Fullstack Developer'
      meta={[
        { name: 'description', content: 'Madan Bhandari Portfolio' },
        { name: 'keywords', content: 'fullstack, developer, portfolio' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"></link>
    </Helmet>
    <HomeMain>
      <h3>Hello!</h3>
      <IntroContent>
        I'm <span>Madan Bhandari</span>, a frontend minded fullstack software engineer building web a better place.
      </IntroContent>
    </HomeMain>
  </Layout>
)

export default HomePage
