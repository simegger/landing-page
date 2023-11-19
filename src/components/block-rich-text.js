import React from "react"

const BlockRichText = ({ data }) => {
  console.log(data)
  return (
    <div className="prose mx-auto py-8">
      <span>{data.body}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.body,
        }}
      />
    </div>
  )
}

export default BlockRichText
