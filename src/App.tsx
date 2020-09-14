import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
	{ text: "walk the dog", complete: true },
	{ text: "eat", complete: false }
];

function App() {
	return (
		<React.Fragment>
			<TodoListItem todo={todos[0]} />
			<TodoListItem todo={todos[1]} />
		</React.Fragment>
	);
}

export default App;
