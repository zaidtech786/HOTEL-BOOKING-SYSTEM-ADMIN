import {  useState } from 'react';
import React from 'react';

export const AppContext = React.createContext({});
export const AppProvider = ({children}) => {
    const [icon,setIcon] = useState("Zaid")
   return <AppContext.Provider value={{icon,setIcon}}>
          {children}
   </AppContext.Provider>
}