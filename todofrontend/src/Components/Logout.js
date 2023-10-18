import React from 'react'
import { useAuth } from '../security/AuthContext'

function Logout() {

    const authContext = useAuth()
    console.log("Logout : " + authContext.number)
    console.log("Logout : " + authContext.isAuthenticated)


  return (
    <div>Ok, Bye</div>
  )
}

export default Logout