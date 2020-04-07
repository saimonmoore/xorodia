import { Link, routes, usePageLoadingContext } from '@redwoodjs/router'

import Loading from 'src/components/Loading'

const AppLayout = ({ children }) => {
  const { loading } = usePageLoadingContext()

  return (
    <>
      {!loading && <Loading />}
      {loading && (
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
      )}
      <main>{children}</main>
    </>
  )
}

export default AppLayout
