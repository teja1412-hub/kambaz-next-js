import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button } from "react-bootstrap";

export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();

  if (!todo) return null;

  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      {/* Todo title */}
      <span>{todo.title}</span>

      {/* Buttons */}
      <div>
        <Button
          variant="danger"
          className="me-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
        >
          Edit
        </Button>
      </div>
    </ListGroupItem>
  );
}
