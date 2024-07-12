import React, { useContext} from 'react';

const AppContext= React.createContext()


const AppProvider = ({children}) => {

  return (
    <AppContext.Provider value={{children
    }}>

      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
  useContext(AppContext)
}
export {AppProvider, AppContext}
