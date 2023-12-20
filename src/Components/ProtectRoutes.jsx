import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoutes = () => {

    //nos permite seleccionar del store un trozo
    const trainerName = useSelector((store) => store.trainerName.name)

    // si tenemos algo(nombre) le permitimos ver el componente correspondiente
     if(trainerName !== ""){
        //si en trainerName hay algo diferente de un string vacio le permitimos ver el componente
        return <Outlet />;
    }else{
        //lo vamos a renderizar al home
        return <Navigate to="/" />
    }

  
}

export default ProtectRoutes