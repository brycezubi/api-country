import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="contenedor mt-10 pb-10">
        <Outlet/>
      </main>
    </>
  )
}

export default Layout