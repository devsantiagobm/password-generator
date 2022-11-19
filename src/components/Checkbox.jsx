import { useContextProvider } from "../hooks/useContextProvider"

export default function Checkbox({id, name}) {
    const { strength, setStrength,
    checkBoxesStrength, setCheckBoxesStrength} = useContextProvider()

    function handleChange(e){
        const check = e.currentTarget.checked
        if(check){
            setStrength( strength + 10)
            setCheckBoxesStrength(checkBoxesStrength + 10)
        }
        else{
            setStrength( strength - 10)
            setCheckBoxesStrength(checkBoxesStrength - 10)
        }
    }

    return (
        <label className="container" htmlFor={id}>
            <input type="checkbox" id={id} className="container__input" name={name} onChange={handleChange}/>
            <div className="container__box"></div>
        </label>
    )
}