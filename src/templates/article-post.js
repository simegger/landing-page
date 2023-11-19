import React from "react"
import useSWR from "swr"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"
import { fetcher } from "../api/api"

const ArticlePage = () => {
  const pathname = window.location.pathname
  const articleId = pathname.replace("/article/", "")

  const { data } = useSWR(
    `${process.env.GATSBY_STRAPI_API_URL}/api/articles?populate=*`,
    fetcher
  )
  if (!data) return null

  const article = data.data.find((item) => item.attributes.slug === articleId)

  const seo = {
    metaTitle: article?.attributes?.title,
    metaDescription: article?.attributes?.description,
  }

  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">
          {article?.attributes?.title}
        </h1>
        <p className="mt-4 text-2xl text-neutral-500">
          {article?.attributes?.description}
        </p>
        <img
          src={`http://127.0.0.1:1337${article?.attributes?.cover?.data?.attributes?.url}`}
          alt={article?.attributes?.cover?.data?.attributes?.alternativeText}
          className="mt-6"
        />
      </header>
      <main className="mt-8">
        <BlocksRenderer blocks={article?.attributes?.blocks || []} />
      </main>
    </Layout>
  )
}

export default ArticlePage
