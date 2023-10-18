import { createContext, useContext, useState } from "react";

//1. create a context
export const AuthContext = createContext();

//you can create hook for context here without define in all other components
// see logout page for using this
export const useAuth = () => useContext(AuthContext)

//2. Share the context with other Components
export default function AuthProvider({children}) {

    //3.put some state in the context
    const [number, setNumber] = useState(10)
    const [isAuthenticated, setAuthenticated] = useState(false)

    // if we want to update state by some seconds like here 15000
    // setInterval(() => setNumber(number*10), 15000)

    //const valueToShare = {number, isAuthenticated, setAuthenticated}

    function login(username, password) {
        if(username==='nikita' && password === 'dummy') {
          setAuthenticated(true)
            console.log('Success');
            return true;
        }
        else {
            setAuthenticated(false)
            console.log('Failed');
            return false;
        }
    }

    function logout() {
        setAuthenticated(false)
        console.log('hii');
      }

    return (
        <AuthContext.Provider value = {{number, isAuthenticated, setAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 