import React from "react"
import useSWR from "swr"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import { fetcher } from "../api/api"

const AboutPage = () => {
  const { data } = useSWR(
    `${process.env.GATSBY_STRAPI_API_URL}/api/about?populate=*`,
    fetcher
  )

  if (!data) {
    return null
  }

  const { title, blocks } = data.data.attributes

  const seo = {
    metaTitle: data.data.attributes.metaTitle,
    metaDescription: data.data.attributes.metaDescription,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      {/* <Headings title={title} /> */}

      <BlocksRenderer blocks={blocks} />
    </Layout>
  )
}

export default AboutPage
