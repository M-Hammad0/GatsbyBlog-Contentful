import React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.contentfulPost

  return (
    <Layout location={location} title={""}>
      
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
      
        <header>
          <h1 itemProp="headline">{post.title}</h1>
        </header>
        <img src={post.image.fluid.src} alt={post.title} />
        <hr />
        <section
          dangerouslySetInnerHTML={{ __html: post.content.content }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulPost(slug: {eq: $slug}){
      title
      content{
        content
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`
