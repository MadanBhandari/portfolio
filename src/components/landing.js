import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'

const LandingWrapper = styled.div`
  width: 100%;
  -webkit-overflow-scrolling: touch;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  position: relative;
  z-index: 2;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  &::before{
    content: '';
    display: block;
    background-image: linear-gradient(40deg, #ADCCBD 0%, #576A9C 100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    -moz-pointer-events: none;
    -webkit-pointer-events: none;
    -ms-pointer-events: none;
    pointer-events: none;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`
const LandingOuter = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  z-index: 1;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  box-shadow: 0rem 1.375rem 1.75rem 0rem rgba(27,54,74,0.09);
  border-radius: 0.375rem 0.375rem 0.375rem 0.375rem;
  -moz-transition: opacity 1s ease 0s,-moz-transform 1s ease 0s;
  -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s ease 0s;
  -ms-transition: opacity 1s ease 0s,-ms-transform 1s ease 0s;
  transition: opacity 1s ease 0s,transform 1s ease 0s;
  .inner{
    background-color: #FFFFFF;
    overflow-x: hidden;
    position: relative;
    z-index: 1;
    padding: 3rem 2rem;
    max-width: 100%;
    width: 25rem;
    padding-top: 0;
    .name{
      margin : 0.5em 0;
    }
    .image{
      margin-top : 1em;
      img{
        margin: 0;
        max-height: 120px;
      }
    }
  }
`
const SocialIcons = styled.div`
  letter-spacing: 0;
  font-size: 1.125em;
  width: calc(100% + 0.75rem);
  margin-left: -0.375rem;
  margin-bottom: 0;
  display: flex;
  align-items : center;
  justify-content: center;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 2em;
    height: 2em;
    text-decoration: none;
    color: #E4EBF0;
    border: solid 1px;
    margin: 0 0.35em;
    &.twitter{
      &:hover{
        color: #1da1f2;
      }
    }
    &.mail{
      &:hover{
        color: #dd4b39;
      }
    }
    &.stack-overflow{
      &:hover{
        color: #f48024;
      }
    }
    &.github{
      &:hover{
        color: #4078c0;
      }
    }
    &.linkedin{
      &:hover{
        color: #0077B5;
      }
    }
  }
`

const Landing = () => (
  <StaticQuery
    query={graphql`
      query LandingPageQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LandingWrapper>
          <LandingOuter>
            <div className="inner">
              <div className="image">
                <img src="images/profile.svg" alt=""/>
              </div>
              <h3 className="name">
                Madan Bhandari
              </h3>
              <p className="job">
                FullStack Developer <br/> <i>New Delhi, India</i>
              </p>
              <hr />
              <SocialIcons>
                <a className="twitter" href="https://twitter.com/MadankBhandari"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="github" href="https://github.com/MadanBhandari"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="stack-overflow" href="https://stackoverflow.com/users/3040180"><FontAwesomeIcon icon={faStackOverflow} /></a>
                <a className="linkedin" href="/https://www.linkedin.com/in/madankbhandari/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </SocialIcons>
            </div>
          </LandingOuter>
        </LandingWrapper>
      </>
    )}
  />
)

Landing.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Landing
