import React from "react"
import useSWR from "swr"
import * as cx from "classnames"

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
          <div className={cx(styles.heroText, "shadow-md")}>
            <div className="pl-10 pr-10 pt-10 lg:pt-20">
              <span class="text-left font-mono text-xs font-light text-teal-600">
                FINDE ZU DIR SELBST.
              </span>
              <div class="text-bold mt-6 font-sans text-3xl lg:text-4xl">
                AuthentischSein.
              </div>
              <div class="mt-3">
                Wie du innerhalb von 90 Tagen zu der authentischen und mutigen
                Frau wirst, die Du innerlich schon immer sein wolltest und deine
                Ängste und Selbstzweifel über Bord wirfst. 🎇
              </div>
              <button
                onClick={() => scrollTo("video")}
                class="mt-6 bg-teal-800 px-4 py-2 font-bold text-white hover:bg-teal-500 md:mt-12"
              >
                Zur Online-Schulung
              </button>
            </div>
          </div>
        </div>
        <div className={cx(styles.heroWrapper, "hidden md:block")}>
          <img
            alt="Cool"
            src={`${process.env.GATSBY_STRAPI_API_URL}/uploads/jessi_b138ae670f.jpg`}
          />
        </div>
        <div className={cx(styles.heroWrapperSmall, "block md:hidden")}>
          <img
            alt="Cool"
            src={`${process.env.GATSBY_STRAPI_API_URL}/uploads/jessi_b138ae670f.jpg`}
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
