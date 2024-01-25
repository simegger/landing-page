import { Link } from "gatsby"
import React from "react"
import * as styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <header className="bg-green-900">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" className="text-xl font-medium">
          <img
            className={styles.logo}
            src={`${process.env.GATSBY_STRAPI_API_URL}/uploads/logo_b27ecce0d5.png`}
            alt="logo"
          ></img>
        </Link>
        {/* <div className="flex flex-row items-baseline justify-end text-white">
          Buche jetzt ein unverbindliches Erstgespräch 🎉
        </div> */}
        <div className="invisible flex flex-row items-baseline justify-end text-center min-[450px]:visible">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://calendly.com/jessicaseidel/kennenlernen?month=2023-11",
                "_blank"
              )
            }
            class="mb-2 me-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-400 px-5 py-2.5 text-center text-lg text-sm font-medium text-white hover:bg-gradient-to-bl"
          >
            Jetzt Unverbindliches Erstgespräch buchen
          </button>
        </div>
        {/* <div className="flex flex-row items-baseline justify-end">
          <button class="text-bold border border-stone-200 bg-stone-200 px-4 py-2 text-teal-800 hover:bg-transparent hover:text-stone-200">
            Buche jetzt ein unverbindliches Erstgespräch 🎉
          </button>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar
