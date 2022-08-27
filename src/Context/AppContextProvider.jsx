import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { reducer } from '../Reducer/reducer';
import { store } from '../Reducer/store';

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

  const [state , dispatch] = useReducer( reducer , store )  
  
  
  const value = {
    state,
    dispatch
  }  

  return (
    <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
  )
}
