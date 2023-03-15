import React from "react";
import { Navigate, RouteProps } from "react-router-dom";

interface PrivateRouteProps {
    page:React.FC<any>
}

function PrivateRoute({page:Page}:PrivateRouteProps) {
    const token=localStorage.getItem('token');
     
    if(!token){
       return <Navigate to={'/login'}></Navigate>
     }

    return  <Page/>;
}

export default PrivateRoute;