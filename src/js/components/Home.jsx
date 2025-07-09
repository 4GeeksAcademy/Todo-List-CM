import React, { useEffect, useState } from "react";
import Tarea from "./Tarea";

const API_URL = "https://playground.4geeks.com/todo";

const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const fetchTodos = async () => {
		try {
			const res = await fetch(`${API_URL}/users/camilom`);
			const data = await res.json();
			setTodoList(data.todos || []);
		} catch (error) {
			console.error("Error al cargar tareas:", error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	const createNewTodo = async (key) => {
		if (key !== "Enter" || !newTodo.trim()) return;

		try {
			const res = await fetch(`${API_URL}/todos/camilom`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ label: newTodo.trim(), is_done: false }),
			});

			if (res.ok) {
				setNewTodo("");
				await fetchTodos();
			}
		} catch (error) {
			console.error("Error al crear tarea:", error);
		}
	};


	const deleteTodo = async (id) => {
		try {
			const res = await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });

			if (res.ok) {
				await fetchTodos();
			}
		} catch (error) {
			console.error("Error al eliminar tarea:", error);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-500">
			<div className="bg-black text-white text-center p-10 rounded-lg shadow-lg hover:border-3 transition-all duration-100 ease-in-out">
				<h1 className="text-4xl mb-5">Todo List</h1>

				<input
					className="bg-gray-200 text-black px-2 py-1 mb-4 w-full rounded-lg hover:ring-2 hover:ring-green-500"
					type="text"
					placeholder="Escribe una tarea"
					onChange={(e) => setNewTodo(e.target.value)}
					value={newTodo}
					onKeyUp={(e) => createNewTodo(e.key)}
				/>

				{todoList.length === 0 ? (
					<p>No hay tareas</p>
				) : (
					todoList.map((todo) => (
						<Tarea
							key={todo.id}
							descripcion={todo.label}
							onDelete={() => deleteTodo(todo.id)}
						/>
					))
				)}
				<div className="text-sm text-gray-400 text-left mt-4">
					{todoList.length} {todoList.length === 1 ? 'tarea' : 'tareas'}
				</div>

			</div>
			
		</div>
	);
};

export default Home;
