import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from 'styled-components'
import Layout from '../components/layout'

const BlogList = styled.div`
  padding-top: 3em;
`
const BlogPreview = styled.div`
  position: relative;
  margin: 1em 0;
  padding: 0.5em 0;
`
const BlogTitle = styled.div`
  font-size : 1.5em;
  a{
    text-decoration : none; 
  }
`

const BlogInfo = styled.div`
  font-size : 0.75em;
  color: #ccc;
  padding-left : 0.5em;
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
        <html lang="en" />
      </Helmet>
      <BlogList>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <BlogPreview key={post.id}>
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
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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