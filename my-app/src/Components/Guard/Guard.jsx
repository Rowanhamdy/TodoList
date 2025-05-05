import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";


export default function Guard({children}) {
    const navigate = useNavigate()
    const {isLoggedIn} = useAuth()

    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/login");
        }
      }, [isLoggedIn,navigate]);
  return isLoggedIn ? children : null;
}
