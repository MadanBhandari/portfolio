import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'

const PageTitle = styled.div`
  position: relative;
  padding: 2em 0;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  text-align: center;
`

const ProjectList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1.05rem;
`
const ProjectPreview = styled.article`
  position: relative;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  margin-left: -2.1rem;
  margin-right: -2.1rem;
  margin-bottom: 1.05rem;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 2.1rem 3.15rem;
  width: 40%;
  &:hover{
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
    transform: translateY(-4px);
  }
`
const ProjectTitle = styled.div`
  font-size : 1.5em;
  a{
    display: block;
    color: inherit;
    text-decoration : none; 
  }
`

export default function ProjectPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet
        title='Projects - Madan Bhandari'
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
      </Helmet>
      <PageTitle>Projects</PageTitle>
      <ProjectList>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <ProjectPreview key={post.id} href={post.frontmatter.path}>
                <ProjectTitle>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </ProjectTitle>
              </ProjectPreview>
            );
          })}
      </ProjectList>
    </Layout>
  );
}
export const pageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter : { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
          	collection
        	}
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