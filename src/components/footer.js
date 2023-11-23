import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-neutral-100 py-8 text-neutral-700">
      <div className="container">
        <a
          href="https://authentischsein-coaching.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3"
        >
          Copyright {currentYear} Jessica Seidel
        </a>
        <span>|</span>
        <a
          className="ml-3 mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://authentischsein-coaching.de/impressum"
        >
          Impressum
        </a>
        <span>|</span>
        <a
          className="ml-3 mr-3"
          target="_blank"
          rel="noopener noreferrer"
          href="https://authentischsein-coaching.de/datenschutz"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  )
}

export default Footer
