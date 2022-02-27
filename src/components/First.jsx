import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router";

export default function First() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login",)
        
    }, [])
    return (
        <div>
            
        </div>
    )
}
