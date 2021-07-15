import React, {useState, createContext} from 'react'

export const Context = createContext();

export const ContextProvider = props =>  {
    const [sound, setSound] = useState('');
    
    return (
      <Context.Provider value={[sound, setSound]}>
          {props.children}
      </Context.Provider>
    )
}

