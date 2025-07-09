import React, { useState } from "react";
import Tarea from "./Tarea";

//create your first component
const Home = () => {

	const [newtodo, setNewTodo] = useState("")

	let [todoList, setTodoList] = useState([
		"Practicar React",
		"Practicar Angular",
		"Practicar Tailwind"
	]);

	const createNewTodo = (key) => {
		if (key === "Enter") {
			setTodoList([...todoList, newtodo.trim()])
		}
	};

	const deletetodo = (index) => {
		setTodoList(todoList.filter((task, indx) => index != indx))
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-500">
			<div className="bg-black text-white text-center p-10 rounded-lg hover:border-3 transition-all duration-100 ease-in-out shadow-lg shadow-black-500/50">
				<h1 className="text-4xl mb-5">Todo List</h1>
				<input
					className="bg-gray-200 text-black px-2 py-1 mb-4 w-full rounded-lg hover:ring-2 hover:ring-green-500"
					type="text"
					placeholder="Escriba la Tarea"
					onChange={(evt) => setNewTodo(evt.target.value)}
					value={newtodo || ""}
					onKeyUp={(evt) => createNewTodo(evt.key)}
				/>

				{todoList.map((todo, index) => (
					<Tarea key={index} descripcion={todo} onDelete={() => deletetodo(index)} />
				))}

				{todoList.length === 0 && <p>No hay tareas</p>}

				<div className="text-sm text-gray-400 text-left mt-4">
					{todoList.length} {todoList.length === 1 ? 'tarea' : 'tareas'}
				</div>
			</div>
		</div>
	);

};

export default Home;