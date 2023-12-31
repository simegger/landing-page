const path = require("path")

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const response = await fetch(
    `${process.env.GATSBY_STRAPI_API_URL}/api/articles?populate=*`
  )
  const articles = await response.json()

  if (articles.data.length > 0) {
    articles.data.forEach((article) => {
      console.log(article)
      createPage({
        path: `/article/${article.attributes.slug}`,
        component: articlePost,
        context: {
          data: {
            article,
          },
        },
      })
    })
  }
}
