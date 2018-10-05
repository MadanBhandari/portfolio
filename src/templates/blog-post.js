import React from 'react'
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
  img{
    max-width : 100%;
    height: auto;
  }
  blockquote {
    position: relative;
    background: #ecebeb;
    padding: 0.125em 0;
    border-left: solid 2px #ccc;
    padding-left: 1em;
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
          <p>Posted on {post.frontmatter.date}</p>
        </PostHeader>
        <PostContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </PostWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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