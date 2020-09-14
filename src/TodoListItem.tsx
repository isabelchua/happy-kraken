import React from "react";
//import { Todo } from "./types";
import "./Todo.css";

interface TodoListItemProps {
	todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
	return (
		<div>
			<label className={todo.complete ? "complete" : undefined}>
				<input type="checkbox" checked={todo.complete} name="" id="" />
				{todo.text}
			</label>
		</div>
	);
};
