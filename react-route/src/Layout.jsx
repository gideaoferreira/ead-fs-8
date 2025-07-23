import { NavLink, Outlet } from "react-router"
import MainMenu from "./components/main-menu/MainMenu"

function Layout() {
  return (
    <>
      <MainMenu />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
