import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="py-8">
        <Outlet />
      </main>
    </>
  )
}

export default Layout