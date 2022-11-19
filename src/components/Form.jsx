import { useState } from 'react';

import { useContextProvider } from '../hooks/useContextProvider'
import Checkbox from "./Checkbox"
import { HiArrowNarrowRight as ArrowIcon } from "react-icons/hi"

export default function Form() {
    const [currentRange, setCurrentRange] = useState(0)

    const { length, setLength, setResult, strength, setStrength,checkBoxesStrength } = useContextProvider();

    async function handleRangeChange(e) {

        const value = Number(e.currentTarget.value)
        const MAX = 20;
        const newDeg = value * 100 / MAX + "%";
        e.currentTarget.style.setProperty("--value", newDeg)

        await setLength(value)
        await setStrength(value * 3 + checkBoxesStrength)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        const dataLength = Object.keys(data).length

        Number(data.range) > 0 && dataLength > 1 && crearPassword(data)
    }

    function crearPassword(data) {
        const length = Number(data.range);
        const filtros = Object.keys(data).filter(key => key !== "range")
        const stringConFiltros = generarStringConFiltros(filtros)
        generarNuevaPassword(stringConFiltros, length)
    }


    function generarNuevaPassword(string, length){
        let password = "" 

        for(let i = 0; i < length; i++){
            const index = Math.floor( Math.random() * string.length)
            password += string.charAt(index)
        }

        setResult(password)
    }

    function generarClasesLista(){
        
        const clases = [
            [20, "form__list--too-weak"],
            [40, "form__list--weak"],
            [60, "form__list--medium"],
            [100, "form__list--strong"],
        ]

        const claseActual = clases.find(([n, phrase]) => n >= strength)
        return claseActual[1]
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="form__length">
                <span>Character Length</span>
                <span className='form__length--number'>{length}</span>
            </div>
            <input type="range" name="range" id="range" min="0" max="20" className='form__range' onChange={handleRangeChange} value={length} />


            {
                checkBoxes.map((box, i) => {
                    const { text, name } = box;
                    return (<Fieldset text={text} key={i} id={i} name={name} />)
                })
            }

            <div className="form__strength">
                strength

                <ul className={`form__list ${generarClasesLista()}`}>
                    <li className="form__item"></li>
                    <li className="form__item"></li>
                    <li className="form__item"></li>
                    <li className="form__item"></li>
                </ul>
            </div>


            <button type="submit" className='form__button'>
                generate
                <ArrowIcon className='form__arrow' />
            </button>


        </form>
    )
}

const checkBoxes = [
    {
        text: "Include Uppercase Letters",
        name: "uppercase"
    },
    {
        text: "Include Lowercase Letters",
        name: "lowercase"
    },
    {
        text: "Include Numbers",
        name: "numbers"
    },
    {
        text: "Include Symbols",
        name: "symbols"
    },
]



function Fieldset({ text, id, name }) {
    return (
        <div className='form__fieldset'>
            <Checkbox id={id} name={name} />
            <label htmlFor={id}>{text}</label>
        </div>
    )
}


function generarStringConFiltros(filtros) {
    const filterTypes = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        symbols: ".?,;-_¡!¿*%&$/()[]{}|@><"
    }

    let base = "";

    for (const keys of filtros)
        base += filterTypes[keys]

    return base;
}