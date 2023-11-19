import React from "react"
import BlockRichText from "./block-rich-text"
import BlockMedia from "./block-media"
import BlockQuote from "./block-quote"
import BlockSlider from "./block-slider"

const componentsMap = {
  "shared.rich-text": BlockRichText,
  "shared.media": BlockMedia,
  "shared.quote": BlockQuote,
  STRAPI__COMPONENT_SHARED_SLIDER: BlockSlider,
}

const Block = ({ block }) => {
  console.log("Block", block)
  const Component = componentsMap[block.__component]
  console.log("comp", Component)

  if (!Component) {
    return null
  }

  return <Component data={block} />
}

const BlocksRenderer = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => (
        <Block key={`${index}${block.__component}`} block={block} />
      ))}
    </div>
  )
}

export default BlocksRenderer
