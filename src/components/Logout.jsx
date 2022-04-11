import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export const Logout = () =>{

    const {handleLogout} = useContext(AuthContext)

    useEffect(()=>{
        handleLogout()
    }, [])

    return(
        <h2>User is logged out of the system</h2>
    )
}