import PersistedUserPolicy from 'src/policies/PersistedUserPolicy'

const App = ({ children }) => {
  return <PersistedUserPolicy>{children}</PersistedUserPolicy>
}

export default App
