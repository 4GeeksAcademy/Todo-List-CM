import { useState } from "react"

const Tarea = ({descripcion, onDelete}) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <p className="flex justify-between gap-4" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}> {descripcion}
            {isHover && <button className="flex justify-end text-white transition-all duration-100 ease-in-out hover:scale-110" onClick={onDelete}> X </button>}
        </p>
    );


}

export default Tarea;