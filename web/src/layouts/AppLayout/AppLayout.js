import {
  Link,
  routes,
  navigate,
  usePageLoadingContext,
} from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'

import Loading from 'src/components/Loading'

const AppLayout = ({ children }) => {
  const { loading } = usePageLoadingContext()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return navigate(routes.root())

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
