import { createContext, useReducer, } from "react";

const INITAL_STATE = {
    user:null,
    error:null,
    loading:false,
}

export const RegisterContext = createContext(INITAL_STATE);

export const RegisterReducer = (state,action) => {
    const {type,payload} = action;
    if(type=="REGISTER"){
        return {
            user:payload,
            error:null,
            loading:false,
        }
    }
}

export const RegisterContextProvider = ({children}) => {
    const [state,dispatch ] =useReducer(RegisterReducer,INITAL_STATE);

    return (
        <RegisterContext.Provider value={{
                user:state.user,loading:state.loading,dispatch,error:state.error}}>
                {children}
        </RegisterContext.Provider>
    )
}