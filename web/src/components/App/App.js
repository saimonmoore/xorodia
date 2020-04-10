import PersistedUserPolicy from 'src/policies/PersistedUserPolicy'
import AuthContextProvider from 'src/contexts/AuthContext'
import AppContextProvider from 'src/contexts/AppContext'

const App = ({ children }) => {
  return (
    <PersistedUserPolicy>
      {(props) => (
        <AuthContextProvider {...props}>
          <AppContextProvider>{children}</AppContextProvider>
        </AuthContextProvider>
      )}
    </PersistedUserPolicy>
  )
}

export default App
