import { useState } from "react";

const Tarea = ({ descripcion, onDelete }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex justify-between items-center px-2 py-1 my-1 rounded-md transition duration-200 hover:bg-gray-600"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>{descripcion}</span>

      {isHover && (
        <button
          className="text-red-400 hover:text-red-600 text-xl transition duration-150"
          onClick={onDelete}
          aria-label="Eliminar tarea"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Tarea;
