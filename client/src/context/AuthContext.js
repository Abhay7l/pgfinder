import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    // we check if we have a user in the loaclstorage already and update our user in the inital state with the user present in loaclstorage else we set it to null;
    // what this does is if we refresh our application then its gonna set the user otherwise we would be logged out every time we refresh our applicatoion;
    user:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state,action) => {
    const {type,payload} = action;
    switch (type) {
        case "LOGIN_START":
            return {
                user:null,
                loading:true,
                error:null,
            };
        case "LOGIN_SUCCESS":
            return {
                user:payload,
                loading:false,
                error:null,
            } 
        case "LOGIN_FAILURE":
            return {
                user:null,
                loading:false,
                error:payload,
            };
        case "LOGOUT":
            return {
                user:null,
                loading:false,
                error:null,
            }
        default:
            return state;
    }
}


export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(() => {
        // we store our logged user in local storage so that on refreshing we are not logged out;
       localStorage.setItem("user",JSON.stringify(state.user));
    //    the above method set the key named "user" with with the value provided as the second parameter;
    },[state.user]);


    return (
        <AuthContext.Provider 
        value={{
            user:state.user,
            loading:state.loading,
            error:state.err,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}