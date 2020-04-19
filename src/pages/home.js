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

const TechStack = styled.div`
  position: relative;
  h1 {
    padding-top: 2em;
    padding-bottom: 1em;
  }

  ul {
    column-count: 4;
    list-style: none;
  }

  li {
    padding: 1em;
  }

  img {
    height: 5em;
    width: auto;
  }
`;

const Clients = styled.div`
  position: relative;
  h1 {
    padding-top: 2em;
    padding-bottom: 1em;
  }

  ul {
    column-count: 3;
    list-style: none;
  }

  li {
    padding: 1em;
    padding-bottom: 3em;
    /* text-align: center; */
  }

  img {
    height: 5em;
    width: auto;
    &.long {
      width: 10em;
      height: auto;
    }
  }
`;

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
        I'm <span>Madan Bhandari</span>, New Delhi based Fullstack NodeJS Developer. I have been working on web development since 2015.
      </IntroContent>
      <TechStack>
        <h1>Technologies I use</h1>
        <ul>
          <li>
            <a href="#" title="Node JS">
              <img src="/icons/nodejs.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Meteor JS">
              <img src="/icons/meteor.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="React JS">
              <img src="/icons/react.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="HTML5">
              <img src="/icons/html5.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="CSS3">
              <img src="/icons/css3.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="git and github">
              <img src="/icons/github.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Amazon Web Service">
              <img src="/icons/aws.svg"></img>
            </a>
          </li>
        </ul>
      </TechStack>
      <Clients>
        <h1>Brands & Companies I have worked with</h1>
        <ul>
          <li>
            <a href="#" title="DigiTopper Pvt Ltd">
              <img src="/logo/digitopper.png" className="long"></img>
            </a>
          </li>
          <li>
            <a href="#" title="The Key Solution">
              <img src="/logo/tks.png"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Emurgo HK">
              <img src="/logo/emurgo.png" className="long"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Sparklin Innovations">
              <img src="/logo/sparklin.png"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Unit Digit Pvt Ltd">
              <img src="/logo/unit-digit.png" className="long"></img>
            </a>
          </li>
          <li>
            <a href="#" title="Ant Animation Studio">
              <img src="/logo/ant.png"></img>
            </a>
          </li>
        </ul>
      </Clients>
    </HomeMain>
  </Layout>
)

export default HomePage
