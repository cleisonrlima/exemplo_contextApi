import React, { useContext } from "react";
import { DadosContext } from "../context/DadosContextProvider";


function useDados(){
    const value = useContext(DadosContext)
    return value;
}

export {useDados}