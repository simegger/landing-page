import React from "react"
import * as cx from "classnames"
import * as styles from "./video.module.css"

const video = () => {
  return (
    <div
      className={cx("mt-12 bg-stone-100 lg:p-20", styles.videoWrapper)}
      id="video"
    >
      <iframe
        class="h-full w-full"
        src="https://player.vimeo.com/video/886396983?h=5b484a25d6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://calendly.com/jessicaseidel/kennenlernen?month=2023-11",
              "_blank"
            )
          }
          class="mb-2 me-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-400 px-5 py-2.5 text-center text-lg text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-800"
        >
          Jetzt Unverbindliches Erstgespräch buchen
        </button>
      </div>
    </div>
  )
}

export default video
