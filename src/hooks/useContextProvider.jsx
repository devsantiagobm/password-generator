import { useContext } from "react";
import { AppContext } from "../contextProvider";

export function useContextProvider(){
    return useContext(AppContext)
}