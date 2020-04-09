import {
  Link,
  routes,
  navigate,
  usePageLoadingContext,
} from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'
import App from 'src/components/App'
import Loading from 'src/components/Loading'

const Layout = ({ children }) => {
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

const AppLayout = ({ children }) => {
  return (
    <App>
      <Layout>{children}</Layout>
    </App>
  )
}

export default AppLayout
