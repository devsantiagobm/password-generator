import { useContextProvider } from '../hooks/useContextProvider'
import { MdOutlineContentCopy as CopyIcon } from "react-icons/md"
        
export default function Result(){
    const { result } = useContextProvider()

    function handleCopy(){
        const input = document.querySelector('.result__input')
        input.select()
        document.execCommand("copy")
    }

    return (
        <div className='result'>
            <input className="result__input" placeholder='P4$5W0rD!' readOnly value={result} />
            <CopyIcon className='result__icon' onClick={handleCopy}/>
        </div>
    )
}