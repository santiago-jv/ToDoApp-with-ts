import React, { useReducer } from 'react'
import { initialState } from '../constants'
import { ContextValuesInterface } from '../interfaces/ContextInterface'
import reducer from '../reducer'



export const AppContext = React.createContext<ContextValuesInterface>({
    state: initialState,
    dispatch: () => {}
  });
 

const ContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <AppContext.Provider value={{state,dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider
