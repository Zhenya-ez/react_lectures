import React, { createContext, useContext, useState } from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
	const [todos, setTodos] = useState([]);

	const onTodoCreate = (newTodo) => {
		if(!newTodo || !newTodo.title || !newTodo.description) {
			console.error('wrong arg for new todo, should be smth like {title "...", description: "..."}')
			return
		}

		setTodos([newTodo,...todos ])
	}

	return (
		<TodoContext.Provider value={{
			todos,
			onTodoCreate
			}}>
		{children}
		</TodoContext.Provider>
	)
}

const TodoItem = ({todo}) => {

	return (
		<div>
			<h4>{todo.title}</h4> 
			<p>{todo.description}</p> 
		</div>
	)
}

const TodosList = () => {
	const {
		todos
	} = useContext(TodoContext)

	return (
		<div>
			{todos.map(el => <TodoItem key={el.title + el.description} todo={el} />)}
		</div>
	)
}

const AddTodo = () => {
	const [todoValues, setTodoValues] = useState({
		title: '',
		description: '',
	})

	const {
		onTodoCreate
	} = useContext(TodoContext)

	const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
	
const onCreate = () => {
	onTodoCreate(todoValues)
	setTodoValues({
		title: '',
		description: '',
})
}
	
	return (
		<div>
			<input value={todoValues.title} onChange={onTodoChange} type="text" name="title" placeholder="todo title"/>
			<br />
			<br />
			<input value={todoValues.description} onChange={onTodoChange} type="text" name="description" placeholder="todo description"/>
			<br />
			<br />
			<button onClick={onCreate}>add todo</button>
		</div>
	)
}

const Header = () => {

	return (
		<header>
			<Link to="/">List</Link>
			<Link to="/create-todo">add new todo</Link>
		</header>
	)
}

export default function App() {
	
	return (
		// 1 список тудушок, де ми можемо маркувати їх як виконані або видаляти
		// 2 формочка для створення нової тудушки
		<TodoContextProvider>
		<main>
		<Router>
			<Header /> 

			<div style={{padding: 20}}>
			<Switch>
				<Route path="/" exact>
				<TodosList />
				</Route>

				<Route path="/create-todo">
					<AddTodo />
				</Route>
			</Switch>
			</div>

		</Router>
		</main>
		</TodoContextProvider>
	);
}
