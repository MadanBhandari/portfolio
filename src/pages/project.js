import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'

const BlogList = styled.div`
  padding-top: 1.05rem;
`
const BlogPreview = styled.article`
  position: relative;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  margin-left: -2.1rem;
  margin-right: -2.1rem;
  margin-bottom: 1.05rem;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 2.1rem 3.15rem;
  &:hover{
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
    transform: translateY(-4px);
  }
`
const BlogTitle = styled.div`
  font-size : 1.5em;
  a{
    display: block;
    color: inherit;
    text-decoration : none; 
  }
`

const BlogInfo = styled.div`
  font-size: 1em;
  color: #ccc;
  padding-top: 0.75em;
`

export default function BlogPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet
        title='Blogs - Madan Bhandari'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
      </Helmet>
      <BlogList>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <BlogPreview key={post.id} href={post.frontmatter.path}>
                <BlogTitle>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </BlogTitle>
                <BlogInfo>
                  Posted on {post.frontmatter.date}
                </BlogInfo>
              </BlogPreview>
            );
          })}
      </BlogList>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter : { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;