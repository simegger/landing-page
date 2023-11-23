import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-neutral-100 py-8 text-neutral-700">
      <div className="container">
        <a href="https://authentischsein-coaching.de/">
          Copyright {currentYear} Jessics Seidel
        </a>
      </div>
    </footer>
  )
}

export default Footer
