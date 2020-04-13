import React, { useState } from 'react'

export const AppContext = React.createContext()
export const AppContextConsumer = AppContext.Consumer

const AppContextProvider = ({ children }) => {
  const [singer, setSinger] = useState()
  const [director, setDirector] = useState()

  return (
    <AppContext.Provider
      value={{
        data: {
          singer,
          director,
        },
        actions: { setSinger, setDirector },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
