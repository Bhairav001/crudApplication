import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RequiredAuth = ({children}) => {
    const location = useLocation();
    const isAuth = localStorage.getItem("token") || "false";

    const form ={
        pathname:location.pathname
    };

    if(isAuth=="true") return children
  return <Navigate to={"/login"} state={form} replace/>
}

export default RequiredAuth