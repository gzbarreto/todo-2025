import { NavLink, Outlet } from "react-router"
import Text from "../components/text"
import Header from "../core-components/header"

export default function LayoutMain() {
  return (
    <>
      <Header />
      <main className="md:mt-8 mt-4">
        <Outlet />
      </main>
      <footer className="my- md:my-10">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  )
}
