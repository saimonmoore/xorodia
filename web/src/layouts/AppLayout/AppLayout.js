import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Xorodia</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
