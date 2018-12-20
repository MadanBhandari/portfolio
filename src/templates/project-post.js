import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'

const PostWrapper = styled.div`
  position : relative;
`
const PostHeader = styled.div`
  position : relative;
  p {
    padding-left: 0.5em;
    font-style : italic;
    color: #ccc;
  }
`
const PostContent = styled.div`
  position : relative;
  line-height: 1.25em;
  h1{
    margin-bottom: 1.75rem;
  }
  a{
    font-size: 102%;
    color: #663399;
    text-decoration: none;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid #e0d6eb;
    box-shadow: inset 0 -2px 0px 0px #e0d6eb;
    font-weight: bold;
    &:hover{
      background: #e0d6eb;
    }
  }
  ul, ol{
    margin-top: 1.05rem;
  }
  ul {
    margin-left: 1.4rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.05rem;
    list-style-position: outside;
    list-style-image: none;
  }
  img{
    max-width : 100%;
    height: auto;
  }
  blockquote {
    margin-left: 0;
    margin-right: 1.4rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.05rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.05rem;
    border-left: 0.2625rem solid #f5f3f7;
  }
`

export default function Template({
  data 
}) {
  const post = data.markdownRemark
  return (
    <Layout>
     <Helmet title={`${post.frontmatter.title} - Madan Bhandari`} />
      <PostWrapper>
        <PostHeader>
          <h2>
            {post.frontmatter.title}
          </h2>
          {/* <p>Posted on {post.frontmatter.date}</p> */}
        </PostHeader>
        <PostContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`