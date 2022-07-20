import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(false)
const AuthUpdateContext = createContext(() => { })
export function useAuth(){
    return useContext(AuthContext)
}
export function useUpdateAuth(){
    return useContext(AuthUpdateContext)
}
export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false)
    function toggleAuth() {
        setAuth(!auth)
    }

    useEffect(()=>{
        const login = Cookies.get("auth")
        if(login){
          setAuth(true)
        }
    },[])
    
    return (
        <AuthContext.Provider value={auth}>
            <AuthUpdateContext.Provider value={toggleAuth}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

