import React from "react"
import useSWR from "swr"
import { Helmet } from "react-helmet"
import { fetcher } from "../api/api"

const Seo = ({ seo = {} }) => {
  const { data } = useSWR(
    `${process.env.STRAPI_API_URL}/api/global?populate=*`,
    fetcher
  )

  if (!data) {
    return null
  }

  const { siteName, defaultSeo, favicon } = data?.data?.attributes

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo }

  // Add site name to title
  fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      )
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      )
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.url
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favicon.localFile?.url,
        },
      ]}
      meta={metaTags}
    />
  )
}

export default Seo
