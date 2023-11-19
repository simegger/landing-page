import React from "react"
import * as styles from "./video.module.css"

const video = () => {
  return (
    <div className="mt-12 bg-stone-100 p-16" id="video">
      <iframe
        className={styles.videoPlayer}
        width="70%"
        height="600px"
        src="https://www.youtube.com/embed/Cbqg6kQbNVU?si=SvOUaIKQvHLxeA7L&amp;start=2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default video
