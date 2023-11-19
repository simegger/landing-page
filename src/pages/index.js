import React from "react"
import useSWR from "swr"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"
import { fetcher } from "../api/api"
import * as styles from "./index.module.css"

const IndexPage = () => {
  const { data } = useSWR(
    `${process.env.GATSBY_STRAPI_API_URL}/api/articles?populate=*`,
    fetcher
  )

  if (!data) {
    return null
  }

  const scrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <div className={styles.mainSection}>
        <div className={styles.heroTextWrapper}>
          <div className={styles.heroText}>
            <div className={styles.textWrapper}>
              <span class="text-left font-mono text-xs font-light text-teal-600">
                GROUNDED IN YOUR ESSENCE.
              </span>
              <div class="mt-6 font-sans text-6xl">soulwork</div>
              <div class="mt-3">
                Erkenne dein tiefstes Potenzial, bringe deine 'Seelenessenz' in
                die Welt und werde mit deinem Wirken für deine Soulkundinnen
                sichtbar?
              </div>
              <button
                onClick={() => scrollTo("video")}
                class="mt-12 bg-teal-800 px-4 py-2 font-bold text-white hover:bg-teal-500"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroWrapper}>
          <img
            alt="Cool"
            src={`${process.env.GATSBY_STRAPI_API_URL}/uploads/jessi_f4cc95b185.jpg`}
          />
        </div>
      </div>
      <main>
        <Video />
        {/* <Headings title="Hello" description="Hello" /> */}
        {/* <ArticlesGrid articles={data.data} /> */}
      </main>
    </Layout>
  )
}

export default IndexPage
