import React from "react"
import { Link } from "gatsby"

const ArticleCard = ({ article }) => {
  const { attributes } = article
  console.log(article)
  return (
    <Link
      to={`/article/${attributes.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <img
        src={`http://127.0.0.1:1337${article?.attributes?.cover?.data?.attributes?.url}`}
        alt={attributes.cover?.alternativeText}
      />
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{attributes.title}</h3>
        <p className="mt-2 line-clamp-2 text-neutral-500">
          {attributes.description}
        </p>
      </div>
    </Link>
  )
}

export default ArticleCard
