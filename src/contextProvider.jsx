import { createContext, useState } from "react";

export const AppContext = createContext()

export function ContextProvider({ children }) {
    const [length, setLength] = useState("0"); 
    const [result, setResult] = useState(""); 
    const [ strength, setStrength]  = useState(0);
    const [checkBoxesStrength, setCheckBoxesStrength] = useState(0)
    
    
    const values = {
        length, setLength,
        result,setResult,
        strength, setStrength,
        checkBoxesStrength, setCheckBoxesStrength

    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

