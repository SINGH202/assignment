import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import "./navbar.css"


const Navbar = () =>{


    const {token} = useContext(AuthContext)

    const getToken = () => {
        if(token){
            return ["Logout", "/logout"]
        }
        return ["Login", "/login"]
    }

    const links = [
        {
            title:"Home",
            to:"/"
        },
        {
            title:"About",
            to:"/about"
        },
        {
            title:"Product",
            to:"/products"
        },
        {
            title:getToken()[0],
            to: getToken()[1]
        }
    ]

    return(
        <div style={{backgroundColor:"gray", padding:"20px"}}>
            {links.map(({title, to}, index) =>{
                return <NavLink className="navlinks" key={index} to={to} style={({isActive}) => ({
                    color: isActive? "red":"blue"
                })} >{title}</NavLink>
            })}
        </div>
    )
}

export default Navbar;