import PersistedUserPolicy from 'src/policies/PersistedUserPolicy'
import AppContextProvider from 'src/contexts/AppContext'

const App = ({ children }) => {
  return (
    <PersistedUserPolicy>
      {(props) => (
        <AppContextProvider {...props}>{children}</AppContextProvider>
      )}
    </PersistedUserPolicy>
  )
}

export default App
