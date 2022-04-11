import React, { useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

export const PrivateRoutes = ({ redirectpath="/login", children}) =>{

    const {token} = useContext(AuthContext);
    
    if(!token){
        return <Navigate to={redirectpath}/>
    }
    return children ? children : <Outlet/>;
    
}

// const {isAuth} = useContext(AuthContext);
//     let navigate = useNavigate();
//     return(
//         <>
//         <Routes>
            
        
//             {isAuth ? (
//                 <Route path={path} element={element} />
//             ) : (
//                 navigate(redirectpath)
//             )
//         }
//         </Routes>
//         </>
//     )