import React, { useState } from 'react'

export const AppContext = React.createContext()
export const AppContextConsumer = AppContext.Consumer

const AppContextProvider = ({ children }) => {
  const [singer, setSinger] = useState()

  return (
    <AppContext.Provider
      value={{
        data: {
          singer,
        },
        actions: { setSinger },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
