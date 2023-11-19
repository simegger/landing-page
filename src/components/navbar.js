import { Link } from "gatsby"
import React from "react"
import * as styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <header className="bg-teal-800">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" className="text-xl font-medium">
          <img
            className={styles.logo}
            src={`${process.env.STRAPI_API_URL}/uploads/logo_b27ecce0d5.png`}
            alt="logo"
          ></img>
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          <button class="text-bold border border-stone-200 bg-stone-200 px-4 py-2 text-teal-800 hover:bg-transparent hover:text-stone-200">
            JETZT ANMELDEN
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
